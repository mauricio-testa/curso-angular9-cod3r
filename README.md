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

## Elementos do Angular

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

## Observables

Angular usa o `ReactiveX` (`rxjs`)
Padrão orientado a evento
Pode ter vários observers querendo observar um subject. Mas pra eles observarem, eles tem que se registrar primeiro

1. Observers se inscrevem no subject
2. Suject emite o evento
3. Subject tem a lista dos observers interessados nesse evento, então notifica os observers (callback)

```ts
function create(produto: Produto): Observable<Produto> {
	return this.http.post<Produto>(this.url, produto)
}
// method call
this.create(this.produto).subscribe(() => {
	alert('criado com sucesso!')
})
```

É uma evloução de padrão de projeto. Callbacks > Promisses > Observables

## Services

Classes para organizar e reutilizar métodos e dados entre componentes

Compartilhar informações entre componentes

`ng g s services/product`


```ts
@Injectable({
	providedIn: 'root' // Singleton
})
```

* `@Injectable` significa que a classe pode ser injetada em outras classes
* `providedIn: 'root'` significa que a minha classe vai ficar disponível para a aplicação inteira em uma mesma instância
* `root` é um alias para AppModule
* Se eu quiser posso disponibilizar essa classe apenas a um modulo, importando o módulo

```ts
import AuthModule from 'auth-module'
@Injectable({
	providedIn: AuthModule
})
```
## Injeção de dependência

"Ao invés de construir o motor na mesma fábrica que o carro, compra ele pronto e joga pra linha de montagem"

https://www.youtube.com/watch?v=wDTPz032MRo&list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3&index=14

## Schematics

São modelos de componentes

https://material.angular.io/guide/schematics

## Estrutura de arquivos
```
app
	components
		product
			product.model.ts
			product.service.ts
			create
				create.component.(html|css|ts)
			delete
				delete.component.(html|css|ts)
		template
			header
				header.component.(html|css|ts)
			footer
				footer.component.(html|css|ts)
```