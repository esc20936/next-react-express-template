import Table from "@models/Table";
import { getTables } from "@persistance/table";

const getTableInteractor = () => {
    // logic with params

    // logic with db
    const tables = getTables();
    return tables;
   
}

export default getTableInteractor;