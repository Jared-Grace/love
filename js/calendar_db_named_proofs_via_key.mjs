import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { calendar_db_named_execute_json } from "./calendar_db_named_execute_json.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { calendar_db_tables } from "./calendar_db_tables.mjs";
import { list_map } from "./list_map.mjs";
import { sql_column_name } from "./sql_column_name.mjs";
import { sql_table_create } from "./sql_table_create.mjs";
import { sql_statements_join } from "./sql_statements_join.mjs";
import { calendar_db_indexes } from "./calendar_db_indexes.mjs";
import { calendar_db_named_execute } from "./calendar_db_named_execute.mjs";
export async function calendar_db_named_proofs_via_key(database_name) {
  arguments_assert(arguments, 1);
  ("Rebuilds the proofs table of the named calendar database - calendar or calendar_test - so it holds one proof per guest, host AND app, as ",
    fn_name("calendar_db_tables"),
    ' now says (human, 2026-11-24: "it should allow multiple communications as confirmed"). Answers {rebuilt, printed}.');
  ("Needed because SQLite cannot change a table's key in place, and ",
    fn_name("calendar_db_named_migrate"),
    " only adds what is missing. Every row moves across as it is: no two rows shared a guest and host before, so none can share a guest, host and app after.");
  ("★ NOTHING IS DROPPED. The old table is renamed proofs_before_via and kept, so a run that stops halfway loses no proof; only its index is dropped, since an index keeps its name through a rename and would stop the new table's index being made.");
  ("Running it again changes nothing: it first reads whether via is already part of the key.");
  let answers = await calendar_db_named_execute_json(
    database_name,
    "PRAGMA table_info(proofs)",
  );
  let rows = answers[0].results || [];
  if (equal(rows.length, 0)) {
    let r = {
      rebuilt: false,
      printed: "no proofs table",
    };
    return r;
  }
  function is_via(row) {
    let r2 = equal(row.name, "via");
    return r2;
  }
  let via_row = rows.find(is_via);
  if (via_row && greater_than(via_row.pk, 0)) {
    let r3 = {
      rebuilt: false,
      printed: "proofs already keyed by app",
    };
    return r3;
  }
  function is_proofs(table) {
    let r4 = equal(table.name, "proofs");
    return r4;
  }
  let table = calendar_db_tables().find(is_proofs);
  let columns = list_map(table.columns, sql_column_name).join(", ");
  let r22 = sql_table_create(table);
  let sql = sql_statements_join([
    "DROP INDEX IF EXISTS proofs_code",
    "ALTER TABLE proofs RENAME TO proofs_before_via",
    r22,
    "INSERT INTO proofs (" +
      columns +
      ") SELECT " +
      columns +
      " FROM proofs_before_via",
    ...calendar_db_indexes(),
  ]);
  let printed = await calendar_db_named_execute(database_name, sql);
  let r5 = {
    rebuilt: true,
    printed,
  };
  return r5;
}
