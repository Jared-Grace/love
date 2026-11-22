import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { sql_column_name } from "./sql_column_name.mjs";
export function sql_columns_missing(tables, present) {
  arguments_assert(arguments, 2);
  ("The column lines tables declares that a database lacks, as [{table, column}] in the order declared. present maps each table name to the column names the database has; a table it does not name is left out, since that table is made whole rather than added to.");
  let missing = [];
  for (let table of tables) {
    let names = present[table.name];
    if (not(names)) {
      continue;
    }
    for (let column of table.columns) {
      let r = sql_column_name(column);
      let b = names.includes(r);
      if (not(b)) {
        missing.push({
          table: table.name,
          column,
        });
      }
    }
  }
  return missing;
}
