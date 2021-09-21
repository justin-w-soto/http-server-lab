import parser from '../lib/bodyParser.js';

describe('testing the body parser', () => {
  it('should  return null if method is not POST, PUT, or PATCH', () => {
    const req = {
      mehtod: 'GET', 
    };
    const newParser = parser(req);
    expect (null).toEqual(newParser);
  });
});
