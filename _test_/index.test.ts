// _test_/index.test.ts
import { runConsole } from "../src/index";

/*describe("runConsole", () => {
    it("should log 'teste'", () => {
        console.log = jest.fn();  // Mock console.log
        runConsole();
        expect(console.log).toHaveBeenCalledWith("teste");
    });
});*/

it('should runConsole', async () => {
    await runConsole();;
});
