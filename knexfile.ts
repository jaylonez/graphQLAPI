export = {
  "client": "postgresql",
  "connection": {
    "charset": "utf8mb4",
    "timezone": "UTC",
    "user": "fooddevelop",
    "password": "FoodDevelopTest11",
    "database": "foodlocal",
    "host": "0.0.0.0",
    "port": 5432
  },
  "pool": {
    "min": 1,
    "max": 1
  },
  "migrations": {
    "directory": "./server/db/migrations"
  }
};
