"use strict";

!function (l) {
  "use strict";

  var i,
      e = tinymce.util.Tools.resolve("tinymce.PluginManager"),
      d = function d(e) {
    return !1 !== e.settings.image_dimensions;
  },
      u = function u(e) {
    return !0 === e.settings.image_advtab;
  },
      m = function m(e) {
    return e.getParam("image_prepend_url", "");
  },
      n = function n(e) {
    return e.getParam("image_class_list");
  },
      r = function r(e) {
    return !1 !== e.settings.image_description;
  },
      a = function a(e) {
    return !0 === e.settings.image_title;
  },
      o = function o(e) {
    return !0 === e.settings.image_caption;
  },
      c = function c(e) {
    return e.getParam("image_list", !1);
  },
      s = function s(e) {
    return e.getParam("images_upload_url", !1);
  },
      g = function g(e) {
    return e.getParam("images_upload_handler", !1);
  },
      f = function f(e) {
    return e.getParam("images_upload_url");
  },
      p = function p(e) {
    return e.getParam("images_upload_handler");
  },
      h = function h(e) {
    return e.getParam("images_upload_base_path");
  },
      v = function v(e) {
    return e.getParam("images_upload_credentials");
  },
      b = "undefined" != typeof l.window ? l.window : Function("return this;")(),
      y = function y(e, t) {
    return function (e, t) {
      for (var n = t !== undefined && null !== t ? t : b, r = 0; r < e.length && n !== undefined && null !== n; ++r) {
        n = n[e[r]];
      }

      return n;
    }(e.split("."), t);
  },
      x = {
    getOrDie: function getOrDie(e, t) {
      var n = y(e, t);
      if (n === undefined || null === n) throw new Error(e + " not available on this browser");
      return n;
    }
  },
      w = tinymce.util.Tools.resolve("tinymce.util.Promise"),
      C = tinymce.util.Tools.resolve("tinymce.util.Tools"),
      S = tinymce.util.Tools.resolve("tinymce.util.XHR"),
      N = function N(e, t) {
    return Math.max(parseInt(e, 10), parseInt(t, 10));
  },
      _ = function _(e, n) {
    var r = l.document.createElement("img");

    function t(e, t) {
      r.parentNode && r.parentNode.removeChild(r), n({
        width: e,
        height: t
      });
    }

    r.onload = function () {
      t(N(r.width, r.clientWidth), N(r.height, r.clientHeight));
    }, r.onerror = function () {
      t(0, 0);
    };
    var a = r.style;
    a.visibility = "hidden", a.position = "fixed", a.bottom = a.left = "0px", a.width = a.height = "auto", l.document.body.appendChild(r), r.src = e;
  },
      T = function T(e, a, t) {
    return function n(e, r) {
      return r = r || [], C.each(e, function (e) {
        var t = {
          text: e.text || e.title
        };
        e.menu ? t.menu = n(e.menu) : (t.value = e.value, a(t)), r.push(t);
      }), r;
    }(e, t || []);
  },
      A = function A(e) {
    return e && (e = e.replace(/px$/, "")), e;
  },
      R = function R(e) {
    return 0 < e.length && /^[0-9]+$/.test(e) && (e += "px"), e;
  },
      I = function I(e) {
    if (e.margin) {
      var t = e.margin.split(" ");

      switch (t.length) {
        case 1:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[0], e["margin-bottom"] = e["margin-bottom"] || t[0], e["margin-left"] = e["margin-left"] || t[0];
          break;

        case 2:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[1], e["margin-bottom"] = e["margin-bottom"] || t[0], e["margin-left"] = e["margin-left"] || t[1];
          break;

        case 3:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[1], e["margin-bottom"] = e["margin-bottom"] || t[2], e["margin-left"] = e["margin-left"] || t[1];
          break;

        case 4:
          e["margin-top"] = e["margin-top"] || t[0], e["margin-right"] = e["margin-right"] || t[1], e["margin-bottom"] = e["margin-bottom"] || t[2], e["margin-left"] = e["margin-left"] || t[3];
      }

      delete e.margin;
    }

    return e;
  },
      t = function t(e, _t) {
    var n = c(e);
    "string" == typeof n ? S.send({
      url: n,
      success: function success(e) {
        _t(JSON.parse(e));
      }
    }) : "function" == typeof n ? n(_t) : _t(n);
  },
      O = function O(e, t, n) {
    function r() {
      n.onload = n.onerror = null, e.selection && (e.selection.select(n), e.nodeChanged());
    }

    n.onload = function () {
      t.width || t.height || !d(e) || e.dom.setAttribs(n, {
        width: n.clientWidth,
        height: n.clientHeight
      }), r();
    }, n.onerror = r;
  },
      L = function L(r) {
    return new w(function (e, t) {
      var n = new (x.getOrDie("FileReader"))();
      n.onload = function () {
        e(n.result);
      }, n.onerror = function () {
        t(n.error.message);
      }, n.readAsDataURL(r);
    });
  },
      P = tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),
      U = Object.prototype.hasOwnProperty,
      E = (i = function i(e, t) {
    return t;
  }, function () {
    for (var e = new Array(arguments.length), t = 0; t < e.length; t++) {
      e[t] = arguments[t];
    }

    if (0 === e.length) throw new Error("Can't merge zero objects");

    for (var n = {}, r = 0; r < e.length; r++) {
      var a = e[r];

      for (var o in a) {
        U.call(a, o) && (n[o] = i(n[o], a[o]));
      }
    }

    return n;
  }),
      k = P.DOM,
      M = function M(e) {
    return e.style.marginLeft && e.style.marginRight && e.style.marginLeft === e.style.marginRight ? A(e.style.marginLeft) : "";
  },
      D = function D(e) {
    return e.style.marginTop && e.style.marginBottom && e.style.marginTop === e.style.marginBottom ? A(e.style.marginTop) : "";
  },
      z = function z(e) {
    return e.style.borderWidth ? A(e.style.borderWidth) : "";
  },
      B = function B(e, t) {
    return e.hasAttribute(t) ? e.getAttribute(t) : "";
  },
      H = function H(e, t) {
    return e.style[t] ? e.style[t] : "";
  },
      j = function j(e) {
    return null !== e.parentNode && "FIGURE" === e.parentNode.nodeName;
  },
      F = function F(e, t, n) {
    e.setAttribute(t, n);
  },
      W = function W(e) {
    var t, n, r, a;
    j(e) ? (a = (r = e).parentNode, k.insertAfter(r, a), k.remove(a)) : (t = e, n = k.create("figure", {
      "class": "image"
    }), k.insertAfter(n, t), n.appendChild(t), n.appendChild(k.create("figcaption", {
      contentEditable: !0
    }, "Caption")), n.contentEditable = "false");
  },
      J = function J(e, t) {
    var n = e.getAttribute("style"),
        r = t(null !== n ? n : "");
    0 < r.length ? (e.setAttribute("style", r), e.setAttribute("data-mce-style", r)) : e.removeAttribute("style");
  },
      V = function V(e, r) {
    return function (e, t, n) {
      e.style[t] ? (e.style[t] = R(n), J(e, r)) : F(e, t, n);
    };
  },
      G = function G(e, t) {
    return e.style[t] ? A(e.style[t]) : B(e, t);
  },
      $ = function $(e, t) {
    var n = R(t);
    e.style.marginLeft = n, e.style.marginRight = n;
  },
      X = function X(e, t) {
    var n = R(t);
    e.style.marginTop = n, e.style.marginBottom = n;
  },
      q = function q(e, t) {
    var n = R(t);
    e.style.borderWidth = n;
  },
      K = function K(e, t) {
    e.style.borderStyle = t;
  },
      Q = function Q(e) {
    return "FIGURE" === e.nodeName;
  },
      Y = function Y(e, t) {
    var n = l.document.createElement("img");
    return F(n, "style", t.style), (M(n) || "" !== t.hspace) && $(n, t.hspace), (D(n) || "" !== t.vspace) && X(n, t.vspace), (z(n) || "" !== t.border) && q(n, t.border), (H(n, "borderStyle") || "" !== t.borderStyle) && K(n, t.borderStyle), e(n.getAttribute("style"));
  },
      Z = function Z(e, t) {
    return {
      src: B(t, "src"),
      alt: B(t, "alt"),
      title: B(t, "title"),
      width: G(t, "width"),
      height: G(t, "height"),
      "class": B(t, "class"),
      style: e(B(t, "style")),
      caption: j(t),
      hspace: M(t),
      vspace: D(t),
      border: z(t),
      borderStyle: H(t, "borderStyle")
    };
  },
      ee = function ee(e, t, n, r, a) {
    n[r] !== t[r] && a(e, r, n[r]);
  },
      te = function te(r, a) {
    return function (e, t, n) {
      r(e, n), J(e, a);
    };
  },
      ne = function ne(e, t, n) {
    var r = Z(e, n);
    ee(n, r, t, "caption", function (e, t, n) {
      return W(e);
    }), ee(n, r, t, "src", F), ee(n, r, t, "alt", F), ee(n, r, t, "title", F), ee(n, r, t, "width", V(0, e)), ee(n, r, t, "height", V(0, e)), ee(n, r, t, "class", F), ee(n, r, t, "style", te(function (e, t) {
      return F(e, "style", t);
    }, e)), ee(n, r, t, "hspace", te($, e)), ee(n, r, t, "vspace", te(X, e)), ee(n, r, t, "border", te(q, e)), ee(n, r, t, "borderStyle", te(K, e));
  },
      re = function re(e, t) {
    var n = e.dom.styles.parse(t),
        r = I(n),
        a = e.dom.styles.parse(e.dom.styles.serialize(r));
    return e.dom.styles.serialize(a);
  },
      ae = function ae(e) {
    var t = e.selection.getNode(),
        n = e.dom.getParent(t, "figure.image");
    return n ? e.dom.select("img", n)[0] : t && ("IMG" !== t.nodeName || t.getAttribute("data-mce-object") || t.getAttribute("data-mce-placeholder")) ? null : t;
  },
      oe = function oe(t, e) {
    var n = t.dom,
        r = n.getParent(e.parentNode, function (e) {
      return t.schema.getTextBlockElements()[e.nodeName];
    }, t.getBody());
    return r ? n.split(r, e) : e;
  },
      ie = function ie(t) {
    var e = ae(t);
    return e ? Z(function (e) {
      return re(t, e);
    }, e) : {
      src: "",
      alt: "",
      title: "",
      width: "",
      height: "",
      "class": "",
      style: "",
      caption: !1,
      hspace: "",
      vspace: "",
      border: "",
      borderStyle: ""
    };
  },
      le = function le(t, e) {
    var n = function (e, t) {
      var n = l.document.createElement("img");

      if (ne(e, E(t, {
        caption: !1
      }), n), F(n, "alt", t.alt), t.caption) {
        var r = k.create("figure", {
          "class": "image"
        });
        return r.appendChild(n), r.appendChild(k.create("figcaption", {
          contentEditable: !0
        }, "Caption")), r.contentEditable = "false", r;
      }

      return n;
    }(function (e) {
      return re(t, e);
    }, e);

    t.dom.setAttrib(n, "data-mce-id", "__mcenew"), t.focus(), t.selection.setContent(n.outerHTML);
    var r = t.dom.select('*[data-mce-id="__mcenew"]')[0];

    if (t.dom.setAttrib(r, "data-mce-id", null), Q(r)) {
      var a = oe(t, r);
      t.selection.select(a);
    } else t.selection.select(r);
  },
      ue = function ue(e, t) {
    var n = ae(e);
    n ? t.src ? function (t, e) {
      var n,
          r = ae(t);

      if (ne(function (e) {
        return re(t, e);
      }, e, r), n = r, t.dom.setAttrib(n, "src", n.getAttribute("src")), Q(r.parentNode)) {
        var a = r.parentNode;
        oe(t, a), t.selection.select(r.parentNode);
      } else t.selection.select(r), O(t, e, r);
    }(e, t) : function (e, t) {
      if (t) {
        var n = e.dom.is(t.parentNode, "figure.image") ? t.parentNode : t;
        e.dom.remove(n), e.focus(), e.nodeChanged(), e.dom.isEmpty(e.getBody()) && (e.setContent(""), e.selection.setCursorLocation());
      }
    }(e, n) : t.src && le(e, t);
  },
      ce = function ce(n, r) {
    r.find("#style").each(function (e) {
      var t = Y(function (e) {
        return re(n, e);
      }, E({
        src: "",
        alt: "",
        title: "",
        width: "",
        height: "",
        "class": "",
        style: "",
        caption: !1,
        hspace: "",
        vspace: "",
        border: "",
        borderStyle: ""
      }, r.toJSON()));
      e.value(t);
    });
  },
      se = function se(t) {
    return {
      title: "Advanced",
      type: "form",
      pack: "start",
      items: [{
        label: "Style",
        name: "style",
        type: "textbox",
        onchange: (o = t, function (e) {
          var t = o.dom,
              n = e.control.rootControl;

          if (u(o)) {
            var r = n.toJSON(),
                a = t.parseStyle(r.style);
            n.find("#vspace").value(""), n.find("#hspace").value(""), ((a = I(a))["margin-top"] && a["margin-bottom"] || a["margin-right"] && a["margin-left"]) && (a["margin-top"] === a["margin-bottom"] ? n.find("#vspace").value(A(a["margin-top"])) : n.find("#vspace").value(""), a["margin-right"] === a["margin-left"] ? n.find("#hspace").value(A(a["margin-right"])) : n.find("#hspace").value("")), a["border-width"] ? n.find("#border").value(A(a["border-width"])) : n.find("#border").value(""), a["border-style"] ? n.find("#borderStyle").value(a["border-style"]) : n.find("#borderStyle").value(""), n.find("#style").value(t.serializeStyle(t.parseStyle(t.serializeStyle(a))));
          }
        })
      }, {
        type: "form",
        layout: "grid",
        packV: "start",
        columns: 2,
        padding: 0,
        defaults: {
          type: "textbox",
          maxWidth: 50,
          onchange: function onchange(e) {
            ce(t, e.control.rootControl);
          }
        },
        items: [{
          label: "Vertical space",
          name: "vspace"
        }, {
          label: "Border width",
          name: "border"
        }, {
          label: "Horizontal space",
          name: "hspace"
        }, {
          label: "Border style",
          type: "listbox",
          name: "borderStyle",
          width: 90,
          maxWidth: 90,
          onselect: function onselect(e) {
            ce(t, e.control.rootControl);
          },
          values: [{
            text: "Select...",
            value: ""
          }, {
            text: "Solid",
            value: "solid"
          }, {
            text: "Dotted",
            value: "dotted"
          }, {
            text: "Dashed",
            value: "dashed"
          }, {
            text: "Double",
            value: "double"
          }, {
            text: "Groove",
            value: "groove"
          }, {
            text: "Ridge",
            value: "ridge"
          }, {
            text: "Inset",
            value: "inset"
          }, {
            text: "Outset",
            value: "outset"
          }, {
            text: "None",
            value: "none"
          }, {
            text: "Hidden",
            value: "hidden"
          }]
        }]
      }]
    };
    var o;
  },
      de = function de(e, t) {
    e.state.set("oldVal", e.value()), t.state.set("oldVal", t.value());
  },
      me = function me(e, t) {
    var n = e.find("#width")[0],
        r = e.find("#height")[0],
        a = e.find("#constrain")[0];
    n && r && a && t(n, r, a.checked());
  },
      ge = function ge(e, t, n) {
    var r = e.state.get("oldVal"),
        a = t.state.get("oldVal"),
        o = e.value(),
        i = t.value();
    n && r && a && o && i && (o !== r ? (i = Math.round(o / r * i), isNaN(i) || t.value(i)) : (o = Math.round(i / a * o), isNaN(o) || e.value(o))), de(e, t);
  },
      fe = function fe(e) {
    me(e, ge);
  },
      pe = function pe() {
    var e = function e(_e2) {
      fe(_e2.control.rootControl);
    };

    return {
      type: "container",
      label: "Dimensions",
      layout: "flex",
      align: "center",
      spacing: 5,
      items: [{
        name: "width",
        type: "textbox",
        maxLength: 5,
        size: 5,
        onchange: e,
        ariaLabel: "Width"
      }, {
        type: "label",
        text: "x"
      }, {
        name: "height",
        type: "textbox",
        maxLength: 5,
        size: 5,
        onchange: e,
        ariaLabel: "Height"
      }, {
        name: "constrain",
        type: "checkbox",
        checked: !0,
        text: "Constrain proportions"
      }]
    };
  },
      he = function he(e) {
    me(e, de);
  },
      ve = fe,
      be = function be(e) {
    e.meta = e.control.rootControl.toJSON();
  },
      ye = function ye(s, e) {
    var t = [{
      name: "src",
      type: "filepicker",
      filetype: "image",
      label: "Source",
      autofocus: !0,
      onchange: function onchange(e) {
        var t, n, r, a, o, i, l, u, c;
        n = s, i = (t = e).meta || {}, l = t.control, u = l.rootControl, (c = u.find("#image-list")[0]) && c.value(n.convertURL(l.value(), "src")), C.each(i, function (e, t) {
          u.find("#" + t).value(e);
        }), i.width || i.height || (r = n.convertURL(l.value(), "src"), a = m(n), o = new RegExp("^(?:[a-z]+:)?//", "i"), a && !o.test(r) && r.substring(0, a.length) !== a && (r = a + r), l.value(r), _(n.documentBaseURI.toAbsolute(l.value()), function (e) {
          e.width && e.height && d(n) && (u.find("#width").value(e.width), u.find("#height").value(e.height), he(u));
        }));
      },
      onbeforecall: be
    }, e];
    return r(s) && t.push({
      name: "alt",
      type: "textbox",
      label: "Image description"
    }), a(s) && t.push({
      name: "title",
      type: "textbox",
      label: "Image Title"
    }), d(s) && t.push(pe()), n(s) && t.push({
      name: "class",
      type: "listbox",
      label: "Class",
      values: T(n(s), function (e) {
        e.value && (e.textStyle = function () {
          return s.formatter.getCssText({
            inline: "img",
            classes: [e.value]
          });
        });
      })
    }), o(s) && t.push({
      name: "caption",
      type: "checkbox",
      label: "Caption"
    }), t;
  },
      xe = function xe(e, t) {
    return {
      title: "General",
      type: "form",
      items: ye(e, t)
    };
  },
      we = ye,
      Ce = function Ce() {
    return x.getOrDie("URL");
  },
      Se = function Se(e) {
    return Ce().createObjectURL(e);
  },
      Ne = function Ne(e) {
    Ce().revokeObjectURL(e);
  },
      _e = tinymce.util.Tools.resolve("tinymce.ui.Factory"),
      Te = function Te() {};

  function Ae(i) {
    var t = function t(e, r, a, _t2) {
      var o, n;
      (o = new (x.getOrDie("XMLHttpRequest"))()).open("POST", i.url), o.withCredentials = i.credentials, o.upload.onprogress = function (e) {
        _t2(e.loaded / e.total * 100);
      }, o.onerror = function () {
        a("Image upload failed due to a XHR Transport error. Code: " + o.status);
      }, o.onload = function () {
        var e, t, n;
        o.status < 200 || 300 <= o.status ? a("HTTP Error: " + o.status) : (e = JSON.parse(o.responseText)) && "string" == typeof e.location ? r((t = i.basePath, n = e.location, t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)) : a("Invalid JSON: " + o.responseText);
      }, (n = new l.FormData()).append("file", e.blob(), e.filename()), o.send(n);
    };

    return i = C.extend({
      credentials: !1,
      handler: t
    }, i), {
      upload: function upload(e) {
        return i.url || i.handler !== t ? (r = e, a = i.handler, new w(function (e, t) {
          try {
            a(r, e, t, Te);
          } catch (n) {
            t(n.message);
          }
        })) : w.reject("Upload url missing from the settings.");
        var r, a;
      }
    };
  }

  var Re = function Re(u) {
    return function (e) {
      var t = _e.get("Throbber"),
          n = e.control.rootControl,
          r = new t(n.getEl()),
          a = e.control.value(),
          o = Se(a),
          i = Ae({
        url: f(u),
        basePath: h(u),
        credentials: v(u),
        handler: p(u)
      }),
          l = function l() {
        r.hide(), Ne(o);
      };

      return r.show(), L(a).then(function (e) {
        var t = u.editorUpload.blobCache.create({
          blob: a,
          blobUri: o,
          name: a.name ? a.name.replace(/\.[^\.]+$/, "") : null,
          base64: e.split(",")[1]
        });
        return i.upload(t).then(function (e) {
          var t = n.find("#src");
          return t.value(e), n.find("tabpanel")[0].activateTab(0), t.fire("change"), l(), e;
        });
      })["catch"](function (e) {
        u.windowManager.alert(e), l();
      });
    };
  },
      Ie = ".jpg,.jpeg,.png,.gif",
      Oe = function Oe(e) {
    return {
      title: "Upload",
      type: "form",
      layout: "flex",
      direction: "column",
      align: "stretch",
      padding: "20 20 20 20",
      items: [{
        type: "container",
        layout: "flex",
        direction: "column",
        align: "center",
        spacing: 10,
        items: [{
          text: "Browse for an image",
          type: "browsebutton",
          accept: Ie,
          onchange: Re(e)
        }, {
          text: "OR",
          type: "label"
        }]
      }, {
        text: "Drop an image here",
        type: "dropzone",
        accept: Ie,
        height: 100,
        onchange: Re(e)
      }]
    };
  };

  function Le(r) {
    for (var a = [], e = 1; e < arguments.length; e++) {
      a[e - 1] = arguments[e];
    }

    return function () {
      for (var e = [], t = 0; t < arguments.length; t++) {
        e[t] = arguments[t];
      }

      var n = a.concat(e);
      return r.apply(null, n);
    };
  }

  var Pe = function Pe(t, e) {
    var n = e.control.getRoot();
    ve(n), t.undoManager.transact(function () {
      var e = E(ie(t), n.toJSON());
      ue(t, e);
    }), t.editorUpload.uploadImagesAuto();
  };

  function Ue(o) {
    function e(e) {
      var n,
          t,
          r = ie(o);

      if (e && (t = {
        type: "listbox",
        label: "Image list",
        name: "image-list",
        values: T(e, function (e) {
          e.value = o.convertURL(e.value || e.url, "src");
        }, [{
          text: "None",
          value: ""
        }]),
        value: r.src && o.convertURL(r.src, "src"),
        onselect: function onselect(e) {
          var t = n.find("#alt");
          (!t.value() || e.lastControl && t.value() === e.lastControl.text()) && t.value(e.control.text()), n.find("#src").value(e.control.value()).fire("change");
        },
        onPostRender: function onPostRender() {
          t = this;
        }
      }), u(o) || s(o) || g(o)) {
        var a = [xe(o, t)];
        u(o) && a.push(se(o)), (s(o) || g(o)) && a.push(Oe(o)), n = o.windowManager.open({
          title: "Insert/edit image",
          data: r,
          bodyType: "tabpanel",
          body: a,
          onSubmit: Le(Pe, o)
        });
      } else n = o.windowManager.open({
        title: "Insert/edit image",
        data: r,
        body: we(o, t),
        onSubmit: Le(Pe, o)
      });

      he(n);
    }

    return {
      open: function open() {
        t(o, e);
      }
    };
  }

  var Ee = function Ee(e) {
    e.addCommand("mceImage", Ue(e).open);
  },
      ke = function ke(o) {
    return function (e) {
      for (var t, n, r = e.length, a = function a(e) {
        e.attr("contenteditable", o ? "true" : null);
      }; r--;) {
        t = e[r], (n = t.attr("class")) && /\bimage\b/.test(n) && (t.attr("contenteditable", o ? "false" : null), C.each(t.getAll("figcaption"), a));
      }
    };
  },
      Me = function Me(e) {
    e.on("preInit", function () {
      e.parser.addNodeFilter("figure", ke(!0)), e.serializer.addNodeFilter("figure", ke(!1));
    });
  },
      De = function De(e) {
    e.addButton("image", {
      icon: "image",
      tooltip: "Insert/edit image",
      onclick: Ue(e).open,
      stateSelector: "img:not([data-mce-object],[data-mce-placeholder]),figure.image"
    }), e.addMenuItem("image", {
      icon: "image",
      text: "Image",
      onclick: Ue(e).open,
      context: "insert",
      prependToContext: !0
    });
  };

  e.add("image", function (e) {
    Me(e), De(e), Ee(e);
  });
}(window);