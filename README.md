# b-toast

> Uma biblioteca de toasts para Vue 3

O `b-toast` é uma biblioteca de toasts simples e personalizáveis para Vue 3. Ele fornece um componente Vue fácil de usar para exibir notificações no estilo toast em seu aplicativo.

![](./example.gif)

# Vue 2

O bToast tambem é oferecido para Vue pela branch [V2](https://github.com/BtreeDevelopers/b-toast/tree/v2)

## Recursos

- Exibe notificações de estilo toast de forma simples e elegante.
- Personalizável para atender às necessidades do seu aplicativo.
- Suporte a tipos de toasts: sucesso, erro, aviso, informativo, etc.
- Fácil integração com projetos Vue 3 existentes.

## NPM

https://www.npmjs.com/package/b-toast

## Demonstração

Precisa de exemplos: `DEMO PENDENTE`

## Instalação

```bash
$ npm install b-toast@1.X
```

## Uso

### Registro do plugin

Registre o componente `b-toast` globalmente em seu aplicativo Vue:

```javascript
// main.js ou main.ts
import { createApp } from "vue";
import App from "./App.vue";
import pine from "pine-btree";

const app = createApp(App);

app.use(pine);
app.mount("#app");
```

Em seguida, você pode usar o componente `b-toast` em qualquer lugar em seu aplicativo:

```javascript
import { useToast } from "b-toast";
const toast = useToast();
toast.show("Olá sou um toast!");

// Ou com opções
const id = toast.show("Conteúdo do toast", {
  isDark: true,
});
// Ao invocar o toast, é retornado um ID único que
// pode ser usado para removê-lo da tela, se necessário.

//Removendo todos os toasts
toast.clear();

//Removendo um dos toasts (por id)
toast.dismiss(id);
```

#### `toast.show(conteudo,?props)`

#### `toast.clear()`

#### `toast.dismiss(id)`

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
