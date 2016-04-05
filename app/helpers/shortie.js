import Ember from 'ember';

export function shortie(params/*, hash*/) {
  console.log(params[0].short_title);
  // debugger;
  var billTitle = params[0].short_title;
  if (billTitle === null) {
    return params[0].official_title;
  } else {
    return params[0].short_title;
  }
}

export default Ember.Helper.helper(shortie);
