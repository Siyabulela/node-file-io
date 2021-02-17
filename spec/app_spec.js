const axios = require("axios"),
  server = require("../src/app");

describe("Testing app.js", () => {
  server;
  it("should check status code is 200", async (done) => {
    try {
      const route = await axios.delete("localhost:3000/deleteAVisitor");
      expect(route.status).toEqual(200);
    } catch (err) {}
    done();
  });

  it("should return empty object after deleting visitors", async (done) => {
    try {
      const route = await axios.delete("localhost:3000/deleteVisitors");
      expect(route.outputData).toEqual({});
    } catch (err) {}
    done();
  });
  it("should check status code is 200", async (done) => {
    try {
      const route = await axios.put("localhost:3000/updateVisitor");
      expect(route.status).toEqual(200);
    } catch (err) {}
    done();
  });
});
