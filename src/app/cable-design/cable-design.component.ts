import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cable-design',
  templateUrl: './cable-design.component.html',
  styleUrls: ['./cable-design.component.scss']
})
export class CableDesignComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.initAccordion();
  }
  initAccordion(): void {
    const accordionItems = document.querySelectorAll('.accordion .link');
    accordionItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const nextElement = item.nextElementSibling as HTMLElement;
        const parentElement = item.parentElement as HTMLElement;
        nextElement?.classList.toggle('open');
        parentElement?.classList.toggle('open');
        if (!parentElement?.classList.contains('multiple')) {
          const submenus = document.querySelectorAll('.accordion .submenu');
          submenus.forEach(submenu => {
            if (submenu !== nextElement) {
              submenu.classList.remove('open');
              submenu.parentElement?.classList.remove('open');
            }
          });
        }
      });
    });
  }
}
