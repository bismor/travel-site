import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    // Блок скролл страницы, когда меню открыто
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  // Закрытие меню при ресайзе на десктоп
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 1024 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
