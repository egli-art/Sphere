import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "../social-platform/frontend/src/app/app-module.ts";

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
