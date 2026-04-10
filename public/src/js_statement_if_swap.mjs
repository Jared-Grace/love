import { property_swap } from "../../../love/public/src/property_swap.mjs";
export function js_statement_if_swap(statement_if) {
  const p1 = "alternate";
  const p2 = "consequent";
  property_swap(statement_if, p1, p2);
}
