var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
let Country = class Country extends BaseEntity {
};
__decorate([
    Field(),
    PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Country.prototype, "id", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Country.prototype, "code", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Country.prototype, "emoji", void 0);
__decorate([
    Field(),
    Column(),
    __metadata("design:type", String)
], Country.prototype, "continent", void 0);
Country = __decorate([
    ObjectType(),
    Entity()
], Country);
export { Country };
