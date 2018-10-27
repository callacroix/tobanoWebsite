import {Component, ElementRef, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  currentSectionId: string = "download";
  private sectionsIndex: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.currentSectionId = this.getCurrentSectionId();
  }

  private getCurrentSectionId(): string {
    let offset: number = this.el.nativeElement.parentElement.offsetTop - this.el.nativeElement.offsetTop;
    for (let section of this.sectionsIndex) {
      //Note: 40px is the margin-top value of the menu element in the header
      if ((section.position + offset - window.scrollY - 40) < 0) {
        return section.name;
      }
    }
    return null;
  }
}
