import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tasks, Beacons } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
  Meteor.subscribe('beacons');

});

Template.body.helpers({
  tasks() {
    const instance = Template.instance();

    // Otherwise, return all of the tasks
    let b = Beacons.find({}).fetch();
    console.log(b);
    return Beacons.find({}).fetch();
  }
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    Meteor.call('tasks.insert', text);
    // Clear form
    target.text.value = '';
  },
});
