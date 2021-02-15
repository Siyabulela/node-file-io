let request = require("request");
let port = "http://localhost:3000/";

describe("GET /", function () {
  it("returns status code 200", function (done) {
    request.get(port, function (error, response, body) {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it("should return Using Express to expose JSON endpoints", function (done) {
    request.get(port, function (error, response, body) {
      expect(body).toBe("Using Express to expose JSON endpoints");
      done();
    });
  });
});
