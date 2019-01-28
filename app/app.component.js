"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_carousel_1 = require("nativescript-carousel");
element_registry_1.registerElement('Carousel', function () { return nativescript_carousel_1.Carousel; });
element_registry_1.registerElement('CarouselItem', function () { return nativescript_carousel_1.CarouselItem; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFHMUMsMEVBQXdFO0FBQ3hFLCtEQUErRDtBQUUvRCxrQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsZ0NBQVEsRUFBUixDQUFRLENBQUMsQ0FBQztBQUM1QyxrQ0FBZSxDQUFDLGNBQWMsRUFBRSxjQUFNLE9BQUEsb0NBQVksRUFBWixDQUFZLENBQUMsQ0FBQztBQU1wRDtJQUFBO0lBQTJCLENBQUM7SUFBZixZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO0FBQWYsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9iYWNrZW5kLnNlcnZpY2VcIjtcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2VsZW1lbnQtcmVnaXN0cnknO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIENhcm91c2VsSXRlbSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJvdXNlbCc7XG5cbnJlZ2lzdGVyRWxlbWVudCgnQ2Fyb3VzZWwnLCAoKSA9PiBDYXJvdXNlbCk7XG5yZWdpc3RlckVsZW1lbnQoJ0Nhcm91c2VsSXRlbScsICgpID0+IENhcm91c2VsSXRlbSk7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fVxuIl19