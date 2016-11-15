const Bot = {
  init() {
    this.name = 'Anna';

    return this;
  },

  determineResponse(msg = '') {
    if (msg.indexOf(this.name) === -1) {
      return;
    }

    return "Hi";
  },

  whoami() {
    return this.name
  }
}


module.exports = Object.create(Bot).init();
