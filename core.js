const slack = require('slack');

const Bot = {
  init(name = 'Anna') {
    this._name = name;
    this._modules = [];
    this._slackBot = slack.rtm.client();
    this._slackBot.message(this.handleMessage.bind(this));

    return this;
  },

  handleMessage(msg) {
    console.log('Handeling message');
    console.log(msg);

    if (msg.subtype === 'bot_message') {
      return;
    }

    this.determineResponse(msg.text, res => {
      const payload = {
        token: this._token,
        text: res,
        channel: msg.channel,
        username: this.whoami()
      };


      console.log(payload);

      slack.chat.postMessage(payload, function (err, data) {
        console.log(err, data);
      });
    });
  },

  whoami() {
    return this._name;
  },

  load(module) {
    this._modules.push(module);

    return this;
  },

  determineResponse(msg = '', cb) {
    if (msg.toLowerCase().indexOf(this._name.toLowerCase()) === -1) {
      return;
    }

    let res;
    let response = '';

    this._modules.map(module => {
      module.matchers.map(_ => {
        _.expressions.map(expression => {
          res = msg.match(expression);

          if (res) {
            response += ' ' + _.response;
            return;
          }
        });
      });
    });

    if (!response) {
      cb("Sorry... Couldn't understand that phrase, please patch me... Or load more terms");
    } else {
      cb(response);
    }
  },

  listen(token, cb) {
    this._token = token;

    this._slackBot.listen({ token }, cb);

    return this;
  }
}


module.exports = Object.create(Bot);
