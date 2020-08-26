const { Visitor, load } = require("../src/nodeFile");

describe("function save()", () => {
    let alice = new Visitor(
        "Alice Cooper",
        72,
        "04/02/2020",
        "10:45",
        `An American singer, songwriter, and actor whose career spans over 50 years`,
        `Wikipedia`
    );

    it("should exist", () => {
        expect(alice.save).toBeDefined();
    });

    it("should read a visitor's information in a file", () => {
        fs = require("fs");

        alice.save();

        fs.readFile("../visitor_alice_cooper.json", "UTF8", (err, data) => {
            if (err) throw err;
            else {
                let readData = JSON.parse(data);
                expect(readData.fullName).toEqual("alice_cooper");
                expect(readData.age).toEqual(72);
                expect(readData.date).toEqual("04/02/2020");
                expect(readData.time).toEqual("10:45");
                expect(readData.comments).toEqual(
                    "An American singer, songwriter, and actor whose career spans over 50 years"
                );
                expect(readData.person).toEqual("Wikipedia");
            }
        });
    });
});