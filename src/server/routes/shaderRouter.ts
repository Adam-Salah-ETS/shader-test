import { Request, Response, Router } from "express";
import { ShaderController } from "../core/controllers/shaderController";

export class ShaderRouter {
    private _router: Router;
    private _shaderController: ShaderController;

    public get router() {
        return this._router;
    }

    public constructor() {
        this._router = Router();
        this._shaderController = new ShaderController();
        this.init();
    }

    public async getAllShaders(req: Request, res: Response) {
        
    }

    public async getShader(req: Request, res: Response) {
        const id = req.params.id;
        if (id === null) {
            res.status(400).send( {
                message: 'Shader Id must not be null',
                status: 400
            });
        }
        const shaderInfo = this._shaderController.getShaderInfo(id);
        if(shaderInfo === null) {
            res.status(404).send( {
                message: 'No shader is associated with this Id',
                status: 404
            });
        } else {
            res.status(200).send({
                message: "Success",
                status: 200,
                shaderInfo: shaderInfo
            });
        }
    }

    public get shaderController(): ShaderController {
        return this._shaderController;
    }

    private init() {
        this._router.get('/all', this.getAllShaders.bind(this));
        this._router.get('/:id', this.getShader.bind(this));
    }
}

export const shaderRouter = new ShaderRouter();