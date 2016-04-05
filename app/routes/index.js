import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    chamberLookup(params) {
      this.transitionTo('results', params.chamber);
    }
  }
});
