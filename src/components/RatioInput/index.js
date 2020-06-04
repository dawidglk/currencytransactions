import React from "react";
import { connect } from "react-redux";
import { changeRatio } from "../../actions";

const RatioInput = ({ ratio, changeRatio }) => {
  return (
    <form>
      <input
        type="number"
        placeholder={ratio || ""}
        value={ratio || ""}
        onChange={(e) => changeRatio(parseFloat(e.target.value))}
      />
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeRatio: (value) => dispatch(changeRatio(value)),
});

const mapStateToProps = ({ ratio }) => ({ ratio });

export default connect(mapStateToProps, mapDispatchToProps)(RatioInput);
