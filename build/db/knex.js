import knex from "knex";
const dbConnection = knex({
    client: "pg",
    connection: "postgres://postgres:password@localhost:5433/postgres"
});
module.exports = dbConnection;
//# sourceMappingURL=knex.js.map