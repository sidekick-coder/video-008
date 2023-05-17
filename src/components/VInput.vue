<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useForm } from "../composable/form";

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  type: {
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
  rules: {
    type: Array,
    default: () => []
  }
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

// Error messages

const error = ref({
  message: null,
})

function validate(){
  const isValid = props.rules
    .reduce((result, rule) => {

      if (typeof result === 'string') {
        return result
      }

      return rule(model.value)
    }, true)

    if (typeof isValid === 'string') {
      error.value.message = isValid
      return false
    }

    error.value.message = null

    return true
}

watch(model, validate)

// Form

const form = useForm()

onMounted(() => {
  if (!form) return

  form.validateFunctions.push(validate)
})

onUnmounted(() => {
  form.validateFunctions.filter(fn => fn !== validate)
})


</script>
<template>
  <div class="flex flex-wrap">

    <label class="w-full font-bold block mb-2 text-gray-500" :for="id" v-if="label">
      {{ label }}
    </label>

    <input
      v-model="model"
      :type="type"
      :id="id"
      class="w-full border p-2 outline-teal-500"
    />

    <small class="text-red-500 mt-2 font-bold">
      {{ error.message }}
    </small>
  </div>
</template>