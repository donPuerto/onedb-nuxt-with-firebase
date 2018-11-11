<template>
  <v-parallax
    dark
    src="/images/home/trianglify.png"
  >
    <v-layout
      align-center
      column
      justify-center
    >

      <h1
        :class="{
          'display-4': $vuetify.breakpoint.lgAndUp,
          'display-3': $vuetify.breakpoint.xs,
      }">One DB</h1>
      <h4 class="subheading">Powered by Nuxt and Firebase</h4>
      <div>
        <v-btn color="success">Projects</v-btn>
        <v-btn color="error">Blog</v-btn>
        <v-btn color="warning">Contact</v-btn>
        <v-btn color="info">Profile</v-btn>
      </div>
    </v-layout>

  </v-parallax>
</template>
<script>
export default {
  mounted() {
    console.log(this.$vuetify.breakpoint)
  }
}
</script>

<style lang="stylus" scoped>
.v-parallax__content {
  height: 100vh;
  width: 100vw;
}
</style>
