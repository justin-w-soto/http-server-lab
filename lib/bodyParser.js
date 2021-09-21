

//function takes http req object and returns a promise for the parsed body.

//returns null if method ! POST, PUT, or PATCH
//throws err if content-type ! application/json 
// returns deserialized body from req emiitted events using JSON.parse
// throws err if failure happens in deserialization


const parser = (req) => {
  if(req.method !== 'POST' || req.method !== 'Put' || req.method !== 'PATCH'){
    return null;
  } else if (req.body !== 'application/json'){
    return 'nah bruh';
  }
};

export default parser;
