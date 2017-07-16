import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as IScroll from 'iscroll';
import * as $ from 'jquery';

@Directive({
    selector: '[homeScroll]'
})

export class homeScrollDirective implements OnInit {
    constructor(private elRef : ElementRef, private renderer : Renderer2) {

    }

    ngOnInit() {
        const initialactiveBox = this.elRef.nativeElement;

        console.log(initialactiveBox);
        console.log(initialactiveBox.children);
        console.log(initialactiveBox.parentNode);

        const myScroll: IScroll = new IScroll("#scroller-wrapper", {
			scrollX: true,
			scrollY: false,
			momentum: true,
            mouseWheel: true,
            mouseWheelSpeed: 300,
            disableMouse : true,
            mouseWheelScrollsHorizontally: true,
            snap: '.box-wrap',
            bounceEasing: 'circular', 
            bounceTime: 1200
        }); 

        myScroll.on('scrollEnd', function(){
            const scrollData = myScroll.currentPage.pageX;
            const allBox = initialactiveBox.children;
            const activeBox = initialactiveBox.children[scrollData];
            $(allBox).removeClass('activated');
            $(activeBox).addClass('activated').next('.box-wrap').removeClass('activated');
            myScroll.refresh();
            
        }); 

        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false); 
        
    }
}