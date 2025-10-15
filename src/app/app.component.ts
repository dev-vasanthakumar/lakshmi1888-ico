import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private translate: TranslateService) {
    setTheme('bs5');

    translate.addLangs(['en', 'zh', 'ko', 'ja', 'vi', 'tl', 'pt', 'es']);
    translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('lang');
    translate.use(savedLang || 'en');
  }
}
