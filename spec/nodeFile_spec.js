const { Visitor, load } = require("../src/nodeFile");
let alice = new Visitor(
    "Alice Cooper",
    72,
    "04/02/2020",
    "10:45",
    `An American singer, songwriter, and actor whose career spans over 50 years`,
    `Wikipedia`
  );

describe("save function", () => {
  it("should exist", () => {
    expect(alice.save).toBeDefined();
  });
});

describe("load function", () => {
    it("should read data", () => {
      expect(alice.fullName).toBe(`Alice Cooper`);
      expect(alice.age).toBe(72);
      expect(alice.dateVisited).toBe(`04/02/2020`);
      expect(alice.timeVisited).toBe(`10:45`);
      expect(alice.comments).toBe(`An American singer, songwriter, and actor whose career spans over 50 years`);
      expect(alice.assistant).toBe(`Wikipedia`);
    });
  });
  
describe(`load function`, () => {
  it(`should read results from load function`, () => {
    expect(load(`Alice Cooper`)).not.toBe(null)
  });
});
