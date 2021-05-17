"use strict";

(function () {
  var fullscreen = function (domGlobals) {
    'use strict';

    var Cell = function Cell(initial) {
      var value = initial;

      var get = function get() {
        return value;
      };

      var set = function set(v) {
        value = v;
      };

      var clone = function clone() {
        return Cell(get());
      };

      return {
        get: get,
        set: set,
        clone: clone
      };
    };

    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var get = function get(fullscreenState) {
      return {
        isFullscreen: function isFullscreen() {
          return fullscreenState.get() !== null;
        }
      };
    };

    var Api = {
      get: get
    };
    var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

    var fireFullscreenStateChanged = function fireFullscreenStateChanged(editor, state) {
      editor.fire('FullscreenStateChanged', {
        state: state
      });
    };

    var Events = {
      fireFullscreenStateChanged: fireFullscreenStateChanged
    };
    var DOM = global$1.DOM;

    var getWindowSize = function getWindowSize() {
      var w;
      var h;
      var win = domGlobals.window;
      var doc = domGlobals.document;
      var body = doc.body;

      if (body.offsetWidth) {
        w = body.offsetWidth;
        h = body.offsetHeight;
      }

      if (win.innerWidth && win.innerHeight) {
        w = win.innerWidth;
        h = win.innerHeight;
      }

      return {
        w: w,
        h: h
      };
    };

    var getScrollPos = function getScrollPos() {
      var vp = DOM.getViewPort();
      return {
        x: vp.x,
        y: vp.y
      };
    };

    var setScrollPos = function setScrollPos(pos) {
      domGlobals.window.scrollTo(pos.x, pos.y);
    };

    var toggleFullscreen = function toggleFullscreen(editor, fullscreenState) {
      var body = domGlobals.document.body;
      var documentElement = domGlobals.document.documentElement;
      var editorContainerStyle;
      var editorContainer, iframe, iframeStyle;
      var fullscreenInfo = fullscreenState.get();

      var resize = function resize() {
        DOM.setStyle(iframe, 'height', getWindowSize().h - (editorContainer.clientHeight - iframe.clientHeight));
      };

      var removeResize = function removeResize() {
        DOM.unbind(domGlobals.window, 'resize', resize);
      };

      editorContainer = editor.getContainer();
      editorContainerStyle = editorContainer.style;
      iframe = editor.getContentAreaContainer().firstChild;
      iframeStyle = iframe.style;

      if (!fullscreenInfo) {
        var newFullScreenInfo = {
          scrollPos: getScrollPos(),
          containerWidth: editorContainerStyle.width,
          containerHeight: editorContainerStyle.height,
          iframeWidth: iframeStyle.width,
          iframeHeight: iframeStyle.height,
          resizeHandler: resize,
          removeHandler: removeResize
        };
        iframeStyle.width = iframeStyle.height = '100%';
        editorContainerStyle.width = editorContainerStyle.height = '';
        DOM.addClass(body, 'mce-fullscreen');
        DOM.addClass(documentElement, 'mce-fullscreen');
        DOM.addClass(editorContainer, 'mce-fullscreen');
        DOM.bind(domGlobals.window, 'resize', resize);
        editor.on('remove', removeResize);
        resize();
        fullscreenState.set(newFullScreenInfo);
        Events.fireFullscreenStateChanged(editor, true);
      } else {
        iframeStyle.width = fullscreenInfo.iframeWidth;
        iframeStyle.height = fullscreenInfo.iframeHeight;

        if (fullscreenInfo.containerWidth) {
          editorContainerStyle.width = fullscreenInfo.containerWidth;
        }

        if (fullscreenInfo.containerHeight) {
          editorContainerStyle.height = fullscreenInfo.containerHeight;
        }

        DOM.removeClass(body, 'mce-fullscreen');
        DOM.removeClass(documentElement, 'mce-fullscreen');
        DOM.removeClass(editorContainer, 'mce-fullscreen');
        setScrollPos(fullscreenInfo.scrollPos);
        DOM.unbind(domGlobals.window, 'resize', fullscreenInfo.resizeHandler);
        editor.off('remove', fullscreenInfo.removeHandler);
        fullscreenState.set(null);
        Events.fireFullscreenStateChanged(editor, false);
      }
    };

    var Actions = {
      toggleFullscreen: toggleFullscreen
    };

    var register = function register(editor, fullscreenState) {
      editor.addCommand('mceFullScreen', function () {
        Actions.toggleFullscreen(editor, fullscreenState);
      });
    };

    var Commands = {
      register: register
    };

    var postRender = function postRender(editor) {
      return function (e) {
        var ctrl = e.control;
        editor.on('FullscreenStateChanged', function (e) {
          ctrl.active(e.state);
        });
      };
    };

    var register$1 = function register$1(editor) {
      editor.addMenuItem('fullscreen', {
        text: 'Fullscreen',
        shortcut: 'Ctrl+Shift+F',
        selectable: true,
        cmd: 'mceFullScreen',
        onPostRender: postRender(editor),
        context: 'view'
      });
      editor.addButton('fullscreen', {
        active: false,
        tooltip: 'Fullscreen',
        cmd: 'mceFullScreen',
        onPostRender: postRender(editor)
      });
    };

    var Buttons = {
      register: register$1
    };
    global.add('fullscreen', function (editor) {
      var fullscreenState = Cell(null);

      if (editor.settings.inline) {
        return Api.get(fullscreenState);
      }

      Commands.register(editor, fullscreenState);
      Buttons.register(editor);
      editor.addShortcut('Ctrl+Shift+F', '', 'mceFullScreen');
      return Api.get(fullscreenState);
    });

    function Plugin() {}

    return Plugin;
  }(window);
})();