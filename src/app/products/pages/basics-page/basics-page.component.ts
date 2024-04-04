import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string= 'joaquin';
  public nameUpper: string= 'JOAQUIN';
  public fullName: string= 'jOaQuin poBlEte';

  public customDate: Date = new Date();
  
}
