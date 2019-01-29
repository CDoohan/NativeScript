import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Carousel, IndicatorAnimation } from 'nativescript-carousel';
import { isAndroid } from 'tns-core-modules/platform';
import { alert } from 'tns-core-modules/ui/dialogs';

import { Item } from './item/item.model';
import { ItemService } from './item/item.service';
import { UserService } from "../shared/user.service";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {    
    @ViewChild('carousel') carouselRef: ElementRef;
    items: Item[];

    // public navbarIcon = String.fromCharCode(0xf007);
    public navbarIcon = String.fromCharCode(0xf0c9);
    public notifyIcon = String.fromCharCode(0xf0f3);

    constructor(private userService: UserService, private itemService: ItemService, private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    ngAfterViewInit() {
        const carousel = this.carouselRef.nativeElement as Carousel;
        if (isAndroid) {
            carousel.indicatorAnimation = IndicatorAnimation.WORM;
        }
    }

    logout() {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }
}


