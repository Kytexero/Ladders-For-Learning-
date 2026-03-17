import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-40px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(40px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  // Navigation
  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'home';

  navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Programs', target: 'programs' },
    { label: 'Impact', target: 'impact' },
    { label: 'Donate', target: 'donate' },
    { label: 'Contact', target: 'contact' }
  ];

  currentYear = new Date().getFullYear();

  // Slideshow
  currentSlide = 0;
  slides = [
    {
      type: 'image',
      src: 'assets/slides/slide1.jpg',
      alt: 'Students learning in Haroonabad'
    },
    {
      type: 'image',
      src: 'assets/slides/slide2.jpg',
      alt: 'Community education program'
    },
    {
      type: 'image',
      src: 'assets/slides/slide3.jpg',
      alt: 'Children with books'
    },
    {
      type: 'video',
      src: 'assets/slides/intro-video.mp4',
      alt: 'Introduction video'
    }
  ];
  private slideInterval: any;

  // Programs
  programs = [
    {
      icon: '📚',
      title: 'Education Access',
      description: 'Providing school supplies, uniforms, and tuition support to children in underserved communities.'
    },
    {
      icon: '🏫',
      title: 'School Infrastructure',
      description: 'Building and renovating classrooms to create safe, modern learning environments.'
    },
    {
      icon: '👩‍🏫',
      title: 'Teacher Training',
      description: 'Equipping educators with resources, training, and ongoing professional development.'
    },
    {
      icon: '💻',
      title: 'Digital Literacy',
      description: 'Introducing technology skills and computer labs to bridge the digital divide.'
    }
  ];

  // Impact stats
  impactStats = [
    { value: 2500, label: 'Students Supported', current: 0 },
    { value: 12, label: 'Schools Built', current: 0 },
    { value: 150, label: 'Teachers Trained', current: 0 },
    { value: 8, label: 'Communities Served', current: 0 }
  ];
  statsAnimated = false;

  // Scroll sections (alternating image + text)
  scrollSections = [
    {
      title: 'Empowering Through Education',
      text: 'Ladders for Learning works in some of the most underserved communities in southern Punjab, Pakistan. We believe that every child deserves access to quality education, regardless of their circumstances.',
      image: 'assets/sections/empowering.jpg',
      imageAlt: 'Children in classroom'
    },
    {
      title: 'Building Futures',
      text: 'Our programs go beyond the classroom. We invest in teacher training, school infrastructure, and community partnerships to create lasting educational impact.',
      image: 'assets/sections/building.jpg',
      imageAlt: 'School construction'
    },
    {
      title: 'Community Driven',
      text: 'Every project begins with the community. Local leaders, parents, and educators work alongside our team to identify needs and implement solutions that truly make a difference.',
      image: 'assets/sections/community.jpg',
      imageAlt: 'Community meeting'
    }
  ];

  // Visible sections tracking for animations
  visibleSections = new Set<string>();

  ngOnInit(): void {
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
    this.checkVisibility();
  }

  startSlideshow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000); // slow transitions
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    // Reset interval
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
    this.startSlideshow();
  }

  scrollTo(sectionId: string): void {
    this.mobileMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  private updateActiveSection(): void {
    for (const link of this.navLinks) {
      const el = document.getElementById(link.target);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          this.activeSection = link.target;
          break;
        }
      }
    }
  }

  private checkVisibility(): void {
    // Check impact stats
    const impactEl = document.getElementById('impact');
    if (impactEl && !this.statsAnimated) {
      const rect = impactEl.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        this.animateStats();
        this.statsAnimated = true;
      }
    }

    // Check scroll sections
    document.querySelectorAll('[data-animate]').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        this.visibleSections.add(el.getAttribute('data-animate') || '');
      }
    });
  }

  isVisible(id: string): boolean {
    return this.visibleSections.has(id);
  }

  private animateStats(): void {
    this.impactStats.forEach((stat) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          stat.current = stat.value;
          clearInterval(timer);
        } else {
          stat.current = Math.floor(current);
        }
      }, duration / steps);
    });
  }
}
