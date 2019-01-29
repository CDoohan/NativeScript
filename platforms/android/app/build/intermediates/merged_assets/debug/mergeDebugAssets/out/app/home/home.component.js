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
        // public navbarIcon = String.fromCharCode(0xf007);
        this.navbarIcon = String.fromCharCode(0xf0c9);
        this.notifyIcon = String.fromCharCode(0xf0f3);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RjtBQUN4RixzREFBK0Q7QUFFL0QsK0RBQXFFO0FBQ3JFLHNEQUFzRDtBQUl0RCxvREFBa0Q7QUFDbEQsdURBQXFEO0FBU3JEO0lBUUksdUJBQW9CLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxnQkFBa0M7UUFBdEcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFKMUgsbURBQW1EO1FBQzVDLGVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLGVBQVUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBR2hELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUF5QixDQUFDO1FBQzVELElBQUksb0JBQVMsRUFBRTtZQUNYLFFBQVEsQ0FBQyxrQkFBa0IsR0FBRywwQ0FBa0IsQ0FBQyxJQUFJLENBQUM7U0FDekQ7SUFDTCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQXhCc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQWMsaUJBQVU7c0RBQUM7SUFEdEMsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FVbUMsMEJBQVcsRUFBdUIsMEJBQVcsRUFBNEIseUJBQWdCO09BUmpILGFBQWEsQ0EwQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQ2Fyb3VzZWwsIEluZGljYXRvckFuaW1hdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYXJvdXNlbCc7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzJztcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vaXRlbS9pdGVtLm1vZGVsJztcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9pdGVtL2l0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9ob21lLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQgeyAgICBcbiAgICBAVmlld0NoaWxkKCdjYXJvdXNlbCcpIGNhcm91c2VsUmVmOiBFbGVtZW50UmVmO1xuICAgIGl0ZW1zOiBJdGVtW107XG5cbiAgICAvLyBwdWJsaWMgbmF2YmFySWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDA3KTtcbiAgICBwdWJsaWMgbmF2YmFySWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGM5KTtcbiAgICBwdWJsaWMgbm90aWZ5SWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGYzKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBjb25zdCBjYXJvdXNlbCA9IHRoaXMuY2Fyb3VzZWxSZWYubmF0aXZlRWxlbWVudCBhcyBDYXJvdXNlbDtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgY2Fyb3VzZWwuaW5kaWNhdG9yQW5pbWF0aW9uID0gSW5kaWNhdG9yQW5pbWF0aW9uLldPUk07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dvdXQoKSB7XG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbn1cblxuXG4iXX0=