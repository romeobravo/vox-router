"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = (function () {
  function Node(settings) {
    _classCallCheck(this, Node);

    this.component = settings.original.component;
    this.type = settings.original.type;
    this.name = settings.edge;
    this.parent = settings.parent;
    this.children = [];
  }

  _createClass(Node, [{
    key: "addChild",
    value: function addChild(childNode) {
      this.children.push(childNode);
    }
  }]);

  return Node;
})();

exports.default = Node;