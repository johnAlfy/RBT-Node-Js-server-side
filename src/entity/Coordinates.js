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
var RoutePath_1 = require("./RoutePath");
var Coordinates = /** @class */ (function () {
    function Coordinates() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Coordinates.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Coordinates.prototype, "label", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Coordinates.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column('double'),
        __metadata("design:type", Number)
    ], Coordinates.prototype, "latitude", void 0);
    __decorate([
        typeorm_1.Column('double'),
        __metadata("design:type", Number)
    ], Coordinates.prototype, "longitude", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return RoutePath_1.RoutePath; }, function (routePath) { return routePath.coordinates; }),
        __metadata("design:type", RoutePath_1.RoutePath)
    ], Coordinates.prototype, "routePath", void 0);
    Coordinates = __decorate([
        typeorm_1.Entity()
    ], Coordinates);
    return Coordinates;
}());
exports.Coordinates = Coordinates;
//# sourceMappingURL=Coordinates.js.map