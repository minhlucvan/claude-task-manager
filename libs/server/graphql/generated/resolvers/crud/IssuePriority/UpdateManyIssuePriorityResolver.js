"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyIssuePriorityResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyIssuePriorityArgs_1 = require("./args/UpdateManyIssuePriorityArgs");
const IssuePriority_1 = require("../../../models/IssuePriority");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyIssuePriorityResolver = class UpdateManyIssuePriorityResolver {
    async updateManyIssuePriority(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).issuePriority.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UpdateManyIssuePriorityResolver = UpdateManyIssuePriorityResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyIssuePriorityArgs_1.UpdateManyIssuePriorityArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyIssuePriorityResolver.prototype, "updateManyIssuePriority", null);
exports.UpdateManyIssuePriorityResolver = UpdateManyIssuePriorityResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => IssuePriority_1.IssuePriority)
], UpdateManyIssuePriorityResolver);
