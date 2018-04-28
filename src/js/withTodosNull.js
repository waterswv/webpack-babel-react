import React, { Component } from 'react';

const withTodosNull = (Component) => (props) =>
   !props.todos
    ? null
    : <Component {...props} />

  export default withTodosNull;
