export default {
  machine: {
    master: {
      host: process.env.TYPEORM_GATEWAY_MASTER_HOST,
      username: process.env.TYPEORM_GATEWAY_MASTER_USERNAME,
      password: process.env.TYPEORM_GATEWAY_MASTER_PASSWORD,
      port: +process.env.TYPEORM_PORT,
    },
    slaves: [
      {
        host: process.env.TYPEORM_GATEWAY_SLAVE1_HOST,
        username: process.env.TYPEORM_GATEWAY_SLAVE1_USERNAME,
        password: process.env.TYPEORM_GATEWAY_SLAVE1_PASSWORD,
        port: +process.env.TYPEORM_PORT,
      },
    ],
  },
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  logging: process.env.TYPEORM_LOGGING === 'true',
  entities: '',
  migrations: process.env.TYPEORM_MIGRATIONS.split('|'),
  subscribers: process.env.TYPEORM_SUBSCRIBERS.split('|'),
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};
