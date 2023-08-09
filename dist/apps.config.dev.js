"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _spotify = _interopRequireDefault(require("./components/apps/spotify"));

var _vscode = _interopRequireDefault(require("./components/apps/vscode"));

var _terminal = require("./components/apps/terminal");

var _settings = require("./components/apps/settings");

var _chrome = require("./components/apps/chrome");

var _trash = require("./components/apps/trash");

var _gedit = require("./components/apps/gedit");

var _ben = require("./components/apps/ben");

var _calc = require("./components/apps/calc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apps = [{
  id: "chrome",
  title: "Google Chrome",
  icon: './themes/Yaru/apps/chrome.png',
  disabled: false,
  favourite: true,
  desktop_shortcut: true,
  screen: _chrome.displayChrome
}, {
  id: "calc",
  title: "Calc",
  icon: './themes/Yaru/apps/calc.png',
  disabled: false,
  favourite: true,
  desktop_shortcut: false,
  screen: _calc.displayTerminalCalc
}, {
  id: "about-ben",
  title: "About Ben",
  icon: './themes/Yaru/system/user-home.png',
  disabled: false,
  favourite: true,
  desktop_shortcut: true,
  screen: _ben.displayAboutBen
}, {
  id: "vscode",
  title: "Visual Studio Code",
  icon: './themes/Yaru/apps/vscode.png',
  disabled: false,
  favourite: true,
  desktop_shortcut: false,
  screen: _vscode.default
}, {
  id: "terminal",
  title: "Terminal",
  icon: './themes/Yaru/apps/bash.png',
  disabled: false,
  favourite: true,
  desktop_shortcut: false,
  screen: _terminal.displayTerminal
}, {
  id: "spotify",
  title: "Spotify",
  icon: './themes/Yaru/apps/spotify.png',
  disabled: false,
  favourite: true,
  desktop_shortcut: false,
  screen: _spotify.default // India Top 50 Playlist 😅

}, {
  id: "settings",
  title: "Settings",
  icon: './themes/Yaru/apps/gnome-control-center.png',
  disabled: false,
  favourite: true,
  desktop_shortcut: false,
  screen: _settings.displaySettings
}, {
  id: "trash",
  title: "Trash",
  icon: './themes/Yaru/system/user-trash-full.png',
  disabled: false,
  favourite: false,
  desktop_shortcut: true,
  screen: _trash.displayTrash
}, {
  id: "gedit",
  title: "Contact Me",
  icon: './themes/Yaru/apps/gedit.png',
  disabled: false,
  favourite: false,
  desktop_shortcut: true,
  screen: _gedit.displayGedit
}];
var _default = apps;
exports.default = _default;