# b-toast

> Uma biblioteca de toasts para Vue 2

O `b-toast` é uma biblioteca de toasts simples e personalizáveis para Vue 2. Ele fornece um componente Vue fácil de usar para exibir notificações no estilo toast em seu aplicativo.

![](./example.gif)

## Vue 3

Versão do `b-toast` para vue 3 está [disponivel](https://github.com/BtreeDevelopers/b-toast)

## Recursos

- Exibe notificações de estilo toast de forma simples e elegante.
- Personalizável para atender às necessidades do seu aplicativo.
- Suporte a tipos de toasts: sucesso, erro, aviso, informativo, etc.
- Fácil integração com projetos Vue 2 existentes.

## NPM

https://www.npmjs.com/package/b-toast

## Demonstração

Precisa de exemplos: [demonstração](https://btreedevelopers.github.io/b-toast/)

## Instalação

```bash
$ npm install b-toast@1.X
```

## Uso

### Registro do plugin

Registre o componente `b-toast` globalmente em seu aplicativo Vue:

```javascript
import Vue from "vue";
import bToast from "b-toast";
// Importe o css do Toast
import "b-toast/dist/bToast.css";

const options = {
  // Você pode setar as opções padrões aqui
};

Vue.use(bToast, options);
```

Em seguida, você pode usar o componente `b-toast` em qualquer lugar em seu aplicativo:

```javascript
this.$btoast("Olá sou um toast!");

// Ou com opções
const id = this.$btoast("Conteúdo do toast", {
  isDark: true,
});
// Ao invocar o toast, é retornado um ID único que
// pode ser usado para removê-lo da tela, se necessário.

//Removendo todos os toasts
this.$btoast.clear();

//Removendo um dos toasts (por id)
this.$btoast.dismiss(id);
```

Também é possivel utilizar pela instância do Vue:

```javascript
this.$btoast("Olá sou um toast!");

// Ou com opções
const id = Vue.prototype.$btoast("Conteúdo do toast", {
  type: "error",
});
// Ao invocar o toast, é retornado um ID único que
// pode ser usado para removê-lo da tela, se necessário.

//Removendo todos os toasts
Vue.prototype.$btoast.clear();

//Removendo um dos toasts (por id)
Vue.prototype.$btoast.dismiss(id);
```

#### `this.$btoast(conteudo,?props)`

#### `this.$btoast.clear()`

#### `this.$toast.dismiss(id)`

#### `Vue.prototype.$btoast(conteudo,?props)`

#### `Vue.prototype.$btoast.clear()`

#### `Vue.prototype.$btoast.dismiss(id)`

## Props

Aqui estão as propriedades disponíveis para o componente `b-toast`:

| Atributo |  Tipo   |  Inicial  | Descrição                                                                                                                       |
| :------- | :-----: | :-------: | :------------------------------------------------------------------------------------------------------------------------------ |
| content  | String  |    --     | Define o conteúdo no toast. (requerido)                                                                                         |
| type     | String  | `success` | Oefine o tipo de toast. Pode ser `success`, `error`, `warning`, `info`, ou qualquer outro tipo personalizado.                   |
| duration | Number  |  `3000`   | Define a duração em milissegundos que o toast ficará visível antes de ser fechado automaticamente. Padrão: `5000` (5 segundos). |
| isDark   | Boolean |  `false`  | Define o tema padrão do toast. Padrão: `false`.                                                                                 |

## Design Baseado em Pine UI

O design deste projeto de toasts, `b-toast`, foi desenvolvido com base no Pine UI, um design system moderno e flexível para design de front-end. O Pine UI fornece um conjunto abrangente de componentes e estilos consistentes que ajudaram a moldar a aparência e a experiência do b-toast.

Para obter mais informações sobre o Pine UI, você pode visitar o [Pine UI](https://www.behance.net/gallery/161882269/Design-System-Pine-UI-v1-bTree) e explorar os recursos e a documentação fornecidos.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
