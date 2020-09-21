<template>
  <div class="editor" v-if="rawCoupon">
    <h2>
      Gutschein Konfigurieren
      <img
        src="~/assets/images/close.svg"
        alt="Close"
        @click="rawCoupon = ''"
        class="close-icon"
      >
    </h2>
    <textarea name="raw-coupon" id="raw-coupon" cols="100" rows="30" v-model="rawCoupon"></textarea>
    <button type="button" @click="$emit('saveCoupon')">Speichern</button>
  </div>
</template>

<script>
export default {
  name: "CouponDetail",
  props: {
    coupon: {
      type: String,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
</style>
