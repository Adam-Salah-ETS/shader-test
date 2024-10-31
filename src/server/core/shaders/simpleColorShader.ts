import { Shader } from "./shader";

export class SimpleColorShader extends Shader{

    private _color: number;

    public constructor(name: string, color: number) {
        super(name);
        this._color = color;
    }

    public getInfo(): {} {
        return {
            color: this._color
        };
    }
}