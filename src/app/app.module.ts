import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyComponent } from './components/my.component';
import { MenuComponent } from './components/menu.component'
import {ButtonComponent} from './components/button.component'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, MyComponent, MenuComponent, ButtonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
