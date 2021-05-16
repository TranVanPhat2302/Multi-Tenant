import { join } from "path";
import * as ormconfig from "ormconfig"

module.exports = {
  ...ormconfig,
	schema: 'team_example',
  entities: [
    join(__dirname, './modules/tenant/**/*.entity{.ts,.js}')
  ],
  migrations: [
    join(__dirname, './migrations/tenant/*{.ts,.js}',)
  ]
};