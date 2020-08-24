import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';

import { CamelCasePipe } from './camel-case.pipe';

import { SettingsService } from '../app/settings.service';
import { FilterArrayPipe } from './filter-array.pipe';
import { FilterArrayImpuroPipe } from './filter-array-impuro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FilterArrayPipe,
    FilterArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SettingsService,
    /*{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }*/
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsServices) => {
        settingsServices.getLocale();
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
