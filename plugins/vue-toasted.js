import Vue from "vue"
import Toasted from "vue-toasted"

Vue.use(Toasted, {
   iconPack: "material",
   theme: "toasted-primary",
   duration: 3000,
   icon: {
      name: "warning"
   }
});
