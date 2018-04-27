// Expects injectedFetch to have a get method which given 
// a url argument returns a promise response
export function ronSwanson(injectedFetch) {
  let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
  let a =  injectedFetch.get(url)
          .then(res => res.data)
          .catch(err => {
            console.log(err);
            return 'Server Error';
          })
      
  return a;
}

export function add() {
  let sum = 0
  if (arguments.length === 0) return null;
  for (let i in arguments) {
    if (!arguments[i]) return null;
    if (Array.isArray(arguments[i])) {
      sum += add.apply(this, arguments[i]);
    } else {
      sum += arguments[i];
    }
  }
  return sum
}