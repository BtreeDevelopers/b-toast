<template>
  <div class="playground-container">
    <h1>Demonstração do b-toast</h1>

    <div class="options-container">
      <div class="option">
        <label for="toast-type">Tipo de Toast:</label>
        <select id="toast-type" v-model="selectedType">
          <option value="success">Sucesso</option>
          <option value="error">Erro</option>
          <option value="warning">Aviso</option>
          <option value="info">Informativo</option>
        </select>
      </div>

      <div class="option">
        <label for="dark-mode">Modo Escuro:</label>
        <input type="checkbox" id="dark-mode" v-model="darkMode" />
      </div>

      <div class="option">
        <label for="toast-message">Mensagem:</label>
        <input type="text" id="toast-message" v-model="toastMessage" />
      </div>

      <div class="option">
        <label for="toast-duration">Duração (ms):</label>
        <input
          type="number"
          id="toast-duration"
          v-model.number="toastDuration"
        />
      </div>
    </div>

    <div class="buttons-container">
      <button class="btn btn-error" @click="closeAllToasts">
        Fechar Todos
      </button>
      <button class="btn" @click="showToast">Mostrar Toast</button>
    </div>

    <!-- <div class="code-container">
      <pre v-html="generateCode"></pre>
    </div> -->
     <div class="code-container">
      <code>
        <span>this.$btoast("</span>
        <span class="highlight">{{this.toastMessage}}</span>
        <span>",{</span>
        <br>
        <span>&nbsp;&nbsp;type: </span>
        <span class="highlight">{{this.selectedType}}</span>
        <span>,</span>
        <br>
        <span>&nbsp;&nbsp;duration: </span>
        <span class="highlight">{{this.toastDuration}}</span>
        <span>,</span>
        <br>
        <span>&nbsp;&nbsp;isDark: </span>
        <span class="highlight">{{this.darkMode}}</span>
        <br>
        <span>});</span>
      </code>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: "success",
      darkMode: false,
      toastMessage: "Exemplo de toast",
      toastDuration: 3000,
    };
  },
  methods: {
    showToast() {
      this.$btoast(this.toastMessage, {
        type: this.selectedType,
        duration: this.toastDuration,
        isDark: this.darkMode,
      });
    },
    closeAllToasts() {
      this.$btoast.clear();
    },
  },
};
</script>

<style scoped>
.playground-container {
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.dark-mode {
  background-color: #333;
  color: #fff;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.option {
  flex-basis: 48%;
  margin-bottom: 10px;
}

.option label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.btn-error {
  background: #ff0000;
}

.btn:hover {
  background-color: #0056b3;
}
.btn-error:hover {
  background: #8d0101;
}

.code-container {
  background-color: #161616;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  overflow: auto;
  white-space: pre-wrap;
}

code {
  margin: 0;
  font-family: monospace;
}
.highlight {
  color: #007bff;
  font-weight: bold;
}

</style>