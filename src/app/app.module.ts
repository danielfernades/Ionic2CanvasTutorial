import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CanvasDrawComponent } from '../components/canvas-draw/canvas-draw';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CanvasDrawComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule, FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
