const db = require("../data/db-config")

const find = () => {
  return db("schemes")
}

const findById = (id) => {
  return db("schemes").where({ id })
}

const findSteps = (id) => {
  return db("steps as t")
    .join("schemes as s", "t.scheme_id", "s.id")
    .where("t.scheme_id", id)
    .select("t.id", "s.scheme_name", "t.step_number", "t.instructions")
    .orderBy("t.step_number", "asc")
}

const add = async (scheme) => {
  const [id] = await db("schemes").insert(scheme)
  return findById(id)
}

const addStep = async (step, scheme_id) => {
  const [id] = await db("steps").insert({ ...step, scheme_id })
  return db("steps").where({ id })
}

const update = async (newScheme, id) => {
  await db("schemes")
    .where({ id })
    .update(newScheme)
  return findById(id)
}

const remove = (id) => {
  return db("schemes")
    .where({ id })
    .del()
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}
