const slack = require('slack');
const fetch = require('node-fetch');


module.exports = function initSlack() {
  slackBot.started(function(payload) {
    console.log(`I'm connected to slack`);
  });

  slackBot.message(function(msg) {
    if (msg.subtype === 'bot_message') {
      return;
    }
  });

  slackBot.listen({ token });
  console.log('Listening');
  return slackBot;
};
