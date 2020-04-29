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
    console.log(`[requestData]: error: ${err}`);
  }

}
