"use strict";

!function () {
  "use strict";

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager"),
      n = function n(t, o) {
    var r;
    return t.dom.getParents(t.selection.getStart(), function (t) {
      var e;
      (e = t.style["forecolor" === o ? "color" : "background-color"]) && (r = r || e);
    }), r;
  },
      g = function g(t) {
    var e,
        o = [];

    for (e = 0; e < t.length; e += 2) {
      o.push({
        text: t[e + 1],
        color: "#" + t[e]
      });
    }

    return o;
  },
      r = function r(t, e, o) {
    t.undoManager.transact(function () {
      t.focus(), t.formatter.apply(e, {
        value: o
      }), t.nodeChanged();
    });
  },
      e = function e(t, _e) {
    t.undoManager.transact(function () {
      t.focus(), t.formatter.remove(_e, {
        value: null
      }, null, !0), t.nodeChanged();
    });
  },
      o = function o(_o) {
    _o.addCommand("mceApplyTextcolor", function (t, e) {
      r(_o, t, e);
    }), _o.addCommand("mceRemoveTextcolor", function (t) {
      e(_o, t);
    });
  },
      F = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      i = tinymce.util.Tools.resolve("tinymce.util.Tools"),
      a = ["000000", "Black", "993300", "Burnt orange", "333300", "Dark olive", "003300", "Dark green", "003366", "Dark azure", "000080", "Navy Blue", "333399", "Indigo", "333333", "Very dark gray", "800000", "Maroon", "FF6600", "Orange", "808000", "Olive", "008000", "Green", "008080", "Teal", "0000FF", "Blue", "666699", "Grayish blue", "808080", "Gray", "FF0000", "Red", "FF9900", "Amber", "99CC00", "Yellow green", "339966", "Sea green", "33CCCC", "Turquoise", "3366FF", "Royal blue", "800080", "Purple", "999999", "Medium gray", "FF00FF", "Magenta", "FFCC00", "Gold", "FFFF00", "Yellow", "00FF00", "Lime", "00FFFF", "Aqua", "00CCFF", "Sky blue", "993366", "Red violet", "FFFFFF", "White", "FF99CC", "Pink", "FFCC99", "Peach", "FFFF99", "Light yellow", "CCFFCC", "Pale green", "CCFFFF", "Pale cyan", "99CCFF", "Light sky blue", "CC99FF", "Plum"],
      l = function l(t) {
    return t.getParam("textcolor_map", a);
  },
      c = function c(t) {
    return t.getParam("textcolor_rows", 5);
  },
      u = function u(t) {
    return t.getParam("textcolor_cols", 8);
  },
      m = function m(t) {
    return t.getParam("color_picker_callback", null);
  },
      s = function s(t) {
    return t.getParam("forecolor_map", l(t));
  },
      d = function d(t) {
    return t.getParam("backcolor_map", l(t));
  },
      f = function f(t) {
    return t.getParam("forecolor_rows", c(t));
  },
      b = function b(t) {
    return t.getParam("backcolor_rows", c(t));
  },
      p = function p(t) {
    return t.getParam("forecolor_cols", u(t));
  },
      C = function C(t) {
    return t.getParam("backcolor_cols", u(t));
  },
      y = m,
      v = function v(t) {
    return "function" == typeof m(t);
  },
      h = tinymce.util.Tools.resolve("tinymce.util.I18n"),
      P = function P(t, e, o, r) {
    var n,
        a,
        l,
        c,
        i,
        u,
        m,
        s = 0,
        d = F.DOM.uniqueId("mcearia"),
        f = function f(t, e) {
      var o = "transparent" === t;
      return '<td class="mce-grid-cell' + (o ? " mce-colorbtn-trans" : "") + '"><div id="' + d + "-" + s++ + '" data-mce-color="' + (t || "") + '" role="option" tabIndex="-1" style="' + (t ? "background-color: " + t : "") + '" title="' + h.translate(e) + '">' + (o ? "&#215;" : "") + "</div></td>";
    };

    for ((n = g(o)).push({
      text: h.translate("No color"),
      color: "transparent"
    }), l = '<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="list" cellspacing="0"><tbody>', c = n.length - 1, u = 0; u < e; u++) {
      for (l += "<tr>", i = 0; i < t; i++) {
        l += c < (m = u * t + i) ? "<td></td>" : f((a = n[m]).color, a.text);
      }

      l += "</tr>";
    }

    if (r) {
      for (l += '<tr><td colspan="' + t + '" class="mce-custom-color-btn"><div id="' + d + '-c" class="mce-widget mce-btn mce-btn-small mce-btn-flat" role="button" tabindex="-1" aria-labelledby="' + d + '-c" style="width: 100%"><button type="button" role="presentation" tabindex="-1">' + h.translate("Custom...") + "</button></div></td></tr>", l += "<tr>", i = 0; i < t; i++) {
        l += f("", "Custom color");
      }

      l += "</tr>";
    }

    return l += "</tbody></table>";
  },
      k = function k(t, e) {
    t.style.background = e, t.setAttribute("data-mce-color", e);
  },
      x = function x(o) {
    return function (t) {
      var e = t.control;
      e._color ? o.execCommand("mceApplyTextcolor", e.settings.format, e._color) : o.execCommand("mceRemoveTextcolor", e.settings.format);
    };
  },
      T = function T(r, c) {
    return function (t) {
      var e,
          a = this.parent(),
          o = n(r, a.settings.format),
          l = function l(t) {
        r.execCommand("mceApplyTextcolor", a.settings.format, t), a.hidePanel(), a.color(t);
      };

      F.DOM.getParent(t.target, ".mce-custom-color-btn") && (a.hidePanel(), y(r).call(r, function (t) {
        var e,
            o,
            r,
            n = a.panel.getEl().getElementsByTagName("table")[0];

        for (e = i.map(n.rows[n.rows.length - 1].childNodes, function (t) {
          return t.firstChild;
        }), r = 0; r < e.length && (o = e[r]).getAttribute("data-mce-color"); r++) {
          ;
        }

        if (r === c) for (r = 0; r < c - 1; r++) {
          k(e[r], e[r + 1].getAttribute("data-mce-color"));
        }
        k(o, t), l(t);
      }, o)), (e = t.target.getAttribute("data-mce-color")) ? (this.lastId && F.DOM.get(this.lastId).setAttribute("aria-selected", "false"), t.target.setAttribute("aria-selected", !0), this.lastId = t.target.id, "transparent" === e ? (r.execCommand("mceRemoveTextcolor", a.settings.format), a.hidePanel(), a.resetColor()) : l(e)) : null !== e && a.hidePanel();
    };
  },
      _ = function _(n, a) {
    return function () {
      var t = a ? p(n) : C(n),
          e = a ? f(n) : b(n),
          o = a ? s(n) : d(n),
          r = v(n);
      return P(t, e, o, r);
    };
  },
      A = function A(t) {
    t.addButton("forecolor", {
      type: "colorbutton",
      tooltip: "Text color",
      format: "forecolor",
      panel: {
        role: "application",
        ariaRemember: !0,
        html: _(t, !0),
        onclick: T(t, p(t))
      },
      onclick: x(t)
    }), t.addButton("backcolor", {
      type: "colorbutton",
      tooltip: "Background color",
      format: "hilitecolor",
      panel: {
        role: "application",
        ariaRemember: !0,
        html: _(t, !1),
        onclick: T(t, C(t))
      },
      onclick: x(t)
    });
  };

  t.add("textcolor", function (t) {
    o(t), A(t);
  });
}();