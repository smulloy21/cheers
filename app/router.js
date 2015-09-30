import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('category');
  this.route('bar');
  this.route('add');
  this.route('about');
});

export default Router;
