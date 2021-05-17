"use strict";

!function () {
  "use strict";

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager"),
      c = tinymce.util.Tools.resolve("tinymce.util.Tools"),
      e = function e(t, _e) {
    var i,
        n = t.dom,
        o = t.selection.getSelectedBlocks();
    o.length && (i = n.getAttrib(o[0], "dir"), c.each(o, function (t) {
      n.getParent(t.parentNode, '*[dir="' + _e + '"]', n.getRoot()) || n.setAttrib(t, "dir", i !== _e ? _e : null);
    }), t.nodeChanged());
  },
      i = function i(t) {
    t.addCommand("mceDirectionLTR", function () {
      e(t, "ltr");
    }), t.addCommand("mceDirectionRTL", function () {
      e(t, "rtl");
    });
  },
      n = function n(e) {
    var i = [];
    return c.each("h1 h2 h3 h4 h5 h6 div p".split(" "), function (t) {
      i.push(t + "[dir=" + e + "]");
    }), i.join(",");
  },
      o = function o(t) {
    t.addButton("ltr", {
      title: "Left to right",
      cmd: "mceDirectionLTR",
      stateSelector: n("ltr")
    }), t.addButton("rtl", {
      title: "Right to left",
      cmd: "mceDirectionRTL",
      stateSelector: n("rtl")
    });
  };

  t.add("directionality", function (t) {
    i(t), o(t);
  });
}();