function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var FanBlade = /*#__PURE__*/function () {
  function FanBlade(ctx, x, y, radius, angle, rotate) {
    _classCallCheck(this, FanBlade);

    this.x = x;
    this.y = y;
    this.rotate = rotate;
    this.f1 = Math.cos(angle / 2) * radius;
    this.f2 = Math.sin(angle / 2) * radius;
    this.baserStartPoint = [this.f1, this.f2];
    this.baserEndPoint = [this.f1, -this.f2];
    this.baseControlPoint = [2 * this.f1, 0];
    this.generalFan(ctx);
  }

  _createClass(FanBlade, [{
    key: "generalFan",
    value: function generalFan(ctx) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotate);
      this.drawQuad(ctx);
      ctx.lineTo(0, 0);
      ctx.lineTo.apply(ctx, _toConsumableArray(this.baserStartPoint));
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.restore();
    }
  }, {
    key: "drawQuad",
    value: function drawQuad(ctx) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#fff';
      ctx.beginPath();
      ctx.moveTo.apply(ctx, _toConsumableArray(this.baserStartPoint));
      ctx.quadraticCurveTo(this.baseControlPoint[0], this.baseControlPoint[1], this.baserEndPoint[0], this.baserEndPoint[1]);
      ctx.stroke();
    }
  }]);

  return FanBlade;
}();

var ctx = document.getElementById('canvas').getContext('2d');
var lengthStep = 10;

var draw = function draw() {
  ctx.clearRect(0, 0, 800, 800);
  ctx.translate(85, 80);
  ctx.rotate(lengthStep / 180 * Math.PI);
  ctx.translate(-85, -80);
  new FanBlade(ctx, 85, 80, 40, 0.1 * Math.PI, -1 / 2 * Math.PI);
  new FanBlade(ctx, 85, 80, 40, 0.1 * Math.PI, 30 / 180 * Math.PI);
  new FanBlade(ctx, 85, 80, 40, 0.1 * Math.PI, 150 / 180 * Math.PI);
  window.requestAnimationFrame(draw);
};

window.requestAnimationFrame(draw);
//# sourceMappingURL=bundle.js.map
