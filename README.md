# Angular

## Conceitos
- Desenvolvido pelo Google
- Typescript é da Microsoft

main.ts > app.module > app.component (bootstrap)

Anatomia do módulo
https://prnt.sc/H6v-Tzhz-YVk

## Get started

### Instalar angular-cli
`npm i -g @angular/cli`

### Criar o projeto
`ng new frontend --prefix=app --minimal`

* `frontend`- nome da pasta
* `--prefix=app` prefixo de todos os componentes
* `--minimal` cria sem alguns arquivos desnecessários

### Rodar o projeto
* `cd frontend`
* `npm start`

## Arquivos do projeto
No `angular.json`, colocar false nessas duas configurações pra gerar arquivos separados pra estilo e html
```
"inlineTemplate": false,
"inlineStyle": false,
```

## Material design
`ng add @angular/material`