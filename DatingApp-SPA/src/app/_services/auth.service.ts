import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    baseUrl = environment.apiUrl + "auth/";
    jwtHelper = new JwtHelperService();
    decodedToken: any;

    constructor(private http: HttpClient) { }

    login(model: any) {

        return this.http.post(this.baseUrl + 'login/', model)
            .pipe(
                map((response: any) => {
                    console.log(response);
                    const user = response;
                    console.log(user)
                    if (user) {
                        localStorage.setItem('token', user.token);
                        this.decodedToken = this.jwtHelper.decodeToken(user.token);
                    }
                })
            );
    }

    register(user: any) {
        return this.http.post(this.baseUrl + 'register', user);
    }

    loggedIn(){
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
}
