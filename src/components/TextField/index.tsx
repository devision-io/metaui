import React, {useState} from 'react'
import {IMeElem, IMeElemAttrs} from "../Common/common";
import TextField, {Input} from '@material/react-text-field';
import '@material/react-text-field/dist/text-field.css';
import {useDebounce} from "react-use";

// import MaterialIcon from "@material/react-material-icon";

export interface ITextInput extends IMeElem {
  attrs?: ITextInputAttrs
}

export interface ITextInputAttrs extends IMeElemAttrs {
  icon: string
}

export default (props: ITextInput) => {
  const [value, setValue] = useState('');
  const [, setDebouncedValue] = React.useState('');

  const [, ] = useDebounce(
    () => {
      setDebouncedValue(value);

      if (props.onChange) {
        console.log('onChange', value);

        props.onChange(value);
      }
    },
    330,
    [value]
  );

  const onChange = (e) => {
    let newVal = e.currentTarget.value;
    setValue(newVal);
  };
  return (
    <TextField
      label='Dog'
      // helperText={<HelperText>Help Me!</HelperText>}
      // onTrailingIconSelect={() => this.setState({value: ''})}
      // trailingIcon={<MaterialIcon role="button" icon="delete"/>}
    >
      <Input
        value={value}
        onChange={onChange}
      />
    </TextField>
  )
};
