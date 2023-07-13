<template>
  <div class="playground-container">
    <h1 class="playground-title">Demonstração do bToast</h1>
    <div class="plaground-inputs">
      <div class="input-base">
        <p-select
          class="margin-bottom"
          label="Tipo de Toast"
          v-model="selectedType"
          :items="['success', 'error', 'warning', 'info']"
        ></p-select>
        <p-select
          label="Posição"
          v-model="position"
          :items="['top-right']"
        ></p-select>
      </div>
      <div class="input-base">
        <p-select
          class="margin-bottom"
          label="Tema"
          v-model="theme"
          :items="['dark', 'light']"
        ></p-select>
        <p-slider
          v-model="toastDurationSec"
          label="Duração"
          width="380px"
        ></p-slider>
        <div class="slider-select" style="width: 380px">
          <p :style="{ width: toastDurationSec + 3 + '%' }">{{ cmpSec }}s</p>
        </div>
      </div>
      <div class="input-base">
        <p-textarea label="Mensagem" v-model="toastMessage"></p-textarea>
      </div>
    </div>
    <div class="playground-action">
      <p-btn color="#FE5050" @click="closeAllToasts">Fechar toast</p-btn>
      <p-btn color="#00F391" @click="showAllToast">Mostrar todos toasts</p-btn>
      <p-btn color="#5093FE" @click="showToast">Mostrar toast</p-btn>
    </div>
    <div class="code-container">
      <code>
        <span>this.$<span class="highlight">btoast</span>("</span>
        <span class="highlight">{{ this.toastMessage }}</span>
        <span>",{</span>
        <br />
        <span>&nbsp;&nbsp;type: </span>
        <span class="highlight">{{ this.selectedType }}</span>
        <span>,</span>
        <br />
        <span>&nbsp;&nbsp;duration: </span>
        <span class="highlight">{{ this.cmpSec * 1000 }}</span>
        <span>,</span>
        <br />
        <span>&nbsp;&nbsp;isDark: </span>
        <span class="highlight">{{ this.theme === "dark" }}</span>
        <br />
        <span>});</span>
      </code>
    </div>
  </div>
</template>

<script>
import pSelect from "./components/p-select.vue";
import pTextarea from "./components/p-textarea.vue";
import pSlider from "./components/p-slider.vue";
import pBtn from "./components/p-btn.vue";
export default {
  components: {
    pSelect,
    pTextarea,
    pSlider,
    pBtn,
  },
  data() {
    return {
      selectedType: "success",
      theme: "light",
      toastMessage: "Exemplo de toast",
      toastDurationSec: 50,
      position: "top-right",
    };
  },
  computed: {
    cmpSec() {
      return this.toastDurationSec / 10;
    },
  },
  methods: {
    showAllToast() {
      this.$btoast("Exemplo de toast sucesso", {
        type: "success",
      });
      this.$btoast("Exemplo de toast erro", {
        type: "error",
        isDark: false,
      });
      this.$btoast("Exemplo de toast warning", {
        type: "warning",
      });
      this.$btoast("Exemplo de toast info", {
        type: "info",
        isDark: false,
      });
    },
    showToast() {
      this.$btoast(this.toastMessage, {
        type: this.selectedType,
        duration: this.cmpSec * 1000,
        isDark: this.theme === "dark",
      });
    },
    closeAllToasts() {
      this.$btoast.clear();
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  height: 100vh;
  margin: 0;
  background: #161922;
  color: white;
}

.playground-container {
  height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 70px;
}
.playground-title {
  margin: 0;
  font-weight: 700;
  font-size: 36px;
  margin-bottom: 50px;
}
.plaground-inputs {
  display: flex;
  justify-content: space-between;
}

.plaground-inputs .input-base {
  width: 33%;
}
.margin-bottom {
  margin-bottom: 20px;
}
.slider-select p {
  width: min-content;
  margin: 0;
  text-align: end;
}
.playground-action {
  margin-top: 50px;
}
.playground-action button {
  margin-right: 30px;
}
.code-container {
  margin-top: 50px;
  padding: 35px 40px;
  height: 300px;
  background-color: #252831;
  color: #ffffff;
  border-radius: 5px;
  overflow: auto;
  white-space: pre-wrap;
  font-size: 20px;
}

code {
  margin: 0;
  font-family: monospace;
}
.highlight {
  color: #5093fe;
  font-weight: 600;
}

@media only screen and (max-width: 1000px) {
  .plaground-inputs {
    flex-direction: column;
  }
  .plaground-inputs .input-base {
    width: 100%;
  }
  .p-input__component,
  .p-textarea__input {
    width: 360px !important;
  }
  .playground-title {
    font-size: 25px;
    text-align: center;
  }
  .playground-container {
    padding: 10px 6px;
    height: auto;
  }
  .playground-action {
    text-align: center;
  }
  .playground-action button {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .code-container {
    font-size: 16px;
  }
}
</style>
