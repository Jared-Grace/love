import { arguments_assert } from "./arguments_assert.mjs";
export function sql_statements_join(statements) {
  arguments_assert(arguments, 1);
  ("Statements given without their ending semicolon, as one text to send at once: each ends in a semicolon and a new line.");
  function ended(statement) {
    let r = statement + ";\n";
    return r;
  }
  let r2 = statements.map(ended).join("");
  return r2;
}
