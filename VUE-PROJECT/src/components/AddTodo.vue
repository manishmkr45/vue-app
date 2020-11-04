<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Todos">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>
<script>
export default {
    name: "AddTodo",
    data(){
        return {
            title: ''
        }
    },
    methods:{
        addTodo(e){
            e.preventDefault();
            console.log('Adding the New Todos')
            const newTodo = {
                title: this.title,
                completed: false
            }

            // send to parent APP componet

            this.$emit('add-todo', newTodo);
            this.title = '';
        }
    }
}
</script>
<style scoped>
    form {
        display: flex;
        height: 50px;
        padding: 10px 0px 10px 0px;
    }
    input[type="text"]{
        flex: 10;
        padding: 5px;
    }
    input[type="submit"]{
        flex: 2;
    }
</style>