import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CardComponent } from './components/card/card.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CardComponent]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
      const characterComponent = createCustomElement(CardComponent, { injector });
      customElements.define('character-component', characterComponent);
    }
  ngDoBootstrap(): void {}
}
