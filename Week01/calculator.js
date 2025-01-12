let calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    subtract() {
        return this.a - this.b;
    },
    divide() {
        return this.a / this.b;
    }
}