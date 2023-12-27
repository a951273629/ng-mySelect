import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DataService } from './examples/data.service';
import { ExamplesModule } from './examples/examples.module';
import { LayoutHeaderComponent } from './layout/header.component';
import { LayoutSidenavComponent } from './layout/sidenav-component';
import { appRoutes } from './routes';
import { ExampleHostDirective, ExampleViewerComponent } from './shared/example-viewer/example-viewer.component';
import { StackblitzButtonComponent } from './shared/example-viewer/stackblitz-button/stackblitz-button.component';
import { RouteViewerComponent } from './shared/route-viewer/route-viewer.component';
import { APP_BASE_HREF } from '@angular/common';

// 自定义的语言处理
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ExamplesModule,
        NgbModule,
        RouterModule.forRoot(appRoutes, {
            useHash: true
        },),
        TranslateModule.forRoot({
            loader: {
                provide:TranslateLoader,
                useFactory:(createTranslateLoader),
                deps:[HttpClient]
            }
        })
    ],
    providers: [
        DataService,
        // {provide: APP_BASE_HREF, useValue: '/ng-select/'}
    ],
    declarations: [
        ExampleHostDirective,
        AppComponent,
        LayoutHeaderComponent,
        LayoutSidenavComponent,
        ExampleViewerComponent,
        StackblitzButtonComponent,
        RouteViewerComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

