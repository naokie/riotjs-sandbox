var riot = require('riot');
var todo = require('./todo.tag');
var todoHeader = require('./todo-header.tag');

var instance = riot.mount(todo, {
  items: [
    { title: 'Avoid excessive coffeine', done: true },
    { title: 'Hidden item', hidden: true },
    { title: 'Be less provocative' },
    { title: 'Be nice to people' }
  ]
});
riot.mount('todo-header');
console.log(instance);
