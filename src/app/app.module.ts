import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{Routes, RouterModule} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './data.service';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { DetailviewComponent } from './detailview/detailview.component';
import { EditComponent } from './edit/edit.component';


const approutes: Routes=[{
  path: "",
  component: LoginComponent
},
{ path: "register",
  component : SignupComponent
},

{ path: "home",
  component : HomeComponent
},
{
  path : "add",
  component :AddComponent
},
{
  path : "view",
  component : ViewComponent
},

{
  path:"detailview/:id",
component:DetailviewComponent
},
{
  path : "edit",
  component : EditComponent
},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    ViewComponent,
    DetailviewComponent,
    EditComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
