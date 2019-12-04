'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactsSchema extends Schema {
  up () {
    this.table('contacts', (table) => {
      // alter table
    })
  }

  down () {
    this.table('contacts', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ContactsSchema
