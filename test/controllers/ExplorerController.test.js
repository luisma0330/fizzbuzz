const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController", () => {
    test("1) Obtener explorers por mission", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    });
    test("2) Obtener la cantidad de explorers por mission", () => {
        const explorersInJava = ExplorerController.getExplorersAmountByMission("java");
        expect(explorersInJava).toBe(5);
    });
});