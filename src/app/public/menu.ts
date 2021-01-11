export class Menu {
  menuItems = [
    { title: 'Home', routerLink: '/' },
    { title: 'About', routerLink: '/about' },
    { title: 'Angular Guide', routerLink: '/guide' },
  ];

  rightMenus = [
    { title: 'Login', routerLink: '/auth/login' },
    { title: 'Sign Up', routerLink: '/auth/signup' },
  ];
}
