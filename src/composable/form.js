import { provide, inject, ref, reactive } from 'vue'

const key = Symbol('form')

export function provideForm(){
    const validateFunctions = ref([])

    const state = reactive({
        validateFunctions
    })

    provide(key, state)

    return state
}


export function useForm(){
    return inject(key)
}