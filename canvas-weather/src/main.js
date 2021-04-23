class FanBlade {
    constructor() {
    }
}

class WindMill {

    constructor(opts) {
        this.radius = 20;
        this.x = opts.x;
        this.y = opts.y;
        this.ctx = opts.ctx;
        this.initBase();
    }
    initBase() {
        // this.ctx.beginPath();
        // this.ctx.strokeStyle = '#ffffff';
        //
        // this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        // this.ctx.fillStyle = '#ffffff';
        // this.ctx.stroke();


        const { ctx } = this;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        // this.ctx.fillStyle = "rgb(200,0,0)";
        // this.ctx.fillRect (40, 40, 55, 50);
    }

}

const initCanvas = () => {
    const ctx = document.getElementById('canvas').getContext('2d');
    const windMill = new WindMill({ x: 40, y: 40, ctx });
}

initCanvas();
