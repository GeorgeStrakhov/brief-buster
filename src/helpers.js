//get the brief data from the url
export const GetBrief = function() {

    let defaultBrief = {
      brand: 'McDonald\'s',
      category: 'quick service restaurants',
      competitors: ['Burger King', 'KFC'],
      keywords: ['food', 'convenience', 'taste', 'value']
    };

    //get params from url query if any
    const urlParams = new URLSearchParams(window.location.search);
    let brief = {
      brand : urlParams.get('brand') ? urlParams.get('brand') : '',
      category : urlParams.get('category') ? urlParams.get('category') : '',
      competitors : urlParams.get('competitors') ? urlParams.get('competitors').split(',') : [],
      keywords : urlParams.get('keywords') ? urlParams.get('keywords').split(',') : []
    }

    if (brief.brand == '' && brief.category == '' && brief.competitors.length < 1 && brief.keywords.length < 1) {
      return defaultBrief;
    } else {
      return  brief;
    }

}

//construct QueryParams
export const constructQueryParams = function(obj) {

  let ql = '';
  let keys = Object.keys(obj);
  let v;

  keys.forEach((key, index) => {
    v = obj[key];
    if (typeof(v) == 'object') {
      v = v.join(',');
    }
    if(index > 0) { ql += '&' };
    ql += key + '=' + encodeURI(v);
  });

  return ql;

}

//shuffle array
export const shuffleArray = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
