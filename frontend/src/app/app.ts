import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `<main>
    <header>
      <a [routerLink]="['/']">Home</a>
      <a [routerLink]="['/addPersonPage']">New entry</a>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrl: './app.scss',
})
export class App {
  protected title = 'frontend';
}
