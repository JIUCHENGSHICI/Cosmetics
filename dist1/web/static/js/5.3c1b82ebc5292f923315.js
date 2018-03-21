webpackJsonp([5],{

/***/ "9xuE":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Wc1Y");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("7e342b92", content, true, {});

/***/ }),

/***/ "B8Vi":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("rVVH");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("20495dba", content, true, {});

/***/ }),

/***/ "FFPQ":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("JVpd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("25f6cc8a", content, true, {});

/***/ }),

/***/ "GdMu":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("KdOJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("c6cf35ca", content, true, {});

/***/ }),

/***/ "JCi3":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* big.js v3.1.3 https://github.com/MikeMcl/big.js/LICENCE */
;(function (global) {
    'use strict';

/*
  big.js v3.1.3
  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
  https://github.com/MikeMcl/big.js/
  Copyright (c) 2014 Michael Mclaughlin <M8ch88l@gmail.com>
  MIT Expat Licence
*/

/***************************** EDITABLE DEFAULTS ******************************/

    // The default values below must be integers within the stated ranges.

    /*
     * The maximum number of decimal places of the results of operations
     * involving division: div and sqrt, and pow with negative exponents.
     */
    var DP = 20,                           // 0 to MAX_DP

        /*
         * The rounding mode used when rounding to the above decimal places.
         *
         * 0 Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
         * 1 To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
         * 2 To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
         * 3 Away from zero.                                  (ROUND_UP)
         */
        RM = 1,                            // 0, 1, 2 or 3

        // The maximum value of DP and Big.DP.
        MAX_DP = 1E6,                      // 0 to 1000000

        // The maximum magnitude of the exponent argument to the pow method.
        MAX_POWER = 1E6,                   // 1 to 1000000

        /*
         * The exponent value at and beneath which toString returns exponential
         * notation.
         * JavaScript's Number type: -7
         * -1000000 is the minimum recommended exponent value of a Big.
         */
        E_NEG = -7,                   // 0 to -1000000

        /*
         * The exponent value at and above which toString returns exponential
         * notation.
         * JavaScript's Number type: 21
         * 1000000 is the maximum recommended exponent value of a Big.
         * (This limit is not enforced or checked.)
         */
        E_POS = 21,                   // 0 to 1000000

/******************************************************************************/

        // The shared prototype object.
        P = {},
        isValid = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        Big;


    /*
     * Create and return a Big constructor.
     *
     */
    function bigFactory() {

        /*
         * The Big constructor and exported function.
         * Create and return a new instance of a Big number object.
         *
         * n {number|string|Big} A numeric value.
         */
        function Big(n) {
            var x = this;

            // Enable constructor usage without new.
            if (!(x instanceof Big)) {
                return n === void 0 ? bigFactory() : new Big(n);
            }

            // Duplicate.
            if (n instanceof Big) {
                x.s = n.s;
                x.e = n.e;
                x.c = n.c.slice();
            } else {
                parse(x, n);
            }

            /*
             * Retain a reference to this Big constructor, and shadow
             * Big.prototype.constructor which points to Object.
             */
            x.constructor = Big;
        }

        Big.prototype = P;
        Big.DP = DP;
        Big.RM = RM;
        Big.E_NEG = E_NEG;
        Big.E_POS = E_POS;

        return Big;
    }


    // Private functions


    /*
     * Return a string representing the value of Big x in normal or exponential
     * notation to dp fixed decimal places or significant digits.
     *
     * x {Big} The Big to format.
     * dp {number} Integer, 0 to MAX_DP inclusive.
     * toE {number} 1 (toExponential), 2 (toPrecision) or undefined (toFixed).
     */
    function format(x, dp, toE) {
        var Big = x.constructor,

            // The index (normal notation) of the digit that may be rounded up.
            i = dp - (x = new Big(x)).e,
            c = x.c;

        // Round?
        if (c.length > ++dp) {
            rnd(x, i, Big.RM);
        }

        if (!c[0]) {
            ++i;
        } else if (toE) {
            i = dp;

        // toFixed
        } else {
            c = x.c;

            // Recalculate i as x.e may have changed if value rounded up.
            i = x.e + i + 1;
        }

        // Append zeros?
        for (; c.length < i; c.push(0)) {
        }
        i = x.e;

        /*
         * toPrecision returns exponential notation if the number of
         * significant digits specified is less than the number of digits
         * necessary to represent the integer part of the value in normal
         * notation.
         */
        return toE === 1 || toE && (dp <= i || i <= Big.E_NEG) ?

          // Exponential notation.
          (x.s < 0 && c[0] ? '-' : '') +
            (c.length > 1 ? c[0] + '.' + c.join('').slice(1) : c[0]) +
              (i < 0 ? 'e' : 'e+') + i

          // Normal notation.
          : x.toString();
    }


    /*
     * Parse the number or string value passed to a Big constructor.
     *
     * x {Big} A Big number instance.
     * n {number|string} A numeric value.
     */
    function parse(x, n) {
        var e, i, nL;

        // Minus zero?
        if (n === 0 && 1 / n < 0) {
            n = '-0';

        // Ensure n is string and check validity.
        } else if (!isValid.test(n += '')) {
            throwErr(NaN);
        }

        // Determine sign.
        x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

        // Decimal point?
        if ((e = n.indexOf('.')) > -1) {
            n = n.replace('.', '');
        }

        // Exponential form?
        if ((i = n.search(/e/i)) > 0) {

            // Determine exponent.
            if (e < 0) {
                e = i;
            }
            e += +n.slice(i + 1);
            n = n.substring(0, i);

        } else if (e < 0) {

            // Integer.
            e = n.length;
        }

        nL = n.length;

        // Determine leading zeros.
        for (i = 0; i < nL && n.charAt(i) == '0'; i++) {
        }

        if (i == nL) {

            // Zero.
            x.c = [ x.e = 0 ];
        } else {

            // Determine trailing zeros.
            for (; nL > 0 && n.charAt(--nL) == '0';) {
            }

            x.e = e - i - 1;
            x.c = [];

            // Convert string to array of digits without leading/trailing zeros.
            //for (e = 0; i <= nL; x.c[e++] = +n.charAt(i++)) {
            for (; i <= nL; x.c.push(+n.charAt(i++))) {
            }
        }

        return x;
    }


    /*
     * Round Big x to a maximum of dp decimal places using rounding mode rm.
     * Called by div, sqrt and round.
     *
     * x {Big} The Big to round.
     * dp {number} Integer, 0 to MAX_DP inclusive.
     * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
     * [more] {boolean} Whether the result of division was truncated.
     */
    function rnd(x, dp, rm, more) {
        var u,
            xc = x.c,
            i = x.e + dp + 1;

        if (rm === 1) {

            // xc[i] is the digit after the digit that may be rounded up.
            more = xc[i] >= 5;
        } else if (rm === 2) {
            more = xc[i] > 5 || xc[i] == 5 &&
              (more || i < 0 || xc[i + 1] !== u || xc[i - 1] & 1);
        } else if (rm === 3) {
            more = more || xc[i] !== u || i < 0;
        } else {
            more = false;

            if (rm !== 0) {
                throwErr('!Big.RM!');
            }
        }

        if (i < 1 || !xc[0]) {

            if (more) {

                // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                x.e = -dp;
                x.c = [1];
            } else {

                // Zero.
                x.c = [x.e = 0];
            }
        } else {

            // Remove any digits after the required decimal places.
            xc.length = i--;

            // Round up?
            if (more) {

                // Rounding up may mean the previous digit has to be rounded up.
                for (; ++xc[i] > 9;) {
                    xc[i] = 0;

                    if (!i--) {
                        ++x.e;
                        xc.unshift(1);
                    }
                }
            }

            // Remove trailing zeros.
            for (i = xc.length; !xc[--i]; xc.pop()) {
            }
        }

        return x;
    }


    /*
     * Throw a BigError.
     *
     * message {string} The error message.
     */
    function throwErr(message) {
        var err = new Error(message);
        err.name = 'BigError';

        throw err;
    }


    // Prototype/instance methods


    /*
     * Return a new Big whose value is the absolute value of this Big.
     */
    P.abs = function () {
        var x = new this.constructor(this);
        x.s = 1;

        return x;
    };


    /*
     * Return
     * 1 if the value of this Big is greater than the value of Big y,
     * -1 if the value of this Big is less than the value of Big y, or
     * 0 if they have the same value.
    */
    P.cmp = function (y) {
        var xNeg,
            x = this,
            xc = x.c,
            yc = (y = new x.constructor(y)).c,
            i = x.s,
            j = y.s,
            k = x.e,
            l = y.e;

        // Either zero?
        if (!xc[0] || !yc[0]) {
            return !xc[0] ? !yc[0] ? 0 : -j : i;
        }

        // Signs differ?
        if (i != j) {
            return i;
        }
        xNeg = i < 0;

        // Compare exponents.
        if (k != l) {
            return k > l ^ xNeg ? 1 : -1;
        }

        i = -1;
        j = (k = xc.length) < (l = yc.length) ? k : l;

        // Compare digit by digit.
        for (; ++i < j;) {

            if (xc[i] != yc[i]) {
                return xc[i] > yc[i] ^ xNeg ? 1 : -1;
            }
        }

        // Compare lengths.
        return k == l ? 0 : k > l ^ xNeg ? 1 : -1;
    };


    /*
     * Return a new Big whose value is the value of this Big divided by the
     * value of Big y, rounded, if necessary, to a maximum of Big.DP decimal
     * places using rounding mode Big.RM.
     */
    P.div = function (y) {
        var x = this,
            Big = x.constructor,
            // dividend
            dvd = x.c,
            //divisor
            dvs = (y = new Big(y)).c,
            s = x.s == y.s ? 1 : -1,
            dp = Big.DP;

        if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throwErr('!Big.DP!');
        }

        // Either 0?
        if (!dvd[0] || !dvs[0]) {

            // If both are 0, throw NaN
            if (dvd[0] == dvs[0]) {
                throwErr(NaN);
            }

            // If dvs is 0, throw +-Infinity.
            if (!dvs[0]) {
                throwErr(s / 0);
            }

            // dvd is 0, return +-0.
            return new Big(s * 0);
        }

        var dvsL, dvsT, next, cmp, remI, u,
            dvsZ = dvs.slice(),
            dvdI = dvsL = dvs.length,
            dvdL = dvd.length,
            // remainder
            rem = dvd.slice(0, dvsL),
            remL = rem.length,
            // quotient
            q = y,
            qc = q.c = [],
            qi = 0,
            digits = dp + (q.e = x.e - y.e) + 1;

        q.s = s;
        s = digits < 0 ? 0 : digits;

        // Create version of divisor with leading zero.
        dvsZ.unshift(0);

        // Add zeros to make remainder as long as divisor.
        for (; remL++ < dvsL; rem.push(0)) {
        }

        do {

            // 'next' is how many times the divisor goes into current remainder.
            for (next = 0; next < 10; next++) {

                // Compare divisor and remainder.
                if (dvsL != (remL = rem.length)) {
                    cmp = dvsL > remL ? 1 : -1;
                } else {

                    for (remI = -1, cmp = 0; ++remI < dvsL;) {

                        if (dvs[remI] != rem[remI]) {
                            cmp = dvs[remI] > rem[remI] ? 1 : -1;
                            break;
                        }
                    }
                }

                // If divisor < remainder, subtract divisor from remainder.
                if (cmp < 0) {

                    // Remainder can't be more than 1 digit longer than divisor.
                    // Equalise lengths using divisor with extra leading zero?
                    for (dvsT = remL == dvsL ? dvs : dvsZ; remL;) {

                        if (rem[--remL] < dvsT[remL]) {
                            remI = remL;

                            for (; remI && !rem[--remI]; rem[remI] = 9) {
                            }
                            --rem[remI];
                            rem[remL] += 10;
                        }
                        rem[remL] -= dvsT[remL];
                    }
                    for (; !rem[0]; rem.shift()) {
                    }
                } else {
                    break;
                }
            }

            // Add the 'next' digit to the result array.
            qc[qi++] = cmp ? next : ++next;

            // Update the remainder.
            if (rem[0] && cmp) {
                rem[remL] = dvd[dvdI] || 0;
            } else {
                rem = [ dvd[dvdI] ];
            }

        } while ((dvdI++ < dvdL || rem[0] !== u) && s--);

        // Leading zero? Do not remove if result is simply zero (qi == 1).
        if (!qc[0] && qi != 1) {

            // There can't be more than one zero.
            qc.shift();
            q.e--;
        }

        // Round?
        if (qi > digits) {
            rnd(q, dp, Big.RM, rem[0] !== u);
        }

        return q;
    };


    /*
     * Return true if the value of this Big is equal to the value of Big y,
     * otherwise returns false.
     */
    P.eq = function (y) {
        return !this.cmp(y);
    };


    /*
     * Return true if the value of this Big is greater than the value of Big y,
     * otherwise returns false.
     */
    P.gt = function (y) {
        return this.cmp(y) > 0;
    };


    /*
     * Return true if the value of this Big is greater than or equal to the
     * value of Big y, otherwise returns false.
     */
    P.gte = function (y) {
        return this.cmp(y) > -1;
    };


    /*
     * Return true if the value of this Big is less than the value of Big y,
     * otherwise returns false.
     */
    P.lt = function (y) {
        return this.cmp(y) < 0;
    };


    /*
     * Return true if the value of this Big is less than or equal to the value
     * of Big y, otherwise returns false.
     */
    P.lte = function (y) {
         return this.cmp(y) < 1;
    };


    /*
     * Return a new Big whose value is the value of this Big minus the value
     * of Big y.
     */
    P.sub = P.minus = function (y) {
        var i, j, t, xLTy,
            x = this,
            Big = x.constructor,
            a = x.s,
            b = (y = new Big(y)).s;

        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.plus(y);
        }

        var xc = x.c.slice(),
            xe = x.e,
            yc = y.c,
            ye = y.e;

        // Either zero?
        if (!xc[0] || !yc[0]) {

            // y is non-zero? x is non-zero? Or both are zero.
            return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
        }

        // Determine which is the bigger number.
        // Prepend zeros to equalise exponents.
        if (a = xe - ye) {

            if (xLTy = a < 0) {
                a = -a;
                t = xc;
            } else {
                ye = xe;
                t = yc;
            }

            t.reverse();
            for (b = a; b--; t.push(0)) {
            }
            t.reverse();
        } else {

            // Exponents equal. Check digit by digit.
            j = ((xLTy = xc.length < yc.length) ? xc : yc).length;

            for (a = b = 0; b < j; b++) {

                if (xc[b] != yc[b]) {
                    xLTy = xc[b] < yc[b];
                    break;
                }
            }
        }

        // x < y? Point xc to the array of the bigger number.
        if (xLTy) {
            t = xc;
            xc = yc;
            yc = t;
            y.s = -y.s;
        }

        /*
         * Append zeros to xc if shorter. No need to add zeros to yc if shorter
         * as subtraction only needs to start at yc.length.
         */
        if (( b = (j = yc.length) - (i = xc.length) ) > 0) {

            for (; b--; xc[i++] = 0) {
            }
        }

        // Subtract yc from xc.
        for (b = i; j > a;){

            if (xc[--j] < yc[j]) {

                for (i = j; i && !xc[--i]; xc[i] = 9) {
                }
                --xc[i];
                xc[j] += 10;
            }
            xc[j] -= yc[j];
        }

        // Remove trailing zeros.
        for (; xc[--b] === 0; xc.pop()) {
        }

        // Remove leading zeros and adjust exponent accordingly.
        for (; xc[0] === 0;) {
            xc.shift();
            --ye;
        }

        if (!xc[0]) {

            // n - n = +0
            y.s = 1;

            // Result must be zero.
            xc = [ye = 0];
        }

        y.c = xc;
        y.e = ye;

        return y;
    };


    /*
     * Return a new Big whose value is the value of this Big modulo the
     * value of Big y.
     */
    P.mod = function (y) {
        var yGTx,
            x = this,
            Big = x.constructor,
            a = x.s,
            b = (y = new Big(y)).s;

        if (!y.c[0]) {
            throwErr(NaN);
        }

        x.s = y.s = 1;
        yGTx = y.cmp(x) == 1;
        x.s = a;
        y.s = b;

        if (yGTx) {
            return new Big(x);
        }

        a = Big.DP;
        b = Big.RM;
        Big.DP = Big.RM = 0;
        x = x.div(y);
        Big.DP = a;
        Big.RM = b;

        return this.minus( x.times(y) );
    };


    /*
     * Return a new Big whose value is the value of this Big plus the value
     * of Big y.
     */
    P.add = P.plus = function (y) {
        var t,
            x = this,
            Big = x.constructor,
            a = x.s,
            b = (y = new Big(y)).s;

        // Signs differ?
        if (a != b) {
            y.s = -b;
            return x.minus(y);
        }

        var xe = x.e,
            xc = x.c,
            ye = y.e,
            yc = y.c;

        // Either zero?
        if (!xc[0] || !yc[0]) {

            // y is non-zero? x is non-zero? Or both are zero.
            return yc[0] ? y : new Big(xc[0] ? x : a * 0);
        }
        xc = xc.slice();

        // Prepend zeros to equalise exponents.
        // Note: Faster to use reverse then do unshifts.
        if (a = xe - ye) {

            if (a > 0) {
                ye = xe;
                t = yc;
            } else {
                a = -a;
                t = xc;
            }

            t.reverse();
            for (; a--; t.push(0)) {
            }
            t.reverse();
        }

        // Point xc to the longer array.
        if (xc.length - yc.length < 0) {
            t = yc;
            yc = xc;
            xc = t;
        }
        a = yc.length;

        /*
         * Only start adding at yc.length - 1 as the further digits of xc can be
         * left as they are.
         */
        for (b = 0; a;) {
            b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;
            xc[a] %= 10;
        }

        // No need to check for zero, as +x + +y != 0 && -x + -y != 0

        if (b) {
            xc.unshift(b);
            ++ye;
        }

         // Remove trailing zeros.
        for (a = xc.length; xc[--a] === 0; xc.pop()) {
        }

        y.c = xc;
        y.e = ye;

        return y;
    };


    /*
     * Return a Big whose value is the value of this Big raised to the power n.
     * If n is negative, round, if necessary, to a maximum of Big.DP decimal
     * places using rounding mode Big.RM.
     *
     * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
     */
    P.pow = function (n) {
        var x = this,
            one = new x.constructor(1),
            y = one,
            isNeg = n < 0;

        if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
            throwErr('!pow!');
        }

        n = isNeg ? -n : n;

        for (;;) {

            if (n & 1) {
                y = y.times(x);
            }
            n >>= 1;

            if (!n) {
                break;
            }
            x = x.times(x);
        }

        return isNeg ? one.div(y) : y;
    };


    /*
     * Return a new Big whose value is the value of this Big rounded to a
     * maximum of dp decimal places using rounding mode rm.
     * If dp is not specified, round to 0 decimal places.
     * If rm is not specified, use Big.RM.
     *
     * [dp] {number} Integer, 0 to MAX_DP inclusive.
     * [rm] 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
     */
    P.round = function (dp, rm) {
        var x = this,
            Big = x.constructor;

        if (dp == null) {
            dp = 0;
        } else if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throwErr('!round!');
        }
        rnd(x = new Big(x), dp, rm == null ? Big.RM : rm);

        return x;
    };


    /*
     * Return a new Big whose value is the square root of the value of this Big,
     * rounded, if necessary, to a maximum of Big.DP decimal places using
     * rounding mode Big.RM.
     */
    P.sqrt = function () {
        var estimate, r, approx,
            x = this,
            Big = x.constructor,
            xc = x.c,
            i = x.s,
            e = x.e,
            half = new Big('0.5');

        // Zero?
        if (!xc[0]) {
            return new Big(x);
        }

        // If negative, throw NaN.
        if (i < 0) {
            throwErr(NaN);
        }

        // Estimate.
        i = Math.sqrt(x.toString());

        // Math.sqrt underflow/overflow?
        // Pass x to Math.sqrt as integer, then adjust the result exponent.
        if (i === 0 || i === 1 / 0) {
            estimate = xc.join('');

            if (!(estimate.length + e & 1)) {
                estimate += '0';
            }

            r = new Big( Math.sqrt(estimate).toString() );
            r.e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        } else {
            r = new Big(i.toString());
        }

        i = r.e + (Big.DP += 4);

        // Newton-Raphson iteration.
        do {
            approx = r;
            r = half.times( approx.plus( x.div(approx) ) );
        } while ( approx.c.slice(0, i).join('') !==
                       r.c.slice(0, i).join('') );

        rnd(r, Big.DP -= 4, Big.RM);

        return r;
    };


    /*
     * Return a new Big whose value is the value of this Big times the value of
     * Big y.
     */
    P.mul = P.times = function (y) {
        var c,
            x = this,
            Big = x.constructor,
            xc = x.c,
            yc = (y = new Big(y)).c,
            a = xc.length,
            b = yc.length,
            i = x.e,
            j = y.e;

        // Determine sign of result.
        y.s = x.s == y.s ? 1 : -1;

        // Return signed 0 if either 0.
        if (!xc[0] || !yc[0]) {
            return new Big(y.s * 0);
        }

        // Initialise exponent of result as x.e + y.e.
        y.e = i + j;

        // If array xc has fewer digits than yc, swap xc and yc, and lengths.
        if (a < b) {
            c = xc;
            xc = yc;
            yc = c;
            j = a;
            a = b;
            b = j;
        }

        // Initialise coefficient array of result with zeros.
        for (c = new Array(j = a + b); j--; c[j] = 0) {
        }

        // Multiply.

        // i is initially xc.length.
        for (i = b; i--;) {
            b = 0;

            // a is yc.length.
            for (j = a + i; j > i;) {

                // Current sum of products at this digit position, plus carry.
                b = c[j] + yc[i] * xc[j - i - 1] + b;
                c[j--] = b % 10;

                // carry
                b = b / 10 | 0;
            }
            c[j] = (c[j] + b) % 10;
        }

        // Increment result exponent if there is a final carry.
        if (b) {
            ++y.e;
        }

        // Remove any leading zero.
        if (!c[0]) {
            c.shift();
        }

        // Remove trailing zeros.
        for (i = c.length; !c[--i]; c.pop()) {
        }
        y.c = c;

        return y;
    };


    /*
     * Return a string representing the value of this Big.
     * Return exponential notation if this Big has a positive exponent equal to
     * or greater than Big.E_POS, or a negative exponent equal to or less than
     * Big.E_NEG.
     */
    P.toString = P.valueOf = P.toJSON = function () {
        var x = this,
            Big = x.constructor,
            e = x.e,
            str = x.c.join(''),
            strL = str.length;

        // Exponential notation?
        if (e <= Big.E_NEG || e >= Big.E_POS) {
            str = str.charAt(0) + (strL > 1 ? '.' + str.slice(1) : '') +
              (e < 0 ? 'e' : 'e+') + e;

        // Negative exponent?
        } else if (e < 0) {

            // Prepend zeros.
            for (; ++e; str = '0' + str) {
            }
            str = '0.' + str;

        // Positive exponent?
        } else if (e > 0) {

            if (++e > strL) {

                // Append zeros.
                for (e -= strL; e-- ; str += '0') {
                }
            } else if (e < strL) {
                str = str.slice(0, e) + '.' + str.slice(e);
            }

        // Exponent zero.
        } else if (strL > 1) {
            str = str.charAt(0) + '.' + str.slice(1);
        }

        // Avoid '-0'
        return x.s < 0 && x.c[0] ? '-' + str : str;
    };


    /*
     ***************************************************************************
     * If toExponential, toFixed, toPrecision and format are not required they
     * can safely be commented-out or deleted. No redundant code will be left.
     * format is used only by toExponential, toFixed and toPrecision.
     ***************************************************************************
     */


    /*
     * Return a string representing the value of this Big in exponential
     * notation to dp fixed decimal places and rounded, if necessary, using
     * Big.RM.
     *
     * [dp] {number} Integer, 0 to MAX_DP inclusive.
     */
    P.toExponential = function (dp) {

        if (dp == null) {
            dp = this.c.length - 1;
        } else if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
            throwErr('!toExp!');
        }

        return format(this, dp, 1);
    };


    /*
     * Return a string representing the value of this Big in normal notation
     * to dp fixed decimal places and rounded, if necessary, using Big.RM.
     *
     * [dp] {number} Integer, 0 to MAX_DP inclusive.
     */
    P.toFixed = function (dp) {
        var str,
            x = this,
            Big = x.constructor,
            neg = Big.E_NEG,
            pos = Big.E_POS;

        // Prevent the possibility of exponential notation.
        Big.E_NEG = -(Big.E_POS = 1 / 0);

        if (dp == null) {
            str = x.toString();
        } else if (dp === ~~dp && dp >= 0 && dp <= MAX_DP) {
            str = format(x, x.e + dp);

            // (-0).toFixed() is '0', but (-0.1).toFixed() is '-0'.
            // (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
            if (x.s < 0 && x.c[0] && str.indexOf('-') < 0) {
        //E.g. -0.5 if rounded to -0 will cause toString to omit the minus sign.
                str = '-' + str;
            }
        }
        Big.E_NEG = neg;
        Big.E_POS = pos;

        if (!str) {
            throwErr('!toFix!');
        }

        return str;
    };


    /*
     * Return a string representing the value of this Big rounded to sd
     * significant digits using Big.RM. Use exponential notation if sd is less
     * than the number of digits necessary to represent the integer part of the
     * value in normal notation.
     *
     * sd {number} Integer, 1 to MAX_DP inclusive.
     */
    P.toPrecision = function (sd) {

        if (sd == null) {
            return this.toString();
        } else if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
            throwErr('!toPre!');
        }

        return format(this, sd - 1, 2);
    };


    // Export


    Big = bigFactory();

    //AMD.
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return Big;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

    // Node and other CommonJS-like environments that support module.exports.
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Big;
        module.exports.Big = Big;

    //Browser.
    } else {
        global.Big = Big;
    }
})(this);


/***/ }),

/***/ "JVpd":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/node_modules/_vux@2.8.0@vux/src/components/checker/checker-item.vue"],"names":[],"mappings":";AACA;EACE,sCAAsC;EACtC,0BAA0B;KACvB,uBAAuB;MACtB,sBAAsB;UAClB,kBAAkB;CAC3B;AACD;EACE,0BAA0B;CAC3B","file":"checker-item.vue","sourcesContent":["\n.vux-tap-active {\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vux-tap-active:active {\n  background-color: #ECECEC;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "KdOJ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n.vux-checker-item {\n  display: inline-block;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/node_modules/_vux@2.8.0@vux/src/components/checker/checker.vue"],"names":[],"mappings":";AACA;EACE,sBAAsB;CACvB","file":"checker.vue","sourcesContent":["\n.vux-checker-item {\n  display: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "Wc1Y":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n.goods-content {\n  width: 100%;\n  overflow: hidden;\n}\n.goods-content img {\n    max-width: 100% !important;\n}\n.goods-content * img {\n    max-width: 100% !important;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/src/pages/goodsInfo/goodsInfo.vue"],"names":[],"mappings":";AACA;EACE,YAAY;EACZ,iBAAiB;CAClB;AACD;IACI,2BAA2B;CAC9B;AACD;IACI,2BAA2B;CAC9B","file":"goodsInfo.vue","sourcesContent":["\n.goods-content {\n  width: 100%;\n  overflow: hidden;\n}\n.goods-content img {\n    max-width: 100% !important;\n}\n.goods-content * img {\n    max-width: 100% !important;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "ZlR+":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/src/pages/goodsInfo/goodsInfo.vue"],"names":[],"mappings":";AACA;CACC,YAAY;CACZ;AACD;CACC,aAAa;CACb;AACD;CACC,oCAAoC;CACpC,iBAAiB;CACjB,wBAAwB;CACxB,qBAAqB;CACrB,sBAAsB;CACtB,6BAA6B;CAC7B;AACD;CACC,iBAAiB;CACjB,oBAAoB;CACpB,wBAAwB;CACxB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,eAAe;CACf;AACD;CACC,YAAY;CACZ;AACD;CACC,eAAe;CACf;AACD;CACC,eAAe;CACf;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,gBAAgB;CAChB;AACD;CACC,YAAY;CACZ;AACD;CACC,gCAAgC;CAChC;AACD;CACC,8BAA8B;CAC9B;AACD;CACC,iBAAiB;CACjB;AACD;CACC,mBAAmB;CACnB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,kBAAkB;CAClB;AACD;CACC,iBAAiB;CACjB;AACD;CACC,oBAAoB;CACpB;AACD;CACC,YAAY;CACZ;AACD;CACC,YAAY;CACZ;AACD;CACC,WAAW;CACX;;AAED,WAAW;AACX;;CAEC,YAAY;CACZ;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,cAAc;CACd;AACD;CACC,aAAa;CACb;AACD;CACC,aAAa;CACb;AACD;CACC,gCAAgC;CAChC;AACD;CACC,sBAAsB;CACtB","file":"goodsInfo.vue","sourcesContent":["\n.fl {\r\n\tfloat: left;\n}\n.fr {\r\n\tfloat: right;\n}\n.two-line {\r\n\ttext-overflow: -o-ellipsis-lastline;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tdisplay: -webkit-box;\r\n\t-webkit-line-clamp: 2;\r\n\t-webkit-box-orient: vertical;\n}\n.one-line {\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\ttext-overflow: ellipsis;\n}\n.font-weight {\r\n\tfont-weight: 500;\n}\n.font-gray {\r\n\tcolor: #4A4A4A;\n}\n.font-red {\r\n\tcolor: #f00;\n}\n.font-gray-white {\r\n\tcolor: #DDDDDD;\n}\n.font-glod {\r\n\tcolor: #bda57e;\n}\n.font-18 {\r\n\tfont-size: 18px;\n}\n.font-16 {\r\n\tfont-size: 16px;\n}\n.font-14 {\r\n\tfont-size: 14px;\n}\n.font-13 {\r\n\tfont-size: 13px;\n}\n.font-12 {\r\n\tfont-size: 12px;\n}\n.font-white {\r\n\tcolor: #fff;\n}\n.border-right {\r\n\tborder-right: 1px solid #D9D9D9;\n}\n.border-top {\r\n\tborder-top: 1px solid #D9D9D9;\n}\n.bc-black {\r\n\tbackground: #000;\n}\n.text-center {\r\n\ttext-align: center;\n}\n.margin-top-10 {\r\n\tmargin-top: 10px;\n}\n.text-right {\r\n\ttext-align: right;\n}\n.text-left {\r\n\ttext-align: left;\n}\n.bc-orange {\r\n\tbackground: #fe7704;\n}\n.font-black {\r\n\tcolor: #000;\n}\n.float-right {\r\n\tfloat: right\n}\n.float-lfet {\r\n\tfloat: left\n}\r\n\r\n/* 字体颜色类 */\n.text-info,\r\n.text-muted {\r\n\tcolor: #777;\n}\n.text-primary {\r\n\tcolor: #337ab7\n}\n.text-success {\r\n\tcolor: #3c763d\n}\n.text-warning {\r\n\tcolor: #8a6d3b\n}\n.text-danger {\r\n\tcolor: #a94442\n}\n.padding-2 {\r\n\tpadding: 2px;\n}\n.padding-5 {\r\n\tpadding: 5px;\n}\n.border-right-1 {\r\n\tborder-right: 1px solid #DDDDDD;\n}\n.display-inline {\r\n\tdisplay: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "lq8G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.8.0@vux/src/components/x-number/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Big = __webpack_require__("JCi3");
/* harmony default export */ var x_number = ({
  name: 'x-number',
  props: {
    min: Number,
    max: Number,
    readonly: Boolean,
    step: {
      type: Number,
      default: 1
    },
    value: {
      validator(value) {
        if (typeof value === 'number') {
          return true;
        } else if (typeof value === 'string') {
          return value === '';
        }
        return false;
      },
      default: 0
    },
    name: String,
    title: String,
    fillable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50px'
    },
    buttonStyle: {
      type: String,
      default: 'square'
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  created() {
    this.currentValue = this.value;
  },
  data() {
    return {
      currentValue: 0
    };
  },
  computed: {
    disabledMin() {
      return typeof this.min === 'undefined' ? false : this.currentValue === '' ? true : this.currentValue <= this.min;
    },
    disabledMax() {
      return typeof this.max === 'undefined' ? false : this.currentValue === '' ? true : this.currentValue >= this.max;
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  watch: {
    currentValue(newValue, old) {
      if (newValue !== '') {
        if (typeof this.min !== 'undefined' && this.currentValue < this.min) {
          this.currentValue = this.min;
        }
        if (this.max && this.currentValue > this.max) {
          this.currentValue = this.max;
        }
      }
      this.$emit('input', this.currentValue);
    },
    value(newValue) {
      this.currentValue = newValue;
      this.$emit('on-change', newValue);
    }
  },
  methods: {
    add() {
      if (!this.disabledMax) {
        const x = new Big(this.currentValue);
        this.currentValue = x.plus(this.step) * 1;
      }
    },
    sub() {
      if (!this.disabledMin) {
        const x = new Big(this.currentValue);
        this.currentValue = x.minus(this.step) * 1;
      }
    },
    blur() {
      if (this.currentValue === '') {
        this.currentValue = 0;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.8.0@vux/src/components/x-number/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const x_number_Big = __webpack_require__("JCi3");
/* harmony default export */ var components_x_number = ({
  name: 'x-number',
  props: {
    min: Number,
    max: Number,
    readonly: Boolean,
    step: {
      type: Number,
      default: 1
    },
    value: {
      validator(value) {
        if (typeof value === 'number') {
          return true;
        } else if (typeof value === 'string') {
          return value === '';
        }
        return false;
      },
      default: 0
    },
    name: String,
    title: String,
    fillable: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50px'
    },
    buttonStyle: {
      type: String,
      default: 'square'
    },
    align: {
      type: String,
      default: 'right'
    }
  },
  created() {
    this.currentValue = this.value;
  },
  data() {
    return {
      currentValue: 0
    };
  },
  computed: {
    disabledMin() {
      return typeof this.min === 'undefined' ? false : this.currentValue === '' ? true : this.currentValue <= this.min;
    },
    disabledMax() {
      return typeof this.max === 'undefined' ? false : this.currentValue === '' ? true : this.currentValue >= this.max;
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  watch: {
    currentValue(newValue, old) {
      if (newValue !== '') {
        if (typeof this.min !== 'undefined' && this.currentValue < this.min) {
          this.currentValue = this.min;
        }
        if (this.max && this.currentValue > this.max) {
          this.currentValue = this.max;
        }
      }
      this.$emit('input', this.currentValue);
    },
    value(newValue) {
      this.currentValue = newValue;
      this.$emit('on-change', newValue);
    }
  },
  methods: {
    add() {
      if (!this.disabledMax) {
        const x = new x_number_Big(this.currentValue);
        this.currentValue = x.plus(this.step) * 1;
      }
    },
    sub() {
      if (!this.disabledMin) {
        const x = new x_number_Big(this.currentValue);
        this.currentValue = x.minus(this.step) * 1;
      }
    },
    blur() {
      if (this.currentValue === '') {
        this.currentValue = 0;
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-76b06ac4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.8.0@vux/src/components/x-number/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell"},[_c('div',[_c('p',{class:_vm.labelClass,style:({width: _vm.$parent.labelWidth, textAlign: _vm.$parent.labelAlign, marginRight: _vm.$parent.labelMarginRight}),domProps:{"innerHTML":_vm._s(_vm.title)}})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.readonly),expression:"!readonly"}],staticClass:"weui-cell__ft vux-cell-primary",class:{'vux-number-round': _vm.buttonStyle === 'round'},staticStyle:{"font-size":"0"}},[_c('div',{style:({float:_vm.align})},[_c('a',{staticClass:"vux-number-selector vux-number-selector-sub",class:{'vux-number-disabled':_vm.disabledMin},on:{"click":_vm.sub}},[_c('svg',{attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18"}},[_c('defs'),_c('path',{attrs:{"d":"M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"}})])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.currentValue),expression:"currentValue",modifiers:{"number":true}}],staticClass:"vux-number-input",style:({width: _vm.width}),attrs:{"name":_vm.name,"readonly":!_vm.fillable,"pattern":"[0-9]*","type":"number"},domProps:{"value":(_vm.currentValue)},on:{"blur":[_vm.blur,function($event){_vm.$forceUpdate()}],"input":function($event){if($event.target.composing){ return; }_vm.currentValue=_vm._n($event.target.value)}}}),_vm._v(" "),_c('a',{staticClass:"vux-number-selector vux-number-selector-plus",class:{'vux-number-disabled':_vm.disabledMax},on:{"click":_vm.add}},[_c('svg',{attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"20","height":"20"}},[_c('defs'),_c('path',{attrs:{"d":"M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"}})])])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.readonly),expression:"readonly"}],staticClass:"weui-cell__ft vux-cell-primary"},[_vm._v("\n    "+_vm._s(_vm.value)+"\n  ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_x_number = (esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-number/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("B8Vi")
}
var normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_x_number,
  src_components_x_number,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var _vux_2_8_0_vux_src_components_x_number = (Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.8.0@vux/src/components/inline-x-number/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var inline_x_number = ({
  name: 'inline-x-number',
  extends: _vux_2_8_0_vux_src_components_x_number
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.8.0@vux/src/components/inline-x-number/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_inline_x_number = ({
  name: 'inline-x-number',
  extends: _vux_2_8_0_vux_src_components_x_number
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-2443fcdb","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.8.0@vux/src/components/inline-x-number/index.vue
var inline_x_number_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-inline-x-number",class:{'vux-number-round': _vm.buttonStyle === 'round'}},[_c('div',[_c('a',{staticClass:"vux-number-selector vux-number-selector-sub",class:{'vux-number-disabled':_vm.disabledMin},on:{"click":_vm.sub}},[_c('svg',{attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"18","height":"18"}},[_c('defs'),_c('path',{attrs:{"d":"M863.74455 544.00086 163.424056 544.00086c-17.664722 0-32.00086-14.336138-32.00086-32.00086s14.336138-32.00086 32.00086-32.00086l700.320495 0c17.695686 0 31.99914 14.336138 31.99914 32.00086S881.440237 544.00086 863.74455 544.00086z"}})])]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.currentValue),expression:"currentValue",modifiers:{"number":true}}],staticClass:"vux-number-input",style:({width: _vm.width}),attrs:{"name":_vm.name,"readonly":!_vm.fillable,"pattern":"[0-9]*","type":"number"},domProps:{"value":(_vm.currentValue)},on:{"blur":[_vm.blur,function($event){_vm.$forceUpdate()}],"input":function($event){if($event.target.composing){ return; }_vm.currentValue=_vm._n($event.target.value)}}}),_vm._v(" "),_c('a',{staticClass:"vux-number-selector vux-number-selector-plus",class:{'vux-number-disabled':_vm.disabledMax},on:{"click":_vm.add}},[_c('svg',{attrs:{"viewBox":"0 0 1024 1024","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","width":"20","height":"20"}},[_c('defs'),_c('path',{attrs:{"d":"M863.328262 481.340895l-317.344013 0.099772L545.984249 162.816826c0-17.664722-14.336138-32.00086-32.00086-32.00086s-31.99914 14.336138-31.99914 32.00086l0 318.400215-322.368714-0.17718c-0.032684 0-0.063647 0-0.096331 0-17.632039 0-31.935493 14.239806-32.00086 31.904529-0.096331 17.664722 14.208843 32.031824 31.871845 32.095471l322.59234 0.17718 0 319.167424c0 17.695686 14.336138 32.00086 31.99914 32.00086s32.00086-14.303454 32.00086-32.00086L545.982529 545.440667l317.087703-0.099772c0.063647 0 0.096331 0 0.127295 0 17.632039 0 31.935493-14.239806 32.00086-31.904529S880.960301 481.404542 863.328262 481.340895z"}})])])])])}
var inline_x_number_staticRenderFns = []
var inline_x_number_esExports = { render: inline_x_number_render, staticRenderFns: inline_x_number_staticRenderFns }
/* harmony default export */ var src_components_inline_x_number = (inline_x_number_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.8.0@vux/src/components/inline-x-number/index.vue
function inline_x_number_injectStyle (ssrContext) {
  __webpack_require__("zwSK")
}
var inline_x_number_normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var inline_x_number___vue_template_functional__ = false
/* styles */
var inline_x_number___vue_styles__ = inline_x_number_injectStyle
/* scopeId */
var inline_x_number___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var inline_x_number___vue_module_identifier__ = null
var inline_x_number_Component = inline_x_number_normalizeComponent(
  components_inline_x_number,
  src_components_inline_x_number,
  inline_x_number___vue_template_functional__,
  inline_x_number___vue_styles__,
  inline_x_number___vue_scopeId__,
  inline_x_number___vue_module_identifier__
)

/* harmony default export */ var _vux_2_8_0_vux_src_components_inline_x_number = __webpack_exports__["a"] = (inline_x_number_Component.exports);


/***/ }),

/***/ "mWr9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-header/index.vue + 3 modules
var x_header = __webpack_require__("OVFY");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/view-box/index.vue + 3 modules
var view_box = __webpack_require__("utzS");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/swiper/swiper.vue + 4 modules
var swiper = __webpack_require__("X6cZ");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/popup/index.vue + 4 modules
var popup = __webpack_require__("bWFG");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/x-switch/index.vue + 3 modules
var x_switch = __webpack_require__("CgER");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/group/index.vue + 3 modules
var group = __webpack_require__("F07p");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/cell/index.vue + 5 modules
var cell = __webpack_require__("rR7n");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.8.0@vux/src/components/checker/checker-item.vue
//
//
//
//
//
//

/* harmony default export */ var checker_item = ({
  name: 'checker-item',
  props: {
    value: {
      type: [String, Number, Object],
      required: true
    },
    disabled: Boolean
  },
  watch: {
    disabled(val) {
      if (val && this.$parent.type === 'radio' && this.value === this.$parent.currentValue) {
        this.$parent.currentValue = '';
      }
    }
  },
  computed: {
    classNames() {
      const isSimpleValue = typeof this.value === 'string' || typeof this.value === 'number';
      const names = {
        'vux-tap-active': !this.disabled
      };

      if (this.$parent.defaultItemClass) {
        names[this.$parent.defaultItemClass] = true;
      }

      if (this.$parent.selectedItemClass) {
        let selected = false;
        if (this.$parent.type === 'radio') {
          if (isSimpleValue && this.$parent.currentValue === this.value) {
            selected = true;
          } else if (typeof this.value === 'object' && isEqual(this.$parent.currentValue, this.value)) {
            selected = true;
          }
        } else {
          if (typeof this.value === 'string') {
            if (this.$parent.currentValue.indexOf(this.value) > -1) {
              selected = true;
            }
          } else if (this.$parent.currentValue && this.$parent.currentValue.length) {
            const match = this.$parent.currentValue.filter(one => {
              return isEqual(one, this.value);
            });
            selected = match.length > 0;
          }
        }
        names[this.$parent.selectedItemClass] = selected;
      }

      if (this.$parent.disabledItemClass) {
        names[this.$parent.disabledItemClass] = this.disabled;
      }

      return names;
    }
  },
  methods: {
    select() {
      if (this.$parent.type === 'radio') {
        this.selectRadio();
      } else {
        this.selectCheckbox();
      }
    },
    selectRadio() {
      if (!this.disabled) {
        if (this.$parent.currentValue === this.value) {
          if (!this.$parent.radioRequired) {
            this.$parent.currentValue = '';
          }
        } else {
          this.$parent.currentValue = this.value;
        }
      }
      this.$emit('on-item-click', this.value, this.disabled);
    },
    selectCheckbox() {
      if (!this.$parent.currentValue || this.$parent.currentValue === null) {
        this.$parent.currentValue = [];
      }
      const isSimpleValue = typeof this.value === 'string' || typeof this.value === 'number';
      if (!this.disabled) {
        let index = -1;
        if (isSimpleValue) {
          index = this.$parent.currentValue.indexOf(this.value);
        } else {
          index = this.$parent.currentValue.map(one => JSON.stringify(one)).indexOf(JSON.stringify(this.value));
        }
        if (index > -1) {
          this.$parent.currentValue.splice(index, 1);
        } else {
          if (!this.$parent.max || this.$parent.max && this.$parent.currentValue !== null && this.$parent.currentValue.length < this.$parent.max) {
            if (!this.$parent.currentValue || !this.$parent.currentValue.length) {
              this.$parent.currentValue = [];
            }
            this.$parent.currentValue.push(this.value);
          }
        }
      }
      this.$emit('on-item-click', this.value, this.disabled);
    }
  }
});

function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.8.0@vux/src/components/checker/checker-item.vue
//
//
//
//
//
//

/* harmony default export */ var checker_checker_item = ({
  name: 'checker-item',
  props: {
    value: {
      type: [String, Number, Object],
      required: true
    },
    disabled: Boolean
  },
  watch: {
    disabled(val) {
      if (val && this.$parent.type === 'radio' && this.value === this.$parent.currentValue) {
        this.$parent.currentValue = '';
      }
    }
  },
  computed: {
    classNames() {
      const isSimpleValue = typeof this.value === 'string' || typeof this.value === 'number';
      const names = {
        'vux-tap-active': !this.disabled
      };

      if (this.$parent.defaultItemClass) {
        names[this.$parent.defaultItemClass] = true;
      }

      if (this.$parent.selectedItemClass) {
        let selected = false;
        if (this.$parent.type === 'radio') {
          if (isSimpleValue && this.$parent.currentValue === this.value) {
            selected = true;
          } else if (typeof this.value === 'object' && checker_item_isEqual(this.$parent.currentValue, this.value)) {
            selected = true;
          }
        } else {
          if (typeof this.value === 'string') {
            if (this.$parent.currentValue.indexOf(this.value) > -1) {
              selected = true;
            }
          } else if (this.$parent.currentValue && this.$parent.currentValue.length) {
            const match = this.$parent.currentValue.filter(one => {
              return checker_item_isEqual(one, this.value);
            });
            selected = match.length > 0;
          }
        }
        names[this.$parent.selectedItemClass] = selected;
      }

      if (this.$parent.disabledItemClass) {
        names[this.$parent.disabledItemClass] = this.disabled;
      }

      return names;
    }
  },
  methods: {
    select() {
      if (this.$parent.type === 'radio') {
        this.selectRadio();
      } else {
        this.selectCheckbox();
      }
    },
    selectRadio() {
      if (!this.disabled) {
        if (this.$parent.currentValue === this.value) {
          if (!this.$parent.radioRequired) {
            this.$parent.currentValue = '';
          }
        } else {
          this.$parent.currentValue = this.value;
        }
      }
      this.$emit('on-item-click', this.value, this.disabled);
    },
    selectCheckbox() {
      if (!this.$parent.currentValue || this.$parent.currentValue === null) {
        this.$parent.currentValue = [];
      }
      const isSimpleValue = typeof this.value === 'string' || typeof this.value === 'number';
      if (!this.disabled) {
        let index = -1;
        if (isSimpleValue) {
          index = this.$parent.currentValue.indexOf(this.value);
        } else {
          index = this.$parent.currentValue.map(one => JSON.stringify(one)).indexOf(JSON.stringify(this.value));
        }
        if (index > -1) {
          this.$parent.currentValue.splice(index, 1);
        } else {
          if (!this.$parent.max || this.$parent.max && this.$parent.currentValue !== null && this.$parent.currentValue.length < this.$parent.max) {
            if (!this.$parent.currentValue || !this.$parent.currentValue.length) {
              this.$parent.currentValue = [];
            }
            this.$parent.currentValue.push(this.value);
          }
        }
      }
      this.$emit('on-item-click', this.value, this.disabled);
    }
  }
});

function checker_item_isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-3cf9efa6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.8.0@vux/src/components/checker/checker-item.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-checker-item",class:_vm.classNames,on:{"click":_vm.select}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_checker_checker_item = (esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.8.0@vux/src/components/checker/checker-item.vue
function injectStyle (ssrContext) {
  __webpack_require__("FFPQ")
}
var normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  checker_checker_item,
  components_checker_checker_item,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_checker_checker_item = (Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.8.0@vux/src/components/checker/checker.vue
//
//
//
//
//
//

/* harmony default export */ var checker = ({
  name: 'checker',
  props: {
    defaultItemClass: String,
    selectedItemClass: String,
    disabledItemClass: String,
    type: {
      type: String,
      default: 'radio'
    },
    value: [String, Number, Array, Object],
    max: Number,
    radioRequired: Boolean
  },
  watch: {
    value(newValue) {
      this.currentValue = newValue;
    },
    currentValue(val) {
      this.$emit('input', val);
      this.$emit('on-change', val);
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./node_modules/_vux@2.8.0@vux/src/components/checker/checker.vue
//
//
//
//
//
//

/* harmony default export */ var checker_checker = ({
  name: 'checker',
  props: {
    defaultItemClass: String,
    selectedItemClass: String,
    disabledItemClass: String,
    type: {
      type: String,
      default: 'radio'
    },
    value: [String, Number, Array, Object],
    max: Number,
    radioRequired: Boolean
  },
  watch: {
    value(newValue) {
      this.currentValue = newValue;
    },
    currentValue(val) {
      this.$emit('input', val);
      this.$emit('on-change', val);
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-18ab02d6","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./node_modules/_vux@2.8.0@vux/src/components/checker/checker.vue
var checker_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-checker-box"},[_vm._t("default")],2)}
var checker_staticRenderFns = []
var checker_esExports = { render: checker_render, staticRenderFns: checker_staticRenderFns }
/* harmony default export */ var components_checker_checker = (checker_esExports);
// CONCATENATED MODULE: ./node_modules/_vux@2.8.0@vux/src/components/checker/checker.vue
function checker_injectStyle (ssrContext) {
  __webpack_require__("GdMu")
}
var checker_normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var checker___vue_template_functional__ = false
/* styles */
var checker___vue_styles__ = checker_injectStyle
/* scopeId */
var checker___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var checker___vue_module_identifier__ = null
var checker_Component = checker_normalizeComponent(
  checker_checker,
  components_checker_checker,
  checker___vue_template_functional__,
  checker___vue_styles__,
  checker___vue_scopeId__,
  checker___vue_module_identifier__
)

/* harmony default export */ var src_components_checker_checker = (checker_Component.exports);

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/inline-x-number/index.vue + 7 modules
var inline_x_number = __webpack_require__("lq8G");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/flexbox/flexbox-item.vue + 3 modules
var flexbox_item = __webpack_require__("Ris4");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/flexbox/flexbox.vue + 3 modules
var flexbox = __webpack_require__("EsTV");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/badge/index.vue + 3 modules
var badge = __webpack_require__("j/zR");

// EXTERNAL MODULE: ./node_modules/_vux@2.8.0@vux/src/components/loading/index.vue + 3 modules
var loading = __webpack_require__("3CVM");

// EXTERNAL MODULE: ./node_modules/_jquery@3.3.1@jquery/dist/jquery.js
var jquery = __webpack_require__("L7Pj");
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/goodsInfo/goodsInfo.vue


















/* harmony default export */ var goodsInfo = ({
  name: "godosInfo",
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Swiper: swiper["a" /* default */],
    Popup: popup["a" /* default */],
    XSwitch: x_switch["a" /* default */],
    Group: group["a" /* default */],
    Cell: cell["a" /* default */],
    CheckerItem: src_components_checker_checker_item,
    Checker: src_components_checker_checker,
    InlineXNumber: inline_x_number["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    Flexbox: flexbox["a" /* default */],
    Badge: badge["a" /* default */],
    Loading: loading["a" /* default */]
  },
  data() {
    return {
      show: true,
      add: [],
      isSpec: false,
      spec: null,
      goods_count: 1,
      goods_id: '',
      bag_num: 0,
      goods_info: {
        goods_id: "",
        goods_title: "",
        goods_money: 0,
        goods_stock: 0,
        spec: {
          "map": [],
          paramList: []
        },
        img_list: [],
        is_collection: false
      },
      mapList: [],
      headImgList: []
    };
  },

  methods: {

    toIndemnity() {
      console.log("去赔款页面");
      this.$router.push({
        path: "/indemnity/indemnity"
      });
    },
    onSpecClick() {},
    setSpec() {
      var spec = this.spec;

      for (var i = 0; i < this.goods_info.spec.paramList.length; i++) {
        var item = this.goods_info.spec.paramList[i];
        var is = true;
        for (var x in item.params) {
          if (spec[x] == undefined) {
            is = false;
          } else {
            if (item.params[x] != spec[x].title) {
              is = false;
            }
          }
        }
        if (is) {
          spec.money = item.money;
          spec.stock = item.stock;
        }
      }
      this.spec = spec;
    },
    addShopBag() {
      this.setSpec();
      console.log(this.spec);
      if (!this.spec['money']) {
        this.$vux.toast.show({
          text: "请选择规格",
          type: "text",
          position: "middle"
        });
        return;
      }

      this.$post("bag/add", {
        add: {
          spec: this.spec,
          goods_id: this.goods_info.goods_id,
          goods_count: this.goods_count
        }
      }, res => {
        if (res.res >= 1) {
          this.$vux.toast.show({
            text: "添加成功",
            type: "text",
            position: "middle"
          });
          this.isSpec = false;
          this.bag_num = res.bag_num;
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "网络错误",
            type: "text",
            position: "middle"
          });
        }
      });
    },
    collection() {

      this.$post("collection/change", {
        goods_id: this.goods_id
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          if (res.msg == 1) {
            this.goods_info.is_collection = true;
            this.$vux.toast.show({
              text: "收藏成功",
              type: "text",
              position: "middle"
            });
          }
          if (res.msg == 0) {
            this.goods_info.is_collection = false;
            this.$vux.toast.show({
              text: "已取消收藏",
              type: "text",
              position: "middle"
            });
          }
        }
      });
    },
    update() {
      console.log(this.$route.params);

      this.$get("goods/get", {
        goods_id: this.goods_id
      }, res => {

        this.show = false;
        if (res.res >= 1) {

          this.bag_num = res.bag_num;
          this.goods_info = res.msg;

          this.spec = {};
          for (var i = 0; i < this.goods_info.spec.spec; i++) {
            this.spec[this.goods_info.spec.spec[i].title] = [];
          }

          for (var i = 0; i < this.goods_info.img_list.length; i++) {
            this.goods_info.img_list[i].img = this.$getUrl(this.goods_info.img_list[i].src);
          }
          this.headImgList = this.goods_info.img_list;
          console.log(res);
        }
        if (res.res < 0) {}
      });
    }
  },

  mounted() {
    if (!this.$route.params["goods_id"]) {
      if (!localStorage.goods_id) {
        this.$router.go(-1);
        return;
      } else {
        this.goods_id = localStorage.goods_id;
      }
    } else {
      this.goods_id = this.$route.params["goods_id"];
    }
    localStorage.goods_id = this.goods_id;
    this.update();
  },
  watch: {
    spec() {
      this.setSpec();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vux-loader@1.2.1@vux-loader/src/script-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/pages/goodsInfo/goodsInfo.vue


















/* harmony default export */ var goodsInfo_goodsInfo = ({
  name: "godosInfo",
  components: {
    XHeader: x_header["a" /* default */],
    ViewBox: view_box["a" /* default */],
    Swiper: swiper["a" /* default */],
    Popup: popup["a" /* default */],
    XSwitch: x_switch["a" /* default */],
    Group: group["a" /* default */],
    Cell: cell["a" /* default */],
    CheckerItem: src_components_checker_checker_item,
    Checker: src_components_checker_checker,
    InlineXNumber: inline_x_number["a" /* default */],
    FlexboxItem: flexbox_item["a" /* default */],
    Flexbox: flexbox["a" /* default */],
    Badge: badge["a" /* default */],
    Loading: loading["a" /* default */]
  },
  data() {
    return {
      show: true,
      add: [],
      isSpec: false,
      spec: null,
      goods_count: 1,
      goods_id: '',
      bag_num: 0,
      goods_info: {
        goods_id: "",
        goods_title: "",
        goods_money: 0,
        goods_stock: 0,
        spec: {
          "map": [],
          paramList: []
        },
        img_list: [],
        is_collection: false
      },
      mapList: [],
      headImgList: []
    };
  },

  methods: {

    toIndemnity() {
      console.log("去赔款页面");
      this.$router.push({
        path: "/indemnity/indemnity"
      });
    },
    onSpecClick() {},
    setSpec() {
      var spec = this.spec;

      for (var i = 0; i < this.goods_info.spec.paramList.length; i++) {
        var item = this.goods_info.spec.paramList[i];
        var is = true;
        for (var x in item.params) {
          if (spec[x] == undefined) {
            is = false;
          } else {
            if (item.params[x] != spec[x].title) {
              is = false;
            }
          }
        }
        if (is) {
          spec.money = item.money;
          spec.stock = item.stock;
        }
      }
      this.spec = spec;
    },
    addShopBag() {
      this.setSpec();
      console.log(this.spec);
      if (!this.spec['money']) {
        this.$vux.toast.show({
          text: "请选择规格",
          type: "text",
          position: "middle"
        });
        return;
      }

      this.$post("bag/add", {
        add: {
          spec: this.spec,
          goods_id: this.goods_info.goods_id,
          goods_count: this.goods_count
        }
      }, res => {
        if (res.res >= 1) {
          this.$vux.toast.show({
            text: "添加成功",
            type: "text",
            position: "middle"
          });
          this.isSpec = false;
          this.bag_num = res.bag_num;
        }
        if (res.res < 0) {
          this.$vux.toast.show({
            text: "网络错误",
            type: "text",
            position: "middle"
          });
        }
      });
    },
    collection() {

      this.$post("collection/change", {
        goods_id: this.goods_id
      }, res => {
        console.log(res);
        if (res.res >= 1) {
          if (res.msg == 1) {
            this.goods_info.is_collection = true;
            this.$vux.toast.show({
              text: "收藏成功",
              type: "text",
              position: "middle"
            });
          }
          if (res.msg == 0) {
            this.goods_info.is_collection = false;
            this.$vux.toast.show({
              text: "已取消收藏",
              type: "text",
              position: "middle"
            });
          }
        }
      });
    },
    update() {
      console.log(this.$route.params);

      this.$get("goods/get", {
        goods_id: this.goods_id
      }, res => {

        this.show = false;
        if (res.res >= 1) {

          this.bag_num = res.bag_num;
          this.goods_info = res.msg;

          this.spec = {};
          for (var i = 0; i < this.goods_info.spec.spec; i++) {
            this.spec[this.goods_info.spec.spec[i].title] = [];
          }

          for (var i = 0; i < this.goods_info.img_list.length; i++) {
            this.goods_info.img_list[i].img = this.$getUrl(this.goods_info.img_list[i].src);
          }
          this.headImgList = this.goods_info.img_list;
          console.log(res);
        }
        if (res.res < 0) {}
      });
    }
  },

  mounted() {
    if (!this.$route.params["goods_id"]) {
      if (!localStorage.goods_id) {
        this.$router.go(-1);
        return;
      } else {
        this.goods_id = localStorage.goods_id;
      }
    } else {
      this.goods_id = this.$route.params["goods_id"];
    }
    localStorage.goods_id = this.goods_id;
    this.update();
  },
  watch: {
    spec() {
      this.setSpec();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-2d16026a","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vux-loader@1.2.1@vux-loader/src/before-template-compiler-loader.js!./node_modules/_vux-loader@1.2.1@vux-loader/src/template-loader.js!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/pages/goodsInfo/goodsInfo.vue
var goodsInfo_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"goodsInfo"}},[_c('x-header',{attrs:{"left-options":{backText: '返回'}}},[_vm._v("\n\t\t商品详情\n\t\t"),_c('template',{slot:"right"},[_c('i',{class:['heart fa',{'fa-heart-o':!_vm.goods_info.is_collection,'fa-heart':_vm.goods_info.is_collection}],on:{"click":_vm.collection}})])],2),_vm._v(" "),_c('view-box',[_c('div',[_c('loading',{attrs:{"show":_vm.show}})],1),_vm._v(" "),_c('swiper',{attrs:{"list":_vm.headImgList,"dots-position":"center","aspect-ratio":100/100}}),_vm._v(" "),_c('div',{staticClass:"goods-basic-info"},[_c('div',{staticClass:"goods-title"},[_vm._v("\n\t\t\t\t"+_vm._s(_vm.goods_info.goods_title)+"\n\t\t\t")]),_vm._v(" "),_c('div',{staticClass:"goods-money"},[_vm._v("\n\t\t\t\t￥\n\t\t\t\t"),(_vm.spec==null || _vm.spec['money']==null)?_c('span',[(_vm.goods_info.spec.paramList.length>0)?_c('span',[_vm._v("\n\t\t\t\t\t\t"+_vm._s(_vm.goods_info.spec.paramList[0].money)+"\n\t\t\t\t\t")]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.spec!=null && _vm.spec['money']!=null)?_c('span',[_vm._v("\n\t\t\t\t\t"+_vm._s(_vm.spec.money)+"\n\t\t\t\t")]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"panel",on:{"click":function($event){_vm.isSpec=true}}},[[_c('span',[_vm._v("请选择规格")])]],2),_vm._v(" "),_c('div',{},[_c('div',{staticClass:"member one-line",on:{"click":_vm.toIndemnity}},[_c('div',{staticClass:"font-12 display-inline member-label"},[_vm._v("贵就赔")]),_vm._v(" "),_c('span',{staticClass:"font-14"},[_vm._v("该商品会员购买可享一贵就赔服务")]),_vm._v(" "),_c('i',{staticClass:"float-right fa fa-angle-right",staticStyle:{"line-height":"22px"}})])]),_vm._v(" "),_c('div',{staticClass:"goods-content",domProps:{"innerHTML":_vm._s(_vm.goods_info.goods_content)}})],1),_vm._v(" "),_c('popup',{model:{value:(_vm.isSpec),callback:function ($$v) {_vm.isSpec=$$v},expression:"isSpec"}},[_c('div',{staticClass:"goods-select"},[_c('div',{staticClass:"goods-basic-info"},[_c('div',{staticClass:"goods-info"},[_c('div',{staticClass:"goods-money"},[_vm._v("\n\t\t\t\t\t\t￥\n\t\t\t\t\t\t"),(_vm.spec==null || _vm.spec['money']==null)?_c('span',[(_vm.goods_info.spec.paramList.length>0)?_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(_vm.goods_info.spec.paramList[0].money)+"\n\t\t\t\t\t\t\t")]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.spec!=null && _vm.spec['money'])?_c('span',[_vm._v("\n\t\t\t\t\t\t\t"+_vm._s(_vm.spec.money)+"\n\t\t\t\t\t\t")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"goods-stock"},[(!_vm.spec)?[_c('span',[_vm._v("请选择规格：")])]:[_c('div',[_vm._v("\n\t\t\t\t\t\t\t\t库存\n\t\t\t\t\t\t\t\t"),(_vm.spec==null || _vm.spec['stock']==null)?_c('span',[(_vm.goods_info.spec.paramList.length>0)?_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t\t\t"+_vm._s(_vm.goods_info.spec.paramList[0].stock)+"\n\t\t\t\t\t\t\t\t\t")]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.spec!=null && _vm.spec['stock'])?_c('span',[_vm._v("\n\t\t\t\t\t\t\t\t\t"+_vm._s(_vm.spec.stock)+"\n\t\t\t\t\t\t\t\t")]):_vm._e(),_vm._v("\n\t\t\t\t\t\t\t\t件\n\t\t\t\t\t\t\t")])]],2)])]),_vm._v(" "),_c('div',{staticClass:"select-view"},[_c('div',{staticClass:"spec-select"},[_c('span',{staticClass:"title"},[_vm._v("\n\t\t\t\t\t\t规格：\n\t\t\t\t\t")]),_vm._v(" "),_vm._l((_vm.goods_info.spec.spec),function(group,i){return _c('div',{staticClass:"title"},[_c('span',[_vm._v(_vm._s(group.title))]),_vm._v(" "),_c('checker',{attrs:{"type":"radio","radio-required":true,"default-item-class":"spec-select-item","selected-item-class":"spec-select-item-selected","disabled-item-class":"spec-select-item-disabled"},on:{"on-change":function($event){_vm.setSpec()}},model:{value:(_vm.spec[group.title]),callback:function ($$v) {_vm.$set(_vm.spec, group.title, $$v)},expression:"spec[group.title]"}},_vm._l((group.node),function(item,j){return (item.check)?_c('checker-item',{attrs:{"value":item},on:{"on-item-click":_vm.onSpecClick}},[_vm._v("\n\t\t\t\t\t\t\t\t"+_vm._s(item.title)+"\n\t\t\t\t\t\t\t")]):_vm._e()}))],1)})],2),_vm._v(" "),_c('div',{staticClass:"num-select"},[_c('flexbox',[_c('flexbox-item',[_c('span',{staticClass:"title"},[_vm._v("\n\t\t\t\t\t\t\t\t数量：\n\t\t\t\t\t\t\t")])]),_vm._v(" "),_c('flexbox-item',{staticClass:"text-right"},[_c('inline-x-number',{attrs:{"fillable":false,"min":1},model:{value:(_vm.goods_count),callback:function ($$v) {_vm.goods_count=$$v},expression:"goods_count"}})],1)],1)],1)]),_vm._v(" "),_c('div',{staticClass:"add-goods-btn-box",on:{"click":function($event){_vm.addShopBag()}}},[_c('div',{staticClass:"add-goods-btn"},[_vm._v("加入购物车")])]),_vm._v(" "),_c('div',{staticClass:"goods-select-close",on:{"click":function($event){_vm.isSpec=false}}},[_c('svg',{staticClass:"vux-x-icon vux-x-icon-ios-close-empty",attrs:{"type":"ios-close-empty","size":"35","id":"Layer_1","xmlns":"http://www.w3.org/2000/svg","width":"35","height":"35","viewBox":"0 0 512 512"}},[_c('path',{staticClass:"st0",attrs:{"d":"M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"}})])])])]),_vm._v(" "),_c('div',{staticClass:"fix-btn-box"},[_c('flexbox',{attrs:{"gutter":0}},[_c('flexbox-item',{attrs:{"span":3},nativeOn:{"click":function($event){_vm.collection()}}},[_c('i',{class:['heart fa',{'fa-heart-o':!_vm.goods_info.is_collection,'fa-heart':_vm.goods_info.is_collection}]})]),_vm._v(" "),_c('flexbox-item',{staticClass:"shop-bag-box",attrs:{"span":3}},[_c('router-link',{staticClass:"shop-bag-link",attrs:{"to":{ path: '/shopBag',name:'/shopBag', params: { index: 2 ,isGoodsInfo:true}}}},[_c('i',{staticClass:"fa fa-shopping-cart shop-bag-icon"}),_vm._v(" "),_c('badge',{staticClass:"shop-bag-num",attrs:{"text":_vm.bag_num}})],1)],1),_vm._v(" "),_c('flexbox-item',{attrs:{"span":6},nativeOn:{"click":function($event){_vm.addShopBag()}}},[_c('div',{staticClass:"add-goods-btn"},[_vm._v("加入购物车")])])],1)],1)],1)}
var goodsInfo_staticRenderFns = []
var goodsInfo_esExports = { render: goodsInfo_render, staticRenderFns: goodsInfo_staticRenderFns }
/* harmony default export */ var pages_goodsInfo_goodsInfo = (goodsInfo_esExports);
// CONCATENATED MODULE: ./src/pages/goodsInfo/goodsInfo.vue
function goodsInfo_injectStyle (ssrContext) {
  __webpack_require__("paEG")
  __webpack_require__("vg9H")
  __webpack_require__("9xuE")
}
var goodsInfo_normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var goodsInfo___vue_template_functional__ = false
/* styles */
var goodsInfo___vue_styles__ = goodsInfo_injectStyle
/* scopeId */
var goodsInfo___vue_scopeId__ = "data-v-2d16026a"
/* moduleIdentifier (server only) */
var goodsInfo___vue_module_identifier__ = null
var goodsInfo_Component = goodsInfo_normalizeComponent(
  goodsInfo_goodsInfo,
  pages_goodsInfo_goodsInfo,
  goodsInfo___vue_template_functional__,
  goodsInfo___vue_styles__,
  goodsInfo___vue_scopeId__,
  goodsInfo___vue_module_identifier__
)

/* harmony default export */ var src_pages_goodsInfo_goodsInfo = __webpack_exports__["default"] = (goodsInfo_Component.exports);


/***/ }),

/***/ "mXdt":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n.vux-inline-x-number {\n  display: inline-block;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/node_modules/_vux@2.8.0@vux/src/components/inline-x-number/index.vue"],"names":[],"mappings":";AACA;EACE,sBAAsB;CACvB","file":"index.vue","sourcesContent":["\n.vux-inline-x-number {\n  display: inline-block;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "paEG":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("vzw5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("f3d1ef0c", content, true, {});

/***/ }),

/***/ "rVVH":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui-cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.weui-cell__bd {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: \".\";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n.vux-cell-primary {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.vux-number-input {\n  float: left;\n  height: 20px;\n  font-size: 20px;\n  color: #666;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 1px solid #ececec;\n  padding: 3px 0;\n  text-align: center;\n  border-radius: 1px;\n}\n.vux-number-round .vux-number-input {\n  border: none;\n}\n.vux-number-selector {\n  float: left;\n  height: 20px;\n  font-size: 25px;\n  line-height: 18px;\n  color: #000;\n  border: 1px solid #ececec;\n}\n.vux-number-round .vux-number-selector {\n  width: 20px;\n  border-radius: 13px;\n}\n.vux-number-selector svg {\n  fill: #000;\n}\n.vux-number-selector.vux-number-disabled svg {\n  fill: #ccc;\n}\n.vux-number-round .vux-number-selector.vux-number-disabled {\n  border-color: #ececec;\n}\n.vux-number-round .vux-number-selector.vux-number-disabled svg {\n  fill: #ccc;\n}\n.vux-number-selector-sub {\n  border-right: none;\n  padding: 4px 8px 2px 8px;\n  border-radius: 2px 0 0 2px;\n}\n.vux-number-selector-plus {\n  border-left: none;\n  margin-right: 5px;\n  padding: 3px 8px;\n  border-radius: 0 2px 2px 0;\n}\n.vux-number-round .vux-number-selector-sub svg {\n  position: relative;\n  top: 1px;\n}\n.vux-number-round .vux-number-selector-sub,\n.vux-number-round .vux-number-selector-plus {\n  padding: 2px;\n  border: 1px solid #000;\n  text-align: center;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/node_modules/_vux@2.8.0@vux/src/components/x-number/index.vue"],"names":[],"mappings":"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,wBAAwB;EACxB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;UACtB,sBAAsB;EAC9B,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,UAAU;EACV,SAAS;EACT,YAAY;EACZ,iCAAiC;EACjC,eAAe;EACf,iCAAiC;UACzB,yBAAyB;EACjC,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,cAAc;CACf;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;EACP,SAAS;EACT,YAAY;EACZ,8BAA8B;EAC9B,eAAe;EACf,8BAA8B;UACtB,sBAAsB;EAC9B,+BAA+B;UACvB,uBAAuB;EAC/B,WAAW;CACZ;AACD;EACE,cAAc;CACf;AACD;EACE,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;CACjC;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;CACjB;AACD;EACE,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,qBAAqB;CACtB;AACD;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,iBAAiB;EACjB,UAAU;CACX;AACD;EACE,oBAAoB;MAChB,YAAY;UACR,QAAQ;CACjB;AACD;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;KACtB,sBAAsB;UACjB,iBAAiB;EACzB,0BAA0B;EAC1B,eAAe;EACf,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,WAAW;CACZ;AACD;EACE,sBAAsB;CACvB;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,yBAAyB;EACzB,2BAA2B;CAC5B;AACD;EACE,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;EACjB,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,SAAS;CACV;AACD;;EAEE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;CACpB","file":"index.vue","sourcesContent":["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n.weui-cells {\n  margin-top: 1.17647059em;\n  background-color: #FFFFFF;\n  line-height: 1.41176471;\n  font-size: 17px;\n  overflow: hidden;\n  position: relative;\n}\n.weui-cells:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells:after {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 1px;\n  border-bottom: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n.weui-cells__title {\n  margin-top: 0.77em;\n  margin-bottom: 0.3em;\n  padding-left: 15px;\n  padding-right: 15px;\n  color: #999999;\n  font-size: 14px;\n}\n.weui-cells__title + .weui-cells {\n  margin-top: 0;\n}\n.weui-cells__tips {\n  margin-top: .3em;\n  color: #999999;\n  padding-left: 15px;\n  padding-right: 15px;\n  font-size: 14px;\n}\n.weui-cell {\n  padding: 10px 15px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.weui-cell:before {\n  content: \" \";\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 1px;\n  border-top: 1px solid #D9D9D9;\n  color: #D9D9D9;\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n  left: 15px;\n}\n.weui-cell:first-child:before {\n  display: none;\n}\n.weui-cell_primary {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n.weui-cell__bd {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.weui-cell__ft {\n  text-align: right;\n  color: #999999;\n}\n.vux-cell-justify {\n  height: 1.41176471em;\n}\n.vux-cell-justify.vux-cell-justify:after {\n  content: \".\";\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n  height: 0;\n}\n.vux-cell-primary {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.vux-number-input {\n  float: left;\n  height: 20px;\n  font-size: 20px;\n  color: #666;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: 1px solid #ececec;\n  padding: 3px 0;\n  text-align: center;\n  border-radius: 1px;\n}\n.vux-number-round .vux-number-input {\n  border: none;\n}\n.vux-number-selector {\n  float: left;\n  height: 20px;\n  font-size: 25px;\n  line-height: 18px;\n  color: #000;\n  border: 1px solid #ececec;\n}\n.vux-number-round .vux-number-selector {\n  width: 20px;\n  border-radius: 13px;\n}\n.vux-number-selector svg {\n  fill: #000;\n}\n.vux-number-selector.vux-number-disabled svg {\n  fill: #ccc;\n}\n.vux-number-round .vux-number-selector.vux-number-disabled {\n  border-color: #ececec;\n}\n.vux-number-round .vux-number-selector.vux-number-disabled svg {\n  fill: #ccc;\n}\n.vux-number-selector-sub {\n  border-right: none;\n  padding: 4px 8px 2px 8px;\n  border-radius: 2px 0 0 2px;\n}\n.vux-number-selector-plus {\n  border-left: none;\n  margin-right: 5px;\n  padding: 3px 8px;\n  border-radius: 0 2px 2px 0;\n}\n.vux-number-round .vux-number-selector-sub svg {\n  position: relative;\n  top: 1px;\n}\n.vux-number-round .vux-number-selector-sub,\n.vux-number-round .vux-number-selector-plus {\n  padding: 2px;\n  border: 1px solid #000;\n  text-align: center;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "vg9H":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ZlR+");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("a894ea30", content, true, {});

/***/ }),

/***/ "vzw5":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("XLS9")(true);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n.weui-tab[data-v-2d16026a] {\n  background-color: #f1f1f1;\n  position: absolute;\n  top: 46px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  height: auto;\n}\n.goods-basic-info[data-v-2d16026a] {\n  background-color: #ffffff;\n  padding: 10px;\n}\n.goods-basic-info .goods-money[data-v-2d16026a] {\n    color: #f00;\n}\n.heart[data-v-2d16026a] {\n  fill: #fff;\n}\n.panel[data-v-2d16026a] {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #fff;\n}\n.goods-select[data-v-2d16026a] {\n  background-color: #ffffff;\n  height: 80vh;\n  padding: 10px;\n}\n.goods-select .goods-select-close[data-v-2d16026a] {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    fill: #000;\n}\n.goods-select .title[data-v-2d16026a] {\n    font-size: 14px;\n}\n.goods-select .goods-basic-info[data-v-2d16026a] {\n    position: absolute;\n    top: -30px;\n    right: 10px;\n    left: 10px;\n    display: block;\n    height: 80px;\n    background-color: transparent;\n    border-bottom: solid 1px #ddd;\n}\n.goods-select .goods-basic-info .goods-info[data-v-2d16026a] {\n      vertical-align: top;\n      display: inline-block;\n      font-size: 14px;\n      padding-top: 30px;\n}\n.goods-select .goods-basic-info .goods-head-img[data-v-2d16026a] {\n      display: inline-block;\n      width: 80px;\n      height: 80px;\n      border: solid 1px #fff;\n}\n.goods-select .select-view[data-v-2d16026a] {\n    position: absolute;\n    top: 70px;\n    bottom: 80px;\n    right: 10px;\n    left: 10px;\n    overflow: auto;\n}\n.goods-select .select-view .spec-select[data-v-2d16026a] {\n      font-size: 0;\n      border-bottom: solid 1px #ddd;\n      padding-bottom: 20px;\n}\n.goods-select .select-view .spec-select .spec-select-item[data-v-2d16026a] {\n        /*未选中的*/\n        border: solid #000 1px;\n        padding: 3px 15px;\n        font-size: 14px;\n        margin: 5px;\n}\n.goods-select .select-view .spec-select .spec-select-item-selected[data-v-2d16026a] {\n        /*选中的*/\n        background-color: #000000;\n        color: #ffffff;\n}\n.goods-select .select-view .spec-select .spec-select-item-disabled[data-v-2d16026a] {\n        /*禁用的*/\n}\n.goods-select .select-view .num-select[data-v-2d16026a] {\n      font-size: 14px;\n      margin: 10px 0;\n}\n.goods-select .add-goods-btn-box[data-v-2d16026a] {\n    background-color: #fff;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 10px;\n}\n.goods-select .add-goods-btn-box .add-goods-btn[data-v-2d16026a] {\n      font-size: 20px;\n      font-weight: bold;\n      color: #fff;\n      background-color: #000000;\n      text-align: center;\n      padding: 10px 0;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n}\n.goods-content[data-v-2d16026a] {\n  width: 100%;\n  overflow: hidden;\n}\n.goods-content img[data-v-2d16026a] {\n    max-width: 100% !important;\n}\n.goods-content * img[data-v-2d16026a] {\n    max-width: 100% !important;\n}\n.fix-btn-box[data-v-2d16026a] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  font-size: 20px;\n}\n.fix-btn-box .vux-flexbox-item[data-v-2d16026a] {\n    text-align: center;\n    line-height: 50px;\n    height: 50px;\n    background-color: #ffffff;\n}\n.fix-btn-box .shop-bag-box[data-v-2d16026a] {\n    border-right: solid 1px #ddd;\n}\n.fix-btn-box .shop-bag-box .shop-bag-num[data-v-2d16026a] {\n      position: relative;\n      top: -10px;\n      left: -8px;\n      background-color: #000000;\n}\n.fix-btn-box .shop-bag-box .shop-bag-link[data-v-2d16026a] {\n      width: 100%;\n      display: block;\n      color: #000;\n}\n.fix-btn-box .add-goods-btn[data-v-2d16026a] {\n    background-color: #000000;\n    color: #fff;\n    font-size: 18px;\n}\n.vux-number-selector svg[data-v-2d16026a] {\n  fill: #000;\n}\n.vux-popup-dialog[data-v-2d16026a] {\n  overflow-y: visible;\n}\n.member[data-v-2d16026a] {\n  padding: 5px;\n  background: #fff;\n}\n.member .member-label[data-v-2d16026a] {\n    padding: 1px;\n    border: 1px solid #f00;\n    color: #f00;\n}\n", "", {"version":3,"sources":["D:/working/formal/ceshi/src/pages/goodsInfo/goodsInfo.vue"],"names":[],"mappings":";AACA,iBAAiB;AACjB;EACE,0BAA0B;EAC1B,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,SAAS;EACT,QAAQ;EACR,aAAa;CACd;AACD;EACE,0BAA0B;EAC1B,cAAc;CACf;AACD;IACI,YAAY;CACf;AACD;EACE,WAAW;CACZ;AACD;EACE,eAAe;EACf,cAAc;EACd,uBAAuB;CACxB;AACD;EACE,0BAA0B;EAC1B,aAAa;EACb,cAAc;CACf;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,WAAW;CACd;AACD;IACI,gBAAgB;CACnB;AACD;IACI,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,eAAe;IACf,aAAa;IACb,8BAA8B;IAC9B,8BAA8B;CACjC;AACD;MACM,oBAAoB;MACpB,sBAAsB;MACtB,gBAAgB;MAChB,kBAAkB;CACvB;AACD;MACM,sBAAsB;MACtB,YAAY;MACZ,aAAa;MACb,uBAAuB;CAC5B;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,YAAY;IACZ,WAAW;IACX,eAAe;CAClB;AACD;MACM,aAAa;MACb,8BAA8B;MAC9B,qBAAqB;CAC1B;AACD;QACQ,QAAQ;QACR,uBAAuB;QACvB,kBAAkB;QAClB,gBAAgB;QAChB,YAAY;CACnB;AACD;QACQ,OAAO;QACP,0BAA0B;QAC1B,eAAe;CACtB;AACD;QACQ,OAAO;CACd;AACD;MACM,gBAAgB;MAChB,eAAe;CACpB;AACD;IACI,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,QAAQ;IACR,cAAc;CACjB;AACD;MACM,gBAAgB;MAChB,kBAAkB;MAClB,YAAY;MACZ,0BAA0B;MAC1B,mBAAmB;MACnB,gBAAgB;MAChB,0BAA0B;MAC1B,uBAAuB;MACvB,sBAAsB;MACtB,kBAAkB;CACvB;AACD;EACE,YAAY;EACZ,iBAAiB;CAClB;AACD;IACI,2BAA2B;CAC9B;AACD;IACI,2BAA2B;CAC9B;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,QAAQ;EACR,gBAAgB;CACjB;AACD;IACI,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,0BAA0B;CAC7B;AACD;IACI,6BAA6B;CAChC;AACD;MACM,mBAAmB;MACnB,WAAW;MACX,WAAW;MACX,0BAA0B;CAC/B;AACD;MACM,YAAY;MACZ,eAAe;MACf,YAAY;CACjB;AACD;IACI,0BAA0B;IAC1B,YAAY;IACZ,gBAAgB;CACnB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,aAAa;EACb,iBAAiB;CAClB;AACD;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;CACf","file":"goodsInfo.vue","sourcesContent":["\n@charset \"UTF-8\";\n.weui-tab[data-v-2d16026a] {\n  background-color: #f1f1f1;\n  position: absolute;\n  top: 46px;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  height: auto;\n}\n.goods-basic-info[data-v-2d16026a] {\n  background-color: #ffffff;\n  padding: 10px;\n}\n.goods-basic-info .goods-money[data-v-2d16026a] {\n    color: #f00;\n}\n.heart[data-v-2d16026a] {\n  fill: #fff;\n}\n.panel[data-v-2d16026a] {\n  margin: 10px 0;\n  padding: 10px;\n  background-color: #fff;\n}\n.goods-select[data-v-2d16026a] {\n  background-color: #ffffff;\n  height: 80vh;\n  padding: 10px;\n}\n.goods-select .goods-select-close[data-v-2d16026a] {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    fill: #000;\n}\n.goods-select .title[data-v-2d16026a] {\n    font-size: 14px;\n}\n.goods-select .goods-basic-info[data-v-2d16026a] {\n    position: absolute;\n    top: -30px;\n    right: 10px;\n    left: 10px;\n    display: block;\n    height: 80px;\n    background-color: transparent;\n    border-bottom: solid 1px #ddd;\n}\n.goods-select .goods-basic-info .goods-info[data-v-2d16026a] {\n      vertical-align: top;\n      display: inline-block;\n      font-size: 14px;\n      padding-top: 30px;\n}\n.goods-select .goods-basic-info .goods-head-img[data-v-2d16026a] {\n      display: inline-block;\n      width: 80px;\n      height: 80px;\n      border: solid 1px #fff;\n}\n.goods-select .select-view[data-v-2d16026a] {\n    position: absolute;\n    top: 70px;\n    bottom: 80px;\n    right: 10px;\n    left: 10px;\n    overflow: auto;\n}\n.goods-select .select-view .spec-select[data-v-2d16026a] {\n      font-size: 0;\n      border-bottom: solid 1px #ddd;\n      padding-bottom: 20px;\n}\n.goods-select .select-view .spec-select .spec-select-item[data-v-2d16026a] {\n        /*未选中的*/\n        border: solid #000 1px;\n        padding: 3px 15px;\n        font-size: 14px;\n        margin: 5px;\n}\n.goods-select .select-view .spec-select .spec-select-item-selected[data-v-2d16026a] {\n        /*选中的*/\n        background-color: #000000;\n        color: #ffffff;\n}\n.goods-select .select-view .spec-select .spec-select-item-disabled[data-v-2d16026a] {\n        /*禁用的*/\n}\n.goods-select .select-view .num-select[data-v-2d16026a] {\n      font-size: 14px;\n      margin: 10px 0;\n}\n.goods-select .add-goods-btn-box[data-v-2d16026a] {\n    background-color: #fff;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 10px;\n}\n.goods-select .add-goods-btn-box .add-goods-btn[data-v-2d16026a] {\n      font-size: 20px;\n      font-weight: bold;\n      color: #fff;\n      background-color: #000000;\n      text-align: center;\n      padding: 10px 0;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n}\n.goods-content[data-v-2d16026a] {\n  width: 100%;\n  overflow: hidden;\n}\n.goods-content img[data-v-2d16026a] {\n    max-width: 100% !important;\n}\n.goods-content * img[data-v-2d16026a] {\n    max-width: 100% !important;\n}\n.fix-btn-box[data-v-2d16026a] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  font-size: 20px;\n}\n.fix-btn-box .vux-flexbox-item[data-v-2d16026a] {\n    text-align: center;\n    line-height: 50px;\n    height: 50px;\n    background-color: #ffffff;\n}\n.fix-btn-box .shop-bag-box[data-v-2d16026a] {\n    border-right: solid 1px #ddd;\n}\n.fix-btn-box .shop-bag-box .shop-bag-num[data-v-2d16026a] {\n      position: relative;\n      top: -10px;\n      left: -8px;\n      background-color: #000000;\n}\n.fix-btn-box .shop-bag-box .shop-bag-link[data-v-2d16026a] {\n      width: 100%;\n      display: block;\n      color: #000;\n}\n.fix-btn-box .add-goods-btn[data-v-2d16026a] {\n    background-color: #000000;\n    color: #fff;\n    font-size: 18px;\n}\n.vux-number-selector svg[data-v-2d16026a] {\n  fill: #000;\n}\n.vux-popup-dialog[data-v-2d16026a] {\n  overflow-y: visible;\n}\n.member[data-v-2d16026a] {\n  padding: 5px;\n  background: #fff;\n}\n.member .member-label[data-v-2d16026a] {\n    padding: 1px;\n    border: 1px solid #f00;\n    color: #f00;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "zwSK":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("mXdt");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("78bc723c", content, true, {});

/***/ })

});
//# sourceMappingURL=5.3c1b82ebc5292f923315.js.map