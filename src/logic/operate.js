import Big from 'big.js';

export default function operate(leftOperand, rightOperand, operator) {
    const left = Big(leftOperand || "0");
    const right = Big(rightOperand || (operator === "÷" || operator === "x" ? "1" : "0"));

    if (operator === "+")
        return left.plus(right).toString();
    else if (operator === "-")
        return left.minus(right).toString();
    else if (operator === "x")
        return left.times(right).toString();
    else if (operator === "÷") {
        if (right === "0") {
            alert("Divide by 0 error");
            return "0";
        } else {
            return left.div(right).toString();
        }
    }

    throw Error(`Unknown operator ${operator}`);
}