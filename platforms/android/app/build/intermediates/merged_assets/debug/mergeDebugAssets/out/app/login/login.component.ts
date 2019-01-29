import { Component, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;

    constructor(private page: Page, private userService: UserService, private routerExtensions: RouterExtensions) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.cpf = "111.111.111-11";
        this.user.email = "example@procfit.com.br";
        this.user.password = "1234";
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        if (!this.user.cpf || !this.user.password) {
            this.alert("Por favor, forneça um cpf e senha.");
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        this.userService.login(this.user)
            .then(() => {
                this.processing = false;
                this.routerExtensions.navigate(["/home"], { clearHistory: true });
            })
            .catch(() => {
                this.processing = false;
                this.alert("Infelizmente não conseguimos encontrar sua conta.");
            });
    }

    register() {
        if (this.user.password != this.user.confirmPassword) {
            this.alert("Suas senhas não conferem.");
            return;
        }
        this.userService.register(this.user)
            .then(() => {
                this.processing = false;
                this.alert("Sua conta foi criada com sucesso.");
                this.isLoggingIn = false;
            })
            .catch(() => {
                this.processing = false;
                this.alert("Infelizmente não conseguimos criar sua conta.");
            });
    }

    forgotPassword() {
        prompt({
            title: "Esqueceu a senha",
            message: "Digite o cpf que você usou para se inscrever para redefinir sua senha",
            inputType: "number",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancelar"
        }).then((data) => {
            if (data.result) {
                this.userService.resetPassword(data.text.trim())
                    .then(() => {
                        this.alert("Sua senha foi redefinida com sucesso. Por favor, verifique sua caixa de mensagens para obter instruções sobre como escolher uma nova senha.");
                    }).catch(() => {
                        this.alert("Infelizmente, ocorreu um erro ao redefinir sua senha.");
                    });
            }
        });
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }

    alert(message: string) {
        return alert({
            title: "Ultrafarma",
            okButtonText: "Ok",
            message: message
        });
    }
}

