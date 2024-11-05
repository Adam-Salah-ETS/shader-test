import express from "express";
import ViteExpress from "vite-express";
import { shaderRouter } from "./routes/shaderRouter";

const app = express();
app.set("view engine", "pug");

const router = express.Router();

router.get("/", async (req, res, next) => {
    await shaderRouter.shaderController.loadShadersInfo();
    const shadersInfo = shaderRouter.shaderController.shadersInfo;
    res.render("index", {
        shadersInfo: shadersInfo
    });
});

router.get("/shaderviewer/:id", async (req, res, next) => {
    res.render("shaderviewer.pug", {
    });
});

app.use('/', router);
app.use('/shader', shaderRouter.router);

app.use('/data', express.static(__dirname + '/data'));

const server = ViteExpress.listen(app, 3000, () => console.log("Server is listening on port 3000... http://localhost:3000/"));
