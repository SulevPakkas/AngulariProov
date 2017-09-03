import { Component } from '@angular/core';

export class Nav {
    name: string;
    link: string;
}
const navLinks: Nav[] = [
    {name: 'Home', link: '#home'}, 
    {name : 'Page1', link: '#page1'},
    {name: 'Page2', link: '#page2'}
];

@Component({
  selector: 'my-nav',
  templateUrl: 'templates/nav-component.template.html',
})

export class NavComponent  { 
    navs: Nav[] = navLinks;
}