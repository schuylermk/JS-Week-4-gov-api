import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:chamber'});
  this.route('bill-results', {path: '/bill-results/:bill'});
  this.route('bill', {path: '/bill/:bill_id'});
});

export default Router;
