<template>
  <div class="hello">
    <b-card-group deck>
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
        <b-list-group>
          <b-list-group-item>Wifi, Kitchen, Heating</b-list-group-item>
          <b-list-group-item>Free Parking lot</b-list-group-item>
          <b-list-group-item>Gym and Swimming pool</b-list-group-item>
        </b-list-group>
        <br />
        <b-button href="#" variant="info" v-b-modal.modal-1
          >Book a stay</b-button
        >
        <b-modal id="modal-1" title="Payment Confirmation">
          <p class="my-4">You have just booked your Vuebnb</p>
        </b-modal>
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
