/**
 * Student.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    gender: {
      type: "string",
    },
    birthDay: {
      type: "string",
    },
    address: {
      type: "string",
    },
    classStudent: {
      type: "string",
    },
  },
};
