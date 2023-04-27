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

## Criar component

`ng generate component components/template/header` 
(forma curta `ng g c ...`)

```
CREATE src/app/components/template/header/header.component.html (21 bytes)
CREATE src/app/components/template/header/header.component.ts (202 bytes)
CREATE src/app/components/template/header/header.component.css (0 bytes)
UPDATE src/app/app.module.ts (698 bytes)
```

O css do componente é sempre scoped! para css global, colocar em src\styles.css

## Diretivas
[watch](https://www.youtube.com/watch?v=NgHu3ekeN_I&list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3&index=5)

| Name | Angular | Vue |
| ---- | ----- | ----- |
| Structural directives| `*ngIf` <br> `*ngFor` | `v-if` <br> `v-for`
| Property binding | `[property]="value"` | `:property="value"`
| Event binding | `(event)="action"` | `@event="action"`
| Two way | `[(ngModel)]="variable"` | `v-model="variable"`
| Router | `<router-outlet>` <br> `<a routerLink="url">` | `<router-view>` <br> `<router-link to="url">`
| Pipes/Filters | `{{ property \| pipe }}` | `{{ property \| filter }}`

### Attribute directives
Um simples diretiva que altera a cor pra vermelho

```js
@Directive({
	selector: '[appRed]'
})
export class RedDirective {
	constructor(el: ElementRef) {
		el.nativeElement.style.color = 'red'
	}
}
```
```html
<i class="material-icons" appRed>
```

### Structural directives

Adicionam ou removem elementos no DOM

```html
<div *ngIf="isVisible"></div>
<li *ngFor="let product of products"> {{ product }} </li>
```

### Property binding

Binding de propriedades

```ts
export class HeaderComponent {
	logoUrl: String = 'assets/img/logo.png'
}
```

```html
<img alt="item" [src]="logoUrl">
```

### Event binding
```ts
export class HeaderComponent {
	logout(): void { /* ... */ }
}
```

```html
<button (click)="logout()">Logout</button>
```

### One Way data binding

Só atualiza no template se alterar no ts. Se alterar o input não reflete no ts

```ts
nome: string = 'Ana'
```

```html
<input [value]="nome">
{{ nome }}
```

### Two Way Data binding

Atualização bidirecional

```ts
nome: string = 'Ana'
```

```html
<input [(ngModel)]="nome">
```

## Angular router

Mapeamento entre URL e componente

O componente da rota é carregado dentro do `<router-outlet>`

Atributo `routerLink="/home"`

## Pipes

Processamento em cima de variáveis. Como se fosse vue filters. Podem ser encadeados (ter mais que um pipe em sequência)

`{{ valor }}` => 29.99 <br>
`{{ valor | moeda }}` => R$ 29,99