import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', { async: true })
  name: DS.attr(),
  image: DS.attr(),
  hours: DS.attr(),
  rating: DS.attr(),
  reviews: DS.hasMany('review', { async: true }),
  description: DS.attr(),
  phone: DS.attr(),
  specials: DS.attr(),
  featured: DS.attr(),
  price: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
