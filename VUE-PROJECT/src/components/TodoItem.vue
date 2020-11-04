<template>
    <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
        <p class="todo-text">
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}
            <button @click="$emit('del-todo', todo.id)" class="del">x</button>
        </p>
    </div>
</template>
<script>
export default {
    name : "Todoitem",
    props: ["todo"],
    methods: {
        markComplete(){
            console.log("Checkbox Clicked....")
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>
 .todo-item {
     background : #4f4f4f;
     padding: 10px;
     border-bottom: 1px #ccc dotted;
 }
 .todo-text {
     color: #c6ec19;
     font-weight: 200;
     font-size: 20px;
     text-align: left;
 }
 .is-complete {
     text-decoration: line-through;
 }
 .del {
     background: #df0a0a;
     color: #ffffff;
     border: none;
     padding: 5px 9px;
     border-radius: 50%;
     cursor: pointer;
     float: right;
 }
</style>