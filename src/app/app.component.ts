import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Varsayılan dil
    translate.setDefaultLang('en');
    // İlk dil ayarı
    this.translate.use('en');
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.translate.use(target.value);
  }
}
