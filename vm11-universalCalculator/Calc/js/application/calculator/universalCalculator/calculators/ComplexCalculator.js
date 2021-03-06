class ComplexCalculator extends RealCalculator {

    add(a, b) {
        return new Complex(
            super.add(a.re, b.re),
            super.add(a.im, b.im)
        );
    }

    sub(a, b) {
        return new Complex(
            super.sub(a.re, b.re),
            super.sub(a.im, b.im)
        );
    }

    mult(a, b) {
        return new Complex(
            super.sub(super.mult(a.re, b.re),super.mult(a.im, b.im)),
            super.add(super.mult(a.im, b.re),super.mult(a.re, b.im))
        );
    }

    div(a, b) {
        const down = super.add(super.pow(b.re, 2), super.pow(b.im, 2));
        const re = super.div(super.add(super.mult(a.re, b.re), super.mult(a.im, b.im)), down);
        const im = super.div(super.sub(super.mult(a.im, b.re), super.mult(a.re, b.im)), down);
        return new Complex(re, im);     
    }

    prod(a, p) {
        return new Complex(
            super.mult(a.re, p),
            super.mult(a.im, p)
        );
    }

    pow (a, n) {
        let newComplex = this.one();
        for (let i = 0; i < n; i++){
            newComplex = this.mult(newComplex, a)
        }
    }

    one() {return new Complex(1)}

    zero() {return new Complex(0)}


}
