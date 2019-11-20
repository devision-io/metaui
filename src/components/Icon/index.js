import React from 'react'
import Icon from "antd/es/icon";

export default (props) => {

  // theme="twoTone"
  return (
    <>
      <Icon type="step-backward" theme="filled"/>
      <div>
        <br/>
        props = {JSON.stringify(props)}
      </div>
    </>
  );
};


