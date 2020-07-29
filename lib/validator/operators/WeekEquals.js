var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { DateEqualsOperator } from './DateEquals';
var WeekEqualsOperator = /** @class */ (function (_super) {
    __extends(WeekEqualsOperator, _super);
    function WeekEqualsOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WeekEqualsOperator, "name", {
        get: function () {
            return 'weekEquals';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeekEqualsOperator, "title", {
        get: function () {
            return 'Week Equals';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeekEqualsOperator, "presetArguments", {
        get: function () {
            return {
                granularity: {
                    valueSource: 'string',
                    stringInput: 'isoWeek',
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return WeekEqualsOperator;
}(DateEqualsOperator));
export { WeekEqualsOperator };