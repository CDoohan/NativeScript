"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var text_value_accessor_1 = require("nativescript-angular/forms/value-accessors/text-value-accessor");
var MASKED_TEXT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MaskedTextValueAccessor; }),
    multi: true
};
var MaskedTextValueAccessor = (function (_super) {
    __extends(MaskedTextValueAccessor, _super);
    function MaskedTextValueAccessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaskedTextValueAccessor.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "MaskedTextField[ngModel], MaskedTextField[formControlName], MaskedTextField[formControl]" +
                        "maskedTextField[ngModel], maskedTextField[formControlName], maskedTextField[formControl]" +
                        "masked-text-field[ngModel], masked-text-field[formControlName], masked-text-field[formControl]",
                    providers: [MASKED_TEXT_VALUE_ACCESSOR],
                    host: {
                        "(blur)": "onTouched()",
                        "(textChange)": "onChange($event.value)"
                    }
                },] },
    ];
    return MaskedTextValueAccessor;
}(text_value_accessor_1.TextValueAccessor));
exports.MaskedTextValueAccessor = MaskedTextValueAccessor;
