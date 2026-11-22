import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_tables } from "./calendar_db_tables.mjs";
import { calendar_db_named_execute } from "./calendar_db_named_execute.mjs";
import { sql_statements_join } from "./sql_statements_join.mjs";
import { list_map } from "./list_map.mjs";
import { sql_table_create } from "./sql_table_create.mjs";
import { calendar_db_named_execute_json } from "./calendar_db_named_execute_json.mjs";
import { not_equal } from "./not_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { sql_columns_missing } from "./sql_columns_missing.mjs";
import { sql_column_add_refusal } from "./sql_column_add_refusal.mjs";
import { sql_column_name } from "./sql_column_name.mjs";
import { calendar_db_indexes } from "./calendar_db_indexes.mjs";
import { equal } from "./equal.mjs";
export async function calendar_db_named_migrate(database_name) {
  arguments_assert(arguments, 1);
  ("Brings the named calendar database - calendar or calendar_test - up to ",
    fn_name("calendar_db_tables"),
    ": makes every table it lacks, adds every column a table lacks, then every index. Answers {added, printed}, added naming each column added as table.column. Running it again adds nothing.");
  ('Asked for 2026-11-22 (human: "so it should be easy to create tables fields, read from tables, and migrate"). Before it, each new column was written into the schema and again into a one-off ALTER function that could run only once and only on the live database.');
  ("★ IT STOPS BEFORE ADDING ANYTHING if a missing column is one SQLite cannot add to a table with rows (",
    fn_name("sql_column_add_refusal"),
    "), naming each, rather than adding some and leaving the rest. It never removes or changes a column: a column the database has and the list lacks stays, and a changed line for an existing column changes nothing, since that needs the table rebuilt.");
  let tables = calendar_db_tables();
  let statements2 = list_map(tables, sql_table_create);
  let sql = sql_statements_join(statements2);
  await calendar_db_named_execute(database_name, sql);
  function info(table) {
    let r = "PRAGMA table_info(" + table.name + ")";
    return r;
  }
  let statements3 = tables.map(info);
  let sql2 = sql_statements_join(statements3);
  let answers = await calendar_db_named_execute_json(database_name, sql2);
  if (not_equal(answers.length, tables.length)) {
    throw new Error(
      text_combine_multiple([
        fn_name("calendar_db_named_migrate"),
        ": expected one answer per table, got ",
      ]) + answers.length,
    );
  }
  let present = {};
  function present_set(table, index) {
    let rows = answers[index].results || [];
    function lambda(row) {
      let r5 = row.name;
      return r5;
    }
    present[table.name] = rows.map(lambda);
  }
  tables.forEach(present_set);
  let missing = sql_columns_missing(tables, present);
  let refused = [];
  for (let m of missing) {
    let why = sql_column_add_refusal(m.column);
    if (not_equal(why, null)) {
      refused.push(m.table + "." + sql_column_name(m.column) + ": " + why);
    }
  }
  if (refused.length) {
    throw new Error(
      text_combine_multiple([
        fn_name("calendar_db_named_migrate"),
        ": nothing added, because these cannot be added as written - ",
      ]) + refused.join("; "),
    );
  }
  function column_add(m) {
    let r2 = "ALTER TABLE " + m.table + " ADD COLUMN " + m.column;
    return r2;
  }
  let statements = [...missing.map(column_add), ...calendar_db_indexes()];
  let sql3 = sql_statements_join(statements);
  let printed = await calendar_db_named_execute(database_name, sql3);
  function added_name(m) {
    let r3 = m.table + "." + sql_column_name(m.column);
    return r3;
  }
  let r4 = {
    added: missing.map(added_name),
    printed: equal(missing.length, 0)
      ? "no column missing; indexes checked"
      : printed,
  };
  return r4;
}
