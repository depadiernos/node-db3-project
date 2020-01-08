const db = require("../data/db-config")

const find = () => {
  return db("schemes")
}

const findById = (id) => {
  return db("schemes").where("id", id)
}

const findSteps = () => {}

const add = () => {}

const addStep = () => {}

const update = () => {}

const remove = () => {}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  findById,
  addStep,
  findById,
  update,
  remove
}
