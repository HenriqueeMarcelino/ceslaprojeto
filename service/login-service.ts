import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    login(email: string, password: string): boolean {
        if (password.length >= 8 && email.includes('@')) {
            return true;
        } else {
            return false;
        }
    }
}