const ExplorerController = require("../../lib/controllers/ExplorerController");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Tests para ExplorerController", () => {
    test("1) Obtener explorers por mission", () => {
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        expect(explorersInNode.length).toBe(10);
    });
    test("2) Obtener la cantidad de explorers por mission", () => {
        const explorersInJava = ExplorerController.getExplorersAmountByMission("java");
        expect(explorersInJava).toBe(5);
    });
    test("3) Obtener los usernames de los explorers por mission", () => {
        const explorersInNode = ExplorerController.getExplorersUsernamesByMission("node");
        const expected = ["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11","ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"];
        expect(explorersInNode).toEqual(expected);
    });
    test("4) Obtener la validación fizzbuzz de un numero dado", () => {
        const trick = FizzbuzzService.applyValidationInNumber(8);
        expect(trick).toBe(8);
    });
});