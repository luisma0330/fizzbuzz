const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("1) Obtener explorers por mission", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    });
});