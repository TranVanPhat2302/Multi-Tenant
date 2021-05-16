import { join } from "path";

// ormconfig.ts
module.exports = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: +process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    migrationsRun: true,
    entities: [
      join(__dirname, './modules/public/**/*.entity{.ts,.js}')
    ],
    migrations: [
      join(__dirname, './migrations/public/*{.ts,.js}',)
    ]
  };