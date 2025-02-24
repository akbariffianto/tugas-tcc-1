import {Sequelize} from 'sequelize';

const db = new Sequelize('hr', 'root', '123', {
    host: '34.135.240.157',
    dialect: 'mysql'    
});

export default db;