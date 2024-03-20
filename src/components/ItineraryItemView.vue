<script setup lang="ts">
import type { ItineraryItemType } from '@/_types/data'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight'

const { item } = defineProps<{
  item: ItineraryItemType
}>()

</script>

<template>
  <div class="itinerary-item">
    <div class="preview">
      <img :src="item.photoUrls[0]" alt="">
      <div class="nav right-chevron">
        <FontAwesomeIcon :icon="faChevronRight" />
      </div>
      <div class="nav left-chevron">
        <FontAwesomeIcon :icon="faChevronLeft" />
      </div>
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

<style lang="scss" scoped>
.itinerary-item {
  position: relative;
  display: flex;
  padding: 12px 30px;
  gap: 30px;

  &:before {
    content: "";
    position: absolute;
    left: 3px;
    z-index: 100;
    width: 2px;
    top: 0;
    height: 100%;
    background: #dadada;
  }

  &:first-of-type {
    &:before {
      top: 50%;
      height: 50%;
    }
  }

  &:last-of-type {
    &:before {
      top: 0;
      height: 50%;
    }
  }

  &:after {
    content: "";
    position: absolute;
    left: 0;
    z-index: 100;
    top: 50%;
    margin-top: -6px;
    background-color: white;
    width: 5px;
    height: 5px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    border: solid 2px #A8B4B2;
  }

  .preview {
    position: relative;

    img {
      width: 220px;
      height: 130px;
      border-radius: 4px;
    }

    .nav {
      font-size: 12px;
      background: white;
      border-radius: 50%;
      position: absolute;
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 2.2em;
      top: 50%;
      margin-top: -14px;

      &.left-chevron {
        left: 0;
        margin-left: -10px;
      }

      &.right-chevron {
        right: 0;
        margin-right: -10px;
      }
    }
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