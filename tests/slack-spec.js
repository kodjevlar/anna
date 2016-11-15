const expect = require('chai').expect;

const core = require('../services/core');

describe('Anna', function() {
  it('should say hi', function() {
    const response = core.determineResponse('Hi Anna');

    expect(response).to.equal('Hi');
  });
});
