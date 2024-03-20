<script setup lang="ts">
import type { ItineraryItemType } from '@/_types/data'

const { item } = defineProps<{
  item: ItineraryItemType
}>()

</script>

<template>
  <div class="itinerary-item">
    <div class="preview">
      <img :src="item.photoUrls[0]" alt="">
    </div>

    <div class="details">
      <div class="header">
        <div class="day">
          Day {{ item.day }}
        </div>
        <div class="title">
          {{ item.title }}
        </div>
      </div>

      <div class="description">
        {{ item.description }}
      </div>

      <a href="#">Show more</a>
    </div>
  </div>
</template>

<style scoped>
.itinerary-item {
  display: flex;
  padding: 12px 30px;
  gap: 30px;


  .preview img {
    width: 220px;
    height: 130px;
  }

  .details {
    display: flex;
    flex-direction: column;
    font-size: 14px;

    .header {
      display: flex;
      gap: 15px;
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;

      .day {
        color: #426f7c;
      }
    }

    .description {
      color: #A1A1A1;
      flex-grow: 1;
      font-weight: 400;
    }
  }
}
</style>