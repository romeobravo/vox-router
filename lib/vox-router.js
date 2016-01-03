'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function parseRoutes(edge, original, parent) {
  var node = new _node2.default({
    original: original,
    parent: parent,
    name: edge
  });

  if (original.children) {
    for (var i in original.children) {
      var child = parseRoutes(i, original.children[i], node);
      node.addChild(child);
    }
  }
  return node;
}

var VoxRouter = function VoxRouter(settings) {
  _classCallCheck(this, VoxRouter);

  this.root = parseRoutes('', settings.routes, null);
};

exports.default = VoxRouter;