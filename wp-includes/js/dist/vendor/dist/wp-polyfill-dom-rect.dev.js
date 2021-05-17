"use strict";

(function (global) {
  function number(v) {
    return v === undefined ? 0 : Number(v);
  }

  function different(u, v) {
    return u !== v && !(isNaN(u) && isNaN(v));
  }

  function DOMRect(xArg, yArg, wArg, hArg) {
    var x, y, width, height, left, right, top, bottom;
    x = number(xArg);
    y = number(yArg);
    width = number(wArg);
    height = number(hArg);
    Object.defineProperties(this, {
      x: {
        get: function get() {
          return x;
        },
        set: function set(newX) {
          if (different(x, newX)) {
            x = newX;
            left = right = undefined;
          }
        },
        enumerable: true
      },
      y: {
        get: function get() {
          return y;
        },
        set: function set(newY) {
          if (different(y, newY)) {
            y = newY;
            top = bottom = undefined;
          }
        },
        enumerable: true
      },
      width: {
        get: function get() {
          return width;
        },
        set: function set(newWidth) {
          if (different(width, newWidth)) {
            width = newWidth;
            left = right = undefined;
          }
        },
        enumerable: true
      },
      height: {
        get: function get() {
          return height;
        },
        set: function set(newHeight) {
          if (different(height, newHeight)) {
            height = newHeight;
            top = bottom = undefined;
          }
        },
        enumerable: true
      },
      left: {
        get: function get() {
          if (left === undefined) {
            left = x + Math.min(0, width);
          }

          return left;
        },
        enumerable: true
      },
      right: {
        get: function get() {
          if (right === undefined) {
            right = x + Math.max(0, width);
          }

          return right;
        },
        enumerable: true
      },
      top: {
        get: function get() {
          if (top === undefined) {
            top = y + Math.min(0, height);
          }

          return top;
        },
        enumerable: true
      },
      bottom: {
        get: function get() {
          if (bottom === undefined) {
            bottom = y + Math.max(0, height);
          }

          return bottom;
        },
        enumerable: true
      }
    });
  }

  global.DOMRect = DOMRect;
})(void 0);