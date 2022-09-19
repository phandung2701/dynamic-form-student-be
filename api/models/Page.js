/**
 * Page.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: "string",
    },

    form: {
      type: "json",
    },
    table: {
      type: "json",
    },
    // columns: {
    //   type: "json",
    // },
    // rows: {
    //   type: "json",
    // },
    // inputField: {
    //   type: "json",
    // },
    // selectField: {
    //   type: "json",
    // },
  },
};
