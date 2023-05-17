<script setup>
import { ref } from 'vue';
import VInput from './components/VInput.vue';
import VForm from './components/VForm.vue';

const data = ref({
  name: '',
  age: 0
});

function required(value){
  return !!value || 'This field is required'
}

function max(length) {
  return (value) => {
    return value <= length || 'Max length is: ' + length
  }
}

function submit(){
  console.log('submit app')
}

</script>
<template>
  <div class="h-screen w-screen flex items-center justify-center bg-gray-900" >
    <v-form class="bg-white p-5 w-[500px]" @submit="submit">
      <v-input
        id="name"
        label="Name"
        v-model="data.name"
        :rules="[required]"
        class="mb-4"
      />
      
      <v-input
        id="age"
        label="Age"
        type="number"
        v-model="data.age"
        :rules="[required, max(100)]"
      />

      <button type="submit" class="w-full mt-4 p-2 bg-teal-500 text-white">
        Submit
      </button>

    </v-form>
  </div>
</template>