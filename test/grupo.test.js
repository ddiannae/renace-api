const request = require("supertest");

const app = require("../src/index");

describe("Calling /grupo with GET", () => {
    test("It should respond with a 200 status code", async () => {
        const response = await request(app).get("/grupo").send();
        expect(response.status).toBe(200);
    });

    test("It should respond with an array", async () => {
        const response = await request(app).get("/grupo").send();
        expect(response.body).toBeInstanceOf(Array);
    });
})