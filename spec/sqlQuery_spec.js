const {
  addVisitor,
  deleteVisitor,
  deleteAllVisitors,
  getVisitors,
  getVisitorById,
  updateVisitor,
} = require("../src/sqlQuery");

describe("sqlQuery.js", function () {
  let originalTimeout;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it("should expect addVisitor to be defined", function () {
    setTimeout(function () {
        addVisitor();
      expect(addVisitor).toBeDefined();
    }, 9000);
  });
  it("should expect deleteVisitor to be defined", function () {
    setTimeout(function () {
        deleteVisitor();
      expect(deleteVisitor).toBeDefined();
    }, 9000);
  });
  it("should expect deleteAllVisitors to be defined", function () {
    setTimeout(function () {
        deleteAllVisitors();
      expect(deleteAllVisitors).toBeDefined();
    }, 9000);
  });
  it("should expect getVisitors to be defined", function () {
    setTimeout(function () {
      getVisitors();
      expect(getVisitors).toBeDefined();
    }, 9000);
  });
  it("should expect getVisitorById to be defined", function () {
    setTimeout(function () {
        getVisitorById();
      expect(getVisitorById).toBeDefined();
    }, 9000);
  });
  it("should expect updateVisitor to be defined", function () {
    setTimeout(function () {
        updateVisitor();
      expect(updateVisitor).toBeDefined();
    }, 9000);
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
});
