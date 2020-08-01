import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {LoginService} from './login.service';
import {NotificationService} from '../../shared/messages/notification.service';
import {PATTERS} from '../../shared/patterns';
import { Observable } from 'rxjs';
import { User } from './login.model';

@Component({
    selector: 'lacc-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    navigateTo: string;
    isLoggedIn:boolean = true;
    logInObs:Observable<{success:boolean,token:string}>;

    constructor(private fb: FormBuilder,
                private loginServive: LoginService,
                private activateRouter: ActivatedRoute,
                private router: Router,
                private notificationService: NotificationService) {
    }

    ngOnInit() {

        this.navigateTo = this.activateRouter.snapshot.params['to'] || btoa('/');
    }

    login(loginForm:NgForm) {

        if(this.isLoggedIn)
        {
            this.logInObs = this.loginServive
            .login(loginForm.value.email, loginForm.value.password);
        }
        else
        {
            // this.logInObs = this.loginServive
            // .signUp(loginForm.value.fullName,loginForm.value.email, loginForm.value.password);
        }
        
        this.logInObs.subscribe(
            response => {
                if(response.success)
                {
                    this.loginServive.accessToken=response.token;
                    this.getUserData();
                }
                
            },       
            response1 => this.notificationService.notify(response1.error.message)  
        );
        
        loginForm.reset();
    }
    getUserData(){
        this.loginServive.getUserData().subscribe(
            user => {
                this.router.navigate([atob(this.navigateTo)]);
                this.notificationService.notify(`Welcome ${user.userName}`);
                this.loginServive.user =user;

            },
            response => this.notificationService.notify(response.error.message)
        )
    }

    switchMode(){
        this.isLoggedIn = !this.isLoggedIn;
    }
}
