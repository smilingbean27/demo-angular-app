export class QuestionBase<Type>{
    value ?: Type;
    key ?: string;
    controlType ?: string;
    label ?: string;
    order ?: number;
    required ?: boolean;
    options ?: Array<{key: string, value: string}>;

    constructor(options: {
        value ?: Type,
        key ?: string,
        controlType ?: string,
        label ?: string,
        order ?: number,
        required ?: boolean,
        options ?: Array<{key: string, value: string}>

    }){
        this.value = options.value;
        this.key = options.key;
        this.controlType = options.controlType;
        this.label = options.label;
        this.order = options.order;
        this.options = options.options;
        this.required = options.required;
    }
}