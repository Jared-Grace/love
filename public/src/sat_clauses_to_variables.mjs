import { list_map_unique } from "../../../love/public/src/list_map_unique.mjs";
import { abs } from "../../../love/public/src/abs.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
export function sat_clauses_to_variables(clauses) {
  let squashed = list_squash(clauses);
  let variables = list_map_unique(squashed, abs);
  return variables;
}
