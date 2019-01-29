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
        this.processing = false;
        this.navbarIcon = String.fromCharCode(0xf0c9);
        this.notifyIcon = String.fromCharCode(0xf0f3);
        this.buyBox = String.fromCharCode(0xf291);
        this.adegaBox = String.fromCharCode(0xf0fc);
        this.caixaBox = String.fromCharCode(0xf017);
        this.listBox = String.fromCharCode(0xf15c);
        this.walletBox = String.fromCharCode(0xf155);
        this.gearBox = String.fromCharCode(0xf085);
        this.cupomBox = String.fromCharCode(0xf15c);
        this.storeBox = String.fromCharCode(0xf015);
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
    HomeComponent.prototype.showNotification = function () {
        this.notifyIcon = String.fromCharCode(0xf27a);
    };
    HomeComponent.prototype.logout = function () {
        this.processing = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RjtBQUN4RixzREFBK0Q7QUFFL0QsK0RBQXFFO0FBQ3JFLHNEQUFzRDtBQUl0RCxvREFBa0Q7QUFDbEQsdURBQXFEO0FBU3JEO0lBaUJJLHVCQUFvQixXQUF3QixFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXRHLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBZjFILGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHWixlQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxlQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxXQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxZQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxjQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxZQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUk5QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNJLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBeUIsQ0FBQztRQUM1RCxJQUFJLG9CQUFTLEVBQUU7WUFDWCxRQUFRLENBQUMsa0JBQWtCLEdBQUcsMENBQWtCLENBQUMsSUFBSSxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQXRDc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQWMsaUJBQVU7c0RBQUM7SUFEdEMsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FtQm1DLDBCQUFXLEVBQXVCLDBCQUFXLEVBQTRCLHlCQUFnQjtPQWpCakgsYUFBYSxDQXdDekI7SUFBRCxvQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBDYXJvdXNlbCwgSW5kaWNhdG9yQW5pbWF0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcm91c2VsJztcclxuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzJztcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL2l0ZW0vaXRlbS5tb2RlbCc7XHJcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9pdGVtL2l0ZW0uc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7ICAgIFxyXG4gICAgQFZpZXdDaGlsZCgnY2Fyb3VzZWwnKSBjYXJvdXNlbFJlZjogRWxlbWVudFJlZjtcclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcclxuICAgIGl0ZW1zOiBJdGVtW107XHJcblxyXG4gICAgcHVibGljIG5hdmJhckljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBjOSk7XHJcbiAgICBwdWJsaWMgbm90aWZ5SWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGYzKTtcclxuICAgIHB1YmxpYyBidXlCb3ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjI5MSk7XHJcbiAgICBwdWJsaWMgYWRlZ2FCb3ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjBmYyk7XHJcbiAgICBwdWJsaWMgY2FpeGFCb3ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjAxNyk7XHJcbiAgICBwdWJsaWMgbGlzdEJveCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMTVjKTtcclxuICAgIHB1YmxpYyB3YWxsZXRCb3ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjE1NSk7XHJcbiAgICBwdWJsaWMgZ2VhckJveCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDg1KTtcclxuICAgIHB1YmxpYyBjdXBvbUJveCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMTVjKTtcclxuICAgIHB1YmxpYyBzdG9yZUJveCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDE1KTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBjb25zdCBjYXJvdXNlbCA9IHRoaXMuY2Fyb3VzZWxSZWYubmF0aXZlRWxlbWVudCBhcyBDYXJvdXNlbDtcclxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XHJcbiAgICAgICAgICAgIGNhcm91c2VsLmluZGljYXRvckFuaW1hdGlvbiA9IEluZGljYXRvckFuaW1hdGlvbi5XT1JNO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub3RpZnlJY29uID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYyN2EpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=