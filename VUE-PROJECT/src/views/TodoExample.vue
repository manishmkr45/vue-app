<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to VUE js App"/>
    <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todo v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from '../components/layout/Header.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Todo from '../components/Todo.vue'
import AddTodo from '../components/AddTodo.vue'
import axios from 'axios'

export default {
  name: 'TodoExample',
  components: {
    HelloWorld,
    Header,
    Todo,
    AddTodo
  },
  data(){
    return {
          todos: [
            // {
            //   id: 1,
            //   title : "Todo one",
            //   completed: false,
            // },
            //   {
            //   id: 2,
            //   title : "Todo Two",
            //   completed: false,

            // },
            //   {
            //   id: 3,
            //   title : "Todo Three",
            //   completed: true
            // }
          ]
    }
  },
  methods: {
    deleteTodo(id){
      console.log("Deleting the todo list id " + id)
      this.todos = this.todos.filter(todo => todo.id != id)
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(()=> this.todos = this.todos.filter(todo => todo.id != id))
        .catch(err => {
          console.log(err)
        })
    },
    addTodo(newTodo){
      const {title, completed}  = newTodo;
      axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed
      })
        .then(res => {
            this.todos = [...this.todos, res.data];
        })
        .catch(err => console.log(err))
    }
  },
  beforeCreate(){
      console.log("This is called after vue is initialized")
  }, 
  created() {
      console.log("Calling Vue life cycle hook created");
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => {
          this.todos = res.data;
        })
        .catch(err => {
          console.log(err)
        })
  },
  beforeMount(){
      console.log("Before Mounting the Component")
  },
  mounted(){
      console.log("Mounte the Component")
  },
  beforeUpdate(){
      console.log("Before Updating the Component")
  },
  updated(){
      console.log("Component data is updated")
  },
  activated() {
      console.log("Component is active..");
  },
  deactivated() {
      console.log("Component is deactive now");
  },
  beforeDestroy(){
      console.log("Before destroying the component");
  },
  destroyed(){
            console.log("Todo Example component is destroyed");

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
.btn {
  display: inline-block;
  border:none;
  background: #4f54e2;
  color: #ffff;
  padding : 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
