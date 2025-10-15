import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';





@Component({
  selector: 'app-home',
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public bodycls = document.getElementsByTagName('body')[0];


  
 

  ngOnInit(){
    this.bodycls.classList.add('hmepage');
  }

  ngOnDestroy(){
    this.bodycls.classList.remove('hmepage');
  }
  
}
