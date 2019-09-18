// Update with your config settings.
export default {
    development: {
        client: "postgresql",
        connection: {
            host: "127.0.0.1",
            port: "5433",
            database: "postgres",
            user: "postgres",
            password: "password"
        }
    },
    staging: {
        client: "postgresql",
        connection: {
            host: "127.0.0.1",
            database: "postgres",
            user: "postgres",
            password: "password"
        }
    },
    production: {
        client: "postgresql",
        connection: {
            host: "127.0.0.1",
            database: "postgres",
            user: "postgres",
            password: "password"
        }
    }
};
//# sourceMappingURL=knexfile.js.map