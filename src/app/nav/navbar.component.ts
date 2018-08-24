import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: `./navbar.component.html`,
    styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchFrom {margin-right: 100px;}
    @media (max-width: 1200px) {#searchFrom {display:none}}
    `]
})

export class NavBarComponent {

}
