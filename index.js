Array.prototype.forEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        const value = cb(this[i], i, this);
        if (value === 'break') {
            break;
        }
    }
}

Array.prototype.asyncForEach = async function (cb) {
    for (let i = 0; i < this.length; i++) {
        const value = await cb(this[i], i, this);
        if (value === 'break') {
            break;
        }
    }
    return Promise.resolve();
}

Array.prototype.deduplicate = function() {
    return [...new Set(this)];
}