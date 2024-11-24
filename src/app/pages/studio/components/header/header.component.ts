import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  openNav() {
    let sidebar = document.querySelector('#mainNav') as HTMLElement;
    if (sidebar.classList.contains('main-nav-container-open')) {
      sidebar.classList.add("main-nav-container-close");
      sidebar.classList.remove("main-nav-container-open");
    } else {
      sidebar.classList.add("main-nav-container-open");
      sidebar.classList.remove("main-nav-container-close");
    }
  }
}
