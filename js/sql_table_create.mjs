import { arguments_assert } from "./arguments_assert.mjs";
export function sql_table_create(table) {
  arguments_assert(arguments, 1);
  ("The CREATE TABLE IF NOT EXISTS statement for a table given as {name, columns, rules}: each column line, then each rule over several columns, one per line. Making it again changes nothing, and leaves a table already there as it was.");
  let lines = [...table.columns, ...table.rules];
  function indented(line) {
    let r = "  " + line;
    return r;
  }
  let r2 =
    "CREATE TABLE IF NOT EXISTS " +
    table.name +
    " (\n" +
    lines.map(indented).join(",\n") +
    "\n)";
  return r2;
}
