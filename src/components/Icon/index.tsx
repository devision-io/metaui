import React from 'react'
// import Icon from "antd/es/icon";

// export default (props) => {
//
//   // theme="twoTone"
//   return (
//     <div>
//       <Icon type="step-backward" theme="filled"/>
//       <div>
//         <br/>
//         props = {JSON.stringify(props)}
//       </div>
//     </div>
//   );
// };


export interface IButtonProps {
  children?: React.ReactNode,
  onClick?: (e:any) => void,
  styles?: {}
}
const styles = {
  backgroundColor: '#FFFFFF',
  border: '1px solid #eee',
  borderRadius: 3,
  cursor: 'pointer',
  fontSize: 15,
  margin: 10,
  padding: '3px 10px',
};
const Icon: React.SFC<IButtonProps> = (props) => (
  <button onClick={props.onClick} style={props.styles} type="button">
    {props.children}
  </button>
);
Icon.defaultProps = {
  children: null,
  onClick: () => {},
  styles
};
export default Icon;
