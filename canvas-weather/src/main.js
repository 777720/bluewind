class FanBlade {
    constructor(ctx, x, y, radius, angle, rotate) {
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
    generalFan(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotate)
        this.drawQuad(ctx);
        ctx.lineTo(0 , 0);
        ctx.lineTo(...this.baserStartPoint);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.restore();

    }
    drawQuad(ctx) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#fff';
        ctx.beginPath();
        ctx.moveTo(...this.baserStartPoint);
        ctx.quadraticCurveTo(this.baseControlPoint[0], this.baseControlPoint[1], this.baserEndPoint[0], this.baserEndPoint[1]);
        ctx.stroke();
    }
}

class WindMill {

    constructor(opts) {
        this.radius = 5;
        this.x = opts.x;
        this.y = opts.y;
        this.ctx = opts.ctx;
        this.initBase();
    }
    initBase() {
        const { ctx } = this;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
    }


}

const ctx = document.getElementById('canvas').getContext('2d');
const lengthStep = 10;

const draw = () => {
    ctx.clearRect(0,0,800,800);
    ctx.translate(85, 80);
    ctx.rotate((lengthStep / 180) * Math.PI);
    ctx.translate(-85, -80);
    const fanBlade1 = new FanBlade(ctx, 85, 80, 40, 0.1 * Math.PI,  ((-1 / 2) * Math.PI));
    const fanBlade2 = new FanBlade(ctx, 85, 80, 40, 0.1 * Math.PI, (30 / 180) * Math.PI);
    const fanBlade3 = new FanBlade(ctx, 85, 80, 40, 0.1 * Math.PI,   (150 / 180) * Math.PI);
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);




