<script setup lang="ts">
import TourView from '@/components/TourView.vue'
import { tour } from '@/store/tour'

</script>

<template>
  <TourView :tour="tour" />
</template>

<style scoped>
</style>
