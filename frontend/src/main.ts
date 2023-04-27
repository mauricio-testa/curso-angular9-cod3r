import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// #1 o main.ts diz que o modulo inicial da aplicação é o app.module.ts...
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
