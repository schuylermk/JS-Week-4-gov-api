import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    billLookup() {
      var params = {
        bill: this.get('bill')
      };
      this.sendAction('billLookup', params);
    }
  }
});
