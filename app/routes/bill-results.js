import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key + '&query=' + params.bill;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
