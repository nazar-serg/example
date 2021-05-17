"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

jQuery.cookie = function (key, value, options) {
  if (arguments.length > 1 && (value === null || _typeof(value) !== "object")) {
    options = jQuery.extend({}, options);

    if (value === null) {
      options.expires = -1;
    }

    if (typeof options.expires === 'number') {
      var days = options.expires,
          t = options.expires = new Date();
      t.setDate(t.getDate() + days);
    }

    return document.cookie = [encodeURIComponent(key), '=', options.raw ? String(value) : encodeURIComponent(String(value)), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join('');
  }

  options = value || {};
  var result,
      decode = options.raw ? function (s) {
    return s;
  } : decodeURIComponent;
  return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};