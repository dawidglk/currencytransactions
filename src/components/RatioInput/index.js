import React from "react";
import { connect } from "react-redux";
import { changeRatio } from "../../actions";

import Input from "../Input/Input";
import Icon from "../Icon/Icon";
import Paragraph from "../Paragraph/Paragraph";

import IconEuro from "../../assets/media/euro.svg";

import Wrapper from "./Wrapper";

const RatioInput = ({ ratio, changeRatio }) => {
  return (
    <Wrapper>
      <Paragraph>
        Ratio in
        <Icon small src={IconEuro} alt="euro" />
      </Paragraph>
      <Input
        id="ratio"
        type="number"
        placeholder={ratio || ""}
        value={ratio || ""}
        onChange={(e) => changeRatio(parseFloat(e.target.value))}
      />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeRatio: (value) => dispatch(changeRatio(value)),
});

const mapStateToProps = ({ ratio }) => ({ ratio });

export default connect(mapStateToProps, mapDispatchToProps)(RatioInput);
