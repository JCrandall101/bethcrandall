import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectedTab = 'home';
  showSideBar = false;

  constructor(public router: Router) { }

  ngOnInit(){
    console.log(this.router.url);
  }

  showHeader(){
    if (this.router.url !== '/resume'){
      return true;
    } else {
      return false;
    }
  }

  navColor(route: string){
    if (this.router.url === route) {
      return '#565555';
    } else {
      return '#a8a6a6'
    }
  }

  showHideSideBar() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      this.showSideBar = !this.showSideBar;
    } else {
      this.showSideBar = false;
    }
  }

  onMobileNav(){
    this.showSideBar = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(event.target.innerWidth > 768) {
      this.showSideBar = false;
    }
  }
} 
