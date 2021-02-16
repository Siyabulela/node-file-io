const axios = require("axios"),
  server = require("../src/app");

describe("Testing app.js", () => {
  beforeEach(() => {
    server;
  });
  it("should check status code is equal to 200", async (done) => {
    try {
      const route = await axios.post("localhost:3000/addVisitor/");
      expect(route.status).toEqual(200);
    } catch (err) {
      console.log(err);
    }
    done();
  });

  it("should check status code is 200", async (done) => {
    try {
      const route = await axios.delete("localhost:3000/deleteAVisitor");
      expect(route.status).toEqual(200);
    } catch (err) {
      console.log(err);
    }
    done();
  });

  it("should return empty object after deleting A visitors", async (done) => {
    try {
      const route = await axios.delete("localhost:3000/deleteAVisitor");
      expect(route.outputData).toEqual({});
    } catch (err) {
      console.log(err);
    }
    done();
  });
  it("should check status code is 200", async (done) => {
    try {
      const route = await axios.put("localhost:3000/updateVisitor");
      expect(route.status).toEqual(200);
    } catch (err) {
      console.log(err);
    }
    done();
  });
});
