(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-mask', ['exports', '@angular/forms', '@angular/common', '@angular/core'], factory) :
    (factory((global['ngx-mask'] = {}),global.ng.forms,global.ng.common,global.ng.core));
}(this, (function (exports,forms,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var config = new core.InjectionToken('config');
    /** @type {?} */
    var NEW_CONFIG = new core.InjectionToken('NEW_CONFIG');
    /** @type {?} */
    var INITIAL_CONFIG = new core.InjectionToken('INITIAL_CONFIG');
    /** @type {?} */
    var initialConfig = {
        sufix: '',
        prefix: '',
        clearIfNotMatch: false,
        showTemplate: false,
        showMaskTyped: false,
        dropSpecialCharacters: true,
        shownMaskExpression: '',
        specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '\"', '\''],
        patterns: {
            '0': {
                pattern: new RegExp('\\d'),
            },
            '9': {
                pattern: new RegExp('\\d'),
                optional: true
            },
            'A': {
                pattern: new RegExp('\[a-zA-Z0-9\]')
            },
            'S': {
                pattern: new RegExp('\[a-zA-Z\]')
            },
            'd': {
                pattern: new RegExp('\\d'),
            },
            'm': {
                pattern: new RegExp('\\d'),
            },
            'H': {
                pattern: new RegExp('\\d'),
            },
            'h': {
                pattern: new RegExp('\\d'),
            },
            's': {
                pattern: new RegExp('\\d'),
            }
        }
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaskApplierService = /** @class */ (function () {
        function MaskApplierService(_config) {
            this._config = _config;
            this.maskExpression = '';
            this.shownMaskExpression = '';
            this.separator = function (str) {
                str += '';
                /** @type {?} */
                var x = str.split('.');
                /** @type {?} */
                var decimals = x.length > 1 ? "." + x[1] : '';
                /** @type {?} */
                var res = x[0];
                /** @type {?} */
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(res)) {
                    res = res.replace(rgx, '$1' + ' ' + '$2');
                }
                return res + decimals;
            };
            this.dotSeparator = function (str) {
                str += '';
                /** @type {?} */
                var x = str.split(',');
                /** @type {?} */
                var decimals = x.length > 1 ? "," + x[1] : '';
                /** @type {?} */
                var res = x[0];
                /** @type {?} */
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(res)) {
                    res = res.replace(rgx, '$1' + '.' + '$2');
                }
                return res + decimals;
            };
            this.comaSeparator = function (str) {
                str += '';
                /** @type {?} */
                var x = str.split('.');
                /** @type {?} */
                var decimals = x.length > 1 ? "." + x[1] : '';
                /** @type {?} */
                var res = x[0];
                /** @type {?} */
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(res)) {
                    res = res.replace(rgx, '$1' + ',' + '$2');
                }
                return res + decimals;
            };
            this.percentage = function (str) {
                return Number(str) >= 0 && Number(str) <= 100;
            };
            this._shift = new Set();
            this.maskSpecialCharacters = ( /** @type {?} */(this._config)).specialCharacters;
            this.maskAvailablePatterns = this._config.patterns;
            this.clearIfNotMatch = this._config.clearIfNotMatch;
            this.dropSpecialCharacters = this._config.dropSpecialCharacters;
            this.maskSpecialCharacters = ( /** @type {?} */(this._config)).specialCharacters;
            this.maskAvailablePatterns = this._config.patterns;
            this.prefix = this._config.prefix;
            this.sufix = this._config.sufix;
        }
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} inputValue
         * @param {?} maskAndPattern
         * @return {?}
         */
        MaskApplierService.prototype.applyMaskWithPattern =
            // tslint:disable-next-line:no-any
            /**
             * @param {?} inputValue
             * @param {?} maskAndPattern
             * @return {?}
             */
            function (inputValue, maskAndPattern) {
                var _a = __read(maskAndPattern, 2), mask = _a[0], customPattern = _a[1];
                this.customPattern = customPattern;
                return this.applyMask(inputValue, mask);
            };
        /**
         * @param {?} inputValue
         * @param {?} maskExpression
         * @param {?=} position
         * @param {?=} cb
         * @return {?}
         */
        MaskApplierService.prototype.applyMask = /**
         * @param {?} inputValue
         * @param {?} maskExpression
         * @param {?=} position
         * @param {?=} cb
         * @return {?}
         */
            function (inputValue, maskExpression, position, cb) {
                if (position === void 0) {
                    position = 0;
                }
                if (cb === void 0) {
                    cb = function () { };
                }
                if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
                    return '';
                }
                /** @type {?} */
                var cursor = 0;
                /** @type {?} */
                var result = "";
                /** @type {?} */
                var multi = false;
                if (inputValue.slice(0, this.prefix.length) === this.prefix) {
                    inputValue = inputValue.slice(this.prefix.length, inputValue.length);
                }
                /** @type {?} */
                var inputArray = inputValue.toString()
                    .split('');
                if (maskExpression === 'percent') {
                    if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
                        inputValue = inputValue.substring(0, inputValue.length - 1);
                    }
                    if (this.percentage(inputValue)) {
                        result = inputValue;
                    }
                    else {
                        result = inputValue.substring(0, inputValue.length - 1);
                    }
                }
                else if (maskExpression === 'separator') {
                    if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[!$%^&*()_+|~=`{}\[\]:";'<>?\/]/)) {
                        inputValue = inputValue.substring(0, inputValue.length - 1);
                    }
                    /** @type {?} */
                    var strForSep = inputValue.replace(/\s/g, '');
                    result = this.separator(strForSep);
                    position = result.length + 1;
                    cursor = position;
                    /** @type {?} */
                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                        ? inputArray.length
                        : cursor;
                    this._shift.add(shiftStep + this.prefix.length || 0);
                }
                else if (maskExpression === 'dot_separator') {
                    if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[!$%^&*()_+|~=`{}\[\]:";'<>?\/]/)) {
                        inputValue = inputValue.substring(0, inputValue.length - 1);
                    }
                    /** @type {?} */
                    var strForSep = inputValue.replace(/\./g, '');
                    result = this.dotSeparator(strForSep);
                    position = result.length + 1;
                    cursor = position;
                    /** @type {?} */
                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                        ? inputArray.length
                        : cursor;
                    this._shift.add(shiftStep + this.prefix.length || 0);
                }
                else if (maskExpression === 'coma_separator') {
                    if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[!$%^&*()_+|~=`{}\[\]:";'<>?\/]/)) {
                        inputValue = inputValue.substring(0, inputValue.length - 1);
                    }
                    /** @type {?} */
                    var strForSep = inputValue.replace(/\,/g, '');
                    result = this.comaSeparator(strForSep);
                    position = result.length + 1;
                    cursor = position;
                    /** @type {?} */
                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                        ? inputArray.length
                        : cursor;
                    this._shift.add(shiftStep + this.prefix.length || 0);
                }
                else {
                    // tslint:disable-next-line
                    for (var i = 0, inputSymbol = inputArray[0]; i
                        < inputArray.length; i++, inputSymbol = inputArray[i]) {
                        if (cursor === maskExpression.length) {
                            break;
                        }
                        if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                            result += inputSymbol;
                            cursor += 2;
                        }
                        else if (maskExpression[cursor + 1] === '*' && multi
                            && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                            result += inputSymbol;
                            cursor += 3;
                            multi = false;
                        }
                        else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])
                            && maskExpression[cursor + 1]
                                === '*') {
                            result += inputSymbol;
                            multi = true;
                        }
                        else if (maskExpression[cursor + 1] === '?' && this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                            result += inputSymbol;
                            cursor += 3;
                        }
                        else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                            if (maskExpression[cursor] === 'H') {
                                if (Number(inputSymbol) > 2) {
                                    result += 0;
                                    cursor += 1;
                                    /** @type {?} */
                                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                        ? inputArray.length
                                        : cursor;
                                    this._shift.add(shiftStep + this.prefix.length || 0);
                                    i--;
                                    continue;
                                }
                            }
                            if (maskExpression[cursor] === 'h') {
                                if (result === '2' && Number(inputSymbol) > 3) {
                                    continue;
                                }
                            }
                            if (maskExpression[cursor] === 'm') {
                                if (Number(inputSymbol) > 5) {
                                    result += 0;
                                    cursor += 1;
                                    /** @type {?} */
                                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                        ? inputArray.length
                                        : cursor;
                                    this._shift.add(shiftStep + this.prefix.length || 0);
                                    i--;
                                    continue;
                                }
                            }
                            if (maskExpression[cursor] === 's') {
                                if (Number(inputSymbol) > 5) {
                                    result += 0;
                                    cursor += 1;
                                    /** @type {?} */
                                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                        ? inputArray.length
                                        : cursor;
                                    this._shift.add(shiftStep + this.prefix.length || 0);
                                    i--;
                                    continue;
                                }
                            }
                            result += inputSymbol;
                            cursor++;
                        }
                        else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor])) {
                            if (maskExpression[cursor] === 'd') {
                                if (Number(inputSymbol) > 3) {
                                    result += 0;
                                    cursor += 1;
                                    /** @type {?} */
                                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                        ? inputArray.length
                                        : cursor;
                                    this._shift.add(shiftStep + this.prefix.length || 0);
                                    i--;
                                    continue;
                                }
                            }
                            if (maskExpression[cursor - 1] === 'd') {
                                if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 31) {
                                    continue;
                                }
                            }
                            if (maskExpression[cursor] === 'm') {
                                if (Number(inputSymbol) > 1) {
                                    result += 0;
                                    cursor += 1;
                                    /** @type {?} */
                                    var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                        ? inputArray.length
                                        : cursor;
                                    this._shift.add(shiftStep + this.prefix.length || 0);
                                    i--;
                                    continue;
                                }
                            }
                            if (maskExpression[cursor - 1] === 'm') {
                                if (Number(inputValue.slice(cursor - 1, cursor + 1)) > 12) {
                                    continue;
                                }
                            }
                            result += inputSymbol;
                            cursor++;
                        }
                        else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                            result += maskExpression[cursor];
                            cursor++;
                            /** @type {?} */
                            var shiftStep = /\*|\?/g.test(maskExpression.slice(0, cursor))
                                ? inputArray.length
                                : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                        }
                        else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1
                            && this.maskAvailablePatterns[maskExpression[cursor]]
                            && this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                            cursor++;
                            i--;
                        }
                        else if ((this.maskExpression[cursor + 1] === '*')
                            && (this._findSpecialChar(this.maskExpression[cursor + 2]))
                            && (this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2]) && multi) {
                            cursor += 3;
                            result += inputSymbol;
                        }
                    }
                }
                if (result.length + 1 === maskExpression.length
                    && this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
                    result += maskExpression[maskExpression.length - 1];
                }
                /** @type {?} */
                var shift = 1;
                /** @type {?} */
                var newPosition = position + 1;
                while (this._shift.has(newPosition)) {
                    shift++;
                    newPosition++;
                }
                cb(this._shift.has(position) ? shift : 0);
                /** @type {?} */
                var res = "" + this.prefix + result;
                res = this.sufix ? "" + this.prefix + result + this.sufix : "" + this.prefix + result;
                if (result.length === 0) {
                    res = "" + this.prefix + result;
                }
                return res;
            };
        /**
         * @param {?} inputSymbol
         * @return {?}
         */
        MaskApplierService.prototype._findSpecialChar = /**
         * @param {?} inputSymbol
         * @return {?}
         */
            function (inputSymbol) {
                /** @type {?} */
                var symbol = this.maskSpecialCharacters
                    .find(function (val) { return val === inputSymbol; });
                return symbol;
            };
        /**
         * @private
         * @param {?} inputSymbol
         * @param {?} maskSymbol
         * @return {?}
         */
        MaskApplierService.prototype._checkSymbolMask = /**
         * @private
         * @param {?} inputSymbol
         * @param {?} maskSymbol
         * @return {?}
         */
            function (inputSymbol, maskSymbol) {
                this.maskAvailablePatterns = this.customPattern
                    ? this.customPattern
                    : this.maskAvailablePatterns;
                return this.maskAvailablePatterns[maskSymbol]
                    && this.maskAvailablePatterns[maskSymbol].pattern
                    && this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol);
            };
        MaskApplierService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MaskApplierService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [config,] }] }
            ];
        };
        return MaskApplierService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaskService = /** @class */ (function (_super) {
        __extends(MaskService, _super);
        function MaskService(document, _config, _elementRef, _renderer) {
            var _this = _super.call(this, _config) || this;
            _this.document = document;
            _this._config = _config;
            _this._elementRef = _elementRef;
            _this._renderer = _renderer;
            _this.maskExpression = '';
            _this.isNumberValue = false;
            _this.showMaskTyped = false;
            _this.maskIsShown = '';
            // tslint:disable-next-line
            _this.onChange = function (_) { };
            _this.onTouch = function () { };
            _this._formElement = _this._elementRef.nativeElement;
            return _this;
        }
        /**
         * @param {?} inputValue
         * @param {?} maskExpression
         * @param {?=} position
         * @param {?=} cb
         * @return {?}
         */
        MaskService.prototype.applyMask = /**
         * @param {?} inputValue
         * @param {?} maskExpression
         * @param {?=} position
         * @param {?=} cb
         * @return {?}
         */
            function (inputValue, maskExpression, position, cb) {
                if (position === void 0) {
                    position = 0;
                }
                if (cb === void 0) {
                    cb = function () { };
                }
                this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
                if (!inputValue && this.showMaskTyped) {
                    return this.prefix + this.maskIsShown;
                }
                /** @type {?} */
                var result = _super.prototype.applyMask.call(this, inputValue, maskExpression, position, cb);
                Array.isArray(this.dropSpecialCharacters)
                    ? this.onChange(this._removeMask(this._removeSufix(this._removePrefix(result)), this.dropSpecialCharacters))
                    : this.dropSpecialCharacters === true
                        ? this.onChange(this.isNumberValue
                            ? Number(this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                            : this._removeMask(this._removeSufix(this._removePrefix(result)), this.maskSpecialCharacters))
                        : this.onChange(this._removeSufix(this._removePrefix(result)));
                /** @type {?} */
                var ifMaskIsShown = '';
                if (!this.showMaskTyped) {
                    return result;
                }
                /** @type {?} */
                var resLen = result.length;
                /** @type {?} */
                var prefNmask = this.prefix + this.maskIsShown;
                ifMaskIsShown = prefNmask.slice(resLen);
                return result + ifMaskIsShown;
            };
        /**
         * @param {?=} position
         * @param {?=} cb
         * @return {?}
         */
        MaskService.prototype.applyValueChanges = /**
         * @param {?=} position
         * @param {?=} cb
         * @return {?}
         */
            function (position, cb) {
                if (position === void 0) {
                    position = 0;
                }
                if (cb === void 0) {
                    cb = function () { };
                }
                /** @type {?} */
                var maskedInput = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
                this._formElement.value = maskedInput;
                if (this._formElement === this.document.activeElement) {
                    return;
                }
                this.clearIfNotMatchFn();
            };
        /**
         * @return {?}
         */
        MaskService.prototype.showMaskInInput = /**
         * @return {?}
         */
            function () {
                if (this.showMaskTyped && !!this.shownMaskExpression) {
                    if (this.maskExpression.length !== this.shownMaskExpression.length) {
                        throw new Error('Mask expression must match mask placeholder length');
                    }
                    else {
                        return this.shownMaskExpression;
                    }
                }
                else if (this.showMaskTyped) {
                    return this.maskExpression.replace(/\w/g, '_');
                }
                return '';
            };
        /**
         * @return {?}
         */
        MaskService.prototype.clearIfNotMatchFn = /**
         * @return {?}
         */
            function () {
                if (this.clearIfNotMatch === true &&
                    this.maskExpression.length !== this._formElement.value.length) {
                    this.formElementProperty = ['value', ''];
                    this.applyMask(this._formElement.value, this.maskExpression);
                }
            };
        Object.defineProperty(MaskService.prototype, "formElementProperty", {
            set: /**
             * @param {?} __0
             * @return {?}
             */ function (_a) {
                var _b = __read(_a, 2), name = _b[0], value = _b[1];
                this._renderer.setProperty(this._formElement, name, value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @private
         * @param {?} value
         * @param {?} specialCharactersForRemove
         * @return {?}
         */
        MaskService.prototype._removeMask = /**
         * @private
         * @param {?} value
         * @param {?} specialCharactersForRemove
         * @return {?}
         */
            function (value, specialCharactersForRemove) {
                return value
                    ? value.replace(this._regExpForRemove(specialCharactersForRemove), '')
                    : value;
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        MaskService.prototype._removePrefix = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!this.prefix) {
                    return value;
                }
                return value
                    ? value.replace(this.prefix, '')
                    : value;
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        MaskService.prototype._removeSufix = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!this.sufix) {
                    return value;
                }
                return value
                    ? value.replace(this.sufix, '')
                    : value;
            };
        /**
         * @private
         * @param {?} specialCharactersForRemove
         * @return {?}
         */
        MaskService.prototype._regExpForRemove = /**
         * @private
         * @param {?} specialCharactersForRemove
         * @return {?}
         */
            function (specialCharactersForRemove) {
                return new RegExp(specialCharactersForRemove.map(function (item) { return "\\" + item; }).join('|'), 'gi');
            };
        MaskService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MaskService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [config,] }] },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        return MaskService;
    }(MaskApplierService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaskDirective = /** @class */ (function () {
        function MaskDirective(document, _maskService) {
            this.document = document;
            this._maskService = _maskService;
            this._position = null;
            // tslint:disable-next-line
            this.onChange = function (_) { };
            this.onTouch = function () { };
        }
        Object.defineProperty(MaskDirective.prototype, "maskExpression", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._maskValue = value || '';
                if (!this._maskValue) {
                    return;
                }
                this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue);
                this._maskService.formElementProperty = [
                    'value',
                    this._maskService.applyMask(this._inputValue, this._maskService.maskExpression)
                ];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "specialCharacters", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (!value ||
                    !Array.isArray(value) ||
                    (Array.isArray(value) && !value.length)) {
                    return;
                }
                this._maskService.maskSpecialCharacters = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "patterns", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (!value) {
                    return;
                }
                this._maskService.maskAvailablePatterns = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "prefix", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (!value) {
                    return;
                }
                this._maskService.prefix = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "sufix", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (!value) {
                    return;
                }
                this._maskService.sufix = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "dropSpecialCharacters", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._maskService.dropSpecialCharacters = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "showMaskTyped", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (!value) {
                    return;
                }
                this._maskService.showMaskTyped = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "shownMaskExpression", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (!value) {
                    return;
                }
                this._maskService.shownMaskExpression = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "showTemplate", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._maskService.showTemplate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MaskDirective.prototype, "clearIfNotMatch", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._maskService.clearIfNotMatch = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} e
         * @return {?}
         */
        MaskDirective.prototype.onInput = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var el = ( /** @type {?} */(e.target));
                this._inputValue = el.value;
                if (!this._maskValue) {
                    this.onChange(el.value);
                    return;
                }
                /** @type {?} */
                var position = (( /** @type {?} */(el.selectionStart))) === 1
                    ? (( /** @type {?} */(el.selectionStart))) + this._maskService.prefix.length
                    : ( /** @type {?} */(el.selectionStart));
                /** @type {?} */
                var caretShift = 0;
                this._maskService.applyValueChanges(position, function (shift) { return (caretShift = shift); });
                // only set the selection if the element is active
                if (this.document.activeElement !== el) {
                    return;
                }
                el.selectionStart = el.selectionEnd =
                    this._position !== null
                        ? this._position
                        : position +
                            // tslint:disable-next-line
                            ((( /** @type {?} */(e))).inputType === 'deleteContentBackward' ? 0 : caretShift);
                this._position = null;
            };
        /**
         * @return {?}
         */
        MaskDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                this._maskService.clearIfNotMatchFn();
                this.onTouch();
            };
        /**
         * @param {?} e
         * @return {?}
         */
        MaskDirective.prototype.onFocus = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var el = ( /** @type {?} */(e.target));
                if (el !== null && el.selectionStart !== null &&
                    el.selectionStart === el.selectionEnd &&
                    el.selectionStart > this._maskService.prefix.length &&
                    // tslint:disable-next-line
                    (( /** @type {?} */(e))).keyCode !== 38) {
                    return;
                }
                if (this._maskService.showMaskTyped) {
                    this._maskService.maskIsShown = this._maskService.showMaskInInput();
                }
                el.value = !el.value || el.value === this._maskService.prefix
                    ? this._maskService.prefix + this._maskService.maskIsShown
                    : el.value;
                /** fix of cursor position with prefix when mouse click occur */
                if (((( /** @type {?} */(el.selectionStart))) || (( /** @type {?} */(el.selectionEnd)))) <= this._maskService.prefix.length) {
                    el.selectionStart = this._maskService.prefix.length;
                    return;
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        MaskDirective.prototype.a = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                /** @type {?} */
                var el = ( /** @type {?} */(e.target));
                if (e.keyCode === 38) {
                    e.preventDefault();
                }
                if (e.keyCode === 37 || e.keyCode === 8) {
                    if ((( /** @type {?} */(el.selectionStart))) <= this._maskService.prefix.length
                        && (( /** @type {?} */(el.selectionEnd))) <= this._maskService.prefix.length) {
                        e.preventDefault();
                    }
                    this.onFocus(e);
                    if (e.keyCode === 8
                        && el.selectionStart === 0
                        && el.selectionEnd === el.value.length) {
                        el.value = this._maskService.prefix;
                        this._position = this._maskService.prefix ? this._maskService.prefix.length : 1;
                        this.onInput(e);
                    }
                }
            };
        /**
         * @return {?}
         */
        MaskDirective.prototype.onPaste = /**
         * @return {?}
         */
            function () {
                this._position = Number.MAX_SAFE_INTEGER;
            };
        /** It writes the value in the input */
        /**
         * It writes the value in the input
         * @param {?} inputValue
         * @return {?}
         */
        MaskDirective.prototype.writeValue = /**
         * It writes the value in the input
         * @param {?} inputValue
         * @return {?}
         */
            function (inputValue) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        if (inputValue === undefined) {
                            inputValue = '';
                        }
                        if (typeof inputValue === 'number') {
                            inputValue = String(inputValue);
                            this._maskService.isNumberValue = true;
                        }
                        inputValue && this._maskService.maskExpression ||
                            this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped)
                            ? (this._maskService.formElementProperty = [
                                'value',
                                this._maskService.applyMask(inputValue, this._maskService.maskExpression)
                            ])
                            : (this._maskService.formElementProperty = ['value', inputValue]);
                        this._inputValue = inputValue;
                        return [2 /*return*/];
                    });
                });
            };
        // tslint:disable-next-line
        // tslint:disable-next-line
        /**
         * @param {?} fn
         * @return {?}
         */
        MaskDirective.prototype.registerOnChange =
            // tslint:disable-next-line
            /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this.onChange = fn;
                this._maskService.onChange = this.onChange;
            };
        // tslint:disable-next-line
        // tslint:disable-next-line
        /**
         * @param {?} fn
         * @return {?}
         */
        MaskDirective.prototype.registerOnTouched =
            // tslint:disable-next-line
            /**
             * @param {?} fn
             * @return {?}
             */
            function (fn) {
                this.onTouch = fn;
            };
        /** It disables the input element */
        /**
         * It disables the input element
         * @param {?} isDisabled
         * @return {?}
         */
        MaskDirective.prototype.setDisabledState = /**
         * It disables the input element
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this._maskService.formElementProperty = ['disabled', isDisabled];
            };
        /**
         * @private
         * @param {?} maskExp
         * @return {?}
         */
        MaskDirective.prototype._repeatPatternSymbols = /**
         * @private
         * @param {?} maskExp
         * @return {?}
         */
            function (maskExp) {
                var _this = this;
                return maskExp.match(/{[0-9]+}/)
                    && maskExp.split('')
                        .reduce(function (accum, currval, index) {
                        _this._start = (currval === '{') ? index : _this._start;
                        if (currval !== '}') {
                            return _this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                        }
                        _this._end = index;
                        /** @type {?} */
                        var repeatNumber = Number(maskExp
                            .slice(_this._start + 1, _this._end));
                        /** @type {?} */
                        var repaceWith = new Array(repeatNumber + 1)
                            .join(maskExp[_this._start - 1]);
                        return accum + repaceWith;
                    }, '') || maskExp;
            };
        MaskDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[mask]',
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef(function () { return MaskDirective; }),
                                multi: true
                            },
                            MaskService
                        ]
                    },] }
        ];
        /** @nocollapse */
        MaskDirective.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
                { type: MaskService }
            ];
        };
        MaskDirective.propDecorators = {
            maskExpression: [{ type: core.Input, args: ['mask',] }],
            specialCharacters: [{ type: core.Input }],
            patterns: [{ type: core.Input }],
            prefix: [{ type: core.Input }],
            sufix: [{ type: core.Input }],
            dropSpecialCharacters: [{ type: core.Input }],
            showMaskTyped: [{ type: core.Input }],
            shownMaskExpression: [{ type: core.Input }],
            showTemplate: [{ type: core.Input }],
            clearIfNotMatch: [{ type: core.Input }],
            onInput: [{ type: core.HostListener, args: ['input', ['$event'],] }],
            onBlur: [{ type: core.HostListener, args: ['blur',] }],
            onFocus: [{ type: core.HostListener, args: ['click', ['$event'],] }],
            a: [{ type: core.HostListener, args: ['keydown', ['$event'],] }],
            onPaste: [{ type: core.HostListener, args: ['paste',] }]
        };
        return MaskDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaskPipe = /** @class */ (function () {
        function MaskPipe(_maskService) {
            this._maskService = _maskService;
        }
        /**
         * @param {?} value
         * @param {?} mask
         * @return {?}
         */
        MaskPipe.prototype.transform = /**
         * @param {?} value
         * @param {?} mask
         * @return {?}
         */
            function (value, mask) {
                if (!value) {
                    return '';
                }
                if (typeof mask === 'string') {
                    return this._maskService.applyMask("" + value, mask);
                }
                return this._maskService.applyMaskWithPattern("" + value, mask);
            };
        MaskPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'mask',
                        pure: true
                    },] }
        ];
        /** @nocollapse */
        MaskPipe.ctorParameters = function () {
            return [
                { type: MaskApplierService }
            ];
        };
        return MaskPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxMaskModule = /** @class */ (function () {
        function NgxMaskModule() {
        }
        /**
         * @param {?=} configValue
         * @return {?}
         */
        NgxMaskModule.forRoot = /**
         * @param {?=} configValue
         * @return {?}
         */
            function (configValue) {
                return {
                    ngModule: NgxMaskModule,
                    providers: [
                        {
                            provide: NEW_CONFIG,
                            useValue: configValue
                        },
                        {
                            provide: INITIAL_CONFIG,
                            useValue: initialConfig
                        },
                        {
                            provide: config,
                            useFactory: _configFactory,
                            deps: [INITIAL_CONFIG, NEW_CONFIG]
                        },
                    ]
                };
            };
        /**
         * @param {?=} configValue
         * @return {?}
         */
        NgxMaskModule.forChild = /**
         * @param {?=} configValue
         * @return {?}
         */
            function (configValue) {
                return {
                    ngModule: NgxMaskModule,
                };
            };
        NgxMaskModule.decorators = [
            { type: core.NgModule, args: [{
                        providers: [MaskApplierService],
                        exports: [MaskDirective, MaskPipe],
                        declarations: [MaskDirective, MaskPipe]
                    },] }
        ];
        return NgxMaskModule;
    }());
    /**
     * \@internal
     * @param {?} initConfig
     * @param {?} configValue
     * @return {?}
     */
    function _configFactory(initConfig, configValue) {
        return (typeof configValue === 'function') ? configValue() : __assign({}, initConfig, configValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.config = config;
    exports.NEW_CONFIG = NEW_CONFIG;
    exports.INITIAL_CONFIG = INITIAL_CONFIG;
    exports.initialConfig = initialConfig;
    exports.MaskDirective = MaskDirective;
    exports.MaskService = MaskService;
    exports._configFactory = _configFactory;
    exports.NgxMaskModule = NgxMaskModule;
    exports.MaskPipe = MaskPipe;
    exports.ɵa = MaskApplierService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-mask.umd.js.map