import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { abs } from "../../../love/public/src/abs.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
export function sat_clauses_to_variables(clauses) {
  let squashed = list_squash(clauses);
  let mapped2 = list_map(squashed, abs);
  let unique = list_unique(mapped2);
  return unique;
}
