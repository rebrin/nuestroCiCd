const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
  it('should return "mi primer CI/CD"', async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.mensaje).toBe("mi primer CI/CD");
  });
});
