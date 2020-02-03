import React from 'react'
import {IMeElem} from "../Common/common";
import {loadComponent} from "../Common/componentStore";
import {Cell, Grid, Row} from '@material/react-layout-grid';

import '@material/react-layout-grid/dist/layout-grid.css';

/**
 * @link https://github.com/material-components/material-components-web-react/tree/master/packages/layout-grid
 */
export interface ILego extends IMeElem {

  elems: IMeElem[]
}

export default (props: ILego) => {

  const renderElem = (el: IMeElem) => {
    let Component = loadComponent(el.name);
    if (!Component) {
      return <div>UNKNOWN COMPONENT: {JSON.stringify(el)}</div>
    }

    return <Component {...el}></Component>
  };

  const getProps = (el: IMeElem) => {
    let p = {};
    p['style'] = {padding: "5px"};
    p['columns'] = el.span || 12;
    return p;
  };

  const elemsComponents = props.elems.map((el) =>
    <Cell key={el.id}
          {...getProps(el)}
    >
      {renderElem(el)}
    </Cell>
  );

  return (
    <Grid>
      <Row>
        {elemsComponents}
      </Row>
    </Grid>
  );
};
