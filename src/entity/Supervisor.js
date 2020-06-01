"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var User_1 = require("./User");
var Student_1 = require("./Student");
var Report_1 = require("./Report");
var Bus_1 = require("./Bus");
var Supervisor = /** @class */ (function (_super) {
    __extends(Supervisor, _super);
    function Supervisor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.OneToMany(function (type) { return Student_1.Student; }, function (stud) { return stud.supervisor; }),
        __metadata("design:type", Array)
    ], Supervisor.prototype, "students", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Report_1.Report; }, function (report) { return report.supervisor; }),
        __metadata("design:type", Array)
    ], Supervisor.prototype, "reports", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Bus_1.Bus; }, function (bus) { return bus.supervisor; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Bus_1.Bus)
    ], Supervisor.prototype, "bus", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Supervisor.prototype, "driver_username", void 0);
    Supervisor = __decorate([
        typeorm_1.Entity()
    ], Supervisor);
    return Supervisor;
}(User_1.User));
exports.Supervisor = Supervisor;
//# sourceMappingURL=Supervisor.js.map