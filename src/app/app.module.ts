import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import {LoginModule} from './login/login.module';
import {LoginRouterModule} from './login/login.router.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpProvider} from './http.provider';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'login',loadChildren:'./login/login.module#LoginModule'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // LoginModule,
    FormsModule,
    RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})
  ],
  providers: [HttpProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
