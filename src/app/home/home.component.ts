import { 
  Component, 
  OnInit, 
  AfterViewInit, 
  Renderer2, 
  trigger, 
  state, 
  style, 
  transition, 
  animate 
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Ng2DeviceService } from 'ng2-device-detector';
import * as IScroll from 'iscroll';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations : [
    trigger('boxState', [
      state('default', style({

      })),
      state('is-animated', style({

      })),
      transition('normal => is-animated', animate(300)),
      transition('is-animated => normal', animate(800))
    ])
  ]
})

export class HomeComponent implements OnInit, AfterViewInit {
  state = 'default'
  deviceInfo = null;

  constructor(meta: Meta, title: Title,  private renderer : Renderer2, private deviceService: Ng2DeviceService) {
    title.setTitle('Homepage | Propelrr');
    meta.addTags([
      {name: 'author', content: 'Aviators'},
      {name: 'keywords', content: ''},
      {name: 'description', content:'This is the homepage'}
    ]);
  }

  ngOnInit() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    this.deviceInfo.device

    $('body').addClass(this.deviceInfo.device);
    console.log(this.deviceInfo);
  }

  ngAfterViewInit() {
    

  }

  epicFunction() {
    
  }
  
}

// var El = myScroll.pages;
// for(var i = 0; El.length > i; i++){
//   console.log(El[i][0].x);
// }
