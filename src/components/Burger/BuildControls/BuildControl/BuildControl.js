import React from "react";

import classes from "./BuildControl.module.css";

const BuildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removeIngredientHandler}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.addIngredientHandler}>
      More
    </button>
  </div>
);

export default BuildControl;
