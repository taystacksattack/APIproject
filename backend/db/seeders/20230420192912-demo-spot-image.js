'use strict';

let options = {}
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-fran.jpg',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://cdn.mos.cms.futurecdn.net/62LwoXnJdNsLN8hVWEaKQW.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://th-thumbnailer.cdn-si-edu.com/2kJPtTPMcDfR7jSSxq8NT0Cvvoo=/1072x720/filters:no_upscale():focal(418x235:419x236)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/49/f9/49f90449-a4f3-4b47-8e83-708d026fe348/ra427_43.jpg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR9xBFSAyH6ADIcc-lUKezjP-hzwwwg8e7kw&usqp=CAU',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://cdn.vox-cdn.com/thumbor/co4ZW4A_nhmQxLHmkL0tIQrP5H4=/0x0:1814x1195/2000x1333/filters:focal(907x598:908x599)/cdn.vox-cdn.com/uploads/chorus_asset/file/24620250/enterprise_bridge_d.jpg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://cdn.mos.cms.futurecdn.net/iTTvRuBGN9fbUQ6c3MKSAJ.jpg',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://thumbs.nestseekers.com/JUl35Qa7Z6fnoE0Q.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://imagescdn.amarantelva.com/thumb/http://images.amarantelva.com.s3-website-eu-west-1.amazonaws.com/property/71983601/71983601_9.jpg',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://www.casadeyra.com/assets-back/images/blog/apartment-insouthern.jpgvNI.jpg',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://www.thespruce.com/thmb/d5xH9xDxUptvAcPCTMb81N8DDV4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/French-country-kitchen-599471710d327a00107ea084.jpg',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://i1.sndcdn.com/artworks-000162493189-4hvw5p-t500x500.jpg',
        preview: true
      },
      {
        spotId: 5,
        url: '	https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://64.media.tumblr.com/22c7cb807ea126ffd7415a3f5ceeadbf/56d1b6b14e1f4fb2-2f/s500x750/b42f4ed9d970cc0136a6e6500730bdde43df66d2.png',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://st.hzcdn.com/simgs/pictures/living-rooms/a-modern-castle-ahmann-design-inc-img~7131611503b2d06e_4-4038-1-bcd1e88.jpg',
        preview: true
      },
      {
        spotId: 7,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 7,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://www.slashfilm.com/img/gallery/why-xenomorph-creator-h-r-giger-wasnt-more-involved-with-the-alien-franchise/intro-1644268561.jpg',
        preview: true
      },
      {
        spotId: 8,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 8,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://media.sciencephoto.com/c0/41/60/09/c0416009-400px-wm.jpg',
        preview: true
      },
      {
        spotId: 9,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 9,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://cdn.repeller.com/wp-content/uploads/2018/08/Ugly-Design-Man-Repeller-August-2018-973489510-copy-1090x1272.jpg',
        preview: true
      },
      {
        spotId: 10,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 10,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://i.stack.imgur.com/t8mdx.jpg',
        preview: true
      },
      {
        spotId: 11,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 11,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/f783abbb-8840-4f27-bc94-491c630db609-underwater-living.jpg',
        preview: true
      },
      {
        spotId: 12,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 12,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://jaysbrickblog.com/wp-content/uploads/2023/03/LEGO-43217-Up-House-Set-1-1400x1119.jpg',
        preview: true
      },
      {
        spotId: 13,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 13,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://previews.123rf.com/images/sbotas/sbotas1309/sbotas130900001/23077320-house-shape-made-of-slices-of-bread-on-a-white-background.jpg',
        preview: true
      },
      {
        spotId: 14,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 14,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://blogs.smithsonianmag.com/paleofuture/files/2013/02/jetsons-apartments.jpeg',
        preview: true
      },
      {
        spotId: 15,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 15,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://cdn.thecoolist.com/wp-content/uploads/2013/08/Cave-House-Switzerland-by-CMA-and-SeARCH-3-600x399.jpg',
        preview: true
      },
      {
        spotId: 16,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 16,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://assets2.cbsnewsstatic.com/hub/i/r/2017/01/19/f247628e-4e85-40ef-ae97-385212953f7e/thumbnail/640x480/a3cc5f1749a584e624bc7c2a203a3e41/bottle-house-exterior.jpg',
        preview: true
      },
      {
        spotId: 17,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco2.png',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://www.dailydreamdecor.com/wp-content/uploads/2019/03/studio-apartment-san-francisco.png',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://cdn.home-designing.com/wp-content/uploads/2017/08/small-apartment-with-open-layout-living-room.jpg',
        preview: false
      },
      {
        spotId: 17,
        url: 'https://s1.r29static.com/bin/entry/b24/x/1053791/image.jpg',
        preview: false
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages'
    await queryInterface.bulkDelete(options);
  }
};
