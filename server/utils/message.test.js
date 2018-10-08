var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate location object', () => {
    var from = 'Haseeb';
    var latitude = 1;
    var longitude = 1;
    var result = generateLocationMessage(from, latitude, longitude);
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    expect(result).toInclude({from, url});
    expect(result.createdAt).toBeA('number');
    expect(result).toInclude({url});
  });
});
