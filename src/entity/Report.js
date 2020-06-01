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
var Parent_1 = require("./Parent");
var Supervisor_1 = require("./Supervisor");
var Driver_1 = require("./Driver");
var Report = /** @class */ (function () {
    function Report() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Report.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Report.prototype, "type_of_user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Report.prototype, "content", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Report.prototype, "answer", void 0);
    __decorate([
        typeorm_1.Column('date'),
        __metadata("design:type", Date)
    ], Report.prototype, "dateTime", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Report.prototype, "User_mail", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Report.prototype, "Ishidden", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], Report.prototype, "first_time", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Report.prototype, "receiver_mail_or_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Parent_1.Parent; }, function (parent) { return parent.reports; }),
        __metadata("design:type", Parent_1.Parent)
    ], Report.prototype, "parent", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Supervisor_1.Supervisor; }, function (supervisor) { return supervisor.reports; }),
        __metadata("design:type", Supervisor_1.Supervisor)
    ], Report.prototype, "supervisor", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Driver_1.Driver; }, function (driver) { return driver.reports; }),
        __metadata("design:type", Driver_1.Driver)
    ], Report.prototype, "driver", void 0);
    Report = __decorate([
        typeorm_1.Entity()
    ], Report);
    return Report;
}());
exports.Report = Report;
//# sourceMappingURL=Report.js.map