exports.seed = function(knex) {
  return knex("users").insert([
    { username: "jenkins", password: "rowValue1", department: "department1" },
    { username: "billy", password: "rowValue2", department: "department2" },
    { username: "willy", password: "rowValue3", department: "department3" }
  ]);
};
