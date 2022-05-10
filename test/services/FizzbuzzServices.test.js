const FizzbuzzService = require("../../lib/services/FizzbuzzService")

describe("Tests para FizzbuzzService", () => {
    test("Requerimiento 4: Validar si el explorer tiene un score no es divisible entre 3 ni 5", () => {
        const explorer = {name: "Explorer1", score: 1}
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorer)
        expect(explorerFizz.trick).toBe(1)
    })
    test("Requerimiento 5: Validar si el explorer tiene un score solo divisible entre 3", () => {
        const explorer = {name: "Explorer3", score: 6}
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorer)
        expect(explorerFizz.trick).toBe("FIZZ")
    })
    test("Requerimiento 6: Validar si el explorer tiene un score solo divisible entre 5", () => {
        const explorer = {name: "Explorer5", score: 5}
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorer)
        expect(explorerFizz.trick).toBe("BUZZ")
    })
    test("Requerimiento 7: Validar si el explorer tiene un score divisible entre 3 y 5", () => {
        const explorer = {name: "Explorer15", score: 15}
        const explorerFizz = FizzbuzzService.applyValidationInExplorer(explorer)
        expect(explorerFizz.trick).toBe("FIZZBUZZ")
    })
})