import React from "react";
import {HotKeys} from 'react-hotkeys';

import PropTypes from "prop-types";

import Button from "./Button";

import "./ButtonPanel.css";

const keyMap = {
    "pressOne": "1",
    "pressTwo": "2",
    "pressThree": "3",
    "pressFour": "4",
    "pressFive": "5",
    "pressSix": "6",
    "pressSeven": "7",
    "pressEight": "8",
    "pressNine": "9",
    "pressZero": "0",
    "pressPlus": "a",
    "pressMinus": "-",
    "pressMultiply": "x",
    "pressDivide": "/",
    "PressClear": "c",
    "PressEqual": "=",
    "PressPeriod": "."
}

export default class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func
    };

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    }

    handlers = {
        "pressOne": event => this.handleClick("1"),
        "pressTwo": event => this.handleClick("2"),
        "pressThree": event => this.handleClick("3"),
        "pressFour": event => this.handleClick("4"),
        "pressFive": event => this.handleClick("5"),
        "pressSix": event => this.handleClick("6"),
        "pressSeven": event => this.handleClick("7"),
        "pressEight": event => this.handleClick("8"),
        "pressNine": event => this.handleClick("9"),
        "pressZero": event => this.handleClick("0"),
        "pressPlus": event => this.handleClick("+"),
        "pressMinus": event => this.handleClick("-"),
        "pressMultiply": event => this.handleClick("x"),
        "pressDivide": event => this.handleClick("÷"),
        "PressPercentage": event => this.handleClick("%"),
        "PressPlusMinus": event => this.handleClick("+/-"),
        "PressClear": event => this.handleClick("AC"),
        "PressEqual": event => this.handleClick("="),
        "PressPeriod": event => this.handleClick(".")
    }

    render() {
        return (
            <HotKeys keyMap={keyMap} handlers={this.handlers} className="calculator-button-panel">
                <div>
                    <Button name="AC" clickHandler={this.handleClick} />
                    <Button name="+/-" clickHandler={this.handleClick} />
                    <Button name="%" clickHandler={this.handleClick} />
                    <Button name="÷" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="7" clickHandler={this.handleClick} />
                    <Button name="8" clickHandler={this.handleClick} />
                    <Button name="9" clickHandler={this.handleClick} />
                    <Button name="x" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="4" clickHandler={this.handleClick} />
                    <Button name="5" clickHandler={this.handleClick} />
                    <Button name="6" clickHandler={this.handleClick} />
                    <Button name="-" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="1" clickHandler={this.handleClick} />
                    <Button name="2" clickHandler={this.handleClick} />
                    <Button name="3" clickHandler={this.handleClick} />
                    <Button name="+" clickHandler={this.handleClick} orange />
                </div>
                <div>
                    <Button name="0" clickHandler={this.handleClick} wide />
                    <Button name="." clickHandler={this.handleClick} />
                    <Button name="=" clickHandler={this.handleClick} orange />
                </div>
            </HotKeys>
        )
    }
}