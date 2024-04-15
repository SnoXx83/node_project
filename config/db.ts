import { DataSource } from "typeorm";

const dataSource = new DataSource({
    type: "sqlite",
    database: "./node_project.sqlite",
    entities: ["src/entities/*.ts"],
    synchronize: true, 
    logging: ["query", "error"],
});

export default dataSource;