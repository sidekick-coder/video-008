<script setup>
import { computed } from "vue";

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
<template>
  <div>
    <label class="font-bold block mb-2 text-gray-500" :for="id" v-if="label">
      {{ label }}
    </label>
    <input :id="id" v-model="model" class="border p-2 outline-teal-500" />
  </div>
</template>