import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    chamberLookup() {
      var params = {
        chamber: this.get('chamber')
      };
      console.log(params);
      this.sendAction('chamberLookup', params);
    }
  }
});

// chamberIndex: 0,
// chamber: Ember.computed('chamberIndex', function(){
//   return this.get('chambers')
//   [this.get('chamberIndex')];
// }),
// chambers: [
//   {name: 'House'},
//   {name: 'Senate'}
// ],
