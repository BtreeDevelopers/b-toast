# b-toast

## Demonstração

Precisa de exemplos: [demonstração](.)

## Instalação

```
$ npm install b-toast
```

## Uso

### Registro do plugin

Adicione o plugin a sua aplicação:

```javascript
import { createApp } from "vue";
import bToast from "b-toast";
// Importe o css do Toast
import "b-toast/dist/bToast.css";

const options = {
  // Você pode setar as opções padrões aqui
};

Vue.use(Toast, options);
```

E apenas chame ele no seu componente

```javascript
this.$btoast("I'm a toast!");

// Ou com opções
this.$btoast("My toast content", {
  isDark: true,
});
```
