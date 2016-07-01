import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './task.html';

Template.task.helpers({
  // isOwner() {
  //   return this.owner === Meteor.userId();
  // },
});

Template.task.events({
  // 'click .toggle-checked'() {
  //   // Set the checked property to the opposite of its current value
  //   Meteor.call('tasks.setChecked', this._id, !this.checked);
  // },
  // 'click .delete'() {
  //   Meteor.call('tasks.remove', this._id);
  // },
  // 'click .toggle-private'() {
  //   Meteor.call('tasks.setPrivate', this._id, !this.private);
  // },
});


Template.task.events({
  'submit .update-beacon'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    // const target = event.target;
    // const text = target.text.value;

    // console.log("Form submitted");
    //
    // console.log(event.target);
    //
    // console.log(event.target.id.value);
    // console.log(event.target.title.value);
    // console.log(event.target.title.placeholder);
    // console.log(event.target.message.value);
    // // console.log(event.target.type.value);
    // console.log(event.target.price.value);

    let ev = event.target;

    let obj = {
        id: event.target.id.value,
        title: (ev.title.value.length > 0) ? ev.title.value: ev.title.placeholder,
        message: (ev.message.value.length > 0) ? ev.message.value: ev.message.placeholder,
        type: 0,
        price: (ev.price.value.length > 0) ? ev.price.value : ev.price.placeholder
    }

    Meteor.call('updateBeacon', obj);
    target.title.value = '';
    target.message.value = '';
    target.price.value = '';

    // Insert a task into the collection
    // Tasks.insert({
    //   text,
    //   createdAt: new Date(), // current time
    // });

    // Clear form
    // target.text.value = '';
  },
});
