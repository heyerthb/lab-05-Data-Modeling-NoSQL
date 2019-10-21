'use strict';


// const Categories = require('../../models-singular/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Singular)', () => {

  beforeEach(async() =>{
    await categories.deleteMany({});
  })

  // How will you handle both the happy path and edge cases in these tests?
  // Collaboration from Sarah.
  it('can create() a new category', () => {


    const record = await categories.create(obj);
    Object.keys(obj).forEach(key => {
      expect(record[key]).toEqual(obj[key]);
    });
  });

  // })
  // const newCategory = new Categories({test:'testing categories'});
  // newCategory.create()
  //   .then(category => {
  //     expect(category.text).toBe('testing categories');
  //     done();
  //   }).catch(err =>{
  //     console.log(err);
  //     done();
  //   });
  // });

  it('can get() a category', () => {
  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});