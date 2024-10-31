import {v4 as uuidv4} from 'uuid';

export abstract class Shader {

    private _id: string;
    private _name: string;

    public constructor(name: string) {
        this._id = uuidv4();
        this._name = name;
    }

    public abstract getInfo(): {};

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }
};