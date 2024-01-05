# Requisições no Fivem


Aqui no fivem, temos padrões diferente da web, sendo assim vou explicar brevemente um pouco, sobre requisições e como se comuninar com fivem.

Para puxar dados, ou enviar dados utilizamos `fetchNui`, uma função que por baixo dos panos usa `fetch` do browser.

```tsx
await fetchNui("resouceName:backend", { action: "example", args: { test: "meus dados" } }, { "exemple": { "200" } })
```

`resouceName` - Esse será o nome do script, que você dará EX: `tattoo`. <br/>
`action` - Será o nome da requisição, que será identificada no Back-end. <br/>
`args` - São todos argumentos que você enviará para o Back-end. <br/>

Já o ultimo objeto `{ "exemple": { "200" } }`, ele é um mockup, sendo que quando estiver na web, sem o front-end estar conectado no Fivem, ele enviará esse mockup, como uma simulação de resposta do backend. Quero que use em todas requisições esse mockup, 100% funcionando no ambiente web, simulando a resposta do backend.

# Evento Síncrono

Para que o backend, possa enviar algo para o frontend de forma síncrona, temos o `useNuiEvent`, a função dele é escutar o backend e receber qualquer dado, vindo de lá.

Usamos bastante esse evento para captar, quando vamos abrir e fechar nossa interface. E se precisamos atualizar na nossa interface de forma síncrona, usamos esse evento. Mas caso queira fazer algo assíncrono o mais recomendando é o `fetchNui`, como dito anteriormente.

```tsx
const [open, setOpen] = useState<boolean>(false)
useNuiEvent("listerner_open", setOpen);
```

Nesse exemple estou escultando o evento `listerner_open`, quando ele for emitido no backend, ele ira setar o estado do `useState`, com o valor vindo do backend.

# Mockup de Evento Síncrono

Caso queira fazer um mockup, igual anteriormente no `fetchNui`, você pode usar `debugData`, sendo assim podendo mockear o evento, para simular uma resposta do Fivem.

```tsx
debugData([
  {
    action: "listerner_open",
    data: true
  }
])
```

`action` - Nome do Evento. <br/>
`data` - Dado do Evento. <br/>
