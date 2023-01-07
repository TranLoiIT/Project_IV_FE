<template>
     <label
          class="text-gray-700 text-sm font-bold mb-2"
     >
          {{ label }}
          <span v-if="compulsory" class="text-red-500 px-1">(*)</span>
     </label>
</template>
<script>
export default {
     props: {
          compulsory: {
               type: Boolean,
               default: false
          },
          label: {
               type: String,
               default: '',
          },
     }
}
</script>