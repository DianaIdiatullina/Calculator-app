<template>
  <v-layout
    column
    class="calculator elevation-24"
  >
    <v-flex class="calculator__display">
      <v-layout column>
        <v-flex>
          <div class="calculator__display-btn calculator__display-btn--red"></div>
          <div class="calculator__display-btn calculator__display-btn--yellow"></div>
          <div class="calculator__display-btn calculator__display-btn--green"></div>
        </v-flex>
        <v-flex class="calculator__display-value text-xs-right">
          {{ value }}
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex class="calculator__keyboard">
      <v-layout wrap>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '0'"
          >AC</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn">+/-</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn">%</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn calculator__keyboard-btn--orange">&divide;
          </v-btn>
        </v-flex>


        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '7'"
          >7</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '8'"
          >8</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '9'"
          >9</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn calculator__keyboard-btn--orange">&times;
          </v-btn>
        </v-flex>


        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '4'"
          >4</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '5'"
          >5</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '6'"
          >6</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn calculator__keyboard-btn--orange">-
          </v-btn>
        </v-flex>


        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '1'"
          >1</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '2'"
          >2</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn"
            @click="value = '3'"
          >3</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn calculator__keyboard-btn--orange">+
          </v-btn>
        </v-flex>


        <v-flex
          xs6
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn calculator__keyboard-btn--zero"
            @click="value = '0'"
          >0</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn">,</v-btn>
        </v-flex>
        <v-flex
          xs3
          class="calculator__keyboard-box"
        >
          <v-btn
            flat
            class="calculator__keyboard-btn calculator__keyboard-btn--orange">=
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import { Component } from 'vue-property-decorator'
  import BaseComponent from '../modules/BaseComponent'

  @Component
  export default class Calculator extends BaseComponent {

    value = '0'
    constructor () {
      super()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/variables';

  .calculator {
    border-radius: 5px;
    border: 1px solid #898989;
    width: 293px;
    max-width: 293px;

    &__display {
      background: #4c4c4c;
      padding: 8px;

      &-btn {
        height: 15px;
        width: 15px;
        border-radius: 15px;
        display: inline-block;
        margin-right: 5px;

        &--red {
          background: #ff3138;
        }

        &--yellow {
          background: #ffbe00;
        }

        &--green {
          background: #00da46;
        }
      }

      &-value {
        color: $color--white;
        font-size: 56px;
        font-weight: 200;
        line-height: 1;
        padding: 0 10px;
      }
    }

    &__keyboard {
      &-box {
        border-bottom: 1px solid #8e8e8e;
        border-right: 1px solid #8e8e8e;
      }

      &-btn {
        height: 60px;
        background: #d6d6d6;
        color: $color--black;
        font-size: 24px;
        font-weight: 400;
        width: 100%;
        margin: 0;
        padding: 0;
        min-width: unset;
        border-radius: unset;

        &--orange {
          background: #ff8e00;
          color: $color--white;
          font-size: 34px;
          font-weight: 300;
        }

        &--zero {
          /deep/ & .v-btn__content {
            justify-content: flex-start;
            padding-left: 30px;
          }
        }
      }
    }
  }
</style>

