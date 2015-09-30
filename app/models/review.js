import DS from 'ember-data';

export default DS.Model.extend({
  bar: DS.belongsTo('bar', { async: true }),
  name: DS.attr(),
  text: DS.attr(),
  rating: DS.attr(),
  timestamp: DS.attr()
});
