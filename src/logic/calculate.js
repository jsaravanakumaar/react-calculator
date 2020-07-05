import Big from 'big.js';

import operate from './operate';
import isNumber from './isNumber';

export default function calculate(obj, buttonName) {
    if (buttonName === "AC") {
        return {
            total: null,
            next: null,
            operator: null
        };
    }

    if (isNumber(buttonName)) {
        if (buttonName === "0" && obj.next === "0") {
            return {};
        }
        if (obj.operator) {
            if (obj.next) {
                return {next: obj.next + buttonName};
            }
            
            return {next: buttonName};
        }

        if (obj.next) {
            const next = obj.next === "0"? buttonName : obj.next + buttonName;
            return {
                next,
                total: null
            };
        }

        return {
            next: buttonName,
            total: null
        };
    }

    if (buttonName === "%") {
        if (obj.operator && obj.next) {
            const result = operate(obj.total, obj.next, obj.operator);
            return {
                total: Big(result).div(Big("100").toString()),
                next: null,
                operator: null
            };
        }
        if (obj.next) {
            return {
                next: Big(obj.next).div(Big("100")).toString()
            };
        }
        return {};
    }

    if (buttonName === ".") {
        if (obj.next) {
            if (obj.next.includes(".")) {
                return {};
            }
            return {next: obj.next + "."};
        }
        return {next: "0."};
    }

    if (buttonName === "=") {
        if (obj.next && obj.operator) {
            return {
                total: operate(obj.total, obj.next, obj.operator),
                next: null,
                operator: null
            };
        } else {
            return {};
        }
    }

    if (buttonName === "+/-") {
        if (obj.next) {
            return {next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
            return {next: (-1 * parseFloat(obj.total)).toString() };
        }
        return {};
    }

    if (obj.operator) {
        return {
            total: operate(obj.total, obj.next, obj.operator),
            next: null,
            operator: buttonName
        };
    }

    if (!obj.next) {
        return { operator: buttonName};
    }

    return {
        total: obj.next,
        next: null,
        operator: buttonName
    };
}