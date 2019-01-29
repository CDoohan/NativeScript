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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RjtBQUN4RixzREFBK0Q7QUFFL0QsK0RBQXFFO0FBQ3JFLHNEQUFzRDtBQUl0RCxvREFBa0Q7QUFDbEQsdURBQXFEO0FBU3JEO0lBaUJJLHVCQUFvQixXQUF3QixFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXRHLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBZjFILGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHWixlQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxlQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxXQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxZQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxjQUFTLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxZQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QyxhQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUk5QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsdUNBQWUsR0FBZjtRQUNJLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBeUIsQ0FBQztRQUM1RCxJQUFJLG9CQUFTLEVBQUU7WUFDWCxRQUFRLENBQUMsa0JBQWtCLEdBQUcsMENBQWtCLENBQUMsSUFBSSxDQUFDO1NBQ3pEO0lBQ0wsQ0FBQztJQUVELHdDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQXRDc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQWMsaUJBQVU7c0RBQUM7SUFEdEMsYUFBYTtRQVB6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FtQm1DLDBCQUFXLEVBQXVCLDBCQUFXLEVBQTRCLHlCQUFnQjtPQWpCakgsYUFBYSxDQXdDekI7SUFBRCxvQkFBQztDQUFBLEFBeENELElBd0NDO0FBeENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBDYXJvdXNlbCwgSW5kaWNhdG9yQW5pbWF0aW9uIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhcm91c2VsJztcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9pdGVtL2l0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tICcuL2l0ZW0vaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7ICAgIFxuICAgIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsJykgY2Fyb3VzZWxSZWY6IEVsZW1lbnRSZWY7XG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIGl0ZW1zOiBJdGVtW107XG5cbiAgICBwdWJsaWMgbmF2YmFySWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGM5KTtcbiAgICBwdWJsaWMgbm90aWZ5SWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGYzKTtcbiAgICBwdWJsaWMgYnV5Qm94ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYyOTEpO1xuICAgIHB1YmxpYyBhZGVnYUJveCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMGZjKTtcbiAgICBwdWJsaWMgY2FpeGFCb3ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjAxNyk7XG4gICAgcHVibGljIGxpc3RCb3ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjE1Yyk7XG4gICAgcHVibGljIHdhbGxldEJveCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMTU1KTtcbiAgICBwdWJsaWMgZ2VhckJveCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhmMDg1KTtcbiAgICBwdWJsaWMgY3Vwb21Cb3ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjE1Yyk7XG4gICAgcHVibGljIHN0b3JlQm94ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGYwMTUpO1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgY29uc3QgY2Fyb3VzZWwgPSB0aGlzLmNhcm91c2VsUmVmLm5hdGl2ZUVsZW1lbnQgYXMgQ2Fyb3VzZWw7XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIGNhcm91c2VsLmluZGljYXRvckFuaW1hdGlvbiA9IEluZGljYXRvckFuaW1hdGlvbi5XT1JNO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd05vdGlmaWNhdGlvbigpe1xuICAgICAgICB0aGlzLm5vdGlmeUljb24gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZjI3YSk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG59XG5cblxuIl19