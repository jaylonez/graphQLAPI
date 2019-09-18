"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.up = function (knex) {
    // Create a table
    knex.schema
        .createTable("users", function (table) {
        table.increments("id");
        table.string("name");
    })
        // Then query the table...
        .then(function () {
        return knex("users").insert({ name: "Tim" });
    })
        // // ...and using the insert id, insert into the other table.
        // .then(function(rows) {
        //   return knex("accounts").insert({ account_name: "knex", user_id: rows[0] });
        // })
        .then(function () {
        return knex("users").select("users.name as user");
    })
        // .map over the results
        .map(function (row) {
        console.log(row);
    })
        // Finally, add a .catch handler for the promise chain
        .catch(function (e) {
        console.error(e);
    });
};
exports.down = function (knex) {
    knex.schema.dropTableIfExists("users");
};
//# sourceMappingURL=20190823133130_init_db.js.map