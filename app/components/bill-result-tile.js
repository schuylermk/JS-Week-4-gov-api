import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['short_title:desc'],
  sortedBills: Ember.computed.sort('bills', 'sortBy'),
});
