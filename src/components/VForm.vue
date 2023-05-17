<script setup>
import { provideForm } from '../composable/form'

const emit = defineEmits(['submit'])

const form = provideForm()

function submit(){
    let isValid = true

    for (const validate of form.validateFunctions) {
        isValid = validate() && isValid
    }

    if (!isValid) return
    
    emit('submit')
}

</script>

<template>
    <form @submit.prevent="submit">
        <slot />
    </form>
</template>