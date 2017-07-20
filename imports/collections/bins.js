import { Mongo } from 'meteor/mongo';

Meteor.methods({
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      ownerId: this.userId,  //current user can be a
      content: '',
      sharedWith: []
    });
  },
  'bins.remove': function(bin) {
    return Bins.remove(bin);
  }
});
export const Bins = new Mongo.Collection('bins');
