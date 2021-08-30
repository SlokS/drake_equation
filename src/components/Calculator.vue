<template>
  <div class="calculator">
   <div class="calculator__caption">
      Калькулятор уравнения Дрейка<br>N = R x f<sub>p</sub> x n<sub>e</sub> x f<sub>l</sub> x f<sub>i</sub> x f<sub>c</sub> x L
    </div>
    <div class="calculator__input">
      <label for="R">R</label>
      <input type="number" id="R" name="R" min="0" v-model="R">
      <div class="calculator__input-result">R = {{R}}</div>
    </div>
    <div class="calculator__input">
      <label for="fp">f<sub>p</sub></label>
      <input type="range" id="fp" name="fp" min="0" max="100" v-model="Fp">
      <div class="calculator__input-result">f<sub>p</sub> = {{Fp}}%</div>
    </div>
    <div class="calculator__input">
      <label for="ne">n<sub>e</sub></label>
      <input type="number" id="ne" name="ne" min="0" v-model="Ne" @input="integerCount()">
      <div class="calculator__input-result">n<sub>e</sub> = {{Ne}}</div>
    </div>
    <div class="calculator__input">
      <span>f<sub>l</sub></span>
      <div class="calculator__radio-box">
        <label for="fl1"><input type="radio" id="fl1" name="fl" value="1" v-model="Fl" checked >Дрейк</label>
        <label for="fl2"><input type="radio" id="fl2" name="fl" value="0.13" v-model="Fl">Лайнвивер</label>
      </div>
      <div class="calculator__input-result">f<sub>l</sub> = {{Fl}}</div>
    </div>
    <div class="calculator__input">
      <label for="fi">f<sub>i</sub></label>
      <input type="range" id="fi" name="fi" min="-2" max="5" value="0" v-model="Fi">
      <div class="calculator__input-result">f<sub>i</sub> = {{fi_persent}}%</div>
    </div>
    <div class="calculator__input">
      <label for="fc">f<sub>c</sub></label>
      <input type="range" id="fc" name="fc" min="0" max="100" v-model="Fc">
      <div class="calculator__input-result">f<sub>c</sub> = {{Fc}}%</div>
    </div>
    <div class="calculator__input">
      <label for="L">L</label>
      <input type="range" id="L" name="L" min="-5" max="2" v-model="L">
      <div class="calculator__input-result">L = {{l_persent}}%</div>
    </div>
    <div class="calculator__result">
      N = {{drakeResult}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      R: 1000000000,
      Fp: 20,
      Ne: 3,
      Fl: 1,
      Fi: 1,
      Fc: 50,
      L: 1
    }
  },
  methods: {
    integerCount: function () {
      console.log(this.Ne)
    }
  },
  computed: {
    drakeResult () {
      return +(this.R * this.Fp * this.Ne * this.Fl * (this.fi_persent / 100) * (this.Fc / 100) * (this.l_persent / 100)).toFixed(6)
    },
    fi_persent () {
      return +Math.pow(1 / 10, this.Fi).toFixed(6)
    },
    l_persent () {
      return +Math.pow(10, this.L).toFixed(6)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
