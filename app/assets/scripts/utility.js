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
    return await response.json();
  } catch(err) {
    return {error: err}; //since we were expecting an object...
  }

}


export const kFormat = n => {
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "k";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "mln";
  if (n >= 1e9) return +(n / 1e9).toFixed(1) + "mlrd";
}