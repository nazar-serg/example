"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (_) {
  "use strict";

  var e,
      t,
      n,
      i,
      r = tinymce.util.Tools.resolve("tinymce.ThemeManager"),
      l = tinymce.util.Tools.resolve("tinymce.EditorManager"),
      w = tinymce.util.Tools.resolve("tinymce.util.Tools"),
      d = function d(e) {
    return !1 !== c(e);
  },
      c = function c(e) {
    return e.getParam("menubar");
  },
      f = function f(e) {
    return e.getParam("toolbar_items_size");
  },
      h = function h(e) {
    return e.getParam("menu");
  },
      m = function m(e) {
    return !1 === e.settings.skin;
  },
      g = function g(e) {
    var t = e.getParam("resize", "vertical");
    return !1 === t ? "none" : "both" === t ? "both" : "vertical";
  },
      p = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      v = tinymce.util.Tools.resolve("tinymce.ui.Factory"),
      b = tinymce.util.Tools.resolve("tinymce.util.I18n"),
      o = function o(e) {
    return e.fire("SkinLoaded");
  },
      y = function y(e) {
    return e.fire("ResizeEditor");
  },
      x = function x(e) {
    return e.fire("BeforeRenderUI");
  },
      s = function s(t, n) {
    return function () {
      var e = t.find(n)[0];
      e && e.focus(!0);
    };
  },
      R = function R(e, t) {
    e.shortcuts.add("Alt+F9", "", s(t, "menubar")), e.shortcuts.add("Alt+F10,F10", "", s(t, "toolbar")), e.shortcuts.add("Alt+F11", "", s(t, "elementpath")), t.on("cancel", function () {
      e.focus();
    });
  },
      C = tinymce.util.Tools.resolve("tinymce.geom.Rect"),
      u = tinymce.util.Tools.resolve("tinymce.util.Delay"),
      E = function E() {},
      k = function k(e) {
    return function () {
      return e;
    };
  },
      a = k(!1),
      H = k(!0),
      S = function S() {
    return T;
  },
      T = (e = function e(_e2) {
    return _e2.isNone();
  }, i = {
    fold: function fold(e, t) {
      return e();
    },
    is: a,
    isSome: a,
    isNone: H,
    getOr: n = function n(e) {
      return e;
    },
    getOrThunk: t = function t(e) {
      return e();
    },
    getOrDie: function getOrDie(e) {
      throw new Error(e || "error: getOrDie called on none.");
    },
    getOrNull: k(null),
    getOrUndefined: k(undefined),
    or: n,
    orThunk: t,
    map: S,
    each: E,
    bind: S,
    exists: a,
    forall: H,
    filter: S,
    equals: e,
    equals_: e,
    toArray: function toArray() {
      return [];
    },
    toString: k("none()")
  }, Object.freeze && Object.freeze(i), i),
      M = function M(n) {
    var e = k(n),
        t = function t() {
      return r;
    },
        i = function i(e) {
      return e(n);
    },
        r = {
      fold: function fold(e, t) {
        return t(n);
      },
      is: function is(e) {
        return n === e;
      },
      isSome: H,
      isNone: a,
      getOr: e,
      getOrThunk: e,
      getOrDie: e,
      getOrNull: e,
      getOrUndefined: e,
      or: t,
      orThunk: t,
      map: function map(e) {
        return M(e(n));
      },
      each: function each(e) {
        e(n);
      },
      bind: i,
      exists: i,
      forall: i,
      filter: function filter(e) {
        return e(n) ? r : T;
      },
      toArray: function toArray() {
        return [n];
      },
      toString: function toString() {
        return "some(" + n + ")";
      },
      equals: function equals(e) {
        return e.is(n);
      },
      equals_: function equals_(e, t) {
        return e.fold(a, function (e) {
          return t(n, e);
        });
      }
    };

    return r;
  },
      N = {
    some: M,
    none: S,
    from: function from(e) {
      return null === e || e === undefined ? T : M(e);
    }
  },
      P = function P(e) {
    return e ? e.getRoot().uiContainer : null;
  },
      W = {
    getUiContainerDelta: function getUiContainerDelta(e) {
      var t = P(e);

      if (t && "static" !== p.DOM.getStyle(t, "position", !0)) {
        var n = p.DOM.getPos(t),
            i = t.scrollLeft - n.x,
            r = t.scrollTop - n.y;
        return N.some({
          x: i,
          y: r
        });
      }

      return N.none();
    },
    setUiContainer: function setUiContainer(e, t) {
      var n = p.DOM.select(e.settings.ui_container)[0];
      t.getRoot().uiContainer = n;
    },
    getUiContainer: P,
    inheritUiContainer: function inheritUiContainer(e, t) {
      return t.uiContainer = P(e);
    }
  },
      D = function D(i, e, r) {
    var o,
        s = [];
    if (e) return w.each(e.split(/[ ,]/), function (t) {
      var e,
          n = function n() {
        var e = i.selection;
        t.settings.stateSelector && e.selectorChanged(t.settings.stateSelector, function (e) {
          t.active(e);
        }, !0), t.settings.disabledStateSelector && e.selectorChanged(t.settings.disabledStateSelector, function (e) {
          t.disabled(e);
        });
      };

      "|" === t ? o = null : (o || (o = {
        type: "buttongroup",
        items: []
      }, s.push(o)), i.buttons[t] && (e = t, "function" == typeof (t = i.buttons[e]) && (t = t()), t.type = t.type || "button", t.size = r, t = v.create(t), o.items.push(t), i.initialized ? n() : i.on("init", n)));
    }), {
      type: "toolbar",
      layout: "flow",
      items: s
    };
  },
      O = D,
      A = function A(n, i) {
    var e,
        t,
        r = [];
    if (w.each(!1 === (t = (e = n).getParam("toolbar")) ? [] : w.isArray(t) ? w.grep(t, function (e) {
      return 0 < e.length;
    }) : function (e, t) {
      for (var n = [], i = 1; i < 10; i++) {
        var r = e["toolbar" + i];
        if (!r) break;
        n.push(r);
      }

      var o = e.toolbar ? [e.toolbar] : [t];
      return 0 < n.length ? n : o;
    }(e.settings, "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"), function (e) {
      var t;
      (t = e) && r.push(D(n, t, i));
    }), r.length) return {
      type: "panel",
      layout: "stack",
      classes: "toolbar-grp",
      ariaRoot: !0,
      ariaRemember: !0,
      items: r
    };
  },
      B = p.DOM,
      L = function L(e) {
    return {
      left: e.x,
      top: e.y,
      width: e.w,
      height: e.h,
      right: e.x + e.w,
      bottom: e.y + e.h
    };
  },
      z = function z(e, t) {
    e.moveTo(t.left, t.top);
  },
      I = function I(e, t, n, i, r, o) {
    return o = L({
      x: t,
      y: n,
      w: o.w,
      h: o.h
    }), e && (o = e({
      elementRect: L(i),
      contentAreaRect: L(r),
      panelRect: o
    })), o;
  },
      F = function F(x) {
    var i,
        o = function o() {
      return x.contextToolbars || [];
    },
        n = function n(e, t) {
      var n,
          i,
          r,
          o,
          s,
          a,
          l,
          u = x.getParam("inline_toolbar_position_handler");

      if (!x.removed) {
        if (!e || !e.toolbar.panel) return c = x, void w.each(c.contextToolbars, function (e) {
          e.panel && e.panel.hide();
        });
        var c, d, f, h, m;
        l = ["bc-tc", "tc-bc", "tl-bl", "bl-tl", "tr-br", "br-tr"], s = e.toolbar.panel, t && s.show(), d = e.element, f = B.getPos(x.getContentAreaContainer()), h = x.dom.getRect(d), "BODY" === (m = x.dom.getRoot()).nodeName && (h.x -= m.ownerDocument.documentElement.scrollLeft || m.scrollLeft, h.y -= m.ownerDocument.documentElement.scrollTop || m.scrollTop), h.x += f.x, h.y += f.y, r = h, i = B.getRect(s.getEl()), o = B.getRect(x.getContentAreaContainer() || x.getBody());
        var g,
            p,
            v,
            b = W.getUiContainerDelta(s).getOr({
          x: 0,
          y: 0
        });

        if (r.x += b.x, r.y += b.y, i.x += b.x, i.y += b.y, o.x += b.x, o.y += b.y, "inline" !== B.getStyle(e.element, "display", !0)) {
          var y = e.element.getBoundingClientRect();
          r.w = y.width, r.h = y.height;
        }

        x.inline || (o.w = x.getDoc().documentElement.offsetWidth), x.selection.controlSelection.isResizable(e.element) && r.w < 25 && (r = C.inflate(r, 0, 8)), n = C.findBestRelativePosition(i, r, o, l), r = C.clamp(r, o), n ? (a = C.relativePosition(i, r, n), z(s, I(u, a.x, a.y, r, o, i))) : (o.h += i.h, (r = C.intersect(o, r)) ? (n = C.findBestRelativePosition(i, r, o, ["bc-tc", "bl-tl", "br-tr"])) ? (a = C.relativePosition(i, r, n), z(s, I(u, a.x, a.y, r, o, i))) : z(s, I(u, r.x, r.y, r, o, i)) : s.hide()), g = s, v = function v(e, t) {
          return e === t;
        }, p = (p = n) ? p.substr(0, 2) : "", w.each({
          t: "down",
          b: "up"
        }, function (e, t) {
          g.classes.toggle("arrow-" + e, v(t, p.substr(0, 1)));
        }), w.each({
          l: "left",
          r: "right"
        }, function (e, t) {
          g.classes.toggle("arrow-" + e, v(t, p.substr(1, 1)));
        });
      }
    },
        r = function r(e) {
      return function () {
        u.requestAnimationFrame(function () {
          x.selection && n(a(x.selection.getNode()), e);
        });
      };
    },
        t = function t(e) {
      var t;
      if (e.toolbar.panel) return e.toolbar.panel.show(), void n(e);
      t = v.create({
        type: "floatpanel",
        role: "dialog",
        classes: "tinymce tinymce-inline arrow",
        ariaLabel: "Inline toolbar",
        layout: "flex",
        direction: "column",
        align: "stretch",
        autohide: !1,
        autofix: !0,
        fixed: !0,
        border: 1,
        items: O(x, e.toolbar.items),
        oncancel: function oncancel() {
          x.focus();
        }
      }), W.setUiContainer(x, t), function (e) {
        if (!i) {
          var t = r(!0),
              n = W.getUiContainer(e);
          i = x.selection.getScrollContainer() || x.getWin(), B.bind(i, "scroll", t), B.bind(n, "scroll", t), x.on("remove", function () {
            B.unbind(i, "scroll", t), B.unbind(n, "scroll", t);
          });
        }
      }(t), (e.toolbar.panel = t).renderTo().reflow(), n(e);
    },
        s = function s() {
      w.each(o(), function (e) {
        e.panel && e.panel.hide();
      });
    },
        a = function a(e) {
      var t,
          n,
          i,
          r = o();

      for (t = (i = x.$(e).parents().add(e)).length - 1; 0 <= t; t--) {
        for (n = r.length - 1; 0 <= n; n--) {
          if (r[n].predicate(i[t])) return {
            toolbar: r[n],
            element: i[t]
          };
        }
      }

      return null;
    };

    x.on("click keyup setContent ObjectResized", function (e) {
      ("setcontent" !== e.type || e.selection) && u.setEditorTimeout(x, function () {
        var e;
        (e = a(x.selection.getNode())) ? (s(), t(e)) : s();
      });
    }), x.on("blur hide contextmenu", s), x.on("ObjectResizeStart", function () {
      var e = a(x.selection.getNode());
      e && e.toolbar.panel && e.toolbar.panel.hide();
    }), x.on("ResizeEditor ResizeWindow", r(!0)), x.on("nodeChange", r(!1)), x.on("remove", function () {
      w.each(o(), function (e) {
        e.panel && e.panel.remove();
      }), x.contextToolbars = {};
    }), x.shortcuts.add("ctrl+F9", "", function () {
      var e = a(x.selection.getNode());
      e && e.toolbar.panel && e.toolbar.panel.items()[0].focus();
    });
  },
      U = function U(t) {
    return function (e) {
      return function (e) {
        if (null === e) return "null";

        var t = _typeof(e);

        return "object" === t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" === t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t;
      }(e) === t;
    };
  },
      V = U("array"),
      Y = U("function"),
      $ = U("number"),
      q = (Array.prototype.slice, Array.prototype.indexOf),
      X = Array.prototype.push,
      j = function j(e, t) {
    var n,
        i,
        r = (n = e, i = t, q.call(n, i));
    return -1 === r ? N.none() : N.some(r);
  },
      J = function J(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      if (t(e[n], n)) return !0;
    }

    return !1;
  },
      G = function G(e, t) {
    for (var n = e.length, i = new Array(n), r = 0; r < n; r++) {
      var o = e[r];
      i[r] = t(o, r);
    }

    return i;
  },
      K = function K(e, t) {
    for (var n = 0, i = e.length; n < i; n++) {
      t(e[n], n);
    }
  },
      Z = function Z(e, t) {
    for (var n = [], i = 0, r = e.length; i < r; i++) {
      var o = e[i];
      t(o, i) && n.push(o);
    }

    return n;
  },
      Q = (Y(Array.from) && Array.from, {
    file: {
      title: "File",
      items: "newdocument restoredraft | preview | print"
    },
    edit: {
      title: "Edit",
      items: "undo redo | cut copy paste pastetext | selectall"
    },
    view: {
      title: "View",
      items: "code | visualaid visualchars visualblocks | spellchecker | preview fullscreen"
    },
    insert: {
      title: "Insert",
      items: "image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor toc | insertdatetime"
    },
    format: {
      title: "Format",
      items: "bold italic underline strikethrough superscript subscript codeformat | blockformats align | removeformat"
    },
    tools: {
      title: "Tools",
      items: "spellchecker spellcheckerlanguage | a11ycheck code"
    },
    table: {
      title: "Table"
    },
    help: {
      title: "Help"
    }
  }),
      ee = function ee(e, t) {
    return "|" === e ? {
      name: "|",
      item: {
        text: "|"
      }
    } : t ? {
      name: e,
      item: t
    } : null;
  },
      te = function te(e, t) {
    return function (e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        if (t(e[n], n)) return N.some(n);
      }

      return N.none();
    }(e, function (e) {
      return e.name === t;
    }).isSome();
  },
      ne = function ne(e) {
    return e && "|" === e.item.text;
  },
      ie = function ie(n, e, t, i) {
    var r, o, s, a, l, u, c;
    return e ? (o = e[i], a = !0) : o = Q[i], o && (r = {
      text: o.title
    }, s = [], w.each((o.items || "").split(/[ ,]/), function (e) {
      var t = ee(e, n[e]);
      t && s.push(t);
    }), a || w.each(n, function (e, t) {
      e.context !== i || te(s, t) || ("before" === e.separator && s.push({
        name: "|",
        item: {
          text: "|"
        }
      }), e.prependToContext ? s.unshift(ee(t, e)) : s.push(ee(t, e)), "after" === e.separator && s.push({
        name: "|",
        item: {
          text: "|"
        }
      }));
    }), r.menu = G((l = t, u = Z(s, function (e) {
      return !1 === l.hasOwnProperty(e.name);
    }), c = Z(u, function (e, t) {
      return !ne(e) || !ne(u[t - 1]);
    }), Z(c, function (e, t) {
      return !ne(e) || 0 < t && t < c.length - 1;
    })), function (e) {
      return e.item;
    }), !r.menu.length) ? null : r;
  },
      re = function re(e) {
    for (var t, n = [], i = function (e) {
      var t,
          n = [],
          i = h(e);
      if (i) for (t in i) {
        n.push(t);
      } else for (t in Q) {
        n.push(t);
      }
      return n;
    }(e), r = w.makeMap((t = e, t.getParam("removed_menuitems", "")).split(/[ ,]/)), o = c(e), s = "string" == typeof o ? o.split(/[ ,]/) : i, a = 0; a < s.length; a++) {
      var l = s[a],
          u = ie(e.menuItems, h(e), r, l);
      u && n.push(u);
    }

    return n;
  },
      oe = p.DOM,
      se = function se(e) {
    return {
      width: e.clientWidth,
      height: e.clientHeight
    };
  },
      ae = function ae(e, t, n) {
    var i, r, o, s;
    i = e.getContainer(), r = e.getContentAreaContainer().firstChild, o = se(i), s = se(r), null !== t && (t = Math.max(e.getParam("min_width", 100, "number"), t), t = Math.min(e.getParam("max_width", 65535, "number"), t), oe.setStyle(i, "width", t + (o.width - s.width)), oe.setStyle(r, "width", t)), n = Math.max(e.getParam("min_height", 100, "number"), n), n = Math.min(e.getParam("max_height", 65535, "number"), n), oe.setStyle(r, "height", n), y(e);
  },
      le = ae,
      ue = function ue(e, t, n) {
    var i = e.getContentAreaContainer();
    ae(e, i.clientWidth + t, i.clientHeight + n);
  },
      ce = tinymce.util.Tools.resolve("tinymce.Env"),
      de = function de(e, t, n) {
    var i,
        r = e.settings[n];
    r && r((i = t.getEl("body"), {
      element: function element() {
        return i;
      }
    }));
  },
      fe = function fe(c, d, f) {
    return function (e) {
      var t,
          n,
          i,
          r,
          o,
          s = e.control,
          a = s.parents().filter("panel")[0],
          l = a.find("#" + d)[0],
          u = (t = f, n = d, w.grep(t, function (e) {
        return e.name === n;
      })[0]);
      i = d, r = a, o = f, w.each(o, function (e) {
        var t = r.items().filter("#" + e.name)[0];
        t && t.visible() && e.name !== i && (de(e, t, "onhide"), t.visible(!1));
      }), s.parent().items().each(function (e) {
        e.active(!1);
      }), l && l.visible() ? (de(u, l, "onhide"), l.hide(), s.active(!1)) : (l ? l.show() : (l = v.create({
        type: "container",
        name: d,
        layout: "stack",
        classes: "sidebar-panel",
        html: ""
      }), a.prepend(l), de(u, l, "onrender")), de(u, l, "onshow"), s.active(!0)), y(c);
    };
  },
      he = function he(e) {
    return !(ce.ie && !(11 <= ce.ie) || !e.sidebars) && 0 < e.sidebars.length;
  },
      me = function me(n) {
    return {
      type: "panel",
      name: "sidebar",
      layout: "stack",
      classes: "sidebar",
      items: [{
        type: "toolbar",
        layout: "stack",
        classes: "sidebar-toolbar",
        items: w.map(n.sidebars, function (e) {
          var t = e.settings;
          return {
            type: "button",
            icon: t.icon,
            image: t.image,
            tooltip: t.tooltip,
            onclick: fe(n, e.name, n.sidebars)
          };
        })
      }]
    };
  },
      ge = function ge(e) {
    var t = function t() {
      e._skinLoaded = !0, o(e);
    };

    return function () {
      e.initialized ? t() : e.on("init", t);
    };
  },
      pe = p.DOM,
      ve = function ve(e) {
    return {
      type: "panel",
      name: "iframe",
      layout: "stack",
      classes: "edit-area",
      border: e,
      html: ""
    };
  },
      be = function be(t, e, n) {
    var i, r, o, s, a;

    if (!1 === m(t) && n.skinUiCss ? pe.styleSheetLoader.load(n.skinUiCss, ge(t)) : ge(t)(), i = e.panel = v.create({
      type: "panel",
      role: "application",
      classes: "tinymce",
      style: "visibility: hidden",
      layout: "stack",
      border: 1,
      items: [{
        type: "container",
        classes: "top-part",
        items: [!1 === d(t) ? null : {
          type: "menubar",
          border: "0 0 1 0",
          items: re(t)
        }, A(t, f(t))]
      }, he(t) ? (s = t, {
        type: "panel",
        layout: "stack",
        classes: "edit-aria-container",
        border: "1 0 0 0",
        items: [ve("0"), me(s)]
      }) : ve("1 0 0 0")]
    }), W.setUiContainer(t, i), "none" !== g(t) && (r = {
      type: "resizehandle",
      direction: g(t),
      onResizeStart: function onResizeStart() {
        var e = t.getContentAreaContainer().firstChild;
        o = {
          width: e.clientWidth,
          height: e.clientHeight
        };
      },
      onResize: function onResize(e) {
        "both" === g(t) ? le(t, o.width + e.deltaX, o.height + e.deltaY) : le(t, null, o.height + e.deltaY);
      }
    }), t.getParam("statusbar", !0, "boolean")) {
      var l = b.translate(["Powered by {0}", '<a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce" rel="noopener" target="_blank" role="presentation" tabindex="-1">Tiny</a>']),
          u = t.getParam("branding", !0, "boolean") ? {
        type: "label",
        classes: "branding",
        html: " " + l
      } : null;
      i.add({
        type: "panel",
        name: "statusbar",
        classes: "statusbar",
        layout: "flow",
        border: "1 0 0 0",
        ariaRoot: !0,
        items: [{
          type: "elementpath",
          editor: t
        }, r, u]
      });
    }

    return x(t), t.on("SwitchMode", (a = i, function (e) {
      a.find("*").disabled("readonly" === e.mode);
    })), i.renderBefore(n.targetNode).reflow(), t.getParam("readonly", !1, "boolean") && t.setMode("readonly"), n.width && pe.setStyle(i.getEl(), "width", n.width), t.on("remove", function () {
      i.remove(), i = null;
    }), R(t, i), F(t), {
      iframeContainer: i.find("#iframe")[0].getEl(),
      editorContainer: i.getEl()
    };
  },
      ye = tinymce.util.Tools.resolve("tinymce.dom.DomQuery"),
      xe = 0,
      we = {
    id: function id() {
      return "mceu_" + xe++;
    },
    create: function create(e, t, n) {
      var i = _.document.createElement(e);

      return p.DOM.setAttribs(i, t), "string" == typeof n ? i.innerHTML = n : w.each(n, function (e) {
        e.nodeType && i.appendChild(e);
      }), i;
    },
    createFragment: function createFragment(e) {
      return p.DOM.createFragment(e);
    },
    getWindowSize: function getWindowSize() {
      return p.DOM.getViewPort();
    },
    getSize: function getSize(e) {
      var t, n;

      if (e.getBoundingClientRect) {
        var i = e.getBoundingClientRect();
        t = Math.max(i.width || i.right - i.left, e.offsetWidth), n = Math.max(i.height || i.bottom - i.bottom, e.offsetHeight);
      } else t = e.offsetWidth, n = e.offsetHeight;

      return {
        width: t,
        height: n
      };
    },
    getPos: function getPos(e, t) {
      return p.DOM.getPos(e, t || we.getContainer());
    },
    getContainer: function getContainer() {
      return ce.container ? ce.container : _.document.body;
    },
    getViewPort: function getViewPort(e) {
      return p.DOM.getViewPort(e);
    },
    get: function get(e) {
      return _.document.getElementById(e);
    },
    addClass: function addClass(e, t) {
      return p.DOM.addClass(e, t);
    },
    removeClass: function removeClass(e, t) {
      return p.DOM.removeClass(e, t);
    },
    hasClass: function hasClass(e, t) {
      return p.DOM.hasClass(e, t);
    },
    toggleClass: function toggleClass(e, t, n) {
      return p.DOM.toggleClass(e, t, n);
    },
    css: function css(e, t, n) {
      return p.DOM.setStyle(e, t, n);
    },
    getRuntimeStyle: function getRuntimeStyle(e, t) {
      return p.DOM.getStyle(e, t, !0);
    },
    on: function on(e, t, n, i) {
      return p.DOM.bind(e, t, n, i);
    },
    off: function off(e, t, n) {
      return p.DOM.unbind(e, t, n);
    },
    fire: function fire(e, t, n) {
      return p.DOM.fire(e, t, n);
    },
    innerHtml: function innerHtml(e, t) {
      p.DOM.setHTML(e, t);
    }
  },
      _e = function _e(e) {
    return "static" === we.getRuntimeStyle(e, "position");
  },
      Re = function Re(e) {
    return e.state.get("fixed");
  };

  function Ce(e, t, n) {
    var i, r, o, s, a, l, u, c, d, f;
    return d = Ee(), o = (r = we.getPos(t, W.getUiContainer(e))).x, s = r.y, Re(e) && _e(_.document.body) && (o -= d.x, s -= d.y), i = e.getEl(), a = (f = we.getSize(i)).width, l = f.height, u = (f = we.getSize(t)).width, c = f.height, "b" === (n = (n || "").split(""))[0] && (s += c), "r" === n[1] && (o += u), "c" === n[0] && (s += Math.round(c / 2)), "c" === n[1] && (o += Math.round(u / 2)), "b" === n[3] && (s -= l), "r" === n[4] && (o -= a), "c" === n[3] && (s -= Math.round(l / 2)), "c" === n[4] && (o -= Math.round(a / 2)), {
      x: o,
      y: s,
      w: a,
      h: l
    };
  }

  var Ee = function Ee() {
    var e = _.window;
    return {
      x: Math.max(e.pageXOffset, _.document.body.scrollLeft, _.document.documentElement.scrollLeft),
      y: Math.max(e.pageYOffset, _.document.body.scrollTop, _.document.documentElement.scrollTop),
      w: e.innerWidth || _.document.documentElement.clientWidth,
      h: e.innerHeight || _.document.documentElement.clientHeight
    };
  },
      ke = function ke(e) {
    var t,
        n = W.getUiContainer(e);
    return n && !Re(e) ? {
      x: 0,
      y: 0,
      w: (t = n).scrollWidth - 1,
      h: t.scrollHeight - 1
    } : Ee();
  },
      He = {
    testMoveRel: function testMoveRel(e, t) {
      for (var n = ke(this), i = 0; i < t.length; i++) {
        var r = Ce(this, e, t[i]);

        if (Re(this)) {
          if (0 < r.x && r.x + r.w < n.w && 0 < r.y && r.y + r.h < n.h) return t[i];
        } else if (r.x > n.x && r.x + r.w < n.w + n.x && r.y > n.y && r.y + r.h < n.h + n.y) return t[i];
      }

      return t[0];
    },
    moveRel: function moveRel(e, t) {
      "string" != typeof t && (t = this.testMoveRel(e, t));
      var n = Ce(this, e, t);
      return this.moveTo(n.x, n.y);
    },
    moveBy: function moveBy(e, t) {
      var n = this.layoutRect();
      return this.moveTo(n.x + e, n.y + t), this;
    },
    moveTo: function moveTo(e, t) {
      var n = this;

      function i(e, t, n) {
        return e < 0 ? 0 : t < e + n && (e = t - n) < 0 ? 0 : e;
      }

      if (n.settings.constrainToViewport) {
        var r = ke(this),
            o = n.layoutRect();
        e = i(e, r.w + r.x, o.w), t = i(t, r.h + r.y, o.h);
      }

      var s = W.getUiContainer(n);
      return s && _e(s) && !Re(n) && (e -= s.scrollLeft, t -= s.scrollTop), s && (e += 1, t += 1), n.state.get("rendered") ? n.layoutRect({
        x: e,
        y: t
      }).repaint() : (n.settings.x = e, n.settings.y = t), n.fire("move", {
        x: e,
        y: t
      }), n;
    }
  },
      Se = tinymce.util.Tools.resolve("tinymce.util.Class"),
      Te = tinymce.util.Tools.resolve("tinymce.util.EventDispatcher"),
      Me = function Me(e) {
    var t;
    if (e) return "number" == typeof e ? {
      top: e = e || 0,
      left: e,
      bottom: e,
      right: e
    } : (1 === (t = (e = e.split(" ")).length) ? e[1] = e[2] = e[3] = e[0] : 2 === t ? (e[2] = e[0], e[3] = e[1]) : 3 === t && (e[3] = e[1]), {
      top: parseInt(e[0], 10) || 0,
      right: parseInt(e[1], 10) || 0,
      bottom: parseInt(e[2], 10) || 0,
      left: parseInt(e[3], 10) || 0
    });
  },
      Ne = function Ne(i, e) {
    function t(e) {
      var t = parseFloat(function (e) {
        var t = i.ownerDocument.defaultView;

        if (t) {
          var n = t.getComputedStyle(i, null);
          return n ? (e = e.replace(/[A-Z]/g, function (e) {
            return "-" + e;
          }), n.getPropertyValue(e)) : null;
        }

        return i.currentStyle[e];
      }(e));
      return isNaN(t) ? 0 : t;
    }

    return {
      top: t(e + "TopWidth"),
      right: t(e + "RightWidth"),
      bottom: t(e + "BottomWidth"),
      left: t(e + "LeftWidth")
    };
  };

  function Pe() {}

  function We(e) {
    this.cls = [], this.cls._map = {}, this.onchange = e || Pe, this.prefix = "";
  }

  w.extend(We.prototype, {
    add: function add(e) {
      return e && !this.contains(e) && (this.cls._map[e] = !0, this.cls.push(e), this._change()), this;
    },
    remove: function remove(e) {
      if (this.contains(e)) {
        var t = void 0;

        for (t = 0; t < this.cls.length && this.cls[t] !== e; t++) {
          ;
        }

        this.cls.splice(t, 1), delete this.cls._map[e], this._change();
      }

      return this;
    },
    toggle: function toggle(e, t) {
      var n = this.contains(e);
      return n !== t && (n ? this.remove(e) : this.add(e), this._change()), this;
    },
    contains: function contains(e) {
      return !!this.cls._map[e];
    },
    _change: function _change() {
      delete this.clsValue, this.onchange.call(this);
    }
  }), We.prototype.toString = function () {
    var e;
    if (this.clsValue) return this.clsValue;
    e = "";

    for (var t = 0; t < this.cls.length; t++) {
      0 < t && (e += " "), e += this.prefix + this.cls[t];
    }

    return e;
  };
  var De,
      Oe,
      Ae,
      Be = /^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i,
      Le = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
      ze = /^\s*|\s*$/g,
      Ie = Se.extend({
    init: function init(e) {
      var o = this.match;

      function s(e, t, n) {
        var i;

        function r(e) {
          e && t.push(e);
        }

        return r(function (t) {
          if (t) return t = t.toLowerCase(), function (e) {
            return "*" === t || e.type === t;
          };
        }((i = Be.exec(e.replace(ze, "")))[1])), r(function (t) {
          if (t) return function (e) {
            return e._name === t;
          };
        }(i[2])), r(function (n) {
          if (n) return n = n.split("."), function (e) {
            for (var t = n.length; t--;) {
              if (!e.classes.contains(n[t])) return !1;
            }

            return !0;
          };
        }(i[3])), r(function (n, i, r) {
          if (n) return function (e) {
            var t = e[n] ? e[n]() : "";
            return i ? "=" === i ? t === r : "*=" === i ? 0 <= t.indexOf(r) : "~=" === i ? 0 <= (" " + t + " ").indexOf(" " + r + " ") : "!=" === i ? t !== r : "^=" === i ? 0 === t.indexOf(r) : "$=" === i && t.substr(t.length - r.length) === r : !!r;
          };
        }(i[4], i[5], i[6])), r(function (i) {
          var t;
          if (i) return (i = /(?:not\((.+)\))|(.+)/i.exec(i))[1] ? (t = a(i[1], []), function (e) {
            return !o(e, t);
          }) : (i = i[2], function (e, t, n) {
            return "first" === i ? 0 === t : "last" === i ? t === n - 1 : "even" === i ? t % 2 == 0 : "odd" === i ? t % 2 == 1 : !!e[i] && e[i]();
          });
        }(i[7])), t.pseudo = !!i[7], t.direct = n, t;
      }

      function a(e, t) {
        var n,
            i,
            r,
            o = [];

        do {
          if (Le.exec(""), (i = Le.exec(e)) && (e = i[3], o.push(i[1]), i[2])) {
            n = i[3];
            break;
          }
        } while (i);

        for (n && a(n, t), e = [], r = 0; r < o.length; r++) {
          ">" !== o[r] && e.push(s(o[r], [], ">" === o[r - 1]));
        }

        return t.push(e), t;
      }

      this._selectors = a(e, []);
    },
    match: function match(e, t) {
      var n, i, r, o, s, a, l, u, c, d, f, h, m;

      for (n = 0, i = (t = t || this._selectors).length; n < i; n++) {
        for (m = e, h = 0, r = (o = (s = t[n]).length) - 1; 0 <= r; r--) {
          for (u = s[r]; m;) {
            if (u.pseudo) for (c = d = (f = m.parent().items()).length; c-- && f[c] !== m;) {
              ;
            }

            for (a = 0, l = u.length; a < l; a++) {
              if (!u[a](m, c, d)) {
                a = l + 1;
                break;
              }
            }

            if (a === l) {
              h++;
              break;
            }

            if (r === o - 1) break;
            m = m.parent();
          }
        }

        if (h === o) return !0;
      }

      return !1;
    },
    find: function find(e) {
      var t,
          n,
          u = [],
          i = this._selectors;

      function c(e, t, n) {
        var i,
            r,
            o,
            s,
            a,
            l = t[n];

        for (i = 0, r = e.length; i < r; i++) {
          for (a = e[i], o = 0, s = l.length; o < s; o++) {
            if (!l[o](a, i, r)) {
              o = s + 1;
              break;
            }
          }

          if (o === s) n === t.length - 1 ? u.push(a) : a.items && c(a.items(), t, n + 1);else if (l.direct) return;
          a.items && c(a.items(), t, n);
        }
      }

      if (e.items) {
        for (t = 0, n = i.length; t < n; t++) {
          c(e.items(), i[t], 0);
        }

        1 < n && (u = function (e) {
          for (var t, n = [], i = e.length; i--;) {
            (t = e[i]).__checked || (n.push(t), t.__checked = 1);
          }

          for (i = n.length; i--;) {
            delete n[i].__checked;
          }

          return n;
        }(u));
      }

      return De || (De = Ie.Collection), new De(u);
    }
  }),
      Fe = Array.prototype.push,
      Ue = Array.prototype.slice;
  Ae = {
    length: 0,
    init: function init(e) {
      e && this.add(e);
    },
    add: function add(e) {
      return w.isArray(e) ? Fe.apply(this, e) : e instanceof Oe ? this.add(e.toArray()) : Fe.call(this, e), this;
    },
    set: function set(e) {
      var t,
          n = this,
          i = n.length;

      for (n.length = 0, n.add(e), t = n.length; t < i; t++) {
        delete n[t];
      }

      return n;
    },
    filter: function filter(t) {
      var e,
          n,
          i,
          r,
          o = [];

      for ("string" == typeof t ? (t = new Ie(t), r = function r(e) {
        return t.match(e);
      }) : r = t, e = 0, n = this.length; e < n; e++) {
        r(i = this[e]) && o.push(i);
      }

      return new Oe(o);
    },
    slice: function slice() {
      return new Oe(Ue.apply(this, arguments));
    },
    eq: function eq(e) {
      return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
    },
    each: function each(e) {
      return w.each(this, e), this;
    },
    toArray: function toArray() {
      return w.toArray(this);
    },
    indexOf: function indexOf(e) {
      for (var t = this.length; t-- && this[t] !== e;) {
        ;
      }

      return t;
    },
    reverse: function reverse() {
      return new Oe(w.toArray(this).reverse());
    },
    hasClass: function hasClass(e) {
      return !!this[0] && this[0].classes.contains(e);
    },
    prop: function prop(t, n) {
      var e;
      return n !== undefined ? (this.each(function (e) {
        e[t] && e[t](n);
      }), this) : (e = this[0]) && e[t] ? e[t]() : void 0;
    },
    exec: function exec(t) {
      var n = w.toArray(arguments).slice(1);
      return this.each(function (e) {
        e[t] && e[t].apply(e, n);
      }), this;
    },
    remove: function remove() {
      for (var e = this.length; e--;) {
        this[e].remove();
      }

      return this;
    },
    addClass: function addClass(t) {
      return this.each(function (e) {
        e.classes.add(t);
      });
    },
    removeClass: function removeClass(t) {
      return this.each(function (e) {
        e.classes.remove(t);
      });
    }
  }, w.each("fire on off show hide append prepend before after reflow".split(" "), function (n) {
    Ae[n] = function () {
      var t = w.toArray(arguments);
      return this.each(function (e) {
        n in e && e[n].apply(e, t);
      }), this;
    };
  }), w.each("text name disabled active selected checked visible parent value data".split(" "), function (t) {
    Ae[t] = function (e) {
      return this.prop(t, e);
    };
  }), Oe = Se.extend(Ae);

  var Ve = Ie.Collection = Oe,
      Ye = function Ye(e) {
    this.create = e.create;
  };

  Ye.create = function (r, o) {
    return new Ye({
      create: function create(t, n) {
        var i,
            e = function e(_e3) {
          t.set(n, _e3.value);
        };

        return t.on("change:" + n, function (e) {
          r.set(o, e.value);
        }), r.on("change:" + o, e), (i = t._bindings) || (i = t._bindings = [], t.on("destroy", function () {
          for (var e = i.length; e--;) {
            i[e]();
          }
        })), i.push(function () {
          r.off("change:" + o, e);
        }), r.get(o);
      }
    });
  };

  var $e = tinymce.util.Tools.resolve("tinymce.util.Observable");

  function qe(e) {
    return 0 < e.nodeType;
  }

  var Xe,
      je,
      Je = Se.extend({
    Mixins: [$e],
    init: function init(e) {
      var t, n;

      for (t in e = e || {}) {
        (n = e[t]) instanceof Ye && (e[t] = n.create(this, t));
      }

      this.data = e;
    },
    set: function set(t, n) {
      var i,
          r,
          o = this.data[t];

      if (n instanceof Ye && (n = n.create(this, t)), "object" == _typeof(t)) {
        for (i in t) {
          this.set(i, t[i]);
        }

        return this;
      }

      return function e(t, n) {
        var i, r;
        if (t === n) return !0;
        if (null === t || null === n) return t === n;
        if ("object" != _typeof(t) || "object" != _typeof(n)) return t === n;

        if (w.isArray(n)) {
          if (t.length !== n.length) return !1;

          for (i = t.length; i--;) {
            if (!e(t[i], n[i])) return !1;
          }
        }

        if (qe(t) || qe(n)) return t === n;

        for (i in r = {}, n) {
          if (!e(t[i], n[i])) return !1;
          r[i] = !0;
        }

        for (i in t) {
          if (!r[i] && !e(t[i], n[i])) return !1;
        }

        return !0;
      }(o, n) || (this.data[t] = n, r = {
        target: this,
        name: t,
        value: n,
        oldValue: o
      }, this.fire("change:" + t, r), this.fire("change", r)), this;
    },
    get: function get(e) {
      return this.data[e];
    },
    has: function has(e) {
      return e in this.data;
    },
    bind: function bind(e) {
      return Ye.create(this, e);
    },
    destroy: function destroy() {
      this.fire("destroy");
    }
  }),
      Ge = {},
      Ke = {
    add: function add(e) {
      var t = e.parent();

      if (t) {
        if (!t._layout || t._layout.isNative()) return;
        Ge[t._id] || (Ge[t._id] = t), Xe || (Xe = !0, u.requestAnimationFrame(function () {
          var e, t;

          for (e in Xe = !1, Ge) {
            (t = Ge[e]).state.get("rendered") && t.reflow();
          }

          Ge = {};
        }, _.document.body));
      }
    },
    remove: function remove(e) {
      Ge[e._id] && delete Ge[e._id];
    }
  },
      Ze = "onmousewheel" in _.document,
      Qe = !1,
      et = 0,
      tt = {
    Statics: {
      classPrefix: "mce-"
    },
    isRtl: function isRtl() {
      return je.rtl;
    },
    classPrefix: "mce-",
    init: function init(t) {
      var e,
          n,
          i = this;

      function r(e) {
        var t;

        for (e = e.split(" "), t = 0; t < e.length; t++) {
          i.classes.add(e[t]);
        }
      }

      i.settings = t = w.extend({}, i.Defaults, t), i._id = t.id || "mceu_" + et++, i._aria = {
        role: t.role
      }, i._elmCache = {}, i.$ = ye, i.state = new Je({
        visible: !0,
        active: !1,
        disabled: !1,
        value: ""
      }), i.data = new Je(t.data), i.classes = new We(function () {
        i.state.get("rendered") && (i.getEl().className = this.toString());
      }), i.classes.prefix = i.classPrefix, (e = t.classes) && (i.Defaults && (n = i.Defaults.classes) && e !== n && r(n), r(e)), w.each("title text name visible disabled active value".split(" "), function (e) {
        e in t && i[e](t[e]);
      }), i.on("click", function () {
        if (i.disabled()) return !1;
      }), i.settings = t, i.borderBox = Me(t.border), i.paddingBox = Me(t.padding), i.marginBox = Me(t.margin), t.hidden && i.hide();
    },
    Properties: "parent,name",
    getContainerElm: function getContainerElm() {
      var e = W.getUiContainer(this);
      return e || we.getContainer();
    },
    getParentCtrl: function getParentCtrl(e) {
      for (var t, n = this.getRoot().controlIdLookup; e && n && !(t = n[e.id]);) {
        e = e.parentNode;
      }

      return t;
    },
    initLayoutRect: function initLayoutRect() {
      var e,
          t,
          n,
          i,
          r,
          o,
          s,
          a,
          l,
          u,
          c = this,
          d = c.settings,
          f = c.getEl();
      e = c.borderBox = c.borderBox || Ne(f, "border"), c.paddingBox = c.paddingBox || Ne(f, "padding"), c.marginBox = c.marginBox || Ne(f, "margin"), u = we.getSize(f), a = d.minWidth, l = d.minHeight, r = a || u.width, o = l || u.height, n = d.width, i = d.height, s = void 0 !== (s = d.autoResize) ? s : !n && !i, n = n || r, i = i || o;
      var h = e.left + e.right,
          m = e.top + e.bottom,
          g = d.maxWidth || 65535,
          p = d.maxHeight || 65535;
      return c._layoutRect = t = {
        x: d.x || 0,
        y: d.y || 0,
        w: n,
        h: i,
        deltaW: h,
        deltaH: m,
        contentW: n - h,
        contentH: i - m,
        innerW: n - h,
        innerH: i - m,
        startMinWidth: a || 0,
        startMinHeight: l || 0,
        minW: Math.min(r, g),
        minH: Math.min(o, p),
        maxW: g,
        maxH: p,
        autoResize: s,
        scrollW: 0
      }, c._lastLayoutRect = {}, t;
    },
    layoutRect: function layoutRect(e) {
      var t,
          n,
          i,
          r,
          o,
          s = this,
          a = s._layoutRect;
      return a || (a = s.initLayoutRect()), e ? (i = a.deltaW, r = a.deltaH, e.x !== undefined && (a.x = e.x), e.y !== undefined && (a.y = e.y), e.minW !== undefined && (a.minW = e.minW), e.minH !== undefined && (a.minH = e.minH), (n = e.w) !== undefined && (n = (n = n < a.minW ? a.minW : n) > a.maxW ? a.maxW : n, a.w = n, a.innerW = n - i), (n = e.h) !== undefined && (n = (n = n < a.minH ? a.minH : n) > a.maxH ? a.maxH : n, a.h = n, a.innerH = n - r), (n = e.innerW) !== undefined && (n = (n = n < a.minW - i ? a.minW - i : n) > a.maxW - i ? a.maxW - i : n, a.innerW = n, a.w = n + i), (n = e.innerH) !== undefined && (n = (n = n < a.minH - r ? a.minH - r : n) > a.maxH - r ? a.maxH - r : n, a.innerH = n, a.h = n + r), e.contentW !== undefined && (a.contentW = e.contentW), e.contentH !== undefined && (a.contentH = e.contentH), (t = s._lastLayoutRect).x === a.x && t.y === a.y && t.w === a.w && t.h === a.h || ((o = je.repaintControls) && o.map && !o.map[s._id] && (o.push(s), o.map[s._id] = !0), t.x = a.x, t.y = a.y, t.w = a.w, t.h = a.h), s) : a;
    },
    repaint: function repaint() {
      var e,
          t,
          n,
          i,
          r,
          o,
          s,
          a,
          l,
          u,
          c = this;
      l = _.document.createRange ? function (e) {
        return e;
      } : Math.round, e = c.getEl().style, i = c._layoutRect, a = c._lastRepaintRect || {}, o = (r = c.borderBox).left + r.right, s = r.top + r.bottom, i.x !== a.x && (e.left = l(i.x) + "px", a.x = i.x), i.y !== a.y && (e.top = l(i.y) + "px", a.y = i.y), i.w !== a.w && (u = l(i.w - o), e.width = (0 <= u ? u : 0) + "px", a.w = i.w), i.h !== a.h && (u = l(i.h - s), e.height = (0 <= u ? u : 0) + "px", a.h = i.h), c._hasBody && i.innerW !== a.innerW && (u = l(i.innerW), (n = c.getEl("body")) && ((t = n.style).width = (0 <= u ? u : 0) + "px"), a.innerW = i.innerW), c._hasBody && i.innerH !== a.innerH && (u = l(i.innerH), (n = n || c.getEl("body")) && ((t = t || n.style).height = (0 <= u ? u : 0) + "px"), a.innerH = i.innerH), c._lastRepaintRect = a, c.fire("repaint", {}, !1);
    },
    updateLayoutRect: function updateLayoutRect() {
      var e = this;
      e.parent()._lastRect = null, we.css(e.getEl(), {
        width: "",
        height: ""
      }), e._layoutRect = e._lastRepaintRect = e._lastLayoutRect = null, e.initLayoutRect();
    },
    on: function on(e, t) {
      var n,
          i,
          r,
          o = this;
      return nt(o).on(e, "string" != typeof (n = t) ? n : function (e) {
        return i || o.parentsAndSelf().each(function (e) {
          var t = e.settings.callbacks;
          if (t && (i = t[n])) return r = e, !1;
        }), i ? i.call(r, e) : (e.action = n, void this.fire("execute", e));
      }), o;
    },
    off: function off(e, t) {
      return nt(this).off(e, t), this;
    },
    fire: function fire(e, t, n) {
      if ((t = t || {}).control || (t.control = this), t = nt(this).fire(e, t), !1 !== n && this.parent) for (var i = this.parent(); i && !t.isPropagationStopped();) {
        i.fire(e, t, !1), i = i.parent();
      }
      return t;
    },
    hasEventListeners: function hasEventListeners(e) {
      return nt(this).has(e);
    },
    parents: function parents(e) {
      var t,
          n = new Ve();

      for (t = this.parent(); t; t = t.parent()) {
        n.add(t);
      }

      return e && (n = n.filter(e)), n;
    },
    parentsAndSelf: function parentsAndSelf(e) {
      return new Ve(this).add(this.parents(e));
    },
    next: function next() {
      var e = this.parent().items();
      return e[e.indexOf(this) + 1];
    },
    prev: function prev() {
      var e = this.parent().items();
      return e[e.indexOf(this) - 1];
    },
    innerHtml: function innerHtml(e) {
      return this.$el.html(e), this;
    },
    getEl: function getEl(e) {
      var t = e ? this._id + "-" + e : this._id;
      return this._elmCache[t] || (this._elmCache[t] = ye("#" + t)[0]), this._elmCache[t];
    },
    show: function show() {
      return this.visible(!0);
    },
    hide: function hide() {
      return this.visible(!1);
    },
    focus: function focus() {
      try {
        this.getEl().focus();
      } catch (e) {}

      return this;
    },
    blur: function blur() {
      return this.getEl().blur(), this;
    },
    aria: function aria(e, t) {
      var n = this,
          i = n.getEl(n.ariaTarget);
      return void 0 === t ? n._aria[e] : (n._aria[e] = t, n.state.get("rendered") && i.setAttribute("role" === e ? e : "aria-" + e, t), n);
    },
    encode: function encode(e, t) {
      return !1 !== t && (e = this.translate(e)), (e || "").replace(/[&<>"]/g, function (e) {
        return "&#" + e.charCodeAt(0) + ";";
      });
    },
    translate: function translate(e) {
      return je.translate ? je.translate(e) : e;
    },
    before: function before(e) {
      var t = this.parent();
      return t && t.insert(e, t.items().indexOf(this), !0), this;
    },
    after: function after(e) {
      var t = this.parent();
      return t && t.insert(e, t.items().indexOf(this)), this;
    },
    remove: function remove() {
      var t,
          e,
          n = this,
          i = n.getEl(),
          r = n.parent();

      if (n.items) {
        var o = n.items().toArray();

        for (e = o.length; e--;) {
          o[e].remove();
        }
      }

      r && r.items && (t = [], r.items().each(function (e) {
        e !== n && t.push(e);
      }), r.items().set(t), r._lastRect = null), n._eventsRoot && n._eventsRoot === n && ye(i).off();
      var s = n.getRoot().controlIdLookup;
      return s && delete s[n._id], i && i.parentNode && i.parentNode.removeChild(i), n.state.set("rendered", !1), n.state.destroy(), n.fire("remove"), n;
    },
    renderBefore: function renderBefore(e) {
      return ye(e).before(this.renderHtml()), this.postRender(), this;
    },
    renderTo: function renderTo(e) {
      return ye(e || this.getContainerElm()).append(this.renderHtml()), this.postRender(), this;
    },
    preRender: function preRender() {},
    render: function render() {},
    renderHtml: function renderHtml() {
      return '<div id="' + this._id + '" class="' + this.classes + '"></div>';
    },
    postRender: function postRender() {
      var e,
          t,
          n,
          i,
          r,
          o = this,
          s = o.settings;

      for (i in o.$el = ye(o.getEl()), o.state.set("rendered", !0), s) {
        0 === i.indexOf("on") && o.on(i.substr(2), s[i]);
      }

      if (o._eventsRoot) {
        for (n = o.parent(); !r && n; n = n.parent()) {
          r = n._eventsRoot;
        }

        if (r) for (i in r._nativeEvents) {
          o._nativeEvents[i] = !0;
        }
      }

      it(o), s.style && (e = o.getEl()) && (e.setAttribute("style", s.style), e.style.cssText = s.style), o.settings.border && (t = o.borderBox, o.$el.css({
        "border-top-width": t.top,
        "border-right-width": t.right,
        "border-bottom-width": t.bottom,
        "border-left-width": t.left
      }));
      var a = o.getRoot();

      for (var l in a.controlIdLookup || (a.controlIdLookup = {}), (a.controlIdLookup[o._id] = o)._aria) {
        o.aria(l, o._aria[l]);
      }

      !1 === o.state.get("visible") && (o.getEl().style.display = "none"), o.bindStates(), o.state.on("change:visible", function (e) {
        var t,
            n = e.value;
        o.state.get("rendered") && (o.getEl().style.display = !1 === n ? "none" : "", o.getEl().getBoundingClientRect()), (t = o.parent()) && (t._lastRect = null), o.fire(n ? "show" : "hide"), Ke.add(o);
      }), o.fire("postrender", {}, !1);
    },
    bindStates: function bindStates() {},
    scrollIntoView: function scrollIntoView(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a = this.getEl(),
          l = a.parentNode,
          u = function (e, t) {
        var n,
            i,
            r = e;

        for (n = i = 0; r && r !== t && r.nodeType;) {
          n += r.offsetLeft || 0, i += r.offsetTop || 0, r = r.offsetParent;
        }

        return {
          x: n,
          y: i
        };
      }(a, l);

      return t = u.x, n = u.y, i = a.offsetWidth, r = a.offsetHeight, o = l.clientWidth, s = l.clientHeight, "end" === e ? (t -= o - i, n -= s - r) : "center" === e && (t -= o / 2 - i / 2, n -= s / 2 - r / 2), l.scrollLeft = t, l.scrollTop = n, this;
    },
    getRoot: function getRoot() {
      for (var e, t = this, n = []; t;) {
        if (t.rootControl) {
          e = t.rootControl;
          break;
        }

        n.push(t), t = (e = t).parent();
      }

      e || (e = this);

      for (var i = n.length; i--;) {
        n[i].rootControl = e;
      }

      return e;
    },
    reflow: function reflow() {
      Ke.remove(this);
      var e = this.parent();
      return e && e._layout && !e._layout.isNative() && e.reflow(), this;
    }
  };

  function nt(n) {
    return n._eventDispatcher || (n._eventDispatcher = new Te({
      scope: n,
      toggleEvent: function toggleEvent(e, t) {
        t && Te.isNative(e) && (n._nativeEvents || (n._nativeEvents = {}), n._nativeEvents[e] = !0, n.state.get("rendered") && it(n));
      }
    })), n._eventDispatcher;
  }

  function it(a) {
    var e, t, n, l, i, r;

    function o(e) {
      var t = a.getParentCtrl(e.target);
      t && t.fire(e.type, e);
    }

    function s() {
      var e = l._lastHoverCtrl;
      e && (e.fire("mouseleave", {
        target: e.getEl()
      }), e.parents().each(function (e) {
        e.fire("mouseleave", {
          target: e.getEl()
        });
      }), l._lastHoverCtrl = null);
    }

    function u(e) {
      var t,
          n,
          i,
          r = a.getParentCtrl(e.target),
          o = l._lastHoverCtrl,
          s = 0;

      if (r !== o) {
        if ((n = (l._lastHoverCtrl = r).parents().toArray().reverse()).push(r), o) {
          for ((i = o.parents().toArray().reverse()).push(o), s = 0; s < i.length && n[s] === i[s]; s++) {
            ;
          }

          for (t = i.length - 1; s <= t; t--) {
            (o = i[t]).fire("mouseleave", {
              target: o.getEl()
            });
          }
        }

        for (t = s; t < n.length; t++) {
          (r = n[t]).fire("mouseenter", {
            target: r.getEl()
          });
        }
      }
    }

    function c(e) {
      e.preventDefault(), "mousewheel" === e.type ? (e.deltaY = -.025 * e.wheelDelta, e.wheelDeltaX && (e.deltaX = -.025 * e.wheelDeltaX)) : (e.deltaX = 0, e.deltaY = e.detail), e = a.fire("wheel", e);
    }

    if (i = a._nativeEvents) {
      for ((n = a.parents().toArray()).unshift(a), e = 0, t = n.length; !l && e < t; e++) {
        l = n[e]._eventsRoot;
      }

      for (l || (l = n[n.length - 1] || a), a._eventsRoot = l, t = e, e = 0; e < t; e++) {
        n[e]._eventsRoot = l;
      }

      var d = l._delegates;

      for (r in d || (d = l._delegates = {}), i) {
        if (!i) return !1;
        "wheel" !== r || Qe ? ("mouseenter" === r || "mouseleave" === r ? l._hasMouseEnter || (ye(l.getEl()).on("mouseleave", s).on("mouseover", u), l._hasMouseEnter = 1) : d[r] || (ye(l.getEl()).on(r, o), d[r] = !0), i[r] = !1) : Ze ? ye(a.getEl()).on("mousewheel", c) : ye(a.getEl()).on("DOMMouseScroll", c);
      }
    }
  }

  w.each("text title visible disabled active value".split(" "), function (t) {
    tt[t] = function (e) {
      return 0 === arguments.length ? this.state.get(t) : (void 0 !== e && this.state.set(t, e), this);
    };
  });

  var rt = je = Se.extend(tt),
      ot = function ot(e) {
    return !!e.getAttribute("data-mce-tabstop");
  };

  function st(e) {
    var o,
        r,
        n = e.root;

    function i(e) {
      return e && 1 === e.nodeType;
    }

    try {
      o = _.document.activeElement;
    } catch (t) {
      o = _.document.body;
    }

    function s(e) {
      return i(e = e || o) ? e.getAttribute("role") : null;
    }

    function a(e) {
      for (var t, n = e || o; n = n.parentNode;) {
        if (t = s(n)) return t;
      }
    }

    function l(e) {
      var t = o;
      if (i(t)) return t.getAttribute("aria-" + e);
    }

    function u(e) {
      var t = e.tagName.toUpperCase();
      return "INPUT" === t || "TEXTAREA" === t || "SELECT" === t;
    }

    function c(t) {
      var r = [];
      return function e(t) {
        if (1 === t.nodeType && "none" !== t.style.display && !t.disabled) {
          var n;
          (u(n = t) && !n.hidden || ot(n) || /^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell|slider)$/.test(s(n))) && r.push(t);

          for (var i = 0; i < t.childNodes.length; i++) {
            e(t.childNodes[i]);
          }
        }
      }(t || n.getEl()), r;
    }

    function d(e) {
      var t, n;
      (n = (e = e || r).parents().toArray()).unshift(e);

      for (var i = 0; i < n.length && !(t = n[i]).settings.ariaRoot; i++) {
        ;
      }

      return t;
    }

    function f(e, t) {
      return e < 0 ? e = t.length - 1 : e >= t.length && (e = 0), t[e] && t[e].focus(), e;
    }

    function h(e, t) {
      var n = -1,
          i = d();
      t = t || c(i.getEl());

      for (var r = 0; r < t.length; r++) {
        t[r] === o && (n = r);
      }

      n += e, i.lastAriaIndex = f(n, t);
    }

    function m() {
      "tablist" === a() ? h(-1, c(o.parentNode)) : r.parent().submenu ? b() : h(-1);
    }

    function g() {
      var e = s(),
          t = a();
      "tablist" === t ? h(1, c(o.parentNode)) : "menuitem" === e && "menu" === t && l("haspopup") ? y() : h(1);
    }

    function p() {
      h(-1);
    }

    function v() {
      var e = s(),
          t = a();
      "menuitem" === e && "menubar" === t ? y() : "button" === e && l("haspopup") ? y({
        key: "down"
      }) : h(1);
    }

    function b() {
      r.fire("cancel");
    }

    function y(e) {
      e = e || {}, r.fire("click", {
        target: o,
        aria: e
      });
    }

    return r = n.getParentCtrl(o), n.on("keydown", function (e) {
      function t(e, t) {
        u(o) || ot(o) || "slider" !== s(o) && !1 !== t(e) && e.preventDefault();
      }

      if (!e.isDefaultPrevented()) switch (e.keyCode) {
        case 37:
          t(e, m);
          break;

        case 39:
          t(e, g);
          break;

        case 38:
          t(e, p);
          break;

        case 40:
          t(e, v);
          break;

        case 27:
          b();
          break;

        case 14:
        case 13:
        case 32:
          t(e, y);
          break;

        case 9:
          !function (e) {
            if ("tablist" === a()) {
              var t = c(r.getEl("body"))[0];
              t && t.focus();
            } else h(e.shiftKey ? -1 : 1);
          }(e), e.preventDefault();
      }
    }), n.on("focusin", function (e) {
      o = e.target, r = e.control;
    }), {
      focusFirst: function focusFirst(e) {
        var t = d(e),
            n = c(t.getEl());
        t.settings.ariaRemember && "lastAriaIndex" in t ? f(t.lastAriaIndex, n) : f(0, n);
      }
    };
  }

  var at = {},
      lt = rt.extend({
    init: function init(e) {
      var t = this;
      t._super(e), (e = t.settings).fixed && t.state.set("fixed", !0), t._items = new Ve(), t.isRtl() && t.classes.add("rtl"), t.bodyClasses = new We(function () {
        t.state.get("rendered") && (t.getEl("body").className = this.toString());
      }), t.bodyClasses.prefix = t.classPrefix, t.classes.add("container"), t.bodyClasses.add("container-body"), e.containerCls && t.classes.add(e.containerCls), t._layout = v.create((e.layout || "") + "layout"), t.settings.items ? t.add(t.settings.items) : t.add(t.render()), t._hasBody = !0;
    },
    items: function items() {
      return this._items;
    },
    find: function find(e) {
      return (e = at[e] = at[e] || new Ie(e)).find(this);
    },
    add: function add(e) {
      return this.items().add(this.create(e)).parent(this), this;
    },
    focus: function focus(e) {
      var t,
          n,
          i,
          r = this;
      if (!e || !(n = r.keyboardNav || r.parents().eq(-1)[0].keyboardNav)) return i = r.find("*"), r.statusbar && i.add(r.statusbar.items()), i.each(function (e) {
        if (e.settings.autofocus) return t = null, !1;
        e.canFocus && (t = t || e);
      }), t && t.focus(), r;
      n.focusFirst(r);
    },
    replace: function replace(e, t) {
      for (var n, i = this.items(), r = i.length; r--;) {
        if (i[r] === e) {
          i[r] = t;
          break;
        }
      }

      0 <= r && ((n = t.getEl()) && n.parentNode.removeChild(n), (n = e.getEl()) && n.parentNode.removeChild(n)), t.parent(this);
    },
    create: function create(e) {
      var t,
          n = this,
          i = [];
      return w.isArray(e) || (e = [e]), w.each(e, function (e) {
        e && (e instanceof rt || ("string" == typeof e && (e = {
          type: e
        }), t = w.extend({}, n.settings.defaults, e), e.type = t.type = t.type || e.type || n.settings.defaultType || (t.defaults ? t.defaults.type : null), e = v.create(t)), i.push(e));
      }), i;
    },
    renderNew: function renderNew() {
      var i = this;
      return i.items().each(function (e, t) {
        var n;
        e.parent(i), e.state.get("rendered") || ((n = i.getEl("body")).hasChildNodes() && t <= n.childNodes.length - 1 ? ye(n.childNodes[t]).before(e.renderHtml()) : ye(n).append(e.renderHtml()), e.postRender(), Ke.add(e));
      }), i._layout.applyClasses(i.items().filter(":visible")), i._lastRect = null, i;
    },
    append: function append(e) {
      return this.add(e).renderNew();
    },
    prepend: function prepend(e) {
      return this.items().set(this.create(e).concat(this.items().toArray())), this.renderNew();
    },
    insert: function insert(e, t, n) {
      var i, r, o;
      return e = this.create(e), i = this.items(), !n && t < i.length - 1 && (t += 1), 0 <= t && t < i.length && (r = i.slice(0, t).toArray(), o = i.slice(t).toArray(), i.set(r.concat(e, o))), this.renderNew();
    },
    fromJSON: function fromJSON(e) {
      for (var t in e) {
        this.find("#" + t).value(e[t]);
      }

      return this;
    },
    toJSON: function toJSON() {
      var i = {};
      return this.find("*").each(function (e) {
        var t = e.name(),
            n = e.value();
        t && void 0 !== n && (i[t] = n);
      }), i;
    },
    renderHtml: function renderHtml() {
      var e = this,
          t = e._layout,
          n = this.settings.role;
      return e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes + '"' + (n ? ' role="' + this.settings.role + '"' : "") + '><div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>";
    },
    postRender: function postRender() {
      var e,
          t = this;
      return t.items().exec("postRender"), t._super(), t._layout.postRender(t), t.state.set("rendered", !0), t.settings.style && t.$el.css(t.settings.style), t.settings.border && (e = t.borderBox, t.$el.css({
        "border-top-width": e.top,
        "border-right-width": e.right,
        "border-bottom-width": e.bottom,
        "border-left-width": e.left
      })), t.parent() || (t.keyboardNav = st({
        root: t
      })), t;
    },
    initLayoutRect: function initLayoutRect() {
      var e = this._super();

      return this._layout.recalc(this), e;
    },
    recalc: function recalc() {
      var e = this,
          t = e._layoutRect,
          n = e._lastRect;
      if (!n || n.w !== t.w || n.h !== t.h) return e._layout.recalc(e), t = e.layoutRect(), e._lastRect = {
        x: t.x,
        y: t.y,
        w: t.w,
        h: t.h
      }, !0;
    },
    reflow: function reflow() {
      var e;

      if (Ke.remove(this), this.visible()) {
        for (rt.repaintControls = [], rt.repaintControls.map = {}, this.recalc(), e = rt.repaintControls.length; e--;) {
          rt.repaintControls[e].repaint();
        }

        "flow" !== this.settings.layout && "stack" !== this.settings.layout && this.repaint(), rt.repaintControls = [];
      }

      return this;
    }
  });

  function ut(e) {
    var t, n;
    if (e.changedTouches) for (t = "screenX screenY pageX pageY clientX clientY".split(" "), n = 0; n < t.length; n++) {
      e[t[n]] = e.changedTouches[0][t[n]];
    }
  }

  function ct(e, h) {
    var m,
        g,
        t,
        _p,
        v,
        b,
        y,
        x = h.document || _.document;

    h = h || {};
    var w = x.getElementById(h.handle || e);
    t = function t(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          d,
          f = (t = x, u = Math.max, n = t.documentElement, i = t.body, r = u(n.scrollWidth, i.scrollWidth), o = u(n.clientWidth, i.clientWidth), s = u(n.offsetWidth, i.offsetWidth), a = u(n.scrollHeight, i.scrollHeight), l = u(n.clientHeight, i.clientHeight), {
        width: r < s ? o : r,
        height: a < u(n.offsetHeight, i.offsetHeight) ? l : a
      });
      ut(e), e.preventDefault(), g = e.button, c = w, b = e.screenX, y = e.screenY, d = _.window.getComputedStyle ? _.window.getComputedStyle(c, null).getPropertyValue("cursor") : c.runtimeStyle.cursor, m = ye("<div></div>").css({
        position: "absolute",
        top: 0,
        left: 0,
        width: f.width,
        height: f.height,
        zIndex: 2147483647,
        opacity: 1e-4,
        cursor: d
      }).appendTo(x.body), ye(x).on("mousemove touchmove", v).on("mouseup touchend", _p), h.start(e);
    }, v = function v(e) {
      if (ut(e), e.button !== g) return _p(e);
      e.deltaX = e.screenX - b, e.deltaY = e.screenY - y, e.preventDefault(), h.drag(e);
    }, _p = function p(e) {
      ut(e), ye(x).off("mousemove touchmove", v).off("mouseup touchend", _p), m.remove(), h.stop && h.stop(e);
    }, this.destroy = function () {
      ye(w).off();
    }, ye(w).on("mousedown touchstart", t);
  }

  var dt,
      ft,
      ht,
      mt,
      gt = {
    init: function init() {
      this.on("repaint", this.renderScroll);
    },
    renderScroll: function renderScroll() {
      var p = this,
          v = 2;

      function n() {
        var m, g, e;

        function t(e, t, n, i, r, o) {
          var s, a, l, u, c, d, f, h;

          if (a = p.getEl("scroll" + e)) {
            if (f = t.toLowerCase(), h = n.toLowerCase(), ye(p.getEl("absend")).css(f, p.layoutRect()[i] - 1), !r) return void ye(a).css("display", "none");
            ye(a).css("display", "block"), s = p.getEl("body"), l = p.getEl("scroll" + e + "t"), u = s["client" + n] - 2 * v, c = (u -= m && g ? a["client" + o] : 0) / s["scroll" + n], (d = {})[f] = s["offset" + t] + v, d[h] = u, ye(a).css(d), (d = {})[f] = s["scroll" + t] * c, d[h] = u * c, ye(l).css(d);
          }
        }

        e = p.getEl("body"), m = e.scrollWidth > e.clientWidth, g = e.scrollHeight > e.clientHeight, t("h", "Left", "Width", "contentW", m, "Height"), t("v", "Top", "Height", "contentH", g, "Width");
      }

      p.settings.autoScroll && (p._hasScroll || (p._hasScroll = !0, function () {
        function e(s, a, l, u, c) {
          var d,
              e = p._id + "-scroll" + s,
              t = p.classPrefix;
          ye(p.getEl()).append('<div id="' + e + '" class="' + t + "scrollbar " + t + "scrollbar-" + s + '"><div id="' + e + 't" class="' + t + 'scrollbar-thumb"></div></div>'), p.draghelper = new ct(e + "t", {
            start: function start() {
              d = p.getEl("body")["scroll" + a], ye("#" + e).addClass(t + "active");
            },
            drag: function drag(e) {
              var t,
                  n,
                  i,
                  r,
                  o = p.layoutRect();
              n = o.contentW > o.innerW, i = o.contentH > o.innerH, r = p.getEl("body")["client" + l] - 2 * v, t = (r -= n && i ? p.getEl("scroll" + s)["client" + c] : 0) / p.getEl("body")["scroll" + l], p.getEl("body")["scroll" + a] = d + e["delta" + u] / t;
            },
            stop: function stop() {
              ye("#" + e).removeClass(t + "active");
            }
          });
        }

        p.classes.add("scroll"), e("v", "Top", "Height", "Y", "Width"), e("h", "Left", "Width", "X", "Height");
      }(), p.on("wheel", function (e) {
        var t = p.getEl("body");
        t.scrollLeft += 10 * (e.deltaX || 0), t.scrollTop += 10 * e.deltaY, n();
      }), ye(p.getEl("body")).on("scroll", n)), n());
    }
  },
      pt = lt.extend({
    Defaults: {
      layout: "fit",
      containerCls: "panel"
    },
    Mixins: [gt],
    renderHtml: function renderHtml() {
      var e = this,
          t = e._layout,
          n = e.settings.html;
      return e.preRender(), t.preRender(e), void 0 === n ? n = '<div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + t.renderHtml(e) + "</div>" : ("function" == typeof n && (n = n.call(e)), e._hasBody = !1), '<div id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1" role="group">' + (e._preBodyHtml || "") + n + "</div>";
    }
  }),
      vt = {
    resizeToContent: function resizeToContent() {
      this._layoutRect.autoResize = !0, this._lastRect = null, this.reflow();
    },
    resizeTo: function resizeTo(e, t) {
      if (e <= 1 || t <= 1) {
        var n = we.getWindowSize();
        e = e <= 1 ? e * n.w : e, t = t <= 1 ? t * n.h : t;
      }

      return this._layoutRect.autoResize = !1, this.layoutRect({
        minW: e,
        minH: t,
        w: e,
        h: t
      }).reflow();
    },
    resizeBy: function resizeBy(e, t) {
      var n = this.layoutRect();
      return this.resizeTo(n.w + e, n.h + t);
    }
  },
      bt = [],
      yt = [];

  function xt(e, t) {
    for (; e;) {
      if (e === t) return !0;
      e = e.parent();
    }
  }

  function wt() {
    dt || (dt = function dt(e) {
      2 !== e.button && function (e) {
        for (var t = bt.length; t--;) {
          var n = bt[t],
              i = n.getParentCtrl(e.target);

          if (n.settings.autohide) {
            if (i && (xt(i, n) || n.parent() === i)) continue;
            (e = n.fire("autohide", {
              target: e.target
            })).isDefaultPrevented() || n.hide();
          }
        }
      }(e);
    }, ye(_.document).on("click touchstart", dt));
  }

  function _t(r) {
    var e = we.getViewPort().y;

    function t(e, t) {
      for (var n, i = 0; i < bt.length; i++) {
        if (bt[i] !== r) for (n = bt[i].parent(); n && (n = n.parent());) {
          n === r && bt[i].fixed(e).moveBy(0, t).repaint();
        }
      }
    }

    r.settings.autofix && (r.state.get("fixed") ? r._autoFixY > e && (r.fixed(!1).layoutRect({
      y: r._autoFixY
    }).repaint(), t(!1, r._autoFixY - e)) : (r._autoFixY = r.layoutRect().y, r._autoFixY < e && (r.fixed(!0).layoutRect({
      y: 0
    }).repaint(), t(!0, e - r._autoFixY))));
  }

  function Rt(e, t) {
    var n,
        i,
        r = Ct.zIndex || 65535;
    if (e) yt.push(t);else for (n = yt.length; n--;) {
      yt[n] === t && yt.splice(n, 1);
    }
    if (yt.length) for (n = 0; n < yt.length; n++) {
      yt[n].modal && (r++, i = yt[n]), yt[n].getEl().style.zIndex = r, yt[n].zIndex = r, r++;
    }
    var o = ye("#" + t.classPrefix + "modal-block", t.getContainerElm())[0];
    i ? ye(o).css("z-index", i.zIndex - 1) : o && (o.parentNode.removeChild(o), mt = !1), Ct.currentZIndex = r;
  }

  var Ct = pt.extend({
    Mixins: [He, vt],
    init: function init(e) {
      var i = this;
      i._super(e), (i._eventsRoot = i).classes.add("floatpanel"), e.autohide && (wt(), function () {
        if (!ht) {
          var e = _.document.documentElement,
              t = e.clientWidth,
              n = e.clientHeight;
          ht = function ht() {
            _.document.all && t === e.clientWidth && n === e.clientHeight || (t = e.clientWidth, n = e.clientHeight, Ct.hideAll());
          }, ye(_.window).on("resize", ht);
        }
      }(), bt.push(i)), e.autofix && (ft || (ft = function ft() {
        var e;

        for (e = bt.length; e--;) {
          _t(bt[e]);
        }
      }, ye(_.window).on("scroll", ft)), i.on("move", function () {
        _t(this);
      })), i.on("postrender show", function (e) {
        if (e.control === i) {
          var t,
              n = i.classPrefix;
          i.modal && !mt && ((t = ye("#" + n + "modal-block", i.getContainerElm()))[0] || (t = ye('<div id="' + n + 'modal-block" class="' + n + "reset " + n + 'fade"></div>').appendTo(i.getContainerElm())), u.setTimeout(function () {
            t.addClass(n + "in"), ye(i.getEl()).addClass(n + "in");
          }), mt = !0), Rt(!0, i);
        }
      }), i.on("show", function () {
        i.parents().each(function (e) {
          if (e.state.get("fixed")) return i.fixed(!0), !1;
        });
      }), e.popover && (i._preBodyHtml = '<div class="' + i.classPrefix + 'arrow"></div>', i.classes.add("popover").add("bottom").add(i.isRtl() ? "end" : "start")), i.aria("label", e.ariaLabel), i.aria("labelledby", i._id), i.aria("describedby", i.describedBy || i._id + "-none");
    },
    fixed: function fixed(e) {
      var t = this;

      if (t.state.get("fixed") !== e) {
        if (t.state.get("rendered")) {
          var n = we.getViewPort();
          e ? t.layoutRect().y -= n.y : t.layoutRect().y += n.y;
        }

        t.classes.toggle("fixed", e), t.state.set("fixed", e);
      }

      return t;
    },
    show: function show() {
      var e,
          t = this._super();

      for (e = bt.length; e-- && bt[e] !== this;) {
        ;
      }

      return -1 === e && bt.push(this), t;
    },
    hide: function hide() {
      return Et(this), Rt(!1, this), this._super();
    },
    hideAll: function hideAll() {
      Ct.hideAll();
    },
    close: function close() {
      return this.fire("close").isDefaultPrevented() || (this.remove(), Rt(!1, this)), this;
    },
    remove: function remove() {
      Et(this), this._super();
    },
    postRender: function postRender() {
      return this.settings.bodyRole && this.getEl("body").setAttribute("role", this.settings.bodyRole), this._super();
    }
  });

  function Et(e) {
    var t;

    for (t = bt.length; t--;) {
      bt[t] === e && bt.splice(t, 1);
    }

    for (t = yt.length; t--;) {
      yt[t] === e && yt.splice(t, 1);
    }
  }

  Ct.hideAll = function () {
    for (var e = bt.length; e--;) {
      var t = bt[e];
      t && t.settings.autohide && (t.hide(), bt.splice(e, 1));
    }
  };

  var kt = function kt(s, n, e) {
    var a,
        i,
        l = p.DOM,
        t = s.getParam("fixed_toolbar_container");
    t && (i = l.select(t)[0]);

    var r = function r() {
      if (a && a.moveRel && a.visible() && !a._fixed) {
        var e = s.selection.getScrollContainer(),
            t = s.getBody(),
            n = 0,
            i = 0;

        if (e) {
          var r = l.getPos(t),
              o = l.getPos(e);
          n = Math.max(0, o.x - r.x), i = Math.max(0, o.y - r.y);
        }

        a.fixed(!1).moveRel(t, s.rtl ? ["tr-br", "br-tr"] : ["tl-bl", "bl-tl", "tr-br"]).moveBy(n, i);
      }
    },
        o = function o() {
      a && (a.show(), r(), l.addClass(s.getBody(), "mce-edit-focus"));
    },
        u = function u() {
      a && (a.hide(), Ct.hideAll(), l.removeClass(s.getBody(), "mce-edit-focus"));
    },
        c = function c() {
      var e, t;
      a ? a.visible() || o() : (a = n.panel = v.create({
        type: i ? "panel" : "floatpanel",
        role: "application",
        classes: "tinymce tinymce-inline",
        layout: "flex",
        direction: "column",
        align: "stretch",
        autohide: !1,
        autofix: !0,
        fixed: (e = i, t = s, !(!e || t.settings.ui_container)),
        border: 1,
        items: [!1 === d(s) ? null : {
          type: "menubar",
          border: "0 0 1 0",
          items: re(s)
        }, A(s, f(s))]
      }), W.setUiContainer(s, a), x(s), i ? a.renderTo(i).reflow() : a.renderTo().reflow(), R(s, a), o(), F(s), s.on("nodeChange", r), s.on("ResizeWindow", r), s.on("activate", o), s.on("deactivate", u), s.nodeChanged());
    };

    return s.settings.content_editable = !0, s.on("focus", function () {
      !1 === m(s) && e.skinUiCss ? l.styleSheetLoader.load(e.skinUiCss, c, c) : c();
    }), s.on("blur hide", u), s.on("remove", function () {
      a && (a.remove(), a = null);
    }), !1 === m(s) && e.skinUiCss ? l.styleSheetLoader.load(e.skinUiCss, ge(s)) : ge(s)(), {};
  };

  function Ht(i, r) {
    var o,
        s,
        a = this,
        l = rt.classPrefix;
    a.show = function (e, t) {
      function n() {
        o && (ye(i).append('<div class="' + l + "throbber" + (r ? " " + l + "throbber-inline" : "") + '"></div>'), t && t());
      }

      return a.hide(), o = !0, e ? s = u.setTimeout(n, e) : n(), a;
    }, a.hide = function () {
      var e = i.lastChild;
      return u.clearTimeout(s), e && -1 !== e.className.indexOf("throbber") && e.parentNode.removeChild(e), o = !1, a;
    };
  }

  var St = function St(e, t) {
    var n;
    e.on("ProgressState", function (e) {
      n = n || new Ht(t.panel.getEl("body")), e.state ? n.show(e.time) : n.hide();
    });
  },
      Tt = function Tt(e, t, n) {
    var i = function (e) {
      var t = e.settings,
          n = t.skin,
          i = t.skin_url;

      if (!1 !== n) {
        var r = n || "lightgray";
        i = i ? e.documentBaseURI.toAbsolute(i) : l.baseURL + "/skins/" + r;
      }

      return i;
    }(e);

    return i && (n.skinUiCss = i + "/skin.min.css", e.contentCSS.push(i + "/content" + (e.inline ? ".inline" : "") + ".min.css")), St(e, t), e.getParam("inline", !1, "boolean") ? kt(e, t, n) : be(e, t, n);
  },
      Mt = rt.extend({
    Mixins: [He],
    Defaults: {
      classes: "widget tooltip tooltip-n"
    },
    renderHtml: function renderHtml() {
      var e = this,
          t = e.classPrefix;
      return '<div id="' + e._id + '" class="' + e.classes + '" role="presentation"><div class="' + t + 'tooltip-arrow"></div><div class="' + t + 'tooltip-inner">' + e.encode(e.state.get("text")) + "</div></div>";
    },
    bindStates: function bindStates() {
      var t = this;
      return t.state.on("change:text", function (e) {
        t.getEl().lastChild.innerHTML = t.encode(e.value);
      }), t._super();
    },
    repaint: function repaint() {
      var e, t;
      e = this.getEl().style, t = this._layoutRect, e.left = t.x + "px", e.top = t.y + "px", e.zIndex = 131070;
    }
  }),
      Nt = rt.extend({
    init: function init(i) {
      var r = this;
      r._super(i), i = r.settings, r.canFocus = !0, i.tooltip && !1 !== Nt.tooltips && (r.on("mouseenter", function (e) {
        var t = r.tooltip().moveTo(-65535);

        if (e.control === r) {
          var n = t.text(i.tooltip).show().testMoveRel(r.getEl(), ["bc-tc", "bc-tl", "bc-tr"]);
          t.classes.toggle("tooltip-n", "bc-tc" === n), t.classes.toggle("tooltip-nw", "bc-tl" === n), t.classes.toggle("tooltip-ne", "bc-tr" === n), t.moveRel(r.getEl(), n);
        } else t.hide();
      }), r.on("mouseleave mousedown click", function () {
        r.tooltip().remove(), r._tooltip = null;
      })), r.aria("label", i.ariaLabel || i.tooltip);
    },
    tooltip: function tooltip() {
      return this._tooltip || (this._tooltip = new Mt({
        type: "tooltip"
      }), W.inheritUiContainer(this, this._tooltip), this._tooltip.renderTo()), this._tooltip;
    },
    postRender: function postRender() {
      var e = this,
          t = e.settings;
      e._super(), e.parent() || !t.width && !t.height || (e.initLayoutRect(), e.repaint()), t.autofocus && e.focus();
    },
    bindStates: function bindStates() {
      var t = this;

      function n(e) {
        t.aria("disabled", e), t.classes.toggle("disabled", e);
      }

      function i(e) {
        t.aria("pressed", e), t.classes.toggle("active", e);
      }

      return t.state.on("change:disabled", function (e) {
        n(e.value);
      }), t.state.on("change:active", function (e) {
        i(e.value);
      }), t.state.get("disabled") && n(!0), t.state.get("active") && i(!0), t._super();
    },
    remove: function remove() {
      this._super(), this._tooltip && (this._tooltip.remove(), this._tooltip = null);
    }
  }),
      Pt = Nt.extend({
    Defaults: {
      value: 0
    },
    init: function init(e) {
      this._super(e), this.classes.add("progress"), this.settings.filter || (this.settings.filter = function (e) {
        return Math.round(e);
      });
    },
    renderHtml: function renderHtml() {
      var e = this._id,
          t = this.classPrefix;
      return '<div id="' + e + '" class="' + this.classes + '"><div class="' + t + 'bar-container"><div class="' + t + 'bar"></div></div><div class="' + t + 'text">0%</div></div>';
    },
    postRender: function postRender() {
      return this._super(), this.value(this.settings.value), this;
    },
    bindStates: function bindStates() {
      var t = this;

      function n(e) {
        e = t.settings.filter(e), t.getEl().lastChild.innerHTML = e + "%", t.getEl().firstChild.firstChild.style.width = e + "%";
      }

      return t.state.on("change:value", function (e) {
        n(e.value);
      }), n(t.state.get("value")), t._super();
    }
  }),
      Wt = function Wt(e, t) {
    e.getEl().lastChild.textContent = t + (e.progressBar ? " " + e.progressBar.value() + "%" : "");
  },
      Dt = rt.extend({
    Mixins: [He],
    Defaults: {
      classes: "widget notification"
    },
    init: function init(e) {
      var t = this;
      t._super(e), t.maxWidth = e.maxWidth, e.text && t.text(e.text), e.icon && (t.icon = e.icon), e.color && (t.color = e.color), e.type && t.classes.add("notification-" + e.type), e.timeout && (e.timeout < 0 || 0 < e.timeout) && !e.closeButton ? t.closeButton = !1 : (t.classes.add("has-close"), t.closeButton = !0), e.progressBar && (t.progressBar = new Pt()), t.on("click", function (e) {
        -1 !== e.target.className.indexOf(t.classPrefix + "close") && t.close();
      });
    },
    renderHtml: function renderHtml() {
      var e,
          t = this,
          n = t.classPrefix,
          i = "",
          r = "",
          o = "";
      return t.icon && (i = '<i class="' + n + "ico " + n + "i-" + t.icon + '"></i>'), e = ' style="max-width: ' + t.maxWidth + "px;" + (t.color ? "background-color: " + t.color + ';"' : '"'), t.closeButton && (r = '<button type="button" class="' + n + 'close" aria-hidden="true">\xd7</button>'), t.progressBar && (o = t.progressBar.renderHtml()), '<div id="' + t._id + '" class="' + t.classes + '"' + e + ' role="presentation">' + i + '<div class="' + n + 'notification-inner">' + t.state.get("text") + "</div>" + o + r + '<div style="clip: rect(1px, 1px, 1px, 1px);height: 1px;overflow: hidden;position: absolute;width: 1px;" aria-live="assertive" aria-relevant="additions" aria-atomic="true"></div></div>';
    },
    postRender: function postRender() {
      var e = this;
      return u.setTimeout(function () {
        e.$el.addClass(e.classPrefix + "in"), Wt(e, e.state.get("text"));
      }, 100), e._super();
    },
    bindStates: function bindStates() {
      var t = this;
      return t.state.on("change:text", function (e) {
        t.getEl().firstChild.innerHTML = e.value, Wt(t, e.value);
      }), t.progressBar && (t.progressBar.bindStates(), t.progressBar.state.on("change:value", function (e) {
        Wt(t, t.state.get("text"));
      })), t._super();
    },
    close: function close() {
      return this.fire("close").isDefaultPrevented() || this.remove(), this;
    },
    repaint: function repaint() {
      var e, t;
      e = this.getEl().style, t = this._layoutRect, e.left = t.x + "px", e.top = t.y + "px", e.zIndex = 65534;
    }
  });

  function Ot(o) {
    var s = function s(e) {
      return e.inline ? e.getElement() : e.getContentAreaContainer();
    };

    return {
      open: function open(e, t) {
        var n,
            i = w.extend(e, {
          maxWidth: (n = s(o), we.getSize(n).width)
        }),
            r = new Dt(i);
        return 0 < (r.args = i).timeout && (r.timer = setTimeout(function () {
          r.close(), t();
        }, i.timeout)), r.on("close", function () {
          t();
        }), r.renderTo(), r;
      },
      close: function close(e) {
        e.close();
      },
      reposition: function reposition(e) {
        K(e, function (e) {
          e.moveTo(0, 0);
        }), function (n) {
          if (0 < n.length) {
            var e = n.slice(0, 1)[0],
                t = s(o);
            e.moveRel(t, "tc-tc"), K(n, function (e, t) {
              0 < t && e.moveRel(n[t - 1].getEl(), "bc-tc");
            });
          }
        }(e);
      },
      getArgs: function getArgs(e) {
        return e.args;
      }
    };
  }

  var At = [],
      Bt = "";

  function Lt(e) {
    var t,
        n = ye("meta[name=viewport]")[0];
    !1 !== ce.overrideViewPort && (n || ((n = _.document.createElement("meta")).setAttribute("name", "viewport"), _.document.getElementsByTagName("head")[0].appendChild(n)), (t = n.getAttribute("content")) && void 0 !== Bt && (Bt = t), n.setAttribute("content", e ? "width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0" : Bt));
  }

  function zt(e, t) {
    (function () {
      for (var e = 0; e < At.length; e++) {
        if (At[e]._fullscreen) return !0;
      }

      return !1;
    })() && !1 === t && ye([_.document.documentElement, _.document.body]).removeClass(e + "fullscreen");
  }

  var It = Ct.extend({
    modal: !0,
    Defaults: {
      border: 1,
      layout: "flex",
      containerCls: "panel",
      role: "dialog",
      callbacks: {
        submit: function submit() {
          this.fire("submit", {
            data: this.toJSON()
          });
        },
        close: function close() {
          this.close();
        }
      }
    },
    init: function init(e) {
      var n = this;
      n._super(e), n.isRtl() && n.classes.add("rtl"), n.classes.add("window"), n.bodyClasses.add("window-body"), n.state.set("fixed", !0), e.buttons && (n.statusbar = new pt({
        layout: "flex",
        border: "1 0 0 0",
        spacing: 3,
        padding: 10,
        align: "center",
        pack: n.isRtl() ? "start" : "end",
        defaults: {
          type: "button"
        },
        items: e.buttons
      }), n.statusbar.classes.add("foot"), n.statusbar.parent(n)), n.on("click", function (e) {
        var t = n.classPrefix + "close";
        (we.hasClass(e.target, t) || we.hasClass(e.target.parentNode, t)) && n.close();
      }), n.on("cancel", function () {
        n.close();
      }), n.on("move", function (e) {
        e.control === n && Ct.hideAll();
      }), n.aria("describedby", n.describedBy || n._id + "-none"), n.aria("label", e.title), n._fullscreen = !1;
    },
    recalc: function recalc() {
      var e,
          t,
          n,
          i,
          r = this,
          o = r.statusbar;
      r._fullscreen && (r.layoutRect(we.getWindowSize()), r.layoutRect().contentH = r.layoutRect().innerH), r._super(), e = r.layoutRect(), r.settings.title && !r._fullscreen && (t = e.headerW) > e.w && (n = e.x - Math.max(0, t / 2), r.layoutRect({
        w: t,
        x: n
      }), i = !0), o && (o.layoutRect({
        w: r.layoutRect().innerW
      }).recalc(), (t = o.layoutRect().minW + e.deltaW) > e.w && (n = e.x - Math.max(0, t - e.w), r.layoutRect({
        w: t,
        x: n
      }), i = !0)), i && r.recalc();
    },
    initLayoutRect: function initLayoutRect() {
      var e,
          t = this,
          n = t._super(),
          i = 0;

      if (t.settings.title && !t._fullscreen) {
        e = t.getEl("head");
        var r = we.getSize(e);
        n.headerW = r.width, n.headerH = r.height, i += n.headerH;
      }

      t.statusbar && (i += t.statusbar.layoutRect().h), n.deltaH += i, n.minH += i, n.h += i;
      var o = we.getWindowSize();
      return n.x = t.settings.x || Math.max(0, o.w / 2 - n.w / 2), n.y = t.settings.y || Math.max(0, o.h / 2 - n.h / 2), n;
    },
    renderHtml: function renderHtml() {
      var e = this,
          t = e._layout,
          n = e._id,
          i = e.classPrefix,
          r = e.settings,
          o = "",
          s = "",
          a = r.html;
      return e.preRender(), t.preRender(e), r.title && (o = '<div id="' + n + '-head" class="' + i + 'window-head"><div id="' + n + '-title" class="' + i + 'title">' + e.encode(r.title) + '</div><div id="' + n + '-dragh" class="' + i + 'dragh"></div><button type="button" class="' + i + 'close" aria-hidden="true"><i class="mce-ico mce-i-remove"></i></button></div>'), r.url && (a = '<iframe src="' + r.url + '" tabindex="-1"></iframe>'), void 0 === a && (a = t.renderHtml(e)), e.statusbar && (s = e.statusbar.renderHtml()), '<div id="' + n + '" class="' + e.classes + '" hidefocus="1"><div class="' + e.classPrefix + 'reset" role="application">' + o + '<div id="' + n + '-body" class="' + e.bodyClasses + '">' + a + "</div>" + s + "</div></div>";
    },
    fullscreen: function fullscreen(e) {
      var n,
          t,
          i = this,
          r = _.document.documentElement,
          o = i.classPrefix;
      if (e !== i._fullscreen) if (ye(_.window).on("resize", function () {
        var e;
        if (i._fullscreen) if (n) i._timer || (i._timer = u.setTimeout(function () {
          var e = we.getWindowSize();
          i.moveTo(0, 0).resizeTo(e.w, e.h), i._timer = 0;
        }, 50));else {
          e = new Date().getTime();
          var t = we.getWindowSize();
          i.moveTo(0, 0).resizeTo(t.w, t.h), 50 < new Date().getTime() - e && (n = !0);
        }
      }), t = i.layoutRect(), i._fullscreen = e) {
        i._initial = {
          x: t.x,
          y: t.y,
          w: t.w,
          h: t.h
        }, i.borderBox = Me("0"), i.getEl("head").style.display = "none", t.deltaH -= t.headerH + 2, ye([r, _.document.body]).addClass(o + "fullscreen"), i.classes.add("fullscreen");
        var s = we.getWindowSize();
        i.moveTo(0, 0).resizeTo(s.w, s.h);
      } else i.borderBox = Me(i.settings.border), i.getEl("head").style.display = "", t.deltaH += t.headerH, ye([r, _.document.body]).removeClass(o + "fullscreen"), i.classes.remove("fullscreen"), i.moveTo(i._initial.x, i._initial.y).resizeTo(i._initial.w, i._initial.h);
      return i.reflow();
    },
    postRender: function postRender() {
      var t,
          n = this;
      setTimeout(function () {
        n.classes.add("in"), n.fire("open");
      }, 0), n._super(), n.statusbar && n.statusbar.postRender(), n.focus(), this.dragHelper = new ct(n._id + "-dragh", {
        start: function start() {
          t = {
            x: n.layoutRect().x,
            y: n.layoutRect().y
          };
        },
        drag: function drag(e) {
          n.moveTo(t.x + e.deltaX, t.y + e.deltaY);
        }
      }), n.on("submit", function (e) {
        e.isDefaultPrevented() || n.close();
      }), At.push(n), Lt(!0);
    },
    submit: function submit() {
      return this.fire("submit", {
        data: this.toJSON()
      });
    },
    remove: function remove() {
      var e,
          t = this;

      for (t.dragHelper.destroy(), t._super(), t.statusbar && this.statusbar.remove(), zt(t.classPrefix, !1), e = At.length; e--;) {
        At[e] === t && At.splice(e, 1);
      }

      Lt(0 < At.length);
    },
    getContentWindow: function getContentWindow() {
      var e = this.getEl().getElementsByTagName("iframe")[0];
      return e ? e.contentWindow : null;
    }
  });
  !function () {
    if (!ce.desktop) {
      var n = {
        w: _.window.innerWidth,
        h: _.window.innerHeight
      };
      u.setInterval(function () {
        var e = _.window.innerWidth,
            t = _.window.innerHeight;
        n.w === e && n.h === t || (n = {
          w: e,
          h: t
        }, ye(_.window).trigger("resize"));
      }, 100);
    }

    ye(_.window).on("resize", function () {
      var e,
          t,
          n = we.getWindowSize();

      for (e = 0; e < At.length; e++) {
        t = At[e].layoutRect(), At[e].moveTo(At[e].settings.x || Math.max(0, n.w / 2 - t.w / 2), At[e].settings.y || Math.max(0, n.h / 2 - t.h / 2));
      }
    });
  }();

  var Ft,
      Ut,
      Vt,
      Yt = It.extend({
    init: function init(e) {
      e = {
        border: 1,
        padding: 20,
        layout: "flex",
        pack: "center",
        align: "center",
        containerCls: "panel",
        autoScroll: !0,
        buttons: {
          type: "button",
          text: "Ok",
          action: "ok"
        },
        items: {
          type: "label",
          multiline: !0,
          maxWidth: 500,
          maxHeight: 200
        }
      }, this._super(e);
    },
    Statics: {
      OK: 1,
      OK_CANCEL: 2,
      YES_NO: 3,
      YES_NO_CANCEL: 4,
      msgBox: function msgBox(e) {
        var t,
            i = e.callback || function () {};

        function n(e, t, n) {
          return {
            type: "button",
            text: e,
            subtype: n ? "primary" : "",
            onClick: function onClick(e) {
              e.control.parents()[1].close(), i(t);
            }
          };
        }

        switch (e.buttons) {
          case Yt.OK_CANCEL:
            t = [n("Ok", !0, !0), n("Cancel", !1)];
            break;

          case Yt.YES_NO:
          case Yt.YES_NO_CANCEL:
            t = [n("Yes", 1, !0), n("No", 0)], e.buttons === Yt.YES_NO_CANCEL && t.push(n("Cancel", -1));
            break;

          default:
            t = [n("Ok", !0, !0)];
        }

        return new It({
          padding: 20,
          x: e.x,
          y: e.y,
          minWidth: 300,
          minHeight: 100,
          layout: "flex",
          pack: "center",
          align: "center",
          buttons: t,
          title: e.title,
          role: "alertdialog",
          items: {
            type: "label",
            multiline: !0,
            maxWidth: 500,
            maxHeight: 200,
            text: e.text
          },
          onPostRender: function onPostRender() {
            this.aria("describedby", this.items()[0]._id);
          },
          onClose: e.onClose,
          onCancel: function onCancel() {
            i(!1);
          }
        }).renderTo(_.document.body).reflow();
      },
      alert: function alert(e, t) {
        return "string" == typeof e && (e = {
          text: e
        }), e.callback = t, Yt.msgBox(e);
      },
      confirm: function confirm(e, t) {
        return "string" == typeof e && (e = {
          text: e
        }), e.callback = t, e.buttons = Yt.OK_CANCEL, Yt.msgBox(e);
      }
    }
  }),
      $t = function $t(n) {
    return {
      renderUI: function renderUI(e) {
        return Tt(n, this, e);
      },
      resizeTo: function resizeTo(e, t) {
        return le(n, e, t);
      },
      resizeBy: function resizeBy(e, t) {
        return ue(n, e, t);
      },
      getNotificationManagerImpl: function getNotificationManagerImpl() {
        return Ot(n);
      },
      getWindowManagerImpl: function getWindowManagerImpl() {
        return {
          open: function open(n, e, t) {
            var i;
            return n.title = n.title || " ", n.url = n.url || n.file, n.url && (n.width = parseInt(n.width || 320, 10), n.height = parseInt(n.height || 240, 10)), n.body && (n.items = {
              defaults: n.defaults,
              type: n.bodyType || "form",
              items: n.body,
              data: n.data,
              callbacks: n.commands
            }), n.url || n.buttons || (n.buttons = [{
              text: "Ok",
              subtype: "primary",
              onclick: function onclick() {
                i.find("form")[0].submit();
              }
            }, {
              text: "Cancel",
              onclick: function onclick() {
                i.close();
              }
            }]), (i = new It(n)).on("close", function () {
              t(i);
            }), n.data && i.on("postRender", function () {
              this.find("*").each(function (e) {
                var t = e.name();
                t in n.data && e.value(n.data[t]);
              });
            }), i.features = n || {}, i.params = e || {}, i = i.renderTo(_.document.body).reflow();
          },
          alert: function alert(e, t, n) {
            var i;
            return (i = Yt.alert(e, function () {
              t();
            })).on("close", function () {
              n(i);
            }), i;
          },
          confirm: function confirm(e, t, n) {
            var i;
            return (i = Yt.confirm(e, function (e) {
              t(e);
            })).on("close", function () {
              n(i);
            }), i;
          },
          close: function close(e) {
            e.close();
          },
          getParams: function getParams(e) {
            return e.params;
          },
          setParams: function setParams(e, t) {
            e.params = t;
          }
        };
      }
    };
  },
      qt = Se.extend({
    Defaults: {
      firstControlClass: "first",
      lastControlClass: "last"
    },
    init: function init(e) {
      this.settings = w.extend({}, this.Defaults, e);
    },
    preRender: function preRender(e) {
      e.bodyClasses.add(this.settings.containerClass);
    },
    applyClasses: function applyClasses(e) {
      var t,
          n,
          i,
          r,
          o = this.settings;
      t = o.firstControlClass, n = o.lastControlClass, e.each(function (e) {
        e.classes.remove(t).remove(n).add(o.controlClass), e.visible() && (i || (i = e), r = e);
      }), i && i.classes.add(t), r && r.classes.add(n);
    },
    renderHtml: function renderHtml(e) {
      var t = "";
      return this.applyClasses(e.items()), e.items().each(function (e) {
        t += e.renderHtml();
      }), t;
    },
    recalc: function recalc() {},
    postRender: function postRender() {},
    isNative: function isNative() {
      return !1;
    }
  }),
      Xt = qt.extend({
    Defaults: {
      containerClass: "abs-layout",
      controlClass: "abs-layout-item"
    },
    recalc: function recalc(e) {
      e.items().filter(":visible").each(function (e) {
        var t = e.settings;
        e.layoutRect({
          x: t.x,
          y: t.y,
          w: t.w,
          h: t.h
        }), e.recalc && e.recalc();
      });
    },
    renderHtml: function renderHtml(e) {
      return '<div id="' + e._id + '-absend" class="' + e.classPrefix + 'abs-end"></div>' + this._super(e);
    }
  }),
      jt = Nt.extend({
    Defaults: {
      classes: "widget btn",
      role: "button"
    },
    init: function init(e) {
      var t,
          n = this;
      n._super(e), e = n.settings, t = n.settings.size, n.on("click mousedown", function (e) {
        e.preventDefault();
      }), n.on("touchstart", function (e) {
        n.fire("click", e), e.preventDefault();
      }), e.subtype && n.classes.add(e.subtype), t && n.classes.add("btn-" + t), e.icon && n.icon(e.icon);
    },
    icon: function icon(e) {
      return arguments.length ? (this.state.set("icon", e), this) : this.state.get("icon");
    },
    repaint: function repaint() {
      var e,
          t = this.getEl().firstChild;
      t && ((e = t.style).width = e.height = "100%"), this._super();
    },
    renderHtml: function renderHtml() {
      var e,
          t,
          n = this,
          i = n._id,
          r = n.classPrefix,
          o = n.state.get("icon"),
          s = n.state.get("text"),
          a = "",
          l = n.settings;
      return (e = l.image) ? (o = "none", "string" != typeof e && (e = _.window.getSelection ? e[0] : e[1]), e = " style=\"background-image: url('" + e + "')\"") : e = "", s && (n.classes.add("btn-has-text"), a = '<span class="' + r + 'txt">' + n.encode(s) + "</span>"), o = o ? r + "ico " + r + "i-" + o : "", t = "boolean" == typeof l.active ? ' aria-pressed="' + l.active + '"' : "", '<div id="' + i + '" class="' + n.classes + '" tabindex="-1"' + t + '><button id="' + i + '-button" role="presentation" type="button" tabindex="-1">' + (o ? '<i class="' + o + '"' + e + "></i>" : "") + a + "</button></div>";
    },
    bindStates: function bindStates() {
      var o = this,
          n = o.$,
          i = o.classPrefix + "txt";

      function s(e) {
        var t = n("span." + i, o.getEl());
        e ? (t[0] || (n("button:first", o.getEl()).append('<span class="' + i + '"></span>'), t = n("span." + i, o.getEl())), t.html(o.encode(e))) : t.remove(), o.classes.toggle("btn-has-text", !!e);
      }

      return o.state.on("change:text", function (e) {
        s(e.value);
      }), o.state.on("change:icon", function (e) {
        var t = e.value,
            n = o.classPrefix;
        t = (o.settings.icon = t) ? n + "ico " + n + "i-" + o.settings.icon : "";
        var i = o.getEl().firstChild,
            r = i.getElementsByTagName("i")[0];
        t ? (r && r === i.firstChild || (r = _.document.createElement("i"), i.insertBefore(r, i.firstChild)), r.className = t) : r && i.removeChild(r), s(o.state.get("text"));
      }), o._super();
    }
  }),
      Jt = jt.extend({
    init: function init(e) {
      e = w.extend({
        text: "Browse...",
        multiple: !1,
        accept: null
      }, e), this._super(e), this.classes.add("browsebutton"), e.multiple && this.classes.add("multiple");
    },
    postRender: function postRender() {
      var n = this,
          t = we.create("input", {
        type: "file",
        id: n._id + "-browse",
        accept: n.settings.accept
      });
      n._super(), ye(t).on("change", function (e) {
        var t = e.target.files;
        n.value = function () {
          return t.length ? n.settings.multiple ? t : t[0] : null;
        }, e.preventDefault(), t.length && n.fire("change", e);
      }), ye(t).on("click", function (e) {
        e.stopPropagation();
      }), ye(n.getEl("button")).on("click touchstart", function (e) {
        e.stopPropagation(), t.click(), e.preventDefault();
      }), n.getEl().appendChild(t);
    },
    remove: function remove() {
      ye(this.getEl("button")).off(), ye(this.getEl("input")).off(), this._super();
    }
  }),
      Gt = lt.extend({
    Defaults: {
      defaultType: "button",
      role: "group"
    },
    renderHtml: function renderHtml() {
      var e = this,
          t = e._layout;
      return e.classes.add("btn-group"), e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes + '"><div id="' + e._id + '-body">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>";
    }
  }),
      Kt = Nt.extend({
    Defaults: {
      classes: "checkbox",
      role: "checkbox",
      checked: !1
    },
    init: function init(e) {
      var t = this;
      t._super(e), t.on("click mousedown", function (e) {
        e.preventDefault();
      }), t.on("click", function (e) {
        e.preventDefault(), t.disabled() || t.checked(!t.checked());
      }), t.checked(t.settings.checked);
    },
    checked: function checked(e) {
      return arguments.length ? (this.state.set("checked", e), this) : this.state.get("checked");
    },
    value: function value(e) {
      return arguments.length ? this.checked(e) : this.checked();
    },
    renderHtml: function renderHtml() {
      var e = this,
          t = e._id,
          n = e.classPrefix;
      return '<div id="' + t + '" class="' + e.classes + '" unselectable="on" aria-labelledby="' + t + '-al" tabindex="-1"><i class="' + n + "ico " + n + 'i-checkbox"></i><span id="' + t + '-al" class="' + n + 'label">' + e.encode(e.state.get("text")) + "</span></div>";
    },
    bindStates: function bindStates() {
      var o = this;

      function t(e) {
        o.classes.toggle("checked", e), o.aria("checked", e);
      }

      return o.state.on("change:text", function (e) {
        o.getEl("al").firstChild.data = o.translate(e.value);
      }), o.state.on("change:checked change:value", function (e) {
        o.fire("change"), t(e.value);
      }), o.state.on("change:icon", function (e) {
        var t = e.value,
            n = o.classPrefix;
        if (void 0 === t) return o.settings.icon;
        t = (o.settings.icon = t) ? n + "ico " + n + "i-" + o.settings.icon : "";
        var i = o.getEl().firstChild,
            r = i.getElementsByTagName("i")[0];
        t ? (r && r === i.firstChild || (r = _.document.createElement("i"), i.insertBefore(r, i.firstChild)), r.className = t) : r && i.removeChild(r);
      }), o.state.get("checked") && t(!0), o._super();
    }
  }),
      Zt = tinymce.util.Tools.resolve("tinymce.util.VK"),
      Qt = Nt.extend({
    init: function init(i) {
      var r = this;
      r._super(i), i = r.settings, r.classes.add("combobox"), r.subinput = !0, r.ariaTarget = "inp", i.menu = i.menu || i.values, i.menu && (i.icon = "caret"), r.on("click", function (e) {
        var t = e.target,
            n = r.getEl();
        if (ye.contains(n, t) || t === n) for (; t && t !== n;) {
          t.id && -1 !== t.id.indexOf("-open") && (r.fire("action"), i.menu && (r.showMenu(), e.aria && r.menu.items()[0].focus())), t = t.parentNode;
        }
      }), r.on("keydown", function (e) {
        var t;
        13 === e.keyCode && "INPUT" === e.target.nodeName && (e.preventDefault(), r.parents().reverse().each(function (e) {
          if (e.toJSON) return t = e, !1;
        }), r.fire("submit", {
          data: t.toJSON()
        }));
      }), r.on("keyup", function (e) {
        if ("INPUT" === e.target.nodeName) {
          var t = r.state.get("value"),
              n = e.target.value;
          n !== t && (r.state.set("value", n), r.fire("autocomplete", e));
        }
      }), r.on("mouseover", function (e) {
        var t = r.tooltip().moveTo(-65535);

        if (r.statusLevel() && -1 !== e.target.className.indexOf(r.classPrefix + "status")) {
          var n = r.statusMessage() || "Ok",
              i = t.text(n).show().testMoveRel(e.target, ["bc-tc", "bc-tl", "bc-tr"]);
          t.classes.toggle("tooltip-n", "bc-tc" === i), t.classes.toggle("tooltip-nw", "bc-tl" === i), t.classes.toggle("tooltip-ne", "bc-tr" === i), t.moveRel(e.target, i);
        }
      });
    },
    statusLevel: function statusLevel(e) {
      return 0 < arguments.length && this.state.set("statusLevel", e), this.state.get("statusLevel");
    },
    statusMessage: function statusMessage(e) {
      return 0 < arguments.length && this.state.set("statusMessage", e), this.state.get("statusMessage");
    },
    showMenu: function showMenu() {
      var e,
          t = this,
          n = t.settings;
      t.menu || ((e = n.menu || []).length ? e = {
        type: "menu",
        items: e
      } : e.type = e.type || "menu", t.menu = v.create(e).parent(t).renderTo(t.getContainerElm()), t.fire("createmenu"), t.menu.reflow(), t.menu.on("cancel", function (e) {
        e.control === t.menu && t.focus();
      }), t.menu.on("show hide", function (e) {
        e.control.items().each(function (e) {
          e.active(e.value() === t.value());
        });
      }).fire("show"), t.menu.on("select", function (e) {
        t.value(e.control.value());
      }), t.on("focusin", function (e) {
        "INPUT" === e.target.tagName.toUpperCase() && t.menu.hide();
      }), t.aria("expanded", !0)), t.menu.show(), t.menu.layoutRect({
        w: t.layoutRect().w
      }), t.menu.moveRel(t.getEl(), t.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"]);
    },
    focus: function focus() {
      this.getEl("inp").focus();
    },
    repaint: function repaint() {
      var e,
          t,
          n = this,
          i = n.getEl(),
          r = n.getEl("open"),
          o = n.layoutRect(),
          s = 0,
          a = i.firstChild;
      n.statusLevel() && "none" !== n.statusLevel() && (s = parseInt(we.getRuntimeStyle(a, "padding-right"), 10) - parseInt(we.getRuntimeStyle(a, "padding-left"), 10)), e = r ? o.w - we.getSize(r).width - 10 : o.w - 10;
      var l = _.document;
      return l.all && (!l.documentMode || l.documentMode <= 8) && (t = n.layoutRect().h - 2 + "px"), ye(a).css({
        width: e - s,
        lineHeight: t
      }), n._super(), n;
    },
    postRender: function postRender() {
      var t = this;
      return ye(this.getEl("inp")).on("change", function (e) {
        t.state.set("value", e.target.value), t.fire("change", e);
      }), t._super();
    },
    renderHtml: function renderHtml() {
      var e,
          t,
          n,
          i = this,
          r = i._id,
          o = i.settings,
          s = i.classPrefix,
          a = i.state.get("value") || "",
          l = "",
          u = "";
      return "spellcheck" in o && (u += ' spellcheck="' + o.spellcheck + '"'), o.maxLength && (u += ' maxlength="' + o.maxLength + '"'), o.size && (u += ' size="' + o.size + '"'), o.subtype && (u += ' type="' + o.subtype + '"'), n = '<i id="' + r + '-status" class="mce-status mce-ico" style="display: none"></i>', i.disabled() && (u += ' disabled="disabled"'), (e = o.icon) && "caret" !== e && (e = s + "ico " + s + "i-" + o.icon), t = i.state.get("text"), (e || t) && (l = '<div id="' + r + '-open" class="' + s + "btn " + s + 'open" tabIndex="-1" role="button"><button id="' + r + '-action" type="button" hidefocus="1" tabindex="-1">' + ("caret" !== e ? '<i class="' + e + '"></i>' : '<i class="' + s + 'caret"></i>') + (t ? (e ? " " : "") + t : "") + "</button></div>", i.classes.add("has-open")), '<div id="' + r + '" class="' + i.classes + '"><input id="' + r + '-inp" class="' + s + 'textbox" value="' + i.encode(a, !1) + '" hidefocus="1"' + u + ' placeholder="' + i.encode(o.placeholder) + '" />' + n + l + "</div>";
    },
    value: function value(e) {
      return arguments.length ? (this.state.set("value", e), this) : (this.state.get("rendered") && this.state.set("value", this.getEl("inp").value), this.state.get("value"));
    },
    showAutoComplete: function showAutoComplete(e, i) {
      var r = this;

      if (0 !== e.length) {
        r.menu ? r.menu.items().remove() : r.menu = v.create({
          type: "menu",
          classes: "combobox-menu",
          layout: "flow"
        }).parent(r).renderTo(), w.each(e, function (e) {
          var t, n;
          r.menu.add({
            text: e.title,
            url: e.previewUrl,
            match: i,
            classes: "menu-item-ellipsis",
            onclick: (t = e.value, n = e.title, function () {
              r.fire("selectitem", {
                title: n,
                value: t
              });
            })
          });
        }), r.menu.renderNew(), r.hideMenu(), r.menu.on("cancel", function (e) {
          e.control.parent() === r.menu && (e.stopPropagation(), r.focus(), r.hideMenu());
        }), r.menu.on("select", function () {
          r.focus();
        });
        var t = r.layoutRect().w;
        r.menu.layoutRect({
          w: t,
          minW: 0,
          maxW: t
        }), r.menu.repaint(), r.menu.reflow(), r.menu.show(), r.menu.moveRel(r.getEl(), r.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"]);
      } else r.hideMenu();
    },
    hideMenu: function hideMenu() {
      this.menu && this.menu.hide();
    },
    bindStates: function bindStates() {
      var r = this;
      r.state.on("change:value", function (e) {
        r.getEl("inp").value !== e.value && (r.getEl("inp").value = e.value);
      }), r.state.on("change:disabled", function (e) {
        r.getEl("inp").disabled = e.value;
      }), r.state.on("change:statusLevel", function (e) {
        var t = r.getEl("status"),
            n = r.classPrefix,
            i = e.value;
        we.css(t, "display", "none" === i ? "none" : ""), we.toggleClass(t, n + "i-checkmark", "ok" === i), we.toggleClass(t, n + "i-warning", "warn" === i), we.toggleClass(t, n + "i-error", "error" === i), r.classes.toggle("has-status", "none" !== i), r.repaint();
      }), we.on(r.getEl("status"), "mouseleave", function () {
        r.tooltip().hide();
      }), r.on("cancel", function (e) {
        r.menu && r.menu.visible() && (e.stopPropagation(), r.hideMenu());
      });

      var n = function n(e, t) {
        t && 0 < t.items().length && t.items().eq(e)[0].focus();
      };

      return r.on("keydown", function (e) {
        var t = e.keyCode;
        "INPUT" === e.target.nodeName && (t === Zt.DOWN ? (e.preventDefault(), r.fire("autocomplete"), n(0, r.menu)) : t === Zt.UP && (e.preventDefault(), n(-1, r.menu)));
      }), r._super();
    },
    remove: function remove() {
      ye(this.getEl("inp")).off(), this.menu && this.menu.remove(), this._super();
    }
  }),
      en = Qt.extend({
    init: function init(e) {
      var t = this;
      e.spellcheck = !1, e.onaction && (e.icon = "none"), t._super(e), t.classes.add("colorbox"), t.on("change keyup postrender", function () {
        t.repaintColor(t.value());
      });
    },
    repaintColor: function repaintColor(e) {
      var t = this.getEl("open"),
          n = t ? t.getElementsByTagName("i")[0] : null;
      if (n) try {
        n.style.background = e;
      } catch (i) {}
    },
    bindStates: function bindStates() {
      var t = this;
      return t.state.on("change:value", function (e) {
        t.state.get("rendered") && t.repaintColor(e.value);
      }), t._super();
    }
  }),
      tn = jt.extend({
    showPanel: function showPanel() {
      var t = this,
          e = t.settings;
      if (t.classes.add("opened"), t.panel) t.panel.show();else {
        var n = e.panel;
        n.type && (n = {
          layout: "grid",
          items: n
        }), n.role = n.role || "dialog", n.popover = !0, n.autohide = !0, n.ariaRoot = !0, t.panel = new Ct(n).on("hide", function () {
          t.classes.remove("opened");
        }).on("cancel", function (e) {
          e.stopPropagation(), t.focus(), t.hidePanel();
        }).parent(t).renderTo(t.getContainerElm()), t.panel.fire("show"), t.panel.reflow();
      }
      var i = t.panel.testMoveRel(t.getEl(), e.popoverAlign || (t.isRtl() ? ["bc-tc", "bc-tl", "bc-tr"] : ["bc-tc", "bc-tr", "bc-tl", "tc-bc", "tc-br", "tc-bl"]));
      t.panel.classes.toggle("start", "l" === i.substr(-1)), t.panel.classes.toggle("end", "r" === i.substr(-1));
      var r = "t" === i.substr(0, 1);
      t.panel.classes.toggle("bottom", !r), t.panel.classes.toggle("top", r), t.panel.moveRel(t.getEl(), i);
    },
    hidePanel: function hidePanel() {
      this.panel && this.panel.hide();
    },
    postRender: function postRender() {
      var t = this;
      return t.aria("haspopup", !0), t.on("click", function (e) {
        e.control === t && (t.panel && t.panel.visible() ? t.hidePanel() : (t.showPanel(), t.panel.focus(!!e.aria)));
      }), t._super();
    },
    remove: function remove() {
      return this.panel && (this.panel.remove(), this.panel = null), this._super();
    }
  }),
      nn = p.DOM,
      rn = tn.extend({
    init: function init(e) {
      this._super(e), this.classes.add("splitbtn"), this.classes.add("colorbutton");
    },
    color: function color(e) {
      return e ? (this._color = e, this.getEl("preview").style.backgroundColor = e, this) : this._color;
    },
    resetColor: function resetColor() {
      return this._color = null, this.getEl("preview").style.backgroundColor = null, this;
    },
    renderHtml: function renderHtml() {
      var e = this,
          t = e._id,
          n = e.classPrefix,
          i = e.state.get("text"),
          r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "",
          o = e.settings.image ? " style=\"background-image: url('" + e.settings.image + "')\"" : "",
          s = "";
      return i && (e.classes.add("btn-has-text"), s = '<span class="' + n + 'txt">' + e.encode(i) + "</span>"), '<div id="' + t + '" class="' + e.classes + '" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + o + "></i>" : "") + '<span id="' + t + '-preview" class="' + n + 'preview"></span>' + s + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1"> <i class="' + n + 'caret"></i></button></div>';
    },
    postRender: function postRender() {
      var t = this,
          n = t.settings.onclick;
      return t.on("click", function (e) {
        e.aria && "down" === e.aria.key || e.control !== t || nn.getParent(e.target, "." + t.classPrefix + "open") || (e.stopImmediatePropagation(), n.call(t, e));
      }), delete t.settings.onclick, t._super();
    }
  }),
      on = tinymce.util.Tools.resolve("tinymce.util.Color"),
      sn = Nt.extend({
    Defaults: {
      classes: "widget colorpicker"
    },
    init: function init(e) {
      this._super(e);
    },
    postRender: function postRender() {
      var n,
          i,
          r,
          o,
          s,
          a = this,
          l = a.color();

      function u(e, t) {
        var n,
            i,
            r = we.getPos(e);
        return n = t.pageX - r.x, i = t.pageY - r.y, {
          x: n = Math.max(0, Math.min(n / e.clientWidth, 1)),
          y: i = Math.max(0, Math.min(i / e.clientHeight, 1))
        };
      }

      function c(e, t) {
        var n = (360 - e.h) / 360;
        we.css(r, {
          top: 100 * n + "%"
        }), t || we.css(s, {
          left: e.s + "%",
          top: 100 - e.v + "%"
        }), o.style.background = on({
          s: 100,
          v: 100,
          h: e.h
        }).toHex(), a.color().parse({
          s: e.s,
          v: e.v,
          h: e.h
        });
      }

      function e(e) {
        var t;
        t = u(o, e), n.s = 100 * t.x, n.v = 100 * (1 - t.y), c(n), a.fire("change");
      }

      function t(e) {
        var t;
        t = u(i, e), (n = l.toHsv()).h = 360 * (1 - t.y), c(n, !0), a.fire("change");
      }

      i = a.getEl("h"), r = a.getEl("hp"), o = a.getEl("sv"), s = a.getEl("svp"), a._repaint = function () {
        c(n = l.toHsv());
      }, a._super(), a._svdraghelper = new ct(a._id + "-sv", {
        start: e,
        drag: e
      }), a._hdraghelper = new ct(a._id + "-h", {
        start: t,
        drag: t
      }), a._repaint();
    },
    rgb: function rgb() {
      return this.color().toRgb();
    },
    value: function value(e) {
      if (!arguments.length) return this.color().toHex();
      this.color().parse(e), this._rendered && this._repaint();
    },
    color: function color() {
      return this._color || (this._color = on()), this._color;
    },
    renderHtml: function renderHtml() {
      var e,
          t = this._id,
          o = this.classPrefix,
          s = "#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000";
      return e = '<div id="' + t + '-h" class="' + o + 'colorpicker-h" style="background: -ms-linear-gradient(top,' + s + ");background: linear-gradient(to bottom," + s + ');">' + function () {
        var e,
            t,
            n,
            i,
            r = "";

        for (n = "filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=", e = 0, t = (i = s.split(",")).length - 1; e < t; e++) {
          r += '<div class="' + o + 'colorpicker-h-chunk" style="height:' + 100 / t + "%;" + n + i[e] + ",endColorstr=" + i[e + 1] + ");-ms-" + n + i[e] + ",endColorstr=" + i[e + 1] + ')"></div>';
        }

        return r;
      }() + '<div id="' + t + '-hp" class="' + o + 'colorpicker-h-marker"></div></div>', '<div id="' + t + '" class="' + this.classes + '"><div id="' + t + '-sv" class="' + o + 'colorpicker-sv"><div class="' + o + 'colorpicker-overlay1"><div class="' + o + 'colorpicker-overlay2"><div id="' + t + '-svp" class="' + o + 'colorpicker-selector1"><div class="' + o + 'colorpicker-selector2"></div></div></div></div></div>' + e + "</div>";
    }
  }),
      an = Nt.extend({
    init: function init(e) {
      e = w.extend({
        height: 100,
        text: "Drop an image here",
        multiple: !1,
        accept: null
      }, e), this._super(e), this.classes.add("dropzone"), e.multiple && this.classes.add("multiple");
    },
    renderHtml: function renderHtml() {
      var e,
          t,
          n = this.settings;
      return e = {
        id: this._id,
        hidefocus: "1"
      }, t = we.create("div", e, "<span>" + this.translate(n.text) + "</span>"), n.height && we.css(t, "height", n.height + "px"), n.width && we.css(t, "width", n.width + "px"), t.className = this.classes, t.outerHTML;
    },
    postRender: function postRender() {
      var i = this,
          e = function e(_e4) {
        _e4.preventDefault(), i.classes.toggle("dragenter"), i.getEl().className = i.classes;
      };

      i._super(), i.$el.on("dragover", function (e) {
        e.preventDefault();
      }), i.$el.on("dragenter", e), i.$el.on("dragleave", e), i.$el.on("drop", function (e) {
        if (e.preventDefault(), !i.state.get("disabled")) {
          var t = function (e) {
            var t = i.settings.accept;
            if ("string" != typeof t) return e;
            var n = new RegExp("(" + t.split(/\s*,\s*/).join("|") + ")$", "i");
            return w.grep(e, function (e) {
              return n.test(e.name);
            });
          }(e.dataTransfer.files);

          i.value = function () {
            return t.length ? i.settings.multiple ? t : t[0] : null;
          }, t.length && i.fire("change", e);
        }
      });
    },
    remove: function remove() {
      this.$el.off(), this._super();
    }
  }),
      ln = Nt.extend({
    init: function init(e) {
      var n = this;
      e.delimiter || (e.delimiter = "\xbb"), n._super(e), n.classes.add("path"), n.canFocus = !0, n.on("click", function (e) {
        var t;
        (t = e.target.getAttribute("data-index")) && n.fire("select", {
          value: n.row()[t],
          index: t
        });
      }), n.row(n.settings.row);
    },
    focus: function focus() {
      return this.getEl().firstChild.focus(), this;
    },
    row: function row(e) {
      return arguments.length ? (this.state.set("row", e), this) : this.state.get("row");
    },
    renderHtml: function renderHtml() {
      return '<div id="' + this._id + '" class="' + this.classes + '">' + this._getDataPathHtml(this.state.get("row")) + "</div>";
    },
    bindStates: function bindStates() {
      var t = this;
      return t.state.on("change:row", function (e) {
        t.innerHtml(t._getDataPathHtml(e.value));
      }), t._super();
    },
    _getDataPathHtml: function _getDataPathHtml(e) {
      var t,
          n,
          i = e || [],
          r = "",
          o = this.classPrefix;

      for (t = 0, n = i.length; t < n; t++) {
        r += (0 < t ? '<div class="' + o + 'divider" aria-hidden="true"> ' + this.settings.delimiter + " </div>" : "") + '<div role="button" class="' + o + "path-item" + (t === n - 1 ? " " + o + "last" : "") + '" data-index="' + t + '" tabindex="-1" id="' + this._id + "-" + t + '" aria-level="' + (t + 1) + '">' + i[t].name + "</div>";
      }

      return r || (r = '<div class="' + o + 'path-item">\xa0</div>'), r;
    }
  }),
      un = ln.extend({
    postRender: function postRender() {
      var o = this,
          s = o.settings.editor;

      function a(e) {
        if (1 === e.nodeType) {
          if ("BR" === e.nodeName || e.getAttribute("data-mce-bogus")) return !0;
          if ("bookmark" === e.getAttribute("data-mce-type")) return !0;
        }

        return !1;
      }

      return !1 !== s.settings.elementpath && (o.on("select", function (e) {
        s.focus(), s.selection.select(this.row()[e.index].element), s.nodeChanged();
      }), s.on("nodeChange", function (e) {
        for (var t = [], n = e.parents, i = n.length; i--;) {
          if (1 === n[i].nodeType && !a(n[i])) {
            var r = s.fire("ResolveName", {
              name: n[i].nodeName.toLowerCase(),
              target: n[i]
            });
            if (r.isDefaultPrevented() || t.push({
              name: r.name,
              element: n[i]
            }), r.isPropagationStopped()) break;
          }
        }

        o.row(t);
      })), o._super();
    }
  }),
      cn = lt.extend({
    Defaults: {
      layout: "flex",
      align: "center",
      defaults: {
        flex: 1
      }
    },
    renderHtml: function renderHtml() {
      var e = this,
          t = e._layout,
          n = e.classPrefix;
      return e.classes.add("formitem"), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<div id="' + e._id + '-title" class="' + n + 'title">' + e.settings.title + "</div>" : "") + '<div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>";
    }
  }),
      dn = lt.extend({
    Defaults: {
      containerCls: "form",
      layout: "flex",
      direction: "column",
      align: "stretch",
      flex: 1,
      padding: 15,
      labelGap: 30,
      spacing: 10,
      callbacks: {
        submit: function submit() {
          this.submit();
        }
      }
    },
    preRender: function preRender() {
      var i = this,
          e = i.items();
      i.settings.formItemDefaults || (i.settings.formItemDefaults = {
        layout: "flex",
        autoResize: "overflow",
        defaults: {
          flex: 1
        }
      }), e.each(function (e) {
        var t,
            n = e.settings.label;
        n && ((t = new cn(w.extend({
          items: {
            type: "label",
            id: e._id + "-l",
            text: n,
            flex: 0,
            forId: e._id,
            disabled: e.disabled()
          }
        }, i.settings.formItemDefaults))).type = "formitem", e.aria("labelledby", e._id + "-l"), "undefined" == typeof e.settings.flex && (e.settings.flex = 1), i.replace(e, t), t.add(e));
      });
    },
    submit: function submit() {
      return this.fire("submit", {
        data: this.toJSON()
      });
    },
    postRender: function postRender() {
      this._super(), this.fromJSON(this.settings.data);
    },
    bindStates: function bindStates() {
      var n = this;

      function e() {
        var e,
            t,
            i = 0,
            r = [];
        if (!1 !== n.settings.labelGapCalc) for (("children" === n.settings.labelGapCalc ? n.find("formitem") : n.items()).filter("formitem").each(function (e) {
          var t = e.items()[0],
              n = t.getEl().clientWidth;
          i = i < n ? n : i, r.push(t);
        }), t = n.settings.labelGap || 0, e = r.length; e--;) {
          r[e].settings.minWidth = i + t;
        }
      }

      n._super(), n.on("show", e), e();
    }
  }),
      fn = dn.extend({
    Defaults: {
      containerCls: "fieldset",
      layout: "flex",
      direction: "column",
      align: "stretch",
      flex: 1,
      padding: "25 15 5 15",
      labelGap: 30,
      spacing: 10,
      border: 1
    },
    renderHtml: function renderHtml() {
      var e = this,
          t = e._layout,
          n = e.classPrefix;
      return e.preRender(), t.preRender(e), '<fieldset id="' + e._id + '" class="' + e.classes + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<legend id="' + e._id + '-title" class="' + n + 'fieldset-title">' + e.settings.title + "</legend>" : "") + '<div id="' + e._id + '-body" class="' + e.bodyClasses + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></fieldset>";
    }
  }),
      hn = 0,
      mn = function mn(e) {
    if (null === e || e === undefined) throw new Error("Node cannot be null or undefined");
    return {
      dom: k(e)
    };
  },
      gn = {
    fromHtml: function fromHtml(e, t) {
      var n = (t || _.document).createElement("div");

      if (n.innerHTML = e, !n.hasChildNodes() || 1 < n.childNodes.length) throw _.console.error("HTML does not have a single root node", e), new Error("HTML must have a single root node");
      return mn(n.childNodes[0]);
    },
    fromTag: function fromTag(e, t) {
      var n = (t || _.document).createElement(e);

      return mn(n);
    },
    fromText: function fromText(e, t) {
      var n = (t || _.document).createTextNode(e);

      return mn(n);
    },
    fromDom: mn,
    fromPoint: function fromPoint(e, t, n) {
      var i = e.dom();
      return N.from(i.elementFromPoint(t, n)).map(mn);
    }
  },
      pn = (_.Node.ATTRIBUTE_NODE, _.Node.CDATA_SECTION_NODE, _.Node.COMMENT_NODE, _.Node.DOCUMENT_NODE),
      vn = (_.Node.DOCUMENT_TYPE_NODE, _.Node.DOCUMENT_FRAGMENT_NODE, _.Node.ELEMENT_NODE),
      bn = (_.Node.TEXT_NODE, _.Node.PROCESSING_INSTRUCTION_NODE, _.Node.ENTITY_REFERENCE_NODE, _.Node.ENTITY_NODE, _.Node.NOTATION_NODE, "undefined" != typeof _.window ? _.window : Function("return this;")(), function (e, t) {
    var n = function (e, t) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        if (i.test(t)) return i;
      }

      return undefined;
    }(e, t);

    if (!n) return {
      major: 0,
      minor: 0
    };

    var i = function i(e) {
      return Number(t.replace(n, "$" + e));
    };

    return xn(i(1), i(2));
  }),
      yn = function yn() {
    return xn(0, 0);
  },
      xn = function xn(e, t) {
    return {
      major: e,
      minor: t
    };
  },
      wn = {
    nu: xn,
    detect: function detect(e, t) {
      var n = String(t).toLowerCase();
      return 0 === e.length ? yn() : bn(e, n);
    },
    unknown: yn
  },
      _n = "Firefox",
      Rn = function Rn(e, t) {
    return function () {
      return t === e;
    };
  },
      Cn = function Cn(e) {
    var t = e.current;
    return {
      current: t,
      version: e.version,
      isEdge: Rn("Edge", t),
      isChrome: Rn("Chrome", t),
      isIE: Rn("IE", t),
      isOpera: Rn("Opera", t),
      isFirefox: Rn(_n, t),
      isSafari: Rn("Safari", t)
    };
  },
      En = {
    unknown: function unknown() {
      return Cn({
        current: undefined,
        version: wn.unknown()
      });
    },
    nu: Cn,
    edge: k("Edge"),
    chrome: k("Chrome"),
    ie: k("IE"),
    opera: k("Opera"),
    firefox: k(_n),
    safari: k("Safari")
  },
      kn = "Windows",
      Hn = "Android",
      Sn = "Solaris",
      Tn = "FreeBSD",
      Mn = function Mn(e, t) {
    return function () {
      return t === e;
    };
  },
      Nn = function Nn(e) {
    var t = e.current;
    return {
      current: t,
      version: e.version,
      isWindows: Mn(kn, t),
      isiOS: Mn("iOS", t),
      isAndroid: Mn(Hn, t),
      isOSX: Mn("OSX", t),
      isLinux: Mn("Linux", t),
      isSolaris: Mn(Sn, t),
      isFreeBSD: Mn(Tn, t)
    };
  },
      Pn = {
    unknown: function unknown() {
      return Nn({
        current: undefined,
        version: wn.unknown()
      });
    },
    nu: Nn,
    windows: k(kn),
    ios: k("iOS"),
    android: k(Hn),
    linux: k("Linux"),
    osx: k("OSX"),
    solaris: k(Sn),
    freebsd: k(Tn)
  },
      Wn = function Wn(e, t) {
    var n = String(t).toLowerCase();
    return function (e, t) {
      for (var n = 0, i = e.length; n < i; n++) {
        var r = e[n];
        if (t(r, n)) return N.some(r);
      }

      return N.none();
    }(e, function (e) {
      return e.search(n);
    });
  },
      Dn = function Dn(e, n) {
    return Wn(e, n).map(function (e) {
      var t = wn.detect(e.versionRegexes, n);
      return {
        current: e.name,
        version: t
      };
    });
  },
      On = function On(e, n) {
    return Wn(e, n).map(function (e) {
      var t = wn.detect(e.versionRegexes, n);
      return {
        current: e.name,
        version: t
      };
    });
  },
      An = function An(e, t) {
    return -1 !== e.indexOf(t);
  },
      Bn = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
      Ln = function Ln(t) {
    return function (e) {
      return An(e, t);
    };
  },
      zn = [{
    name: "Edge",
    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
    search: function search(e) {
      return An(e, "edge/") && An(e, "chrome") && An(e, "safari") && An(e, "applewebkit");
    }
  }, {
    name: "Chrome",
    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, Bn],
    search: function search(e) {
      return An(e, "chrome") && !An(e, "chromeframe");
    }
  }, {
    name: "IE",
    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
    search: function search(e) {
      return An(e, "msie") || An(e, "trident");
    }
  }, {
    name: "Opera",
    versionRegexes: [Bn, /.*?opera\/([0-9]+)\.([0-9]+).*/],
    search: Ln("opera")
  }, {
    name: "Firefox",
    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
    search: Ln("firefox")
  }, {
    name: "Safari",
    versionRegexes: [Bn, /.*?cpu os ([0-9]+)_([0-9]+).*/],
    search: function search(e) {
      return (An(e, "safari") || An(e, "mobile/")) && An(e, "applewebkit");
    }
  }],
      In = [{
    name: "Windows",
    search: Ln("win"),
    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "iOS",
    search: function search(e) {
      return An(e, "iphone") || An(e, "ipad");
    },
    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
  }, {
    name: "Android",
    search: Ln("android"),
    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
  }, {
    name: "OSX",
    search: Ln("os x"),
    versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
  }, {
    name: "Linux",
    search: Ln("linux"),
    versionRegexes: []
  }, {
    name: "Solaris",
    search: Ln("sunos"),
    versionRegexes: []
  }, {
    name: "FreeBSD",
    search: Ln("freebsd"),
    versionRegexes: []
  }],
      Fn = {
    browsers: k(zn),
    oses: k(In)
  },
      Un = function Un(e) {
    var t,
        n,
        i,
        r,
        o,
        s,
        a,
        l,
        u,
        c,
        d,
        f = Fn.browsers(),
        h = Fn.oses(),
        m = Dn(f, e).fold(En.unknown, En.nu),
        g = On(h, e).fold(Pn.unknown, Pn.nu);
    return {
      browser: m,
      os: g,
      deviceType: (n = m, i = e, r = (t = g).isiOS() && !0 === /ipad/i.test(i), o = t.isiOS() && !r, s = t.isAndroid() && 3 === t.version.major, a = t.isAndroid() && 4 === t.version.major, l = r || s || a && !0 === /mobile/i.test(i), u = t.isiOS() || t.isAndroid(), c = u && !l, d = n.isSafari() && t.isiOS() && !1 === /safari/i.test(i), {
        isiPad: k(r),
        isiPhone: k(o),
        isTablet: k(l),
        isPhone: k(c),
        isTouch: k(u),
        isAndroid: t.isAndroid,
        isiOS: t.isiOS,
        isWebView: k(d)
      })
    };
  },
      Vn = (Vt = !(Ft = function Ft() {
    var e = _.navigator.userAgent;
    return Un(e);
  }), function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }

    return Vt || (Vt = !0, Ut = Ft.apply(null, e)), Ut;
  }),
      Yn = vn,
      $n = pn,
      qn = function qn(e) {
    return e.nodeType !== Yn && e.nodeType !== $n || 0 === e.childElementCount;
  },
      Xn = (Vn().browser.isIE(), function () {
    for (var e = [], t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
  }("element", "offset"), w.trim),
      jn = function jn(t) {
    return function (e) {
      if (e && 1 === e.nodeType) {
        if (e.contentEditable === t) return !0;
        if (e.getAttribute("data-mce-contenteditable") === t) return !0;
      }

      return !1;
    };
  },
      Jn = jn("true"),
      Gn = jn("false"),
      Kn = function Kn(e, t, n, i, r) {
    return {
      type: e,
      title: t,
      url: n,
      level: i,
      attach: r
    };
  },
      Zn = function Zn(e) {
    return e.innerText || e.textContent;
  },
      Qn = function Qn(e) {
    return e.id ? e.id : (t = "h", n = new Date().getTime(), t + "_" + Math.floor(1e9 * Math.random()) + ++hn + String(n));
    var t, n;
  },
      ei = function ei(e) {
    return (t = e) && "A" === t.nodeName && (t.id || t.name) && ni(e);
    var t;
  },
      ti = function ti(e) {
    return e && /^(H[1-6])$/.test(e.nodeName);
  },
      ni = function ni(e) {
    return function (e) {
      for (; e = e.parentNode;) {
        var t = e.contentEditable;
        if (t && "inherit" !== t) return Jn(e);
      }

      return !1;
    }(e) && !Gn(e);
  },
      ii = function ii(e) {
    return ti(e) && ni(e);
  },
      ri = function ri(e) {
    var t,
        n = Qn(e);
    return Kn("header", Zn(e), "#" + n, ti(t = e) ? parseInt(t.nodeName.substr(1), 10) : 0, function () {
      e.id = n;
    });
  },
      oi = function oi(e) {
    var t = e.id || e.name,
        n = Zn(e);
    return Kn("anchor", n || "#" + t, "#" + t, 0, E);
  },
      si = function si(e) {
    var t, n, i, r, o, s;
    return t = "h1,h2,h3,h4,h5,h6,a:not([href])", n = e, G((Vn().browser.isIE(), function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }
    }("element", "offset"), i = gn.fromDom(n), r = t, s = (o = i) === undefined ? _.document : o.dom(), qn(s) ? [] : G(s.querySelectorAll(r), gn.fromDom)), function (e) {
      return e.dom();
    });
  },
      ai = function ai(e) {
    return 0 < Xn(e.title).length;
  },
      li = function li(e) {
    var t,
        n = si(e);
    return Z((t = n, G(Z(t, ii), ri)).concat(G(Z(n, ei), oi)), ai);
  },
      ui = {},
      ci = function ci(e) {
    return {
      title: e.title,
      value: {
        title: {
          raw: e.title
        },
        url: e.url,
        attach: e.attach
      }
    };
  },
      di = function di(e, t) {
    return {
      title: e,
      value: {
        title: e,
        url: t,
        attach: E
      }
    };
  },
      fi = function fi(e, t, n) {
    var i = t in e ? e[t] : n;
    return !1 === i ? null : i;
  },
      hi = function hi(e, i, r, t) {
    var n,
        o,
        s,
        a,
        l,
        u,
        c = {
      title: "-"
    },
        d = function d(e) {
      var t = e.hasOwnProperty(r) ? e[r] : [],
          n = Z(t, function (e) {
        return t = e, !J(i, function (e) {
          return e.url === t;
        });
        var t;
      });
      return w.map(n, function (e) {
        return {
          title: e,
          value: {
            title: e,
            url: e,
            attach: E
          }
        };
      });
    },
        f = function f(t) {
      var e,
          n = Z(i, function (e) {
        return e.type === t;
      });
      return e = n, w.map(e, ci);
    };

    return !1 === t.typeahead_urls ? [] : "file" === r ? (n = [mi(e, d(ui)), mi(e, f("header")), mi(e, (a = f("anchor"), l = fi(t, "anchor_top", "#top"), u = fi(t, "anchor_bottom", "#bottom"), null !== l && a.unshift(di("<top>", l)), null !== u && a.push(di("<bottom>", u)), a))], o = function o(e, t) {
      return 0 === e.length || 0 === t.length ? e.concat(t) : e.concat(c, t);
    }, s = [], K(n, function (e) {
      s = o(s, e);
    }), s) : mi(e, d(ui));
  },
      mi = function mi(e, t) {
    var n = e.toLowerCase(),
        i = w.grep(t, function (e) {
      return -1 !== e.title.toLowerCase().indexOf(n);
    });
    return 1 === i.length && i[0].title === e ? [] : i;
  },
      gi = function gi(r, i, o, s) {
    var t = function t(e) {
      var t = li(o),
          n = hi(e, t, s, i);
      r.showAutoComplete(n, e);
    };

    r.on("autocomplete", function () {
      t(r.value());
    }), r.on("selectitem", function (e) {
      var t = e.value;
      r.value(t.url);
      var n,
          i = (n = t.title).raw ? n.raw : n;
      "image" === s ? r.fire("change", {
        meta: {
          alt: i,
          attach: t.attach
        }
      }) : r.fire("change", {
        meta: {
          text: i,
          attach: t.attach
        }
      }), r.focus();
    }), r.on("click", function (e) {
      0 === r.value().length && "INPUT" === e.target.nodeName && t("");
    }), r.on("PostRender", function () {
      r.getRoot().on("submit", function (e) {
        var t, n, i;
        e.isDefaultPrevented() || (t = r.value(), i = ui[n = s], /^https?/.test(t) && (i ? j(i, t).isNone() && (ui[n] = i.slice(0, 5).concat(t)) : ui[n] = [t]));
      });
    });
  },
      pi = function pi(o, e, n) {
    var i = e.filepicker_validator_handler;
    i && o.state.on("change:value", function (e) {
      var t;
      0 !== (t = e.value).length ? i({
        url: t,
        type: n
      }, function (e) {
        var t,
            n,
            i,
            r = (n = (t = e).status, i = t.message, "valid" === n ? {
          status: "ok",
          message: i
        } : "unknown" === n ? {
          status: "warn",
          message: i
        } : "invalid" === n ? {
          status: "warn",
          message: i
        } : {
          status: "none",
          message: ""
        });
        o.statusMessage(r.message), o.statusLevel(r.status);
      }) : o.statusLevel("none");
    });
  },
      vi = Qt.extend({
    Statics: {
      clearHistory: function clearHistory() {
        ui = {};
      }
    },
    init: function init(e) {
      var t,
          n,
          i,
          r = this,
          o = window.tinymce ? window.tinymce.activeEditor : l.activeEditor,
          s = o.settings,
          a = e.filetype;
      e.spellcheck = !1, (i = s.file_picker_types || s.file_browser_callback_types) && (i = w.makeMap(i, /[, ]/)), i && !i[a] || (!(n = s.file_picker_callback) || i && !i[a] ? !(n = s.file_browser_callback) || i && !i[a] || (t = function t() {
        n(r.getEl("inp").id, r.value(), a, window);
      }) : t = function t() {
        var e = r.fire("beforecall").meta;
        e = w.extend({
          filetype: a
        }, e), n.call(o, function (e, t) {
          r.value(e).fire("change", {
            meta: t
          });
        }, r.value(), e);
      }), t && (e.icon = "browse", e.onaction = t), r._super(e), r.classes.add("filepicker"), gi(r, s, o.getBody(), a), pi(r, s, a);
    }
  }),
      bi = Xt.extend({
    recalc: function recalc(e) {
      var t = e.layoutRect(),
          n = e.paddingBox;
      e.items().filter(":visible").each(function (e) {
        e.layoutRect({
          x: n.left,
          y: n.top,
          w: t.innerW - n.right - n.left,
          h: t.innerH - n.top - n.bottom
        }), e.recalc && e.recalc();
      });
    }
  }),
      yi = Xt.extend({
    recalc: function recalc(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          d,
          f,
          h,
          m,
          g,
          p,
          v,
          b,
          y,
          x,
          w,
          _,
          R,
          C,
          E,
          k,
          H,
          S,
          T,
          M,
          N,
          P,
          W,
          D,
          O,
          A,
          B,
          L = [],
          z = Math.max,
          I = Math.min;

      for (i = e.items().filter(":visible"), r = e.layoutRect(), o = e.paddingBox, s = e.settings, f = e.isRtl() ? s.direction || "row-reversed" : s.direction, a = s.align, l = e.isRtl() ? s.pack || "end" : s.pack, u = s.spacing || 0, "row-reversed" !== f && "column-reverse" !== f || (i = i.set(i.toArray().reverse()), f = f.split("-")[0]), "column" === f ? (C = "y", _ = "h", R = "minH", E = "maxH", H = "innerH", k = "top", S = "deltaH", T = "contentH", D = "left", P = "w", M = "x", N = "innerW", W = "minW", O = "right", A = "deltaW", B = "contentW") : (C = "x", _ = "w", R = "minW", E = "maxW", H = "innerW", k = "left", S = "deltaW", T = "contentW", D = "top", P = "h", M = "y", N = "innerH", W = "minH", O = "bottom", A = "deltaH", B = "contentH"), d = r[H] - o[k] - o[k], w = c = 0, t = 0, n = i.length; t < n; t++) {
        m = (h = i[t]).layoutRect(), d -= t < n - 1 ? u : 0, 0 < (g = h.settings.flex) && (c += g, m[E] && L.push(h), m.flex = g), d -= m[R], w < (p = o[D] + m[W] + o[O]) && (w = p);
      }

      if ((y = {})[R] = d < 0 ? r[R] - d + r[S] : r[H] - d + r[S], y[W] = w + r[A], y[T] = r[H] - d, y[B] = w, y.minW = I(y.minW, r.maxW), y.minH = I(y.minH, r.maxH), y.minW = z(y.minW, r.startMinWidth), y.minH = z(y.minH, r.startMinHeight), !r.autoResize || y.minW === r.minW && y.minH === r.minH) {
        for (b = d / c, t = 0, n = L.length; t < n; t++) {
          (v = (m = (h = L[t]).layoutRect())[E]) < (p = m[R] + m.flex * b) ? (d -= m[E] - m[R], c -= m.flex, m.flex = 0, m.maxFlexSize = v) : m.maxFlexSize = 0;
        }

        for (b = d / c, x = o[k], y = {}, 0 === c && ("end" === l ? x = d + o[k] : "center" === l ? (x = Math.round(r[H] / 2 - (r[H] - d) / 2) + o[k]) < 0 && (x = o[k]) : "justify" === l && (x = o[k], u = Math.floor(d / (i.length - 1)))), y[M] = o[D], t = 0, n = i.length; t < n; t++) {
          p = (m = (h = i[t]).layoutRect()).maxFlexSize || m[R], "center" === a ? y[M] = Math.round(r[N] / 2 - m[P] / 2) : "stretch" === a ? (y[P] = z(m[W] || 0, r[N] - o[D] - o[O]), y[M] = o[D]) : "end" === a && (y[M] = r[N] - m[P] - o.top), 0 < m.flex && (p += m.flex * b), y[_] = p, y[C] = x, h.layoutRect(y), h.recalc && h.recalc(), x += p + u;
        }
      } else if (y.w = y.minW, y.h = y.minH, e.layoutRect(y), this.recalc(e), null === e._lastRect) {
        var F = e.parent();
        F && (F._lastRect = null, F.recalc());
      }
    }
  }),
      xi = qt.extend({
    Defaults: {
      containerClass: "flow-layout",
      controlClass: "flow-layout-item",
      endClass: "break"
    },
    recalc: function recalc(e) {
      e.items().filter(":visible").each(function (e) {
        e.recalc && e.recalc();
      });
    },
    isNative: function isNative() {
      return !0;
    }
  }),
      wi = function wi(e, t) {
    return n = t, r = (i = e) === undefined ? _.document : i.dom(), qn(r) ? N.none() : N.from(r.querySelector(n)).map(gn.fromDom);
    var n, i, r;
  },
      _i = function _i(e, t) {
    return function () {
      e.execCommand("mceToggleFormat", !1, t);
    };
  },
      Ri = function Ri(e, t, n) {
    var i = function i(e) {
      n(e, t);
    };

    e.formatter ? e.formatter.formatChanged(t, i) : e.on("init", function () {
      e.formatter.formatChanged(t, i);
    });
  },
      Ci = function Ci(e, n) {
    return function (t) {
      Ri(e, n, function (e) {
        t.control.active(e);
      });
    };
  },
      Ei = function Ei(i) {
    var t = ["alignleft", "aligncenter", "alignright", "alignjustify"],
        r = "alignleft",
        e = [{
      text: "Left",
      icon: "alignleft",
      onclick: _i(i, "alignleft")
    }, {
      text: "Center",
      icon: "aligncenter",
      onclick: _i(i, "aligncenter")
    }, {
      text: "Right",
      icon: "alignright",
      onclick: _i(i, "alignright")
    }, {
      text: "Justify",
      icon: "alignjustify",
      onclick: _i(i, "alignjustify")
    }];
    i.addMenuItem("align", {
      text: "Align",
      menu: e
    }), i.addButton("align", {
      type: "menubutton",
      icon: r,
      menu: e,
      onShowMenu: function onShowMenu(e) {
        var n = e.control.menu;
        w.each(t, function (t, e) {
          n.items().eq(e).each(function (e) {
            return e.active(i.formatter.match(t));
          });
        });
      },
      onPostRender: function onPostRender(e) {
        var n = e.control;
        w.each(t, function (t, e) {
          Ri(i, t, function (e) {
            n.icon(r), e && n.icon(t);
          });
        });
      }
    }), w.each({
      alignleft: ["Align left", "JustifyLeft"],
      aligncenter: ["Align center", "JustifyCenter"],
      alignright: ["Align right", "JustifyRight"],
      alignjustify: ["Justify", "JustifyFull"],
      alignnone: ["No alignment", "JustifyNone"]
    }, function (e, t) {
      i.addButton(t, {
        active: !1,
        tooltip: e[0],
        cmd: e[1],
        onPostRender: Ci(i, t)
      });
    });
  },
      ki = function ki(e) {
    return e ? e.split(",")[0] : "";
  },
      Hi = function Hi(l, u) {
    return function () {
      var a = this;
      a.state.set("value", null), l.on("init nodeChange", function (e) {
        var t,
            n,
            i,
            r,
            o = l.queryCommandValue("FontName"),
            s = (t = u, r = (n = o) ? n.toLowerCase() : "", w.each(t, function (e) {
          e.value.toLowerCase() === r && (i = e.value);
        }), w.each(t, function (e) {
          i || ki(e.value).toLowerCase() !== ki(r).toLowerCase() || (i = e.value);
        }), i);
        a.value(s || null), !s && o && a.text(ki(o));
      });
    };
  },
      Si = function Si(n) {
    n.addButton("fontselect", function () {
      var e,
          t = (e = function (e) {
        for (var t = (e = e.replace(/;$/, "").split(";")).length; t--;) {
          e[t] = e[t].split("=");
        }

        return e;
      }(n.settings.font_formats || "Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats"), w.map(e, function (e) {
        return {
          text: {
            raw: e[0]
          },
          value: e[1],
          textStyle: -1 === e[1].indexOf("dings") ? "font-family:" + e[1] : ""
        };
      }));
      return {
        type: "listbox",
        text: "Font Family",
        tooltip: "Font Family",
        values: t,
        fixedWidth: !0,
        onPostRender: Hi(n, t),
        onselect: function onselect(e) {
          e.control.settings.value && n.execCommand("FontName", !1, e.control.settings.value);
        }
      };
    });
  },
      Ti = function Ti(e) {
    Si(e);
  },
      Mi = function Mi(e, t) {
    return /[0-9.]+px$/.test(e) ? (n = 72 * parseInt(e, 10) / 96, i = t || 0, r = Math.pow(10, i), Math.round(n * r) / r + "pt") : e;
    var n, i, r;
  },
      Ni = function Ni(e, t, n) {
    var i;
    return w.each(e, function (e) {
      e.value === n ? i = n : e.value === t && (i = t);
    }), i;
  },
      Pi = function Pi(n) {
    n.addButton("fontsizeselect", function () {
      var e,
          s,
          a,
          t = (e = n.settings.fontsize_formats || "8pt 10pt 12pt 14pt 18pt 24pt 36pt", w.map(e.split(" "), function (e) {
        var t = e,
            n = e,
            i = e.split("=");
        return 1 < i.length && (t = i[0], n = i[1]), {
          text: t,
          value: n
        };
      }));
      return {
        type: "listbox",
        text: "Font Sizes",
        tooltip: "Font Sizes",
        values: t,
        fixedWidth: !0,
        onPostRender: (s = n, a = t, function () {
          var o = this;
          s.on("init nodeChange", function (e) {
            var t, n, i, r;
            if (t = s.queryCommandValue("FontSize")) for (i = 3; !r && 0 <= i; i--) {
              n = Mi(t, i), r = Ni(a, n, t);
            }
            o.value(r || null), r || o.text(n);
          });
        }),
        onclick: function onclick(e) {
          e.control.settings.value && n.execCommand("FontSize", !1, e.control.settings.value);
        }
      };
    });
  },
      Wi = function Wi(e) {
    Pi(e);
  },
      Di = function Di(n, e) {
    var i = e.length;
    return w.each(e, function (e) {
      e.menu && (e.hidden = 0 === Di(n, e.menu));
      var t = e.format;
      t && (e.hidden = !n.formatter.canApply(t)), e.hidden && i--;
    }), i;
  },
      Oi = function Oi(n, e) {
    var i = e.items().length;
    return e.items().each(function (e) {
      e.menu && e.visible(0 < Oi(n, e.menu)), !e.menu && e.settings.menu && e.visible(0 < Di(n, e.settings.menu));
      var t = e.settings.format;
      t && e.visible(n.formatter.canApply(t)), e.visible() || i--;
    }), i;
  },
      Ai = function Ai(e) {
    var i,
        r,
        o,
        t,
        _s,
        n,
        a,
        l,
        u = (r = 0, o = [], t = [{
      title: "Headings",
      items: [{
        title: "Heading 1",
        format: "h1"
      }, {
        title: "Heading 2",
        format: "h2"
      }, {
        title: "Heading 3",
        format: "h3"
      }, {
        title: "Heading 4",
        format: "h4"
      }, {
        title: "Heading 5",
        format: "h5"
      }, {
        title: "Heading 6",
        format: "h6"
      }]
    }, {
      title: "Inline",
      items: [{
        title: "Bold",
        icon: "bold",
        format: "bold"
      }, {
        title: "Italic",
        icon: "italic",
        format: "italic"
      }, {
        title: "Underline",
        icon: "underline",
        format: "underline"
      }, {
        title: "Strikethrough",
        icon: "strikethrough",
        format: "strikethrough"
      }, {
        title: "Superscript",
        icon: "superscript",
        format: "superscript"
      }, {
        title: "Subscript",
        icon: "subscript",
        format: "subscript"
      }, {
        title: "Code",
        icon: "code",
        format: "code"
      }]
    }, {
      title: "Blocks",
      items: [{
        title: "Paragraph",
        format: "p"
      }, {
        title: "Blockquote",
        format: "blockquote"
      }, {
        title: "Div",
        format: "div"
      }, {
        title: "Pre",
        format: "pre"
      }]
    }, {
      title: "Alignment",
      items: [{
        title: "Left",
        icon: "alignleft",
        format: "alignleft"
      }, {
        title: "Center",
        icon: "aligncenter",
        format: "aligncenter"
      }, {
        title: "Right",
        icon: "alignright",
        format: "alignright"
      }, {
        title: "Justify",
        icon: "alignjustify",
        format: "alignjustify"
      }]
    }], _s = function s(e) {
      var i = [];
      if (e) return w.each(e, function (e) {
        var t = {
          text: e.title,
          icon: e.icon
        };
        if (e.items) t.menu = _s(e.items);else {
          var n = e.format || "custom" + r++;
          e.format || (e.name = n, o.push(e)), t.format = n, t.cmd = e.cmd;
        }
        i.push(t);
      }), i;
    }, (i = e).on("init", function () {
      w.each(o, function (e) {
        i.formatter.register(e.name, e);
      });
    }), {
      type: "menu",
      items: i.settings.style_formats_merge ? i.settings.style_formats ? _s(t.concat(i.settings.style_formats)) : _s(t) : _s(i.settings.style_formats || t),
      onPostRender: function onPostRender(e) {
        i.fire("renderFormatsMenu", {
          control: e.control
        });
      },
      itemDefaults: {
        preview: !0,
        textStyle: function textStyle() {
          if (this.settings.format) return i.formatter.getCssText(this.settings.format);
        },
        onPostRender: function onPostRender() {
          var n = this;
          n.parent().on("show", function () {
            var e, t;
            (e = n.settings.format) && (n.disabled(!i.formatter.canApply(e)), n.active(i.formatter.match(e))), (t = n.settings.cmd) && n.active(i.queryCommandState(t));
          });
        },
        onclick: function onclick() {
          this.settings.format && _i(i, this.settings.format)(), this.settings.cmd && i.execCommand(this.settings.cmd);
        }
      }
    });

    n = u, e.addMenuItem("formats", {
      text: "Formats",
      menu: n
    }), l = u, (a = e).addButton("styleselect", {
      type: "menubutton",
      text: "Formats",
      menu: l,
      onShowMenu: function onShowMenu() {
        a.settings.style_formats_autohide && Oi(a, this.menu);
      }
    });
  },
      Bi = function Bi(n, e) {
    return function () {
      var r,
          o,
          s,
          t = [];
      return w.each(e, function (e) {
        t.push({
          text: e[0],
          value: e[1],
          textStyle: function textStyle() {
            return n.formatter.getCssText(e[1]);
          }
        });
      }), {
        type: "listbox",
        text: e[0][0],
        values: t,
        fixedWidth: !0,
        onselect: function onselect(e) {
          if (e.control) {
            var t = e.control.value();

            _i(n, t)();
          }
        },
        onPostRender: (r = n, o = t, function () {
          var t = this;
          r.on("nodeChange", function (e) {
            var n = r.formatter,
                i = null;
            w.each(e.parents, function (t) {
              if (w.each(o, function (e) {
                if (s ? n.matchNode(t, s, {
                  value: e.value
                }) && (i = e.value) : n.matchNode(t, e.value) && (i = e.value), i) return !1;
              }), i) return !1;
            }), t.value(i);
          });
        })
      };
    };
  },
      Li = function Li(e) {
    var t,
        n,
        i = function (e) {
      for (var t = (e = e.replace(/;$/, "").split(";")).length; t--;) {
        e[t] = e[t].split("=");
      }

      return e;
    }(e.settings.block_formats || "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre");

    e.addMenuItem("blockformats", {
      text: "Blocks",
      menu: (t = e, n = i, w.map(n, function (e) {
        return {
          text: e[0],
          onclick: _i(t, e[1]),
          textStyle: function textStyle() {
            return t.formatter.getCssText(e[1]);
          }
        };
      }))
    }), e.addButton("formatselect", Bi(e, i));
  },
      zi = function zi(t, e) {
    var n, i;
    if ("string" == typeof e) i = e.split(" ");else if (w.isArray(e)) return function (e) {
      for (var t = [], n = 0, i = e.length; n < i; ++n) {
        if (!V(e[n])) throw new Error("Arr.flatten item " + n + " was not an array, input: " + e);
        X.apply(t, e[n]);
      }

      return t;
    }(w.map(e, function (e) {
      return zi(t, e);
    }));
    return n = w.grep(i, function (e) {
      return "|" === e || e in t.menuItems;
    }), w.map(n, function (e) {
      return "|" === e ? {
        text: "-"
      } : t.menuItems[e];
    });
  },
      Ii = function Ii(e) {
    return e && "-" === e.text;
  },
      Fi = function Fi(n) {
    var i = Z(n, function (e, t) {
      return !Ii(e) || !Ii(n[t - 1]);
    });
    return Z(i, function (e, t) {
      return !Ii(e) || 0 < t && t < i.length - 1;
    });
  },
      Ui = function Ui(e) {
    var t,
        n,
        i,
        r,
        o = e.settings.insert_button_items;
    return Fi(o ? zi(e, o) : (t = e, n = "insert", i = [{
      text: "-"
    }], r = w.grep(t.menuItems, function (e) {
      return e.context === n;
    }), w.each(r, function (e) {
      "before" === e.separator && i.push({
        text: "|"
      }), e.prependToContext ? i.unshift(e) : i.push(e), "after" === e.separator && i.push({
        text: "|"
      });
    }), i));
  },
      Vi = function Vi(e) {
    var t;
    (t = e).addButton("insert", {
      type: "menubutton",
      icon: "insert",
      menu: [],
      oncreatemenu: function oncreatemenu() {
        this.menu.add(Ui(t)), this.menu.renderNew();
      }
    });
  },
      Yi = function Yi(e) {
    var n, i, r;
    n = e, w.each({
      bold: "Bold",
      italic: "Italic",
      underline: "Underline",
      strikethrough: "Strikethrough",
      subscript: "Subscript",
      superscript: "Superscript"
    }, function (e, t) {
      n.addButton(t, {
        active: !1,
        tooltip: e,
        onPostRender: Ci(n, t),
        onclick: _i(n, t)
      });
    }), i = e, w.each({
      outdent: ["Decrease indent", "Outdent"],
      indent: ["Increase indent", "Indent"],
      cut: ["Cut", "Cut"],
      copy: ["Copy", "Copy"],
      paste: ["Paste", "Paste"],
      help: ["Help", "mceHelp"],
      selectall: ["Select all", "SelectAll"],
      visualaid: ["Visual aids", "mceToggleVisualAid"],
      newdocument: ["New document", "mceNewDocument"],
      removeformat: ["Clear formatting", "RemoveFormat"],
      remove: ["Remove", "Delete"]
    }, function (e, t) {
      i.addButton(t, {
        tooltip: e[0],
        cmd: e[1]
      });
    }), r = e, w.each({
      blockquote: ["Blockquote", "mceBlockQuote"],
      subscript: ["Subscript", "Subscript"],
      superscript: ["Superscript", "Superscript"]
    }, function (e, t) {
      r.addButton(t, {
        active: !1,
        tooltip: e[0],
        cmd: e[1],
        onPostRender: Ci(r, t)
      });
    });
  },
      $i = function $i(e) {
    var n;
    Yi(e), n = e, w.each({
      bold: ["Bold", "Bold", "Meta+B"],
      italic: ["Italic", "Italic", "Meta+I"],
      underline: ["Underline", "Underline", "Meta+U"],
      strikethrough: ["Strikethrough", "Strikethrough"],
      subscript: ["Subscript", "Subscript"],
      superscript: ["Superscript", "Superscript"],
      removeformat: ["Clear formatting", "RemoveFormat"],
      newdocument: ["New document", "mceNewDocument"],
      cut: ["Cut", "Cut", "Meta+X"],
      copy: ["Copy", "Copy", "Meta+C"],
      paste: ["Paste", "Paste", "Meta+V"],
      selectall: ["Select all", "SelectAll", "Meta+A"]
    }, function (e, t) {
      n.addMenuItem(t, {
        text: e[0],
        icon: t,
        shortcut: e[2],
        cmd: e[1]
      });
    }), n.addMenuItem("codeformat", {
      text: "Code",
      icon: "code",
      onclick: _i(n, "code")
    });
  },
      qi = function qi(n, i) {
    return function () {
      var e = this,
          t = function t() {
        var e = "redo" === i ? "hasRedo" : "hasUndo";
        return !!n.undoManager && n.undoManager[e]();
      };

      e.disabled(!t()), n.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode", function () {
        e.disabled(n.readonly || !t());
      });
    };
  },
      Xi = function Xi(e) {
    var t, n;
    (t = e).addMenuItem("undo", {
      text: "Undo",
      icon: "undo",
      shortcut: "Meta+Z",
      onPostRender: qi(t, "undo"),
      cmd: "undo"
    }), t.addMenuItem("redo", {
      text: "Redo",
      icon: "redo",
      shortcut: "Meta+Y",
      onPostRender: qi(t, "redo"),
      cmd: "redo"
    }), (n = e).addButton("undo", {
      tooltip: "Undo",
      onPostRender: qi(n, "undo"),
      cmd: "undo"
    }), n.addButton("redo", {
      tooltip: "Redo",
      onPostRender: qi(n, "redo"),
      cmd: "redo"
    });
  },
      ji = function ji(e) {
    var t, n;
    (t = e).addMenuItem("visualaid", {
      text: "Visual aids",
      selectable: !0,
      onPostRender: (n = t, function () {
        var t = this;
        n.on("VisualAid", function (e) {
          t.active(e.hasVisual);
        }), t.active(n.hasVisual);
      }),
      cmd: "mceToggleVisualAid"
    });
  },
      Ji = {
    setup: function setup(e) {
      var t;
      e.rtl && (rt.rtl = !0), e.on("mousedown progressstate", function () {
        Ct.hideAll();
      }), (t = e).settings.ui_container && (ce.container = wi(gn.fromDom(_.document.body), t.settings.ui_container).fold(k(null), function (e) {
        return e.dom();
      })), Nt.tooltips = !ce.iOS, rt.translate = function (e) {
        return l.translate(e);
      }, Li(e), Ei(e), $i(e), Xi(e), Wi(e), Ti(e), Ai(e), ji(e), Vi(e);
    }
  },
      Gi = Xt.extend({
    recalc: function recalc(e) {
      var t,
          n,
          i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          d,
          f,
          h,
          m,
          g,
          p,
          v,
          b,
          y,
          x,
          w,
          _,
          R,
          C,
          E,
          k,
          H,
          S,
          T = [],
          M = [];

      t = e.settings, r = e.items().filter(":visible"), o = e.layoutRect(), i = t.columns || Math.ceil(Math.sqrt(r.length)), n = Math.ceil(r.length / i), b = t.spacingH || t.spacing || 0, y = t.spacingV || t.spacing || 0, x = t.alignH || t.align, w = t.alignV || t.align, p = e.paddingBox, S = "reverseRows" in t ? t.reverseRows : e.isRtl(), x && "string" == typeof x && (x = [x]), w && "string" == typeof w && (w = [w]);

      for (d = 0; d < i; d++) {
        T.push(0);
      }

      for (f = 0; f < n; f++) {
        M.push(0);
      }

      for (f = 0; f < n; f++) {
        for (d = 0; d < i && (c = r[f * i + d]); d++) {
          C = (u = c.layoutRect()).minW, E = u.minH, T[d] = C > T[d] ? C : T[d], M[f] = E > M[f] ? E : M[f];
        }
      }

      for (k = o.innerW - p.left - p.right, d = _ = 0; d < i; d++) {
        _ += T[d] + (0 < d ? b : 0), k -= (0 < d ? b : 0) + T[d];
      }

      for (H = o.innerH - p.top - p.bottom, f = R = 0; f < n; f++) {
        R += M[f] + (0 < f ? y : 0), H -= (0 < f ? y : 0) + M[f];
      }

      if (_ += p.left + p.right, R += p.top + p.bottom, (l = {}).minW = _ + (o.w - o.innerW), l.minH = R + (o.h - o.innerH), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH, l.minW = Math.min(l.minW, o.maxW), l.minH = Math.min(l.minH, o.maxH), l.minW = Math.max(l.minW, o.startMinWidth), l.minH = Math.max(l.minH, o.startMinHeight), !o.autoResize || l.minW === o.minW && l.minH === o.minH) {
        var N;
        o.autoResize && ((l = e.layoutRect(l)).contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH), N = "start" === t.packV ? 0 : 0 < H ? Math.floor(H / n) : 0;
        var P = 0,
            W = t.flexWidths;
        if (W) for (d = 0; d < W.length; d++) {
          P += W[d];
        } else P = i;
        var D = k / P;

        for (d = 0; d < i; d++) {
          T[d] += W ? W[d] * D : D;
        }

        for (m = p.top, f = 0; f < n; f++) {
          for (h = p.left, a = M[f] + N, d = 0; d < i && (c = r[S ? f * i + i - 1 - d : f * i + d]); d++) {
            g = c.settings, u = c.layoutRect(), s = Math.max(T[d], u.startMinWidth), u.x = h, u.y = m, "center" === (v = g.alignH || (x ? x[d] || x[0] : null)) ? u.x = h + s / 2 - u.w / 2 : "right" === v ? u.x = h + s - u.w : "stretch" === v && (u.w = s), "center" === (v = g.alignV || (w ? w[d] || w[0] : null)) ? u.y = m + a / 2 - u.h / 2 : "bottom" === v ? u.y = m + a - u.h : "stretch" === v && (u.h = a), c.layoutRect(u), h += s + b, c.recalc && c.recalc();
          }

          m += a + y;
        }
      } else if (l.w = l.minW, l.h = l.minH, e.layoutRect(l), this.recalc(e), null === e._lastRect) {
        var O = e.parent();
        O && (O._lastRect = null, O.recalc());
      }
    }
  }),
      Ki = Nt.extend({
    renderHtml: function renderHtml() {
      var e = this;
      return e.classes.add("iframe"), e.canFocus = !1, '<iframe id="' + e._id + '" class="' + e.classes + '" tabindex="-1" src="' + (e.settings.url || "javascript:''") + '" frameborder="0"></iframe>';
    },
    src: function src(e) {
      this.getEl().src = e;
    },
    html: function html(e, t) {
      var n = this,
          i = this.getEl().contentWindow.document.body;
      return i ? (i.innerHTML = e, t && t()) : u.setTimeout(function () {
        n.html(e);
      }), this;
    }
  }),
      Zi = Nt.extend({
    init: function init(e) {
      this._super(e), this.classes.add("widget").add("infobox"), this.canFocus = !1;
    },
    severity: function severity(e) {
      this.classes.remove("error"), this.classes.remove("warning"), this.classes.remove("success"), this.classes.add(e);
    },
    help: function help(e) {
      this.state.set("help", e);
    },
    renderHtml: function renderHtml() {
      var e = this,
          t = e.classPrefix;
      return '<div id="' + e._id + '" class="' + e.classes + '"><div id="' + e._id + '-body">' + e.encode(e.state.get("text")) + '<button role="button" tabindex="-1"><i class="' + t + "ico " + t + 'i-help"></i></button></div></div>';
    },
    bindStates: function bindStates() {
      var t = this;
      return t.state.on("change:text", function (e) {
        t.getEl("body").firstChild.data = t.encode(e.value), t.state.get("rendered") && t.updateLayoutRect();
      }), t.state.on("change:help", function (e) {
        t.classes.toggle("has-help", e.value), t.state.get("rendered") && t.updateLayoutRect();
      }), t._super();
    }
  }),
      Qi = Nt.extend({
    init: function init(e) {
      var t = this;
      t._super(e), t.classes.add("widget").add("label"), t.canFocus = !1, e.multiline && t.classes.add("autoscroll"), e.strong && t.classes.add("strong");
    },
    initLayoutRect: function initLayoutRect() {
      var e = this,
          t = e._super();

      return e.settings.multiline && (we.getSize(e.getEl()).width > t.maxW && (t.minW = t.maxW, e.classes.add("multiline")), e.getEl().style.width = t.minW + "px", t.startMinH = t.h = t.minH = Math.min(t.maxH, we.getSize(e.getEl()).height)), t;
    },
    repaint: function repaint() {
      return this.settings.multiline || (this.getEl().style.lineHeight = this.layoutRect().h + "px"), this._super();
    },
    severity: function severity(e) {
      this.classes.remove("error"), this.classes.remove("warning"), this.classes.remove("success"), this.classes.add(e);
    },
    renderHtml: function renderHtml() {
      var e,
          t,
          n = this,
          i = n.settings.forId,
          r = n.settings.html ? n.settings.html : n.encode(n.state.get("text"));
      return !i && (t = n.settings.forName) && (e = n.getRoot().find("#" + t)[0]) && (i = e._id), i ? '<label id="' + n._id + '" class="' + n.classes + '"' + (i ? ' for="' + i + '"' : "") + ">" + r + "</label>" : '<span id="' + n._id + '" class="' + n.classes + '">' + r + "</span>";
    },
    bindStates: function bindStates() {
      var t = this;
      return t.state.on("change:text", function (e) {
        t.innerHtml(t.encode(e.value)), t.state.get("rendered") && t.updateLayoutRect();
      }), t._super();
    }
  }),
      er = lt.extend({
    Defaults: {
      role: "toolbar",
      layout: "flow"
    },
    init: function init(e) {
      this._super(e), this.classes.add("toolbar");
    },
    postRender: function postRender() {
      return this.items().each(function (e) {
        e.classes.add("toolbar-item");
      }), this._super();
    }
  }),
      tr = er.extend({
    Defaults: {
      role: "menubar",
      containerCls: "menubar",
      ariaRoot: !0,
      defaults: {
        type: "menubutton"
      }
    }
  }),
      nr = jt.extend({
    init: function init(e) {
      var t = this;
      t._renderOpen = !0, t._super(e), e = t.settings, t.classes.add("menubtn"), e.fixedWidth && t.classes.add("fixed-width"), t.aria("haspopup", !0), t.state.set("menu", e.menu || t.render());
    },
    showMenu: function showMenu(e) {
      var t,
          n = this;
      if (n.menu && n.menu.visible() && !1 !== e) return n.hideMenu();
      n.menu || (t = n.state.get("menu") || [], n.classes.add("opened"), t.length ? t = {
        type: "menu",
        animate: !0,
        items: t
      } : (t.type = t.type || "menu", t.animate = !0), t.renderTo ? n.menu = t.parent(n).show().renderTo() : n.menu = v.create(t).parent(n).renderTo(), n.fire("createmenu"), n.menu.reflow(), n.menu.on("cancel", function (e) {
        e.control.parent() === n.menu && (e.stopPropagation(), n.focus(), n.hideMenu());
      }), n.menu.on("select", function () {
        n.focus();
      }), n.menu.on("show hide", function (e) {
        "hide" === e.type && e.control.parent() === n && n.classes.remove("opened-under"), e.control === n.menu && (n.activeMenu("show" === e.type), n.classes.toggle("opened", "show" === e.type)), n.aria("expanded", "show" === e.type);
      }).fire("show")), n.menu.show(), n.menu.layoutRect({
        w: n.layoutRect().w
      }), n.menu.repaint(), n.menu.moveRel(n.getEl(), n.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"]);
      var i = n.menu.layoutRect(),
          r = n.$el.offset().top + n.layoutRect().h;
      r > i.y && r < i.y + i.h && n.classes.add("opened-under"), n.fire("showmenu");
    },
    hideMenu: function hideMenu() {
      this.menu && (this.menu.items().each(function (e) {
        e.hideMenu && e.hideMenu();
      }), this.menu.hide());
    },
    activeMenu: function activeMenu(e) {
      this.classes.toggle("active", e);
    },
    renderHtml: function renderHtml() {
      var e,
          t = this,
          n = t._id,
          i = t.classPrefix,
          r = t.settings.icon,
          o = t.state.get("text"),
          s = "";
      return (e = t.settings.image) ? (r = "none", "string" != typeof e && (e = _.window.getSelection ? e[0] : e[1]), e = " style=\"background-image: url('" + e + "')\"") : e = "", o && (t.classes.add("btn-has-text"), s = '<span class="' + i + 'txt">' + t.encode(o) + "</span>"), r = t.settings.icon ? i + "ico " + i + "i-" + r : "", t.aria("role", t.parent() instanceof tr ? "menuitem" : "button"), '<div id="' + n + '" class="' + t.classes + '" tabindex="-1" aria-labelledby="' + n + '"><button id="' + n + '-open" role="presentation" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + e + "></i>" : "") + s + ' <i class="' + i + 'caret"></i></button></div>';
    },
    postRender: function postRender() {
      var r = this;
      return r.on("click", function (e) {
        e.control === r && function (e, t) {
          for (; e;) {
            if (t === e) return !0;
            e = e.parentNode;
          }

          return !1;
        }(e.target, r.getEl()) && (r.focus(), r.showMenu(!e.aria), e.aria && r.menu.items().filter(":visible")[0].focus());
      }), r.on("mouseenter", function (e) {
        var t,
            n = e.control,
            i = r.parent();
        n && i && n instanceof nr && n.parent() === i && (i.items().filter("MenuButton").each(function (e) {
          e.hideMenu && e !== n && (e.menu && e.menu.visible() && (t = !0), e.hideMenu());
        }), t && (n.focus(), n.showMenu()));
      }), r._super();
    },
    bindStates: function bindStates() {
      var e = this;
      return e.state.on("change:menu", function () {
        e.menu && e.menu.remove(), e.menu = null;
      }), e._super();
    },
    remove: function remove() {
      this._super(), this.menu && this.menu.remove();
    }
  }),
      ir = Ct.extend({
    Defaults: {
      defaultType: "menuitem",
      border: 1,
      layout: "stack",
      role: "application",
      bodyRole: "menu",
      ariaRoot: !0
    },
    init: function init(e) {
      if (e.autohide = !0, e.constrainToViewport = !0, "function" == typeof e.items && (e.itemsFactory = e.items, e.items = []), e.itemDefaults) for (var t = e.items, n = t.length; n--;) {
        t[n] = w.extend({}, e.itemDefaults, t[n]);
      }
      this._super(e), this.classes.add("menu"), e.animate && 11 !== ce.ie && this.classes.add("animate");
    },
    repaint: function repaint() {
      return this.classes.toggle("menu-align", !0), this._super(), this.getEl().style.height = "", this.getEl("body").style.height = "", this;
    },
    cancel: function cancel() {
      this.hideAll(), this.fire("select");
    },
    load: function load() {
      var t,
          n = this;

      function i() {
        n.throbber && (n.throbber.hide(), n.throbber = null);
      }

      n.settings.itemsFactory && (n.throbber || (n.throbber = new Ht(n.getEl("body"), !0), 0 === n.items().length ? (n.throbber.show(), n.fire("loading")) : n.throbber.show(100, function () {
        n.items().remove(), n.fire("loading");
      }), n.on("hide close", i)), n.requestTime = t = new Date().getTime(), n.settings.itemsFactory(function (e) {
        0 !== e.length ? n.requestTime === t && (n.getEl().style.width = "", n.getEl("body").style.width = "", i(), n.items().remove(), n.getEl("body").innerHTML = "", n.add(e), n.renderNew(), n.fire("loaded")) : n.hide();
      }));
    },
    hideAll: function hideAll() {
      return this.find("menuitem").exec("hideMenu"), this._super();
    },
    preRender: function preRender() {
      var n = this;
      return n.items().each(function (e) {
        var t = e.settings;
        if (t.icon || t.image || t.selectable) return !(n._hasIcons = !0);
      }), n.settings.itemsFactory && n.on("postrender", function () {
        n.settings.itemsFactory && n.load();
      }), n.on("show hide", function (e) {
        e.control === n && ("show" === e.type ? u.setTimeout(function () {
          n.classes.add("in");
        }, 0) : n.classes.remove("in"));
      }), n._super();
    }
  }),
      rr = nr.extend({
    init: function init(i) {
      var t,
          r,
          o,
          n,
          s = this;
      s._super(i), i = s.settings, s._values = t = i.values, t && ("undefined" != typeof i.value && function e(t) {
        for (var n = 0; n < t.length; n++) {
          if (r = t[n].selected || i.value === t[n].value) return o = o || t[n].text, s.state.set("value", t[n].value), !0;
          if (t[n].menu && e(t[n].menu)) return !0;
        }
      }(t), !r && 0 < t.length && (o = t[0].text, s.state.set("value", t[0].value)), s.state.set("menu", t)), s.state.set("text", i.text || o), s.classes.add("listbox"), s.on("select", function (e) {
        var t = e.control;
        n && (e.lastControl = n), i.multiple ? t.active(!t.active()) : s.value(e.control.value()), n = t;
      });
    },
    value: function value(n) {
      return 0 === arguments.length ? this.state.get("value") : (void 0 === n || (this.settings.values && !function t(e) {
        return J(e, function (e) {
          return e.menu ? t(e.menu) : e.value === n;
        });
      }(this.settings.values) ? null === n && this.state.set("value", null) : this.state.set("value", n)), this);
    },
    bindStates: function bindStates() {
      var i = this;
      return i.on("show", function (e) {
        var t, n;
        t = e.control, n = i.value(), t instanceof ir && t.items().each(function (e) {
          e.hasMenus() || e.active(e.value() === n);
        });
      }), i.state.on("change:value", function (t) {
        var n = function e(t, n) {
          var i;
          if (t) for (var r = 0; r < t.length; r++) {
            if (t[r].value === n) return t[r];
            if (t[r].menu && (i = e(t[r].menu, n))) return i;
          }
        }(i.state.get("menu"), t.value);

        n ? i.text(n.text) : i.text(i.settings.text);
      }), i._super();
    }
  }),
      or = Nt.extend({
    Defaults: {
      border: 0,
      role: "menuitem"
    },
    init: function init(e) {
      var t,
          n = this;
      n._super(e), e = n.settings, n.classes.add("menu-item"), e.menu && n.classes.add("menu-item-expand"), e.preview && n.classes.add("menu-item-preview"), "-" !== (t = n.state.get("text")) && "|" !== t || (n.classes.add("menu-item-sep"), n.aria("role", "separator"), n.state.set("text", "-")), e.selectable && (n.aria("role", "menuitemcheckbox"), n.classes.add("menu-item-checkbox"), e.icon = "selected"), e.preview || e.selectable || n.classes.add("menu-item-normal"), n.on("mousedown", function (e) {
        e.preventDefault();
      }), e.menu && !e.ariaHideMenu && n.aria("haspopup", !0);
    },
    hasMenus: function hasMenus() {
      return !!this.settings.menu;
    },
    showMenu: function showMenu() {
      var t,
          n = this,
          e = n.settings,
          i = n.parent();

      if (i.items().each(function (e) {
        e !== n && e.hideMenu();
      }), e.menu) {
        (t = n.menu) ? t.show() : ((t = e.menu).length ? t = {
          type: "menu",
          items: t
        } : t.type = t.type || "menu", i.settings.itemDefaults && (t.itemDefaults = i.settings.itemDefaults), (t = n.menu = v.create(t).parent(n).renderTo()).reflow(), t.on("cancel", function (e) {
          e.stopPropagation(), n.focus(), t.hide();
        }), t.on("show hide", function (e) {
          e.control.items && e.control.items().each(function (e) {
            e.active(e.settings.selected);
          });
        }).fire("show"), t.on("hide", function (e) {
          e.control === t && n.classes.remove("selected");
        }), t.submenu = !0), t._parentMenu = i, t.classes.add("menu-sub");
        var r = t.testMoveRel(n.getEl(), n.isRtl() ? ["tl-tr", "bl-br", "tr-tl", "br-bl"] : ["tr-tl", "br-bl", "tl-tr", "bl-br"]);
        t.moveRel(n.getEl(), r), r = "menu-sub-" + (t.rel = r), t.classes.remove(t._lastRel).add(r), t._lastRel = r, n.classes.add("selected"), n.aria("expanded", !0);
      }
    },
    hideMenu: function hideMenu() {
      var e = this;
      return e.menu && (e.menu.items().each(function (e) {
        e.hideMenu && e.hideMenu();
      }), e.menu.hide(), e.aria("expanded", !1)), e;
    },
    renderHtml: function renderHtml() {
      var e,
          t = this,
          n = t._id,
          i = t.settings,
          r = t.classPrefix,
          o = t.state.get("text"),
          s = t.settings.icon,
          a = "",
          l = i.shortcut,
          u = t.encode(i.url);

      function c(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }

      function d(e) {
        var t = i.match || "";
        return t ? e.replace(new RegExp(c(t), "gi"), function (e) {
          return "!mce~match[" + e + "]mce~match!";
        }) : e;
      }

      function f(e) {
        return e.replace(new RegExp(c("!mce~match["), "g"), "<b>").replace(new RegExp(c("]mce~match!"), "g"), "</b>");
      }

      return s && t.parent().classes.add("menu-has-icons"), i.image && (a = " style=\"background-image: url('" + i.image + "')\""), l && (l = function (e) {
        var t,
            n,
            i = {};

        for (i = ce.mac ? {
          alt: "&#x2325;",
          ctrl: "&#x2318;",
          shift: "&#x21E7;",
          meta: "&#x2318;"
        } : {
          meta: "Ctrl"
        }, e = e.split("+"), t = 0; t < e.length; t++) {
          (n = i[e[t].toLowerCase()]) && (e[t] = n);
        }

        return e.join("+");
      }(l)), s = r + "ico " + r + "i-" + (t.settings.icon || "none"), e = "-" !== o ? '<i class="' + s + '"' + a + "></i>\xa0" : "", o = f(t.encode(d(o))), u = f(t.encode(d(u))), '<div id="' + n + '" class="' + t.classes + '" tabindex="-1">' + e + ("-" !== o ? '<span id="' + n + '-text" class="' + r + 'text">' + o + "</span>" : "") + (l ? '<div id="' + n + '-shortcut" class="' + r + 'menu-shortcut">' + l + "</div>" : "") + (i.menu ? '<div class="' + r + 'caret"></div>' : "") + (u ? '<div class="' + r + 'menu-item-link">' + u + "</div>" : "") + "</div>";
    },
    postRender: function postRender() {
      var t = this,
          n = t.settings,
          e = n.textStyle;

      if ("function" == typeof e && (e = e.call(this)), e) {
        var i = t.getEl("text");
        i && (i.setAttribute("style", e), t._textStyle = e);
      }

      return t.on("mouseenter click", function (e) {
        e.control === t && (n.menu || "click" !== e.type ? (t.showMenu(), e.aria && t.menu.focus(!0)) : (t.fire("select"), u.requestAnimationFrame(function () {
          t.parent().hideAll();
        })));
      }), t._super(), t;
    },
    hover: function hover() {
      return this.parent().items().each(function (e) {
        e.classes.remove("selected");
      }), this.classes.toggle("selected", !0), this;
    },
    active: function active(e) {
      return function (e, t) {
        var n = e._textStyle;

        if (n) {
          var i = e.getEl("text");
          i.setAttribute("style", n), t && (i.style.color = "", i.style.backgroundColor = "");
        }
      }(this, e), void 0 !== e && this.aria("checked", e), this._super(e);
    },
    remove: function remove() {
      this._super(), this.menu && this.menu.remove();
    }
  }),
      sr = Kt.extend({
    Defaults: {
      classes: "radio",
      role: "radio"
    }
  }),
      ar = Nt.extend({
    renderHtml: function renderHtml() {
      var e = this,
          t = e.classPrefix;
      return e.classes.add("resizehandle"), "both" === e.settings.direction && e.classes.add("resizehandle-both"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes + '"><i class="' + t + "ico " + t + 'i-resize"></i></div>';
    },
    postRender: function postRender() {
      var t = this;
      t._super(), t.resizeDragHelper = new ct(this._id, {
        start: function start() {
          t.fire("ResizeStart");
        },
        drag: function drag(e) {
          "both" !== t.settings.direction && (e.deltaX = 0), t.fire("Resize", e);
        },
        stop: function stop() {
          t.fire("ResizeEnd");
        }
      });
    },
    remove: function remove() {
      return this.resizeDragHelper && this.resizeDragHelper.destroy(), this._super();
    }
  });

  function lr(e) {
    var t = "";
    if (e) for (var n = 0; n < e.length; n++) {
      t += '<option value="' + e[n] + '">' + e[n] + "</option>";
    }
    return t;
  }

  var ur = Nt.extend({
    Defaults: {
      classes: "selectbox",
      role: "selectbox",
      options: []
    },
    init: function init(e) {
      var n = this;
      n._super(e), n.settings.size && (n.size = n.settings.size), n.settings.options && (n._options = n.settings.options), n.on("keydown", function (e) {
        var t;
        13 === e.keyCode && (e.preventDefault(), n.parents().reverse().each(function (e) {
          if (e.toJSON) return t = e, !1;
        }), n.fire("submit", {
          data: t.toJSON()
        }));
      });
    },
    options: function options(e) {
      return arguments.length ? (this.state.set("options", e), this) : this.state.get("options");
    },
    renderHtml: function renderHtml() {
      var e,
          t = this,
          n = "";
      return e = lr(t._options), t.size && (n = ' size = "' + t.size + '"'), '<select id="' + t._id + '" class="' + t.classes + '"' + n + ">" + e + "</select>";
    },
    bindStates: function bindStates() {
      var t = this;
      return t.state.on("change:options", function (e) {
        t.getEl().innerHTML = lr(e.value);
      }), t._super();
    }
  });

  function cr(e, t, n) {
    return e < t && (e = t), n < e && (e = n), e;
  }

  function dr(e, t, n) {
    e.setAttribute("aria-" + t, n);
  }

  function fr(e, t) {
    var n, i, r, o, s;
    "v" === e.settings.orientation ? (r = "top", i = "height", n = "h") : (r = "left", i = "width", n = "w"), s = e.getEl("handle"), o = ((e.layoutRect()[n] || 100) - we.getSize(s)[i]) * ((t - e._minValue) / (e._maxValue - e._minValue)) + "px", s.style[r] = o, s.style.height = e.layoutRect().h + "px", dr(s, "valuenow", t), dr(s, "valuetext", "" + e.settings.previewFilter(t)), dr(s, "valuemin", e._minValue), dr(s, "valuemax", e._maxValue);
  }

  var hr = Nt.extend({
    init: function init(e) {
      var t = this;
      e.previewFilter || (e.previewFilter = function (e) {
        return Math.round(100 * e) / 100;
      }), t._super(e), t.classes.add("slider"), "v" === e.orientation && t.classes.add("vertical"), t._minValue = $(e.minValue) ? e.minValue : 0, t._maxValue = $(e.maxValue) ? e.maxValue : 100, t._initValue = t.state.get("value");
    },
    renderHtml: function renderHtml() {
      var e = this._id,
          t = this.classPrefix;
      return '<div id="' + e + '" class="' + this.classes + '"><div id="' + e + '-handle" class="' + t + 'slider-handle" role="slider" tabindex="-1"></div></div>';
    },
    reset: function reset() {
      this.value(this._initValue).repaint();
    },
    postRender: function postRender() {
      var e,
          t,
          n,
          i,
          r,
          o,
          s,
          a,
          l,
          u,
          c,
          d,
          f,
          h,
          m = this;
      e = m._minValue, t = m._maxValue, "v" === m.settings.orientation ? (n = "screenY", i = "top", r = "height", o = "h") : (n = "screenX", i = "left", r = "width", o = "w"), m._super(), function (o, s) {
        function t(e) {
          var t, n, i, r;
          t = cr(t = (((t = m.value()) + (r = n = o)) / ((i = s) - r) + .05 * e) * (i - n) - n, o, s), m.value(t), m.fire("dragstart", {
            value: t
          }), m.fire("drag", {
            value: t
          }), m.fire("dragend", {
            value: t
          });
        }

        m.on("keydown", function (e) {
          switch (e.keyCode) {
            case 37:
            case 38:
              t(-1);
              break;

            case 39:
            case 40:
              t(1);
          }
        });
      }(e, t), s = e, a = t, l = m.getEl("handle"), m._dragHelper = new ct(m._id, {
        handle: m._id + "-handle",
        start: function start(e) {
          u = e[n], c = parseInt(m.getEl("handle").style[i], 10), d = (m.layoutRect()[o] || 100) - we.getSize(l)[r], m.fire("dragstart", {
            value: h
          });
        },
        drag: function drag(e) {
          var t = e[n] - u;
          f = cr(c + t, 0, d), l.style[i] = f + "px", h = s + f / d * (a - s), m.value(h), m.tooltip().text("" + m.settings.previewFilter(h)).show().moveRel(l, "bc tc"), m.fire("drag", {
            value: h
          });
        },
        stop: function stop() {
          m.tooltip().hide(), m.fire("dragend", {
            value: h
          });
        }
      });
    },
    repaint: function repaint() {
      this._super(), fr(this, this.value());
    },
    bindStates: function bindStates() {
      var t = this;
      return t.state.on("change:value", function (e) {
        fr(t, e.value);
      }), t._super();
    }
  }),
      mr = Nt.extend({
    renderHtml: function renderHtml() {
      return this.classes.add("spacer"), this.canFocus = !1, '<div id="' + this._id + '" class="' + this.classes + '"></div>';
    }
  }),
      gr = nr.extend({
    Defaults: {
      classes: "widget btn splitbtn",
      role: "button"
    },
    repaint: function repaint() {
      var e,
          t,
          n = this.getEl(),
          i = this.layoutRect();
      return this._super(), e = n.firstChild, t = n.lastChild, ye(e).css({
        width: i.w - we.getSize(t).width,
        height: i.h - 2
      }), ye(t).css({
        height: i.h - 2
      }), this;
    },
    activeMenu: function activeMenu(e) {
      ye(this.getEl().lastChild).toggleClass(this.classPrefix + "active", e);
    },
    renderHtml: function renderHtml() {
      var e,
          t,
          n = this,
          i = n._id,
          r = n.classPrefix,
          o = n.state.get("icon"),
          s = n.state.get("text"),
          a = n.settings,
          l = "";
      return (e = a.image) ? (o = "none", "string" != typeof e && (e = _.window.getSelection ? e[0] : e[1]), e = " style=\"background-image: url('" + e + "')\"") : e = "", o = a.icon ? r + "ico " + r + "i-" + o : "", s && (n.classes.add("btn-has-text"), l = '<span class="' + r + 'txt">' + n.encode(s) + "</span>"), t = "boolean" == typeof a.active ? ' aria-pressed="' + a.active + '"' : "", '<div id="' + i + '" class="' + n.classes + '" role="button"' + t + ' tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">' + (o ? '<i class="' + o + '"' + e + "></i>" : "") + l + '</button><button type="button" class="' + r + 'open" hidefocus="1" tabindex="-1">' + (n._menuBtnText ? (o ? "\xa0" : "") + n._menuBtnText : "") + ' <i class="' + r + 'caret"></i></button></div>';
    },
    postRender: function postRender() {
      var n = this.settings.onclick;
      return this.on("click", function (e) {
        var t = e.target;
        if (e.control === this) for (; t;) {
          if (e.aria && "down" !== e.aria.key || "BUTTON" === t.nodeName && -1 === t.className.indexOf("open")) return e.stopImmediatePropagation(), void (n && n.call(this, e));
          t = t.parentNode;
        }
      }), delete this.settings.onclick, this._super();
    }
  }),
      pr = xi.extend({
    Defaults: {
      containerClass: "stack-layout",
      controlClass: "stack-layout-item",
      endClass: "break"
    },
    isNative: function isNative() {
      return !0;
    }
  }),
      vr = pt.extend({
    Defaults: {
      layout: "absolute",
      defaults: {
        type: "panel"
      }
    },
    activateTab: function activateTab(n) {
      var e;
      this.activeTabId && (e = this.getEl(this.activeTabId), ye(e).removeClass(this.classPrefix + "active"), e.setAttribute("aria-selected", "false")), this.activeTabId = "t" + n, (e = this.getEl("t" + n)).setAttribute("aria-selected", "true"), ye(e).addClass(this.classPrefix + "active"), this.items()[n].show().fire("showtab"), this.reflow(), this.items().each(function (e, t) {
        n !== t && e.hide();
      });
    },
    renderHtml: function renderHtml() {
      var i = this,
          e = i._layout,
          r = "",
          o = i.classPrefix;
      return i.preRender(), e.preRender(i), i.items().each(function (e, t) {
        var n = i._id + "-t" + t;
        e.aria("role", "tabpanel"), e.aria("labelledby", n), r += '<div id="' + n + '" class="' + o + 'tab" unselectable="on" role="tab" aria-controls="' + e._id + '" aria-selected="false" tabIndex="-1">' + i.encode(e.settings.title) + "</div>";
      }), '<div id="' + i._id + '" class="' + i.classes + '" hidefocus="1" tabindex="-1"><div id="' + i._id + '-head" class="' + o + 'tabs" role="tablist">' + r + '</div><div id="' + i._id + '-body" class="' + i.bodyClasses + '">' + e.renderHtml(i) + "</div></div>";
    },
    postRender: function postRender() {
      var i = this;
      i._super(), i.settings.activeTab = i.settings.activeTab || 0, i.activateTab(i.settings.activeTab), this.on("click", function (e) {
        var t = e.target.parentNode;
        if (t && t.id === i._id + "-head") for (var n = t.childNodes.length; n--;) {
          t.childNodes[n] === e.target && i.activateTab(n);
        }
      });
    },
    initLayoutRect: function initLayoutRect() {
      var e,
          t,
          n,
          i = this;
      t = (t = we.getSize(i.getEl("head")).width) < 0 ? 0 : t, n = 0, i.items().each(function (e) {
        t = Math.max(t, e.layoutRect().minW), n = Math.max(n, e.layoutRect().minH);
      }), i.items().each(function (e) {
        e.settings.x = 0, e.settings.y = 0, e.settings.w = t, e.settings.h = n, e.layoutRect({
          x: 0,
          y: 0,
          w: t,
          h: n
        });
      });
      var r = we.getSize(i.getEl("head")).height;
      return i.settings.minWidth = t, i.settings.minHeight = n + r, (e = i._super()).deltaH += r, e.innerH = e.h - e.deltaH, e;
    }
  }),
      br = Nt.extend({
    init: function init(e) {
      var n = this;
      n._super(e), n.classes.add("textbox"), e.multiline ? n.classes.add("multiline") : (n.on("keydown", function (e) {
        var t;
        13 === e.keyCode && (e.preventDefault(), n.parents().reverse().each(function (e) {
          if (e.toJSON) return t = e, !1;
        }), n.fire("submit", {
          data: t.toJSON()
        }));
      }), n.on("keyup", function (e) {
        n.state.set("value", e.target.value);
      }));
    },
    repaint: function repaint() {
      var e,
          t,
          n,
          i,
          r,
          o = this,
          s = 0;
      e = o.getEl().style, t = o._layoutRect, r = o._lastRepaintRect || {};
      var a = _.document;
      return !o.settings.multiline && a.all && (!a.documentMode || a.documentMode <= 8) && (e.lineHeight = t.h - s + "px"), i = (n = o.borderBox).left + n.right + 8, s = n.top + n.bottom + (o.settings.multiline ? 8 : 0), t.x !== r.x && (e.left = t.x + "px", r.x = t.x), t.y !== r.y && (e.top = t.y + "px", r.y = t.y), t.w !== r.w && (e.width = t.w - i + "px", r.w = t.w), t.h !== r.h && (e.height = t.h - s + "px", r.h = t.h), o._lastRepaintRect = r, o.fire("repaint", {}, !1), o;
    },
    renderHtml: function renderHtml() {
      var t,
          e,
          n = this,
          i = n.settings;
      return t = {
        id: n._id,
        hidefocus: "1"
      }, w.each(["rows", "spellcheck", "maxLength", "size", "readonly", "min", "max", "step", "list", "pattern", "placeholder", "required", "multiple"], function (e) {
        t[e] = i[e];
      }), n.disabled() && (t.disabled = "disabled"), i.subtype && (t.type = i.subtype), (e = we.create(i.multiline ? "textarea" : "input", t)).value = n.state.get("value"), e.className = n.classes.toString(), e.outerHTML;
    },
    value: function value(e) {
      return arguments.length ? (this.state.set("value", e), this) : (this.state.get("rendered") && this.state.set("value", this.getEl().value), this.state.get("value"));
    },
    postRender: function postRender() {
      var t = this;
      t.getEl().value = t.state.get("value"), t._super(), t.$el.on("change", function (e) {
        t.state.set("value", e.target.value), t.fire("change", e);
      });
    },
    bindStates: function bindStates() {
      var t = this;
      return t.state.on("change:value", function (e) {
        t.getEl().value !== e.value && (t.getEl().value = e.value);
      }), t.state.on("change:disabled", function (e) {
        t.getEl().disabled = e.value;
      }), t._super();
    },
    remove: function remove() {
      this.$el.off(), this._super();
    }
  }),
      yr = function yr() {
    return {
      Selector: Ie,
      Collection: Ve,
      ReflowQueue: Ke,
      Control: rt,
      Factory: v,
      KeyboardNavigation: st,
      Container: lt,
      DragHelper: ct,
      Scrollable: gt,
      Panel: pt,
      Movable: He,
      Resizable: vt,
      FloatPanel: Ct,
      Window: It,
      MessageBox: Yt,
      Tooltip: Mt,
      Widget: Nt,
      Progress: Pt,
      Notification: Dt,
      Layout: qt,
      AbsoluteLayout: Xt,
      Button: jt,
      ButtonGroup: Gt,
      Checkbox: Kt,
      ComboBox: Qt,
      ColorBox: en,
      PanelButton: tn,
      ColorButton: rn,
      ColorPicker: sn,
      Path: ln,
      ElementPath: un,
      FormItem: cn,
      Form: dn,
      FieldSet: fn,
      FilePicker: vi,
      FitLayout: bi,
      FlexLayout: yi,
      FlowLayout: xi,
      FormatControls: Ji,
      GridLayout: Gi,
      Iframe: Ki,
      InfoBox: Zi,
      Label: Qi,
      Toolbar: er,
      MenuBar: tr,
      MenuButton: nr,
      MenuItem: or,
      Throbber: Ht,
      Menu: ir,
      ListBox: rr,
      Radio: sr,
      ResizeHandle: ar,
      SelectBox: ur,
      Slider: hr,
      Spacer: mr,
      SplitButton: gr,
      StackLayout: pr,
      TabPanel: vr,
      TextBox: br,
      DropZone: an,
      BrowseButton: Jt
    };
  },
      xr = function xr(n) {
    n.ui ? w.each(yr(), function (e, t) {
      n.ui[t] = e;
    }) : n.ui = yr();
  };

  w.each(yr(), function (e, t) {
    v.add(t, e);
  }), xr(window.tinymce ? window.tinymce : {}), r.add("modern", function (e) {
    return Ji.setup(e), $t(e);
  });
}(window);