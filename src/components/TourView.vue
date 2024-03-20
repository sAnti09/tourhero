<script setup lang="ts">
import type { TourType } from '@/_types/data'
import ItineraryItemView from '@/components/ItineraryItemView.vue'
import Carousel from '@/components/CarouselView.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'

const { tour } = defineProps<{
  tour: TourType
}>()
const { region, country, category, name, description, itinerary, id, photoUrls } = tour

</script>

<template>
  <Carousel :photos="photoUrls" />
  <div class="wrapper">
    <div class="tour">
      <div>
        <div class="header">
          <div class="breadcrumbs">
            {{ region }} > {{ country }} > {{ category }}
          </div>
          <div>ID: {{ id }}</div>
        </div>

        <h1>{{ name }}</h1>
        <div class="description">{{ description }}</div>
      </div>

      <h3>
        <FontAwesomeIcon :icon="faMapLocation" />
        Itinerary
      </h3>
      <div class="itinerary-list">
        <ItineraryItemView v-for="item in itinerary" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>

.wrapper {
  display: block;
  margin-top: 340px;
}

.tour {
  border: solid 1px #eee;
  margin: 0 auto;
  padding: 30px;
  max-width: 720px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  background-color: white;

  .header {
    color: #BCBCBC;
    font-size: 12px;
    display: flex;

    .breadcrumbs {
      flex-grow: 1;
    }
  }

  h1 {
    margin-bottom: 12px;
  }

  h3 {
    color: #3d5b71;
  }

  .description {
    font-size: 14px;
    font-weight: 500;
  }

  .itinerary-list {
    overflow-y: scroll;
    max-height: 500px;
    scrollbar-color: #32555F transparent;
    scrollbar-width: thin;
  }
}
</style>