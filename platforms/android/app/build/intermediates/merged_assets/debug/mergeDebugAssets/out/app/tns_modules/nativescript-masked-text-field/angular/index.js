"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var element_registry_1 = require("nativescript-angular/element-registry");
var forms_2 = require("nativescript-angular/forms");
var masked_text_value_accessor_1 = require("./masked-text-value-accessor");
if (!element_registry_1.isKnownView("MaskedTextField")) {
    element_registry_1.registerElement("MaskedTextField", function () { return require("../masked-text-field").MaskedTextField; });
}
var MaskedTextFieldModule = (function () {
    function MaskedTextFieldModule() {
    }
    MaskedTextFieldModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        masked_text_value_accessor_1.MaskedTextValueAccessor
                    ],
                    providers: [],
                    imports: [
                        forms_1.FormsModule,
                        forms_2.NativeScriptFormsModule
                    ],
                    exports: [
                        forms_1.FormsModule,
                        masked_text_value_accessor_1.MaskedTextValueAccessor
                    ]
                },] },
    ];
    return MaskedTextFieldModule;
}());
exports.MaskedTextFieldModule = MaskedTextFieldModule;
