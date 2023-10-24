---
title: sync模拟
size: 468
---
###### 父组件
```vue
<!-- parent.vue -->
<xxx v-model:modelValue="父组件的state" />
```
###### 子组件
```vue
<!-- child.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="value" />
</template>
```
