"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! This file is auto-generated */
!function (i) {
  var o = {};

  function n(t) {
    if (o[t]) return o[t].exports;
    var e = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports;
  }

  n.m = i, n.c = o, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return i;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 11);
}([,,,,,,,,,,, function (t, e, i) {
  t.exports = i(12);
}, function (t, e, i) {
  var o = wp.media;
  o.controller.EditAttachmentMetadata = i(13), o.view.MediaFrame.Manage = i(14), o.view.Attachment.Details.TwoColumn = i(15), o.view.MediaFrame.Manage.Router = i(16), o.view.EditImage.Details = i(17), o.view.MediaFrame.EditAttachments = i(18), o.view.SelectModeToggleButton = i(19), o.view.DeleteSelectedButton = i(20), o.view.DeleteSelectedPermanentlyButton = i(21);
}, function (t, e) {
  var i = wp.media.view.l10n,
      i = wp.media.controller.State.extend({
    defaults: {
      id: "edit-attachment",
      title: i.attachmentDetails,
      content: "edit-metadata",
      menu: !1,
      toolbar: !1,
      router: !1
    }
  });
  t.exports = i;
}, function (t, e) {
  var i = wp.media.view.MediaFrame,
      o = wp.media.controller.Library,
      n = Backbone.$,
      s = i.extend({
    initialize: function initialize() {
      _.defaults(this.options, {
        title: "",
        modal: !1,
        selection: [],
        library: {},
        multiple: "add",
        state: "library",
        uploader: !0,
        mode: ["grid", "edit"]
      }), this.$body = n(document.body), this.$window = n(window), this.$adminBar = n("#wpadminbar"), this.$uploaderToggler = n(".page-title-action").attr("aria-expanded", "false").on("click", _.bind(this.addNewClickHandler, this)), this.$window.on("scroll resize", _.debounce(_.bind(this.fixPosition, this), 15)), this.$el.addClass("wp-core-ui"), !wp.Uploader.limitExceeded && wp.Uploader.browser.supported || (this.options.uploader = !1), this.options.uploader && (this.uploader = new wp.media.view.UploaderWindow({
        controller: this,
        uploader: {
          dropzone: document.body,
          container: document.body
        }
      }).render(), this.uploader.ready(), n("body").append(this.uploader.el), this.options.uploader = !1), this.gridRouter = new wp.media.view.MediaFrame.Manage.Router(), i.prototype.initialize.apply(this, arguments), this.$el.appendTo(this.options.container), this.createStates(), this.bindRegionModeHandlers(), this.render(), this.bindSearchHandler(), wp.media.frames.browse = this;
    },
    bindSearchHandler: function bindSearchHandler() {
      var t = this.$("#media-search-input"),
          e = this.browserView.toolbar.get("search").$el,
          i = this.$(".view-list"),
          o = _.throttle(function (t) {
        var e = n(t.currentTarget).val(),
            t = "";
        e && (t += "?search=" + e, this.gridRouter.navigate(this.gridRouter.baseUrl(t), {
          replace: !0
        }));
      }, 1e3);

      t.on("input", _.bind(o, this)), this.gridRouter.on("route:search", function () {
        var t = window.location.href;
        -1 < t.indexOf("mode=") ? t = t.replace(/mode=[^&]+/g, "mode=list") : t += -1 < t.indexOf("?") ? "&mode=list" : "?mode=list", t = t.replace("search=", "s="), i.prop("href", t);
      }).on("route:reset", function () {
        e.val("").trigger("input");
      });
    },
    createStates: function createStates() {
      var t = this.options;
      this.options.states || this.states.add([new o({
        library: wp.media.query(t.library),
        multiple: t.multiple,
        title: t.title,
        content: "browse",
        toolbar: "select",
        contentUserSetting: !1,
        filterable: "all",
        autoSelect: !1
      })]);
    },
    bindRegionModeHandlers: function bindRegionModeHandlers() {
      this.on("content:create:browse", this.browseContent, this), this.on("edit:attachment", this.openEditAttachmentModal, this), this.on("select:activate", this.bindKeydown, this), this.on("select:deactivate", this.unbindKeydown, this);
    },
    handleKeydown: function handleKeydown(t) {
      27 === t.which && (t.preventDefault(), this.deactivateMode("select").activateMode("edit"));
    },
    bindKeydown: function bindKeydown() {
      this.$body.on("keydown.select", _.bind(this.handleKeydown, this));
    },
    unbindKeydown: function unbindKeydown() {
      this.$body.off("keydown.select");
    },
    fixPosition: function fixPosition() {
      var t, e;
      this.isModeActive("select") && (e = (t = this.$(".attachments-browser")).find(".media-toolbar"), t.offset().top + 16 < this.$window.scrollTop() + this.$adminBar.height() ? (t.addClass("fixed"), e.css("width", t.width() + "px")) : (t.removeClass("fixed"), e.css("width", "")));
    },
    addNewClickHandler: function addNewClickHandler(t) {
      t.preventDefault(), this.trigger("toggle:upload:attachment"), this.uploader && this.uploader.refresh();
    },
    openEditAttachmentModal: function openEditAttachmentModal(t) {
      wp.media.frames.edit ? wp.media.frames.edit.open().trigger("refresh", t) : wp.media.frames.edit = wp.media({
        frame: "edit-attachments",
        controller: this,
        library: this.state().get("library"),
        model: t
      });
    },
    browseContent: function browseContent(t) {
      var e = this.state();
      this.browserView = t.view = new wp.media.view.AttachmentsBrowser({
        controller: this,
        collection: e.get("library"),
        selection: e.get("selection"),
        model: e,
        sortable: e.get("sortable"),
        search: e.get("searchable"),
        filters: e.get("filterable"),
        date: e.get("date"),
        display: e.get("displaySettings"),
        dragInfo: e.get("dragInfo"),
        sidebar: "errors",
        suggestedWidth: e.get("suggestedWidth"),
        suggestedHeight: e.get("suggestedHeight"),
        AttachmentView: e.get("AttachmentView"),
        scrollElement: document
      }), this.browserView.on("ready", _.bind(this.bindDeferred, this)), this.errors = wp.Uploader.errors, this.errors.on("add remove reset", this.sidebarVisibility, this);
    },
    sidebarVisibility: function sidebarVisibility() {
      this.browserView.$(".media-sidebar").toggle(!!this.errors.length);
    },
    bindDeferred: function bindDeferred() {
      this.browserView.dfd && this.browserView.dfd.done(_.bind(this.startHistory, this));
    },
    startHistory: function startHistory() {
      window.history && window.history.pushState && (Backbone.History.started && Backbone.history.stop(), Backbone.history.start({
        root: window._wpMediaGridSettings.adminUrl,
        pushState: !0
      }));
    }
  });
  t.exports = s;
}, function (t, e) {
  var i = wp.media.view.Attachment.Details,
      o = i.extend({
    template: wp.template("attachment-details-two-column"),
    initialize: function initialize() {
      this.controller.on("content:activate:edit-details", _.bind(this.editAttachment, this)), i.prototype.initialize.apply(this, arguments);
    },
    editAttachment: function editAttachment(t) {
      t && t.preventDefault(), this.controller.content.mode("edit-image");
    },
    toggleSelectionHandler: function toggleSelectionHandler() {}
  });
  t.exports = o;
}, function (t, e) {
  var i = Backbone.Router.extend({
    routes: {
      "upload.php?item=:slug&mode=edit": "editItem",
      "upload.php?item=:slug": "showItem",
      "upload.php?search=:query": "search",
      "upload.php": "reset"
    },
    baseUrl: function baseUrl(t) {
      return "upload.php" + t;
    },
    reset: function reset() {
      var t = wp.media.frames.edit;
      t && t.close();
    },
    search: function search(t) {
      jQuery("#media-search-input").val(t).trigger("input");
    },
    showItem: function showItem(t) {
      var e = wp.media,
          i = e.frames.browse,
          o = i.state().get("library").findWhere({
        id: parseInt(t, 10)
      });
      o ? (o.set("skipHistory", !0), i.trigger("edit:attachment", o)) : (o = e.attachment(t), i.listenTo(o, "change", function (t) {
        i.stopListening(o), i.trigger("edit:attachment", t);
      }), o.fetch());
    },
    editItem: function editItem(t) {
      this.showItem(t), wp.media.frames.edit.content.mode("edit-details");
    }
  });
  t.exports = i;
}, function (t, e) {
  var i = wp.media.View,
      o = wp.media.view.EditImage.extend({
    initialize: function initialize(t) {
      this.editor = window.imageEdit, this.frame = t.frame, this.controller = t.controller, i.prototype.initialize.apply(this, arguments);
    },
    back: function back() {
      this.frame.content.mode("edit-metadata");
    },
    save: function save() {
      this.model.fetch().done(_.bind(function () {
        this.frame.content.mode("edit-metadata");
      }, this));
    }
  });
  t.exports = o;
}, function (t, e) {
  var i = wp.media.view.Frame,
      o = wp.media.view.MediaFrame,
      n = jQuery,
      o = o.extend({
    className: "edit-attachment-frame",
    template: wp.template("edit-attachment-frame"),
    regions: ["title", "content"],
    events: {
      "click .left": "previousMediaItem",
      "click .right": "nextMediaItem"
    },
    initialize: function initialize() {
      i.prototype.initialize.apply(this, arguments), _.defaults(this.options, {
        modal: !0,
        state: "edit-attachment"
      }), this.controller = this.options.controller, this.gridRouter = this.controller.gridRouter, this.library = this.options.library, this.options.model && (this.model = this.options.model), this.bindHandlers(), this.createStates(), this.createModal(), this.title.mode("default"), this.toggleNav();
    },
    bindHandlers: function bindHandlers() {
      this.on("title:create:default", this.createTitle, this), this.on("content:create:edit-metadata", this.editMetadataMode, this), this.on("content:create:edit-image", this.editImageMode, this), this.on("content:render:edit-image", this.editImageModeRender, this), this.on("refresh", this.rerender, this), this.on("close", this.detach), this.bindModelHandlers(), this.listenTo(this.gridRouter, "route:search", this.close, this);
    },
    bindModelHandlers: function bindModelHandlers() {
      this.listenTo(this.model, "change:status destroy", this.close, this);
    },
    createModal: function createModal() {
      this.options.modal && (this.modal = new wp.media.view.Modal({
        controller: this,
        title: this.options.title,
        hasCloseButton: !1
      }), this.modal.on("open", _.bind(function () {
        n("body").on("keydown.media-modal", _.bind(this.keyEvent, this));
      }, this)), this.modal.on("close", _.bind(function () {
        n("body").off("keydown.media-modal"), n('li.attachment[data-id="' + this.model.get("id") + '"]').focus(), this.resetRoute();
      }, this)), this.modal.content(this), this.modal.open());
    },
    createStates: function createStates() {
      this.states.add([new wp.media.controller.EditAttachmentMetadata({
        model: this.model,
        library: this.library
      })]);
    },
    editMetadataMode: function editMetadataMode(t) {
      t.view = new wp.media.view.Attachment.Details.TwoColumn({
        controller: this,
        model: this.model
      }), t.view.views.set(".attachment-compat", new wp.media.view.AttachmentCompat({
        controller: this,
        model: this.model
      })), this.model && !this.model.get("skipHistory") && this.gridRouter.navigate(this.gridRouter.baseUrl("?item=" + this.model.id));
    },
    editImageMode: function editImageMode(t) {
      var e = new wp.media.controller.EditImage({
        model: this.model,
        frame: this
      });
      e._toolbar = function () {}, e._router = function () {}, e._menu = function () {}, t.view = new wp.media.view.EditImage.Details({
        model: this.model,
        frame: this,
        controller: e
      }), this.gridRouter.navigate(this.gridRouter.baseUrl("?item=" + this.model.id + "&mode=edit"));
    },
    editImageModeRender: function editImageModeRender(t) {
      t.on("ready", t.loadEditor);
    },
    toggleNav: function toggleNav() {
      this.$(".left").prop("disabled", !this.hasPrevious()), this.$(".right").prop("disabled", !this.hasNext());
    },
    rerender: function rerender(t) {
      this.stopListening(this.model), this.model = t, this.bindModelHandlers(), "edit-metadata" !== this.content.mode() ? this.content.mode("edit-metadata") : this.content.render(), this.toggleNav();
    },
    previousMediaItem: function previousMediaItem() {
      this.hasPrevious() && (this.trigger("refresh", this.library.at(this.getCurrentIndex() - 1)), this.focusNavButton(this.hasPrevious() ? ".left" : ".right"));
    },
    nextMediaItem: function nextMediaItem() {
      this.hasNext() && (this.trigger("refresh", this.library.at(this.getCurrentIndex() + 1)), this.focusNavButton(this.hasNext() ? ".right" : ".left"));
    },
    focusNavButton: function focusNavButton(t) {
      n(t).focus();
    },
    getCurrentIndex: function getCurrentIndex() {
      return this.library.indexOf(this.model);
    },
    hasNext: function hasNext() {
      return this.getCurrentIndex() + 1 < this.library.length;
    },
    hasPrevious: function hasPrevious() {
      return -1 < this.getCurrentIndex() - 1;
    },
    keyEvent: function keyEvent(t) {
      ("INPUT" !== t.target.nodeName && "TEXTAREA" !== t.target.nodeName || t.target.readOnly || t.target.disabled) && (39 === t.keyCode && this.nextMediaItem(), 37 === t.keyCode && this.previousMediaItem());
    },
    resetRoute: function resetRoute() {
      var t = this.controller.browserView.toolbar.get("search").$el.val(),
          t = "" !== t ? "?search=" + t : "";
      this.gridRouter.navigate(this.gridRouter.baseUrl(t), {
        replace: !0
      });
    }
  });
  t.exports = o;
}, function (t, e) {
  var i = wp.media.view.Button,
      o = wp.media.view.l10n,
      n = i.extend({
    initialize: function initialize() {
      _.defaults(this.options, {
        size: ""
      }), i.prototype.initialize.apply(this, arguments), this.controller.on("select:activate select:deactivate", this.toggleBulkEditHandler, this), this.controller.on("selection:action:done", this.back, this);
    },
    back: function back() {
      this.controller.deactivateMode("select").activateMode("edit");
    },
    click: function click() {
      i.prototype.click.apply(this, arguments), this.controller.isModeActive("select") ? this.back() : this.controller.deactivateMode("edit").activateMode("select");
    },
    render: function render() {
      return i.prototype.render.apply(this, arguments), this.$el.addClass("select-mode-toggle-button"), this;
    },
    toggleBulkEditHandler: function toggleBulkEditHandler() {
      var t = this.controller.content.get().toolbar,
          e = t.$(".media-toolbar-secondary > *, .media-toolbar-primary > *");
      this.controller.isModeActive("select") ? (this.model.set({
        size: "large",
        text: o.cancel
      }), e.not(".spinner, .media-button").hide(), this.$el.show(), t.$el.addClass("media-toolbar-mode-select"), t.$(".delete-selected-button").removeClass("hidden")) : (this.model.set({
        size: "",
        text: o.bulkSelect
      }), this.controller.content.get().$el.removeClass("fixed"), t.$el.css("width", ""), t.$el.removeClass("media-toolbar-mode-select"), t.$(".delete-selected-button").addClass("hidden"), e.not(".media-button").show(), this.controller.state().get("selection").reset());
    }
  });
  t.exports = n;
}, function (t, e) {
  var i = wp.media.view.Button,
      o = wp.media.view.l10n,
      n = i.extend({
    initialize: function initialize() {
      i.prototype.initialize.apply(this, arguments), this.options.filters && this.options.filters.model.on("change", this.filterChange, this), this.controller.on("selection:toggle", this.toggleDisabled, this), this.controller.on("select:activate", this.toggleDisabled, this);
    },
    filterChange: function filterChange(t) {
      "trash" === t.get("status") ? this.model.set("text", o.restoreSelected) : wp.media.view.settings.mediaTrash ? this.model.set("text", o.trashSelected) : this.model.set("text", o.deletePermanently);
    },
    toggleDisabled: function toggleDisabled() {
      this.model.set("disabled", !this.controller.state().get("selection").length);
    },
    render: function render() {
      return i.prototype.render.apply(this, arguments), this.controller.isModeActive("select") ? this.$el.addClass("delete-selected-button") : this.$el.addClass("delete-selected-button hidden"), this.toggleDisabled(), this;
    }
  });
  t.exports = n;
}, function (t, e) {
  var i = wp.media.view.Button,
      o = wp.media.view.DeleteSelectedButton,
      n = o.extend({
    initialize: function initialize() {
      o.prototype.initialize.apply(this, arguments), this.controller.on("select:activate", this.selectActivate, this), this.controller.on("select:deactivate", this.selectDeactivate, this);
    },
    filterChange: function filterChange(t) {
      this.canShow = "trash" === t.get("status");
    },
    selectActivate: function selectActivate() {
      this.toggleDisabled(), this.$el.toggleClass("hidden", !this.canShow);
    },
    selectDeactivate: function selectDeactivate() {
      this.toggleDisabled(), this.$el.addClass("hidden");
    },
    render: function render() {
      return i.prototype.render.apply(this, arguments), this.selectActivate(), this;
    }
  });
  t.exports = n;
}]);