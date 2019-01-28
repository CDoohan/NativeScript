import { Component } from "@angular/core";

import { BackendService } from "./shared/backend.service";
import { registerElement } from 'nativescript-angular/element-registry';
import { Carousel, CarouselItem } from 'nativescript-carousel';

registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {}
