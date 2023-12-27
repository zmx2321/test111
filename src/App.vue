<template>
  <handwrittenSignature :width="400" :height="200" @save="save"  />
</template>

<script setup>
import handwrittenSignature from '/packages/handwritten-signature-vue3/index,vue
const save = (data) => {
  console. log('[ data ] >', data)
}
</script>
