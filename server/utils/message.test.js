var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Haseeb';
    var text = 'Over there';
    var result = generateMessage(from, text);

    expect(result).toInclude({from: 'Haseeb'});
    expect(result).toInclude({text: 'Over there'});
    expect(result.createdAt).toBeA('number');
  });
});
