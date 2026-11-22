import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function sql_column_add_refusal(column_line) {
  arguments_assert(arguments, 1);
  ("Why SQLite would refuse to add this column to a table that already exists, or null when it would add it: ALTER TABLE ADD COLUMN takes no PRIMARY KEY and no UNIQUE, and a NOT NULL column only with a DEFAULT, since the rows already there need a value.");
  let upper = column_line.toUpperCase();
  if (/\bPRIMARY\s+KEY\b/.test(upper)) {
    let r = "a PRIMARY KEY column cannot be added to a table that exists";
    return r;
  }
  if (/\bUNIQUE\b/.test(upper)) {
    let r2 =
      "a UNIQUE column cannot be added to a table that exists; add the column, then a unique index";
    return r2;
  }
  if (/\bNOT\s+NULL\b/.test(upper) && not(/\bDEFAULT\b/.test(upper))) {
    let r3 = "a NOT NULL column needs a DEFAULT for the rows already there";
    return r3;
  }
  return null;
}
