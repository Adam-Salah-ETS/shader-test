import { Shader } from "../shaders/shader";
import { SimpleColorShader } from "../shaders/simpleColorShader";

export class ShaderController {

    private _shaders: Shader[];

    public constructor() {
        this._shaders = [];
        this.init();
    }

    private init() {
        const shader1 = new SimpleColorShader('Simple Red Shader', 0xff0000);
        const shader2 = new SimpleColorShader('Simple Green Shader', 0x00ff00);
        const shader3 = new SimpleColorShader('Simple Blue Shader', 0x0000ff);
    
        this._shaders.push(shader1, shader2, shader3);
    }

    public getShaderInfo(id: string): {} {
        return this._shaders.filter((shader) => shader.id === id)[0].getInfo();
    }

    public get shaders(): Shader[] {
        return this._shaders;
    }
}