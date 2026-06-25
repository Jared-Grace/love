import { sat_contradiction_n } from "../../../love/public/src/sat_contradiction_n.mjs";
export function sat_contradiction_2() {
  let variables = 4;
  let clauses = sat_contradiction_n(variables);
  return clauses;
}
