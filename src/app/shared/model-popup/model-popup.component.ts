import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.css']
})
export class ModelPopupComponent implements OnInit {

  @ViewChild("#myModal") myModal: ElementRef;
  showPopUp: string = "";
  togglePopup: boolean = true;
  constructor(private renderer: Renderer2) { 
    this. showPopUp = "";
  }


  ngOnInit(): void {
    this. showPopUp = "";
  }

  onBtnClick() {
    if(this.togglePopup){
      this.showPopUp = "showPopUp";
    }else{
      this.showPopUp = "hidePopUp";
    }
    this.togglePopup=!this.togglePopup;
  }

  onClose() {
    this.showPopUp = "hidePopUp";
    this.togglePopup=true;
  }
}
