import { property_swap } from "./property_swap.mjs";
export function js_statement_if_swap(statement_if) {
  let p1 = "alternate";
  let p2 = "consequent";
  property_swap(statement_if, p1, p2);
}
