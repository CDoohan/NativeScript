"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var nativescript_carousel_1 = require("nativescript-carousel");
var platform_1 = require("tns-core-modules/platform");
var item_service_1 = require("./item/item.service");
var user_service_1 = require("../shared/user.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, itemService, routerExtensions) {
        this.userService = userService;
        this.itemService = itemService;
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var carousel = this.carouselRef.nativeElement;
        if (platform_1.isAndroid) {
            carousel.indicatorAnimation = nativescript_carousel_1.IndicatorAnimation.WORM;
        }
    };
    HomeComponent.prototype.logout = function () {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    };
    __decorate([
        core_1.ViewChild('carousel'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "carouselRef", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, item_service_1.ItemService, router_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RjtBQUN4RixzREFBK0Q7QUFFL0QsK0RBQXFFO0FBQ3JFLHNEQUFzRDtBQUl0RCxvREFBa0Q7QUFDbEQsdURBQXFEO0FBU3JEO0lBSUksdUJBQW9CLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxnQkFBa0M7UUFBdEcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDMUgsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQXlCLENBQUM7UUFDNUQsSUFBSSxvQkFBUyxFQUFFO1lBQ1gsUUFBUSxDQUFDLGtCQUFrQixHQUFHLDBDQUFrQixDQUFDLElBQUksQ0FBQztTQUN6RDtJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBcEJzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBYyxpQkFBVTtzREFBQztJQUR0QyxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQU1tQywwQkFBVyxFQUF1QiwwQkFBVyxFQUE0Qix5QkFBZ0I7T0FKakgsYUFBYSxDQXNCekI7SUFBRCxvQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDYXJvdXNlbCwgSW5kaWNhdG9yQW5pbWF0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcm91c2VsJztcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzJztcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL2l0ZW0vaXRlbS5tb2RlbCc7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9pdGVtL2l0ZW0uc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7ICAgIFxyXG4gICAgQFZpZXdDaGlsZCgnY2Fyb3VzZWwnKSBjYXJvdXNlbFJlZjogRWxlbWVudFJlZjtcclxuICAgIGl0ZW1zOiBJdGVtW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbCA9IHRoaXMuY2Fyb3VzZWxSZWYubmF0aXZlRWxlbWVudCBhcyBDYXJvdXNlbDtcclxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLmluZGljYXRvckFuaW1hdGlvbiA9IEluZGljYXRvckFuaW1hdGlvbi5XT1JNO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==