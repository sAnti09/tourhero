<script setup lang="ts">
import type { ItineraryItemType } from '@/_types/data'

defineProps<{
  item: ItineraryItemType
}>()
</script>

<template>
  <div>
    Day: {{ item.day }}
    Title: {{ item.title }}
    Description: {{ item.description }}
  </div>
</template>

<style scoped>

</style>