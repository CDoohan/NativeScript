import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { registerElement } from "nativescript-angular";
registerElement("PreviousNextView", () => require("nativescript-iqkeyboardmanager").PreviousNextView);

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

import { UserService } from "./shared/user.service";
import { ItemService } from "./home/item/item.service";

import { MaskedTextFieldModule } from "nativescript-masked-text-field/angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        MaskedTextFieldModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        UserService,
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
