import Ember from 'ember';

export default Ember.Component.extend({
  alpha: ['name:asc'],
  sortedCategories: Ember.computed.sort('model', 'alpha'),
});
