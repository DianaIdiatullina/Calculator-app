<template>
  <v-app>
    <div class="page">
      <v-content class="content">
        <nuxt/>
      </v-content>
    </div>
  </v-app>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import BaseLayout from './BaseLayout'

  @Component
  export default class Default extends BaseLayout {
    constructor () {
      super()
    }

    head () {
      return {
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .page {
    height: 100%;

    .content {
      height: 100%;
    }
  }
</style>
