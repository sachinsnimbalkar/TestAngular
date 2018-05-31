import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';
//import { environment } from '..//environments/environment';
//import { environment } from '../../node_modules/@schematics/angular/application/files/src/environments/environment';
export const environment = {
    production: true
  };
if (environment.production) {
      enableProdMode();
}    
platformBrowserDynamic().bootstrapModule(AppModule);
