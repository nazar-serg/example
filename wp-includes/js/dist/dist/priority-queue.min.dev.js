"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! This file is auto-generated */
(void 0).wp = (void 0).wp || {}, (void 0).wp.priorityQueue = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var u = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(u.exports, u, u.exports, n), u.l = !0, u.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var u in e) {
      n.d(r, u, function (t) {
        return e[t];
      }.bind(null, u));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 499);
}({
  499: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "createQueue", function () {
      return u;
    });

    var r = "undefined" == typeof window ? function (e) {
      setTimeout(function () {
        return e(Date.now());
      }, 0);
    } : window.requestIdleCallback || window.requestAnimationFrame,
        u = function u() {
      var e = [],
          t = new WeakMap(),
          n = !1,
          u = function u(o) {
        var i = "number" == typeof o ? function () {
          return !1;
        } : function () {
          return o.timeRemaining() > 0;
        };

        do {
          if (0 === e.length) return void (n = !1);
          var f = e.shift();
          t.get(f)(), t["delete"](f);
        } while (i());

        r(u);
      };

      return {
        add: function add(o, i) {
          t.has(o) || e.push(o), t.set(o, i), n || (n = !0, r(u));
        },
        flush: function flush(n) {
          if (!t.has(n)) return !1;
          var r = e.indexOf(n);
          e.splice(r, 1);
          var u = t.get(n);
          return t["delete"](n), u(), !0;
        },
        reset: function reset() {
          e = [], t = new WeakMap(), n = !1;
        }
      };
    };
  }
});