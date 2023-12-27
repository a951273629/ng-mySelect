import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language.service';

type langDir = 'ltr' | 'rtl';
type theme = 'default' | 'ant' | 'material';

@Component({
    selector: 'layout-header',
    template: `
        <nav class="navbar navbar-expand flex-column flex-md-row bd-navbar">
            <a class="navbar-brand" href="#">
                <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="32px" height="32px"/>
                &#64;ng-select/ng-select
            </a>
            <button class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse">
                <div ngbDropdown class="d-inline-block">
                    <button class="btn btn-outline-secondary btn-sm" style="width: 150px;"
                            ngbDropdownToggle>{{theme| translate}}</button>
                    <div ngbDropdownMenu>
                        <button (click)="setTheme('default')" class="dropdown-item btn-sm">{{'default'| translate}}</button>
                        <button (click)="setTheme('material')" class="dropdown-item btn-sm">{{'material'| translate}}
                        </button>
                        <button (click)="setTheme('ant')" class="dropdown-item btn-sm">{{'ant design'| translate}}
                        </button>
                    </div>
                </div>

                <div ngbDropdown class="d-inline-block ml-2">
                    <button class="btn btn-outline-secondary btn-sm text-uppercase" style="width: 80px; margin-left:10px;"
                            ngbDropdownToggle>{{ dir | translate}}</button>
                    <div ngbDropdownMenu>
                        <button (click)="changeDirTo('ltr')" class="dropdown-item btn-sm text-uppercase">{{'ltr' | translate}}</button>
                        <button (click)="changeDirTo('rtl')" class="dropdown-item btn-sm text-uppercase">{{'rtl' | translate}}</button>
                    </div>
                </div>

                <ul class="navbar-nav mr-auto">
                </ul>
<!-- 
                <form class="form-inline my-2 my-lg-0">
                    <a class="github-button"
                       href="https://github.com/ng-select/ng-select"
                       data-icon="mark-github"
                       data-size="large"
                       data-show-count="true"
                       aria-label="Visit ng-select/ng-select on GitHub">Github</a>
                </form> -->
                <div ngbDropdown class="d-inline-block ml-2">
                    <button class="btn btn-outline-secondary btn-sm text-uppercase" style="width: 80px; margin-left:10px;"
                            ngbDropdownToggle>{{showLanguage}}</button>
                    <div ngbDropdownMenu>
                        <button (click)="languageChangeFun('zh-CN')" class="dropdown-item btn-sm text-uppercase">中文</button>
                        <button (click)="languageChangeFun('en-US')" class="dropdown-item btn-sm text-uppercase">ENglish</button>
                    </div>
                </div>
            </div>
        </nav>
    `
})
export class LayoutHeaderComponent {
    // public translaste: TranslateService;
    showLanguage: string='English';
    // constructor(private language: LanguageService) {
    //     this.translaste = language.translate;
    // }
    @Input() dir: langDir;
    @Input() theme = 'default';
    @Input() version: string;
    @Output() dirChange = new EventEmitter<langDir>();
    @Output() themeChange = new EventEmitter<theme>();
    @Output() languageChange = new EventEmitter<string>();
    setTheme(theme: theme) {
        this.theme = theme;
        this.themeChange.emit(theme);
    }

    changeDirTo(dir: langDir) {
        this.dir = dir;
        this.dirChange.emit(dir);
    }
    // 触发切换语言事件
    languageChangeFun(language: string) {
        if (language === 'zh-CN') {
            this.showLanguage = '中文';
        } else {
            this.showLanguage = 'English';
        }

        this.languageChange.emit(language);
    }
}


