import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-start-page',
  imports: [CardModule, ButtonModule, CarouselModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss',
})
export class StartPageComponent implements OnInit {
  private router = inject(Router);
  responsiveOptions: any[] | undefined;
  products: any[] = [];

  ngOnInit() {
    this.products = [
      {
        name: 'Melia',
        image: 'assets/img/colaboraciones/colaboracion-mdreams-melia.png',
      },
      {
        name: 'Rafa Nadal Academy',
        image:
          'assets/img/colaboraciones/colaboracion-mdreams-rafa-nadal-academy.png',
      },
      {
        name: 'Nikki Beach',
        image: 'assets/img/colaboraciones/colaboracion-mdreams-nikki-beach.png',
      },
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  services = [
    {
      title: 'Fotomatón',
      img: 'assets/img/fotomaton-elegante-mdreams.png',
      description: 'Fotomatón para bodas y eventos corporativos',
    },
    {
      title: 'Videomatón',
      img: 'assets/img/videomaton-elegante-mdreams.png',
      description: 'Animación para eventos con videomatón original',
    },
    {
      title: 'Robot Picasso',
      img: 'assets/img/robot-picasso-elegante-mdreams.png',
      description: 'Robot pintor en directo para tu evento único',
    },
    {
      title: 'Juegos',
      img: 'assets/img/juegos-elegante-mdreams.png',
      description: 'Juegos interactivos para eventos y fiestas',
    },
  ];

  routeTo(pageUrl: string): void {
    this.router.navigate(['/' + pageUrl]);
  }
}
