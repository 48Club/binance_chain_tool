
exports.up = function (knex, Promise) {
  return knex.schema.createTable('Address', function (t) {
    t.increments()
    t.string('PublicAddress').notNullable().unique()
    t.string('PrivateKey').notNullable().unique()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('Address')
}
