"use strict";
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        return kinvey_nativescript_sdk_1.Kinvey.User.signup({ username: user.cpf, password: user.password })
            .catch(this.handleErrors);
    };
    UserService.prototype.login = function (user) {
        return kinvey_nativescript_sdk_1.Kinvey.User.login(user.cpf, user.password)
            .catch(this.handleErrors);
    };
    UserService.prototype.logout = function () {
        return kinvey_nativescript_sdk_1.Kinvey.User.logout()
            .catch(this.handleErrors);
    };
    UserService.prototype.resetPassword = function (cpf) {
        return kinvey_nativescript_sdk_1.Kinvey.User.resetPassword(cpf)
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.error(error.message);
        return Promise.reject(error.message);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5SEFBeUg7QUFDekgsNkVBQTZFOztBQUU3RSxzQ0FBMkM7QUFDM0MsbUVBQWlEO0FBSWpEO0lBQUE7SUF5QkEsQ0FBQztJQXhCRyw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLE9BQU8sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNyRSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNaLE9BQU8sZ0NBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksT0FBTyxnQ0FBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7YUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLEdBQUc7UUFDYixPQUFPLGdDQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7YUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQXVCO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXhCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBeUJ2QjtJQUFELGtCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgZm9sbG93aW5nIGlzIGEgc2FtcGxlIGltcGxlbWVudGF0aW9uIG9mIGEgYmFja2VuZCBzZXJ2aWNlIHVzaW5nIFByb2dyZXNzIEtpbnZleSAoaHR0cHM6Ly93d3cucHJvZ3Jlc3MuY29tL2tpbnZleSkuXHJcbi8vIEZlZWwgZnJlZSB0byBzd2FwIGluIHlvdXIgb3duIHNlcnZpY2UgLyBBUElzIC8gZXRjIGhlcmUgZm9yIHlvdXIgb3duIGFwcHMuXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLnNpZ251cCh7IHVzZXJuYW1lOiB1c2VyLmNwZiwgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQgfSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIEtpbnZleS5Vc2VyLmxvZ2luKHVzZXIuY3BmLCB1c2VyLnBhc3N3b3JkKVxyXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9nb3V0KClcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFBhc3N3b3JkKGNwZikge1xyXG4gICAgICAgIHJldHVybiBLaW52ZXkuVXNlci5yZXNldFBhc3N3b3JkKGNwZilcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IEtpbnZleS5CYXNlRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxufVxyXG4iXX0=