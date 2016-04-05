import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    chamberLookup(params) {
      this.transitionTo('results', params.chamber);
    },
    billLookup(params) {
      console.log(params.bill);
      this.transitionTo('bill-results', params.bill);
    }
  }
});
