const ExplorerService = require("../../lib/services/ExplorerService");

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en la mission Node", () => {
        const explorers = [{mission: "node"}, {mission: "node"}, {mission: "java"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(2);
    });
    test("Requerimiento 2: Obtener la cantidad de exploradores en la mission node", ()  => {
        const explorers = [{mission: "node"}, {mission: "node"}, {mission: "java"}];
        const explorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(2);
    });
    test("Requerimiento 3: Obtener los GitHub usernames de los explorers por mission", () => {
        const explorers = [{"mission": "node", "githubUsername": "explorer1"}, {"mission": "node", "githubUsername": "explorer2"},{"mission": "java", "githubUsername": "explorer3"}];
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernames).toEqual(["explorer1", "explorer2"]);
    });
});