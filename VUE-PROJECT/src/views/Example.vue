<template>
    <div>
        <h3>VUE Example - 1</h3>
        <p>Message : {{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
        <br/>
        <div class="example-2">
            <input v-model="message">
        </div>

        <span v-if="seen">Now you see me</span>
          <div class="example-2">
              Set Seen value
              {{seen}}
            <input v-model="seen">
             True<input type="radio" name="true" value="true" v-model="seen">
             False<input type="radio" name="false" value="false" v-model="seen">
        </div>
    </div>
</template>
<script>
export default {
    name: 'Example',
    data(){
        return{
            message: 'Hello Vue.js!',
            seen: true
        }
    },
    methods: {
         reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
}
</script>

<style scoped>
    .example-2{
        padding: 10px 10px;
    }
</style>