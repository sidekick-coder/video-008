<script setup>
import { ref } from 'vue';
import VInput from './components/VInput.vue';

const data = ref({
  name: '',
});

</script>
<template>
  <div class="h-screen w-screen flex items-center justify-center bg-gray-900" >
    <div class="bg-white p-5">
      <v-input id="name" label="Name" v-model="data.name" />

    </div>
  </div>
</template>