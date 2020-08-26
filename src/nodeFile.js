var fs = require("fs");

class Visitor {
    constructor(fullName, age, dateVisited, timeVisited, comments, assistant) {
        this.fullName = fullName;
        this.age = age;
        this.dateVisited = dateVisited;
        this.timeVisited = timeVisited;
        this.comments = comments;
        this.assistant = assistant;
    }

    save() {
            fs.appendFile(
                    `visitor_${this.fullName.replace(` `, `_`).toLowerCase()}.json`,
      `{
        "name":"${this.fullName}", 
        "age":${this.age}, 
        "date of visit":"${this.dateVisited}", 
        "time of visit":"${this.timeVisited}", 
        "comments":"${this.comments}", 
        "person assisted":"${this.assistant}"
      }`,

      function (err) {
        if (err) throw err;
      }
    );
  }
}

function load(name) {
  fs.readFile(
    `visitor_${name.replace(` `, `_`).toLowerCase()}.json`,
    `utf8`,
    (err, res) => {
      if (err) throw err;
      return console.log(res);
    }
  );
}

let alice = new Visitor(
  `Alice Cooper`,
  72,
  `04/02/2020`,
  `10:45`,
  `An American singer, songwriter, and actor whose career spans over 50 years`,
  `Wikipedia`
);
alice.save();
load(`Alice Cooper`);

module.exports = { Visitor, load };