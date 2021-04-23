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

var WindMill = /*#__PURE__*/function () {
  function WindMill(opts) {
    _classCallCheck(this, WindMill);

    this.radius = 20;
    this.x = opts.x;
    this.y = opts.y;
    this.ctx = opts.ctx;
    this.initBase();
  }

  _createClass(WindMill, [{
    key: "initBase",
    value: function initBase() {
      // this.ctx.beginPath();
      // this.ctx.strokeStyle = '#ffffff';
      //
      // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      // this.ctx.fillStyle = '#ffffff';
      // this.ctx.stroke();
      var ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.fillStyle = '#ffffff';
      ctx.fill(); // this.ctx.fillStyle = "rgb(200,0,0)";
      // this.ctx.fillRect (40, 40, 55, 50);
    }
  }]);

  return WindMill;
}();

var initCanvas = function initCanvas() {
  var ctx = document.getElementById('canvas').getContext('2d');
  new WindMill({
    x: 40,
    y: 40,
    ctx: ctx
  });
};

initCanvas();
//# sourceMappingURL=bundle.js.map
