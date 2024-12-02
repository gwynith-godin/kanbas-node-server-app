import * as modulesDao from "./dao.js";
 
export default function ModuleRoutes(app) {
    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        const status = await modulesDao.updateModule(moduleId, moduleUpdates);
        res.sendStatus(status);
      });
    
    app.delete("/api/modules/:moduleId", async (req, res) => {
        // console.log("modleid", req.params.moduleId);
        const { moduleId } = req.params;
        console.log("modleid", req.body.moduleId);
        const status = await modulesDao.deleteModule(moduleId);
        res.send(status);
 
    });
}