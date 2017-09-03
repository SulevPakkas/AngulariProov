"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Nav = (function () {
    function Nav() {
    }
    return Nav;
}());
exports.Nav = Nav;
var navLinks = [
    { name: 'Home', link: '#home' },
    { name: 'Page1', link: '#page1' },
    { name: 'Page2', link: '#page2' }
];
var NavComponent = (function () {
    function NavComponent() {
        this.navs = navLinks;
    }
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: 'my-nav',
        templateUrl: 'templates/nav-component.template.html',
    })
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=navigation.component.js.map