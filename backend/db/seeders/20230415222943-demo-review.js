'use strict';


const bcrypt = require("bcryptjs")

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
     await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 1,
        userId: 2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac.',
        stars: 4
      },
      {
        spotId: 1,
        userId: 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.',
        stars: 4
      },
      {
        spotId: 2,
        userId: 1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non .',
        stars: 5
      },
      {
        spotId: 2,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 2,
        userId: 6,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 3,
        userId: 1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac.',
        stars: 4
      },
      {
        spotId: 3,
        userId: 2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.',
        stars: 4
      },
      {
        spotId: 4,
        userId: 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non .',
        stars: 5
      },
      {
        spotId: 4,
        userId: 6,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },{
        spotId: 4,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 5,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac.',
        stars: 4
      },
      {
        spotId: 5,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.',
        stars: 4
      },
      {
        spotId: 6,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non .',
        stars: 5
      },
      {
        spotId: 7,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 7,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 8,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac.',
        stars: 4
      },
      {
        spotId: 8,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.',
        stars: 4
      },
      {
        spotId: 8,
        userId: 6,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non .',
        stars: 5
      },
      {
        spotId: 9,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },{
        spotId: 9,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 10,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac.',
        stars: 4
      },
      {
        spotId: 11,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.',
        stars: 4
      },
      {
        spotId: 12,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non .',
        stars: 5
      },
      {
        spotId: 12,
        userId: 6,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 12,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 14,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac.',
        stars: 4
      },
      {
        spotId: 14,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.',
        stars: 4
      },
      {
        spotId: 15,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non .',
        stars: 5
      },
      {
        spotId: 16,
        userId: 6,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },{
        spotId: 17,
        userId: 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Id porta nibh venenatis cras sed felis eget. Dolor purus non enim praesent elementum facilisis. Eu lobortis elementum nibh tellus molestie nunc non blandit.',
        stars: 5
      },
      {
        spotId: 17,
        userId: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac.',
        stars: 4
      },
      {
        spotId: 17,
        userId: 6,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam ut venenatis tellus in metus vulputate. Nunc faucibus a pellentesque sit amet porttitor. Bibendum neque egestas congue quisque egestas diam in. Consequat interdum varius sit amet mattis vulputate. Magna etiam tempor orci eu. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Velit egestas dui id ornare arcu odio ut. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.',
        stars: 4
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options);

  }
};
