export class ShaderController {

    private _shadersInfo: {id: string, name: string, src: string}[];

    public constructor() {
        this._shadersInfo = [];
        this.init();
    }

    private init() {

    }

    public getShaderInfo(id: string): {id: string, name: string, src: string} {
        const shaderInfo = this._shadersInfo.filter((shaderInfo) => shaderInfo.id === id);
        if (shaderInfo.length > 1) {
            throw new Error("Duplicate shaders");
        }
        return shaderInfo[0];
    }

    public get shadersInfo(): {id: string, name: string, src: string}[] {
        return this._shadersInfo;
    }

    public async loadShadersInfo() {
        this._shadersInfo = [];
        const res = await fetch(process.env.HOST_URL + '/data/shaders/shaders.json');
        const json = await res.json();
        const shadersInfo = json["shaders"];
        shadersInfo.forEach((shaderInfo: { id: string; name: string; src: string; }) => {
            this._shadersInfo.push(shaderInfo);
        });
    }
}