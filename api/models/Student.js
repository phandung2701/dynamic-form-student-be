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
    idPage: {
      type: "string",
    },
  },
  async afterCreate(values, next) {
    const students = await Student.find({ idPage: values.idPage });
    await Page.update({ id: values.idPage }).set({ rows: students });
    return next();
  },
  async afterUpdate(values, next) {
    const students = await Student.find({ idPage: values.idPage });
    await Page.update({ id: values.idPage }).set({ rows: students });
    return next();
  },
};
