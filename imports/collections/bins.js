import { Mongo } from 'meteor/mongo';

Meteor.methods({
  // new method
  'bins.insert': function() {
    return Bins.insert({
      createdAt: new Date(),
      ownerId: this.userId,  //current user can be a
      content: '',
      sharedWith: []
    });
  },
  // new method
  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },

  'bins.update': function(bin, newContent) {
    return Bins.update(bin._id, {$set : {content: newContent}});
  }
});
export const Bins = new Mongo.Collection('bins');
