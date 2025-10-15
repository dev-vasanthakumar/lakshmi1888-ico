import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CollapseModule, BsDropdownModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isCollapsed = true;

  navItems = [
    { label: 'HEADING_HOME', route: '/' },
    { label: 'HEADING_ABOUT', route: '/about' },
    { label: 'HEADING_TOKENOMICS', route: '/tokenomics' },
    { label: 'HEADING_ROADMAP', route: '/roadmap' },
    { label: 'HEADING_WHITEPAPER', route: '/whitepaper' }
  ];

  languages = [
    { code: 'en', name: 'English', flag: 'assets/images/header/flags/eng.svg' },
    { code: 'zh', name: 'Chinese', flag: 'assets/images/header/flags/china.png' },
    { code: 'ko', name: 'Korean', flag: 'assets/images/header/flags/korea.svg' },
    { code: 'ja', name: 'Japanese', flag: 'assets/images/header/flags/japan.svg' },
    { code: 'vi', name: 'Vietnamese', flag: 'assets/images/header/flags/vietnam.svg' },
    { code: 'tl', name: 'Filipino', flag: 'assets/images/header/flags/philippines.svg' },
    { code: 'pt', name: 'Portuguese', flag: 'assets/images/header/flags/portugal.svg' },
    { code: 'es', name: 'Spanish', flag: 'assets/images/header/flags/spain.svg' }
  ];

  currentLang = this.languages[0];

  constructor(private translate: TranslateService) {
    const saved = localStorage.getItem('lang');
    this.switchLanguage(saved || 'en');
  }

  switchLanguage(code: string) {
    const lang = this.languages.find(l => l.code === code);
    if (lang) {
      this.currentLang = lang;
      this.translate.use(code);
      localStorage.setItem('lang', code);
    }
  }
}
