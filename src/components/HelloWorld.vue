<template>
  <div class="hello">
    <b-card-group>
      <b-card
        footer="$150 /night"
        footer-tag="footer"
        title="Modern English Basement Apartment"
        img-src="https://wander-lush.org/wp-content/uploads/2021/01/Medellin-Airbnb-Penthouse-in-Laureles.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          Good vibes of the city, catch the sunset from the rooftop.
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-left: 90px;
  padding-left: 20px;
}
</style>
