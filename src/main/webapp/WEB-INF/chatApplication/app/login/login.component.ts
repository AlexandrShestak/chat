import { Component, Input } from '@angular/core';
import {Http, Headers, HTTP_PROVIDERS} from '@angular/http';
import {Contact} from "./contact";
import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'my-app',
    templateUrl : 'app/login/login.component.html',
    viewProviders: [HTTP_PROVIDERS]
})

export class AppComponent {
    email: string;
    password: string;
    @Input() contact: Contact;
    private loginUrl : 'login';

    constructor(private http : Http) {
        
    }

 /*   login(contact: Contact):  Promise<Contact> {*/
    login(contact: Contact) {
        console.info('Login button pressed email: '
            + this.contact.email + " password : " + this.contact.password);

       /* let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.loginUrl, JSON.stringify(contact), {headers: headers})
            .toPromise()
            .then(res =>  console.info('login result : ' + res.json().data))
            .catch(this.handleError);*/
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}