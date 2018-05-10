'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('babel-polyfill');
var Koa = require('koa');
var app = new Koa();

app.use(function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
        var start, ms;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        start = Date.now();

                        console.log('1');
                        _context.next = 4;
                        return next();

                    case 4:
                        ms = Date.now() - start;

                        ctx.set('X-Response-Time', ms + 'ms');
                        console.log('2');

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

app.use(function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
        var start, ms;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        start = Date.now();

                        console.log('3');
                        _context2.next = 4;
                        return next();

                    case 4:
                        ms = Date.now() - start;

                        console.log('4');
                        console.log(ctx.method + ' ' + ctx.url + ' - ' + ms);

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}());

app.use(function (ctx) {
    ctx.body = 'Hello World';
    ctx.response.status = 200;
    console.log('我的第一个koa应用');
});

app.listen('3000');
