import { sat_contradiction_n } from "../../../love/public/src/sat_contradiction_n.mjs";
export function sat_contradiction_3() {
  let variables = 3;
  let clauses = sat_contradiction_n(variables);
  return clauses;
}
