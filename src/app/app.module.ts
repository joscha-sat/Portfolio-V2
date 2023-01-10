import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./router/app-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgOptimizedImage } from "@angular/common";
import { LeftRightComponent } from './layout/left-right/left-right.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { AngularVueIconsComponent } from './components/thumbnail/angular-vue-icons/angular-vue-icons.component';
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        LeftRightComponent,
        ThumbnailComponent,
        AngularVueIconsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        NgOptimizedImage,
        MatToolbarModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}



