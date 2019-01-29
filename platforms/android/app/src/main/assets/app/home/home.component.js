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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RjtBQUN4RixzREFBK0Q7QUFFL0QsK0RBQXFFO0FBQ3JFLHNEQUFzRDtBQUl0RCxvREFBa0Q7QUFDbEQsdURBQXFEO0FBU3JEO0lBT0ksdUJBQW9CLFdBQXdCLEVBQVUsV0FBd0IsRUFBVSxnQkFBa0M7UUFBdEcsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFIbkgsZUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsZUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFHaEQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELHVDQUFlLEdBQWY7UUFDSSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQXlCLENBQUM7UUFDNUQsSUFBSSxvQkFBUyxFQUFFO1lBQ1gsUUFBUSxDQUFDLGtCQUFrQixHQUFHLDBDQUFrQixDQUFDLElBQUksQ0FBQztTQUN6RDtJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBdkJzQjtRQUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBYyxpQkFBVTtzREFBQztJQUR0QyxhQUFhO1FBUHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQVNtQywwQkFBVyxFQUF1QiwwQkFBVyxFQUE0Qix5QkFBZ0I7T0FQakgsYUFBYSxDQXlCekI7SUFBRCxvQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDYXJvdXNlbCwgSW5kaWNhdG9yQW5pbWF0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcm91c2VsJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9pdGVtL2l0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tICcuL2l0ZW0vaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7ICAgIFxuICAgIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsJykgY2Fyb3VzZWxSZWY6IEVsZW1lbnRSZWY7XG4gICAgaXRlbXM6IEl0ZW1bXTtcblxuICAgIHB1YmxpYyBuYXZiYXJJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwYzkpO1xuICAgIHB1YmxpYyBub3RpZnlJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwZjMpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuaXRlbVNlcnZpY2UuZ2V0SXRlbXMoKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGNvbnN0IGNhcm91c2VsID0gdGhpcy5jYXJvdXNlbFJlZi5uYXRpdmVFbGVtZW50IGFzIENhcm91c2VsO1xuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICBjYXJvdXNlbC5pbmRpY2F0b3JBbmltYXRpb24gPSBJbmRpY2F0b3JBbmltYXRpb24uV09STTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgfVxufVxuXG5cbiJdfQ==