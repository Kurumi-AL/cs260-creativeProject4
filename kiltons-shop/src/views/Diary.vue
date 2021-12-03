<template>
  <div class="diary">
    <div class="title">
    <h1>Kilton's Secret Diary</h1>
    </div>

    <div class="d-flex justify-content-center">
    <section class="diary-gallery">
      <div class="image" v-for="item in items" :key="item.id">
        <h2 style="text-align: center;">{{item.title}}</h2>
        <img :src="item.path" style="width:700px"/>
        <h5 class="pt-2" style="text-align: center;">{{item.description}}</h5>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Diary',
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get(process.env.VUE_APP_API_ENDPOINT + '/diaries');
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>


<style>
.diary {
  padding-top: 100px;
  padding-left: 10%;
  padding-right: 10%;
}

.title {
  text-align: center;
  padding-bottom: 20px;
}

.image h2 {
  font-style: italic;
}

.image {
  padding-bottom: 30px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

/* .image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
} */

.image img {
  width: 100%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>