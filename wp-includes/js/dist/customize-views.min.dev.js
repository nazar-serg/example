"use strict";

/*! This file is auto-generated */
!function (i, e, o) {
  var t;
  e && e.customize && ((t = e.customize).HeaderTool.CurrentView = e.Backbone.View.extend({
    template: e.template("header-current"),
    initialize: function initialize() {
      this.listenTo(this.model, "change", this.render), this.render();
    },
    render: function render() {
      return this.$el.html(this.template(this.model.toJSON())), this.setButtons(), this;
    },
    setButtons: function setButtons() {
      var e = i("#customize-control-header_image .actions .remove");
      this.model.get("choice") ? e.show() : e.hide();
    }
  }), t.HeaderTool.ChoiceView = e.Backbone.View.extend({
    template: e.template("header-choice"),
    className: "header-view",
    events: {
      "click .choice,.random": "select",
      "click .close": "removeImage"
    },
    initialize: function initialize() {
      var e = [this.model.get("header").url, this.model.get("choice")];
      this.listenTo(this.model, "change:selected", this.toggleSelected), o.contains(e, t.get().header_image) && t.HeaderTool.currentHeader.set(this.extendedModel());
    },
    render: function render() {
      return this.$el.html(this.template(this.extendedModel())), this.toggleSelected(), this;
    },
    toggleSelected: function toggleSelected() {
      this.$el.toggleClass("selected", this.model.get("selected"));
    },
    extendedModel: function extendedModel() {
      var e = this.model.get("collection");
      return o.extend(this.model.toJSON(), {
        type: e.type
      });
    },
    select: function select() {
      this.preventJump(), this.model.save(), t.HeaderTool.currentHeader.set(this.extendedModel());
    },
    preventJump: function preventJump() {
      var e = i(".wp-full-overlay-sidebar-content"),
          t = e.scrollTop();
      o.defer(function () {
        e.scrollTop(t);
      });
    },
    removeImage: function removeImage(e) {
      e.stopPropagation(), this.model.destroy(), this.remove();
    }
  }), t.HeaderTool.ChoiceListView = e.Backbone.View.extend({
    initialize: function initialize() {
      this.listenTo(this.collection, "add", this.addOne), this.listenTo(this.collection, "remove", this.render), this.listenTo(this.collection, "sort", this.render), this.listenTo(this.collection, "change", this.toggleList), this.render();
    },
    render: function render() {
      this.$el.empty(), this.collection.each(this.addOne, this), this.toggleList();
    },
    addOne: function addOne(e) {
      e.set({
        collection: this.collection
      }), e = new t.HeaderTool.ChoiceView({
        model: e
      }), this.$el.append(e.render().el);
    },
    toggleList: function toggleList() {
      var e = this.$el.parents().prev(".customize-control-title"),
          t = this.$el.find(".random").parent();
      this.collection.shouldHideTitle() ? e.add(t).hide() : e.add(t).show();
    }
  }), t.HeaderTool.CombinedList = e.Backbone.View.extend({
    initialize: function initialize(e) {
      this.collections = e, this.on("all", this.propagate, this);
    },
    propagate: function propagate(t, i) {
      o.each(this.collections, function (e) {
        e.trigger(t, i);
      });
    }
  }));
}(jQuery, window.wp, _);