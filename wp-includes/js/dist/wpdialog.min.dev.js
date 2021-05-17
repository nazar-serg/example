"use strict";

/*! This file is auto-generated */
!function (e) {
  e.widget("wp.wpdialog", e.ui.dialog, {
    open: function open() {
      this.isOpen() || !1 === this._trigger("beforeOpen") || (this._super(), this.element.focus(), this._trigger("refresh"));
    }
  }), e.wp.wpdialog.prototype.options.closeOnEscape = !1;
}(jQuery);