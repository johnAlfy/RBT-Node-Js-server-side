"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Student_1 = require("./Student");
var Supervisor_1 = require("./Supervisor");
var Driver_1 = require("./Driver");
var RoutePath_1 = require("./RoutePath");
var Bus = /** @class */ (function () {
    function Bus() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Bus.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ unique: true }),
        __metadata("design:type", String)
    ], Bus.prototype, "bus_numbers", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Bus.prototype, "capacity", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Student_1.Student; }, function (stud) { return stud.bus; }),
        __metadata("design:type", Array)
    ], Bus.prototype, "students", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Supervisor_1.Supervisor; }, function (supervisor) { return supervisor.bus; }),
        __metadata("design:type", Supervisor_1.Supervisor)
    ], Bus.prototype, "supervisor", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Driver_1.Driver; }, function (driver) { return driver.bus; }),
        __metadata("design:type", Driver_1.Driver)
    ], Bus.prototype, "driver", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return RoutePath_1.RoutePath; }, function (routePath) { return routePath.bus; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", RoutePath_1.RoutePath)
    ], Bus.prototype, "routePath", void 0);
    Bus = __decorate([
        typeorm_1.Entity()
    ], Bus);
    return Bus;
}());
exports.Bus = Bus;
//# sourceMappingURL=Bus.js.map