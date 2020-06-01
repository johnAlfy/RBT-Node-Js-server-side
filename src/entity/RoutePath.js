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
var Bus_1 = require("./Bus");
var Coordinates_1 = require("./Coordinates");
var RoutePath = /** @class */ (function () {
    function RoutePath() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], RoutePath.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ unique: true }),
        __metadata("design:type", String)
    ], RoutePath.prototype, "name", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Bus_1.Bus; }, function (bus) { return bus.routePath; }),
        __metadata("design:type", Bus_1.Bus)
    ], RoutePath.prototype, "bus", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Coordinates_1.Coordinates; }, function (coordinates) { return coordinates.routePath; }),
        __metadata("design:type", Array)
    ], RoutePath.prototype, "coordinates", void 0);
    RoutePath = __decorate([
        typeorm_1.Entity()
    ], RoutePath);
    return RoutePath;
}());
exports.RoutePath = RoutePath;
//# sourceMappingURL=RoutePath.js.map