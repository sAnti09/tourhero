<script setup lang="ts">
import type { TourType } from '@/_types/data'
import ItineraryItemView from '@/components/ItineraryItemView.vue'

const { tour } = defineProps<{
  tour: TourType
}>()

const { region, country, category, name, description, itinerary } = tour

</script>

<template>
  <div>
    {{ region }} > {{ country }} > {{ category }}
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
  </div>
  <ul>
    <li v-for="item in itinerary" :key="item.id">
      <ItineraryItemView :item="item" />
    </li>
  </ul>
</template>

<style scoped>

</style>