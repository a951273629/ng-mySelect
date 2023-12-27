import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
// 用于将TranslateService进行全局注入
export class LanguageService {
  constructor(public translate:TranslateService) { 

  }
  //设置语言
  setLanguage(language:string){
      language?this.translate.setDefaultLang(language):this.translate.setDefaultLang('en-US');
  }
}
