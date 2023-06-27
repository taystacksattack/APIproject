# Welcome to FairBnB, an AirBnB clone created by Taylor McClerin!

### In light of the housing crisis, FairBnB supports longer-term, affordable options for its users. Check out the live site [here](https://airbnb-clone-9dm1.onrender.com/)

## Index
* [Database Schema](https://github.com/taystacksattack/APIproject/wiki/Database-Schema)
* [MVP Feature List](https://github.com/taystacksattack/APIproject/wiki/MVP-Feature-List)
* [User Stories](https://github.com/taystacksattack/APIproject/wiki/User-Stories)



## Technologies Used:

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /><img 
src="https://img.shields.io/badge/Sequelize-316192?style=for-the-badge&logo=Sequelize&logoColor=white" /><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /><img src="https://img.shields.io/badge/Render-darkgreen?style=for-the-badge&logo=Render&logoColor=white" />

## Splash Page

![splash](https://github.com/taystacksattack/APIproject/blob/main/SpashPage.jpg?raw=true)


## Single Spot with Reviews

![singleSpot](https://github.com/taystacksattack/APIproject/blob/main/SingleSpot.png?raw=true)

___________

## Getting it up and running 
1. Clone the repo [here](https://github.com/taystacksattack/APIproject.git)

2. Install the dependencies by running `npm install` in both front and backend folders
     * Having two separate terminals open to the back and front end folders respectively is recommended

3. Create a _.env_ file in the backend folder with the following inputs:
     * PORT=8000
     * DB_FILE=db/dev.db
     * JWT_SECRET= unique_key
     * JWT_EXPIRES_IN=604800
     * SCHEMA= unique_schema_name

3. Set up your database on your hosting site using the information from your .env file

4. Run the following in your backend terminal:
     * `npx dotenv sequelize db:create`
     * `npx dotenv sequelize db:migrate` 
     * `npx dotenv sequelize db:seed:all`

5. Start the app up in both backend and frontend terminals by running `npm start`

6. Now feel free to log in as the Demo User or create your own account
