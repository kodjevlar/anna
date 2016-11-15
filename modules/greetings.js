const greetModule = {
  init(config) {},
  matchers: [
    {
      expressions: [
        /hi/ig,
        /hello/ig,
        /hej/ig,
        /hey/ig,
      ],
      response: 'Hi!',
    },
    {
      expressions: [
        /how are you/i
      ],
      response: `I'm good, how about you?`
    },
    {
      expressions: [
        /^an.*(a|a!)$/ig
      ],
      response: `What's up?`
    },
    {
      expressions: [
        /what..*up/ig
      ],
      response: `Not much... Waiting for you to command me 😇`
    }
  ]
};

module.exports = greetModule;
