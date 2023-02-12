const express = require('express');
const bodyparser = require('body-parser');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app= express();

const postsRoute = require('./routes/post.route');

app.use(bodyparser.json());

app.use("/tasks",postsRoute);

app.get("/tasks", paginatedResults(), (req, res) => {
  res.json(res.paginatedResults);
});

function paginatedResults() {
  return async (req, res, next) => {
    
    const page = parseInt(req.query.page);
    const limit = 10
    const skipIndex = (page - 1) * limit;
    const results = {};

    try {
      results.results = await User.find()
        .sort({ _id: 1 })
        .limit(limit)
        .skip(skipIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: "Error Occured" });
    }
  };
}

app.get("/tasks/getCSV", function (req, res) {
  // retrieving the user with a query...

  // initializing the CSV string content with the headers
  let csvData = ["task", "is_completed", "end_date"].join(",") + "\r\n"

  users.forEach((user) => {
    // populating the CSV content
    // and converting the null fields to ""
    csvData += [user.task, user.is_completed, user.end_date].join(",") + "\r\n"
  })

  // returning the CSV content via the "users.csv" file
  res
    .set({
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="users.csv"`,
    })
    .send(csvData)
})

module.exports=app
