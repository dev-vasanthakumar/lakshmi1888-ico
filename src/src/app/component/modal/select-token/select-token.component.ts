import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-select-token',
  imports: [CommonModule],
  templateUrl: './select-token.component.html',
  styleUrl: './select-token.component.scss'
})
export class SelectTokenComponent {
  bsModalRef = inject(BsModalRef);

  public tokenList: any[] = [
    {img: 'assets/images/bnbCircleIcon.png', name: 'BNB', selected: true},
    {img: 'assets/images/usdtCircleIcon.png', name: 'USDT', selected: false},
    {img: 'assets/images/sanCircleIcon.png', name: 'SAN', selected: false},
    {img: 'assets/images/bnbCircleIcon.png', name: 'BNB', selected: false},
  ]
}
