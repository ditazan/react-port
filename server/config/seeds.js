const db = require("./connection");
const { Project, Filter } = require("../models");

db.once("open", async () => {
  await Filter.deleteMany();
  const filters = await Image.insertMany([
    { name: "creative tech" },
    { name: "webdev" },
  ]);
  console.log("filters seeded");

  await Project.deleteMany();
  const Projects = await Project.insertMany([
    { title: "title 1", intro: "this is the intro text", filter: filters[0]._id, },
    { title: "title 2", intro: "this is the intro text", filter: filters[1]._id, },
  ]);
  console.log("projects seeded");

  process.exit();
});
