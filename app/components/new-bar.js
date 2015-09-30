import Ember from 'ember';

export default Ember.Component.extend({
  // addListing: false,
  // address: null,
  // actions: {
  //   showForm() {
  //     this.set('addListing', true)
  //   },
  //   mapMe() {
  //     var address = this.get('address');
  //     address.geocomplete({details:"form#property"});
  //     this.set('address', address);
  //   }
  // }
  actions: {
    mapMe() {
      var test = this.get('address');
      test.geocomplete({details:"form#property"});
    }
  }


});
