<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <calculator/>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import BasePage from '../modules/BasePage'
  import { Component } from 'vue-property-decorator'
  import Calculator from '~/components/Calculator.vue'
  @Component({
    components: { Calculator }
  })
  export default class extends BasePage {

    constructor () {
      super()
    }
  }
</script>