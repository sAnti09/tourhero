<script setup lang="ts">
import { Navigation, Virtual } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperClass from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/virtual'

const modules = [Navigation, Virtual]
const { photos } = defineProps<{ photos: string[] }>()

let swiperRef: SwiperClass | null = null
const setSwiperRef = (swiper: SwiperClass) => {
  swiperRef = swiper
}


</script>

<template>
  <Swiper
    class="carousel"
    :modules="modules"
    :virtual="true"
    :slides-per-view="2"
    :centered-slides="true"
    :space-between="15"
    :navigation="true"
    :pagination="{ type: 'fraction' }"
    :initial-slide="1"
    :loop="true"
    @swiper="setSwiperRef"
  >
    <SwiperSlide v-for="(photo, index) in photos" :key="index" :virtual-index="index" class="slide">
      <div :style="{backgroundImage: `url(${photo})`}" class="photo" />
    </SwiperSlide>
  </Swiper>
</template>

<style lang="css" scoped>
.carousel {
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;

  .photo {
    height: 400px;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>