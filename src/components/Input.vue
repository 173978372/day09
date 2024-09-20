<template>
  <div class="w-[180px] relative inline-block text-[14px]">
    <input
      v-bind="attrs"
      :value="props.value"
      @input="
        (e) => {
          emit('update:value', e.target.value)
        }
      "
      class="w-[100%] mx-[15px] inline-block h-[40px] leading-[40px]"
    />
  </div>
</template>
<script setup>
import { useAttrs, defineProps, defineEmits } from 'vue'
const attrs = useAttrs()
const props = defineProps({
  value: String
})
const emit = defineEmits(['update:value', 'update:checked'])
</script>
