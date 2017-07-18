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

        console.log(this.elRef.nativeElement);

        console.log(initialactiveBox);
        console.log(initialactiveBox.children);
        console.log(initialactiveBox.parentNode);

        const myScroll: IScroll = new IScroll("#scroller-wrapper", {
            
            startX: 0,
		    startY: 0,
			scrollX: true,
			scrollY: false,
            eventPassthrough: true,
			momentum: true,
            snapThreshold: 1,
            mouseWheel: true,
            disableMouse: true,
            disablePointer: true,
            disableTouch: false,
            mouseWheelScrollsHorizontally: true,
            snap: '.box-wrap',
            bounceEasing: 'circular', 
            bounceTime: 0,
            deceleration: 0.03
        }); 

        myScroll.on('scrollEnd', function(){
            const scrollData = myScroll.currentPage.pageX;
            const allBox = initialactiveBox.children;
            const activeBox = initialactiveBox.children[scrollData];
            console.log(myScroll.currentPage.pageX);
            $(allBox).removeClass('activated');
            $(activeBox).addClass('activated').next('.box-wrap').removeClass('activated');
            myScroll.refresh();
            setTimeout(() => {
                // myScroll.refresh();    
            }, 200);
            
        }); 

        myScroll.on('scrollStart', function() {
            console.log(myScroll.directionX);
        }); 

        // myScroll.on('scrollStart', function(){
        //     console.log(myScroll);
        //     console.log(myScroll.currentPage.pageX);
        // }); 

        

        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false); 
        
    }
}