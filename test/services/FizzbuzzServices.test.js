const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Tests para FizzbuzzService", () => {
    test("Requerimiento 4: Validar si el explorer tiene un score no es divisible entre 3 ni 5", () => {
        const explorer = {name: "Explorer1", score: 1};
        const explorertrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorertrick.trick).toBe(1);
    });
    test("Requerimiento 5: Validar si el explorer tiene un score solo divisible entre 3", () => {
        const explorer = {name: "Explorer3", score: 6};
        const explorertrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorertrick.trick).toBe("FIZZ");
    });
    test("Requerimiento 6: Validar si el explorer tiene un score solo divisible entre 5", () => {
        const explorer = {name: "Explorer5", score: 5};
        const explorertrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorertrick.trick).toBe("BUZZ");
    });
    test("Requerimiento 7: Validar si el explorer tiene un score divisible entre 3 y 5", () => {
        const explorer = {name: "Explorer15", score: 15};
        const explorertrick = FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorertrick.trick).toBe("FIZZBUZZ");
    });
});