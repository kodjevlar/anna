const slack = require('slack');
const fetch = require('node-fetch');

const core = require('./core');
const slackBot = slack.rtm.client();
const token = process.env.SLACK_TOKEN;

module.exports = function initSlack() {
  slackBot.started(function(payload) {
    console.log(`I'm connected to slack`);
  });

  slackBot.user_typing(function(msg) {
    console.log('Some one is typing in: ' + msg.channel);
  });

  slackBot.message(function(msg) {
    if (msg.subtype === 'bot_message') {
      return;
    }

    slack.chat.postMessage({
        token,
        text: core.determineResponse(msg),
        channel: msg.channel,
        username: core.whoami()
      },
      function (err, data) {
        console.log(err, data);
      });
  });

  slackBot.listen({ token });
}
