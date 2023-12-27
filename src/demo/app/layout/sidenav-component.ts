import { Component, OnInit } from '@angular/core';
import { appRoutes } from '../routes';
import { LanguageService } from '../language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'layout-sidenav',
    template: `
        <ul class="nav nav-pills flex-column">
            <li class="nav-item" routerLinkActive="active" *ngFor="let route of routes">
                <a class="nav-link" routerLink="{{route.url}}" routerLinkActive="active">{{route.title | translate}}</a>
            </li>
        </ul>
    `
})
export class LayoutSidenavComponent implements OnInit {
    
    routes = [];
    ngOnInit(): void {
        // .map生成[{title:"",url:""}]这种对象数组
        this.routes = appRoutes.filter(route => route.component)
            .map(route => ({
                title: route.data.title,
                url: `/${route.path}`
            }));
        console.log(JSON.stringify(this.routes));
    }
}


