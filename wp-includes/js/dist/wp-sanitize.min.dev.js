"use strict";

/*! This file is auto-generated */
window.wp = window.wp || {}, wp.sanitize = {
  stripTags: function stripTags(t) {
    var e = (t = t || "").replace(/<!--[\s\S]*?(-->|$)/g, "").replace(/<(script|style)[^>]*>[\s\S]*?(<\/\1>|$)/gi, "").replace(/<\/?[a-z][\s\S]*?(>|$)/gi, "");
    return e !== t ? wp.sanitize.stripTags(e) : e;
  },
  stripTagsAndEncodeText: function stripTagsAndEncodeText(t) {
    var e = wp.sanitize.stripTags(t),
        a = document.createElement("textarea");

    try {
      a.textContent = e, e = wp.sanitize.stripTags(a.value);
    } catch (t) {}

    return e;
  }
};