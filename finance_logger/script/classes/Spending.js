"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spending = void 0;
var Spending = /** @class */ (function () {
    function Spending(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    ;
    Spending.prototype.format = function () {
        return "".concat(this.client, " is spend \u00A3").concat(this.amount, " for ").concat(this.details);
    };
    return Spending;
}());
exports.Spending = Spending;
