require("dotenv").config();
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const createTable = (request, response) => {
  pool.query(
    `create table if not exists visitors(
        visitorid serial primary key,
        firstname varchar(20),
        age int, 
        dateofvisit date, 
        timeofvisit time, 
        personassisted varchar(20), 
        comments varchar(50))`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const addVisitor = (request, response) => {
  let {
    fullName = `Mark Henry`,
    age = 23,
    dateVisited = `09/01/2021`,
    timeVisited = `12:15`,
    personassisted = `Wrestler`,
    comments = `Hell world!`,
  } = request.body;

  pool.query(
    `insert into visitors (firstname, age, dateofvisit, timeofvisit, personassisted, comments) values ($1, $2, $3, $4, $5, $6)`,
    [fullName, age, dateVisited, timeVisited, personassisted, comments],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Visitor added`);
    }
  );
};
const deleteVisitor = (request, response) => {
  const id = parseInt(request.params.id[1]);

  pool.query(
    "DELETE FROM visitors WHERE visitorid = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Visitor deleted with ID: ${id}`);
    }
  );
};

const deleteAllVisitors = (request, response) => {
  pool.query("DELETE FROM visitors", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`visitors deleted`);
  });
};

const getVisitors = (request, response) => {
  pool.query("SELECT * FROM visitors", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getVisitorById = (request, response) => {
  const id = parseInt(request.params.id[1]);

  pool.query(
    "SELECT * FROM visitors WHERE visitorid = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const updateVisitor = (request, response) => {
  const id = parseInt(request.params.id[1]);
  let {
    fullName = `Ray`,
    age = 23,
    dateVisited = `09/01/2001`,
    timeVisited = `21:15`,
    personassisted = `Wrestler`,
    comments = `Hello world!`,
  } = request.body;

  pool.query(
    "UPDATE visitors SET firstname = $1, age = $2, dateofvisit = $3, timeofvisit = $4, personassisted = $5, comments = $6 WHERE visitorid = $7",
    [fullName, age, dateVisited, timeVisited, personassisted, comments, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Visitor modified with ID: ${id}`);
    }
  );
};

module.exports = {
  addVisitor,
  deleteVisitor,
  deleteAllVisitors,
  getVisitors,
  getVisitorById,
  updateVisitor,
};
