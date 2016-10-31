import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('student', params.student_id);
  },
  actions: {
    destroyStudent(student) {
      student.destroyRecord();
      this.transitionTo('index');
    }
  }
});
