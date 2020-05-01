const regeneratorRuntime = require('regenerator-runtime');

export const requestData = async function(mode) {
  let baseUrl = "https://disease.sh/v2/",
  endpoint = "";
  if (mode == "global") {
    endpoint = 'all';
  } else if (mode == "local") {
    endpoint = 'countries/italy';
  }

  try {
    let response = await fetch(baseUrl + endpoint);
    console.log(`[requestData]: response status for ${endpoint}: ${response.status}`);
    return await response.json();
  } catch(err) {
    return {error: err}; //since we were expecting an object...
  }

}


export const kFormat = n => {
  if (Math.abs(n) > 999) {
    return Math.sign(n)*((Math.abs(n)/1000).toFixed(1)) + 'k'
  } else {
    return Math.sign(n)*Math.abs(n)
  }

}