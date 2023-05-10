'use strict';

const {Spot, User} = require('../models')

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Spots'
   await queryInterface.bulkInsert(options, [
    {
      ownerId: 1,
      address: '123 filler data ln',
      city: 'Milwaukee',
      state: 'WI',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Affordable Apartment!',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet mauris commodo quis imperdiet massa tincidunt. Rhoncus dolor purus non enim praesent elementum facilisis. Risus nec feugiat in fermentum posuere urna. <br/>Consequat semper viverra nam libero justo laoreet sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 40.00
    },
    {
      ownerId: 2,
      address: '1234 Standard dr',
      city: 'Also Milwaukee',
      state: 'MA',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Cute Place',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet mauris commodo quis imperdiet massa tincidunt. Rhoncus dolor purus non enim praesent elementum facilisis. Risus nec feugiat in fermentum posuere urna. Consequat semperabitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 50.00
    },
    {
      ownerId: 3,
      address: '6547 Dreary Ln',
      city: 'Seattle',
      state: 'WA',
      country: 'USA',
      lat: 20.42,
      lng: 50.22,
      name: 'Rainy Day House',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien pellentesque pulvinar pellentesque habitant morbi tristique senectus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 65.00
    },
    {
      ownerId: 2,
      address: '2233 Wassup Ln',
      city: 'Kansas City',
      state: 'MO',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: '100% THAT SPOT',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet mauris commodo quis imperdiet massa tincidunt. Rhoncus dolor purus non enim praesent abitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 74.00
    },
    {
      ownerId: 3,
      address: '678 Curmudgeon Ave',
      city: 'Camden',
      state: 'LA',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Bayou Bonanza',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uraesent elementum facilisis. Risus nec feugiat in fermentum posuere urna. Consequat semper viverra nam libero justo laoreet sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 65.00
    },
    {
      ownerId: 1,
      address: '568 Charcoal ln',
      city: 'Montreal',
      state: 'Québec',
      country: 'Canada',
      lat: 20.42,
      lng: 50.22,
      name: 'La Jolie Folle',
      description: 'Lorem ipsum do at semper viverra nam libero justo laoreet sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 70.00
    },
    {
      ownerId: 2,
      address: '16 Candles pl',
      city: 'Los Angeles',
      state: 'NY',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Somewhere in Between',
      description: 'Lorem ipsum dolor sit amet, coesque habitant morbi tristique senectus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 50.00
    },
    {
      ownerId: 3,
      address: '2121  Standard dr',
      city: 'Trogolite',
      state: 'FL',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Yup, Florida',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet mauris commodo quis imperdiet massa tincidunt. Rhoncus dolor purus non eniuis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 46.00
    },
    {
      ownerId: 3,
      address: '9386 Fuchsia pl',
      city: 'Des Moines',
      state: 'VA',
      country: 'USA',
      lat: 20.42,
      lng: 50.22,
      name: 'Mt Whateverest',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et r pellentesque habitant morbi tristique senectus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 38.00
    },
    {
      ownerId: 1,
      address: '7522 Brie Space',
      city: 'Butte',
      state: 'MT',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Cottage Cheese',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet mauris commodo quis imperdiet massa tincidunt. Rhoncus dolor purus non enim praesent elementum facilisis. Risus nec feugiat in fermentum posuere urna. Consequat semper viverra nam libero justo laoreet sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 15.00
    },
    {
      ownerId: 2,
      address: '1789 Charchar st',
      city: 'Charlotte',
      state: 'NC',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Hometown Flavor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet mauris commodo quis imperdiet massa tincidunt. Rhoncus dolor purus non enim praesent elementum facilisis. Risus nec feugiat in fermentum posuere urna. Em sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 84.00
    },
    {
      ownerId: 3,
      address: '12345 Standard dr',
      city: 'Atlanta',
      state: 'GA',
      country: 'USA',
      lat: 20.42,
      lng: 50.22,
      name: 'Fancy Pants',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et liorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 46.00
    },
    {
      ownerId: 1,
      address: '1515 Felicity ln',
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Dishy Deep Dish',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et met mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 63.00
    },
    {
      ownerId: 2,
      address: '9624 Fandango ln',
      city: 'Washington',
      state: 'DC',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Fandango Tango',
      description: 'Lorem ipsum de pulvinar pellentesque habitant morbi tristique senectus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 58.00
    },
    {
      ownerId: 3,
      address: '632 Sandman lane',
      city: 'Palo Alto',
      state: 'TX',
      country: 'USA',
      lat: 20.42,
      lng: 50.22,
      name: 'Love in the time of Cottage',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet mauris commodo quis imperdiet massa tincidunt. Rhoncus dolor purus non enim risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 53.00
    },
    {
      ownerId: 1,
      address: '641 Charming Hwy',
      city: 'Detroit',
      state: 'MI',
      country: 'USA',
      lat: 10.40,
      lng: 90.20,
      name: 'Special Sauce',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et lia. Consequat semper viverra nam libero justo laoreet sit. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis...',
      price: 41.00
    },
    {
      ownerId: 2,
      address: '6149 Superficial hwy',
      city: 'Laborious',
      state: 'SC',
      country: 'USA',
      lat: 40.41,
      lng: 30.21,
      name: 'Coolidge Ridge',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien et ligula. Amet mauris commodo quis imperdiet massa tincidunt. Rhoncus dolor purus nonem sed risus ultricies tristique nulla aliquet. Consequat interdum varius sit amet mattis. In hac habitasse platea dictumst vestibulum rhoncus. Ut tristique et egestas quis ipsum. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Bibendum ut tristique et egestas quis.',
      price: 67.00
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots'
    await queryInterface.bulkDelete(options, null, {});
  }
};
