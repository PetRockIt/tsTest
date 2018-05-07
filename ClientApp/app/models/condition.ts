export class ConditionParameter {
    key: string;    
    value: string;        
}

export type ConditionParameters = Array<ConditionParameter>;
                
export class Condition {
    operand: string;
    operator?: string;
    parameters?: ConditionParameters;
}

export enum ConditionLogic {
    AllOf = 0,
    AnyOf = 1,
    OneOf = 2,
    NoneOf = 3
}

export class ConditionOperation {
    negate: boolean;
    condition: Condition;
}

export class ConditionExpression {
    key: string;
    description?: string;
    logic?: ConditionLogic;
    operations?: ConditionOperation[];
}
