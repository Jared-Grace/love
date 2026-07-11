import { sat_contradiction_n } from "../../../love/public/src/sat_contradiction_n.mjs";
export function sat_contradiction_() {
  let variables = 2;
  let clauses = sat_contradiction_n(variables);
  return clauses;
}
