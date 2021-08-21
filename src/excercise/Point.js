import React from "react";
import { connect } from "react-redux";
import { addPoint } from "./redux/action";

const Point = (props) => {
  return (
    <div>
      <h2>점수 : {props.count} </h2>
      <button onClick={() => props.addPoint()}>get point</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchProps = {
  addPoint,
};

export default connect(mapStateToProps, mapDispatchProps)(Point);
