import { ConditionExpression } from "./condition";

export class Snippet {
    code?: string;
    description?: string;
    whereCode?: string;
    whereOrder?: number;
    classAttribute?: string;
    idAttribute?: string;
    text: string;
    presentDismiss: boolean;
    conditions: ConditionExpression;
}