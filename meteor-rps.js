Peoples = new Mongo.Collection("peoples");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    peoples: function () {
      return Peoples.find({});
    }
  });

  Template.body.events({
    "submit .new-people": function (event) {

      var text = event.target.text.value;

      Peoples.insert({
        text: text,
        createdAt: new Date() // current time
      });

      // Clear form
      event.target.text.value = "";

      // Prevent default form submit
      return false;
    }
  });
}
