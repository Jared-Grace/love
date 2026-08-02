import { list_random_item_or_empty } from "./list_random_item_or_empty.mjs";
export function g_boundary_softener() {
  "The gentle tail a person puts on a boundary so it lands as a door left ajar rather than a door shut - sometimes present, sometimes not, because always softening reads as a formula.";
  "Shared by the unbeliever boundary and the believer one. The armour differs between them; the wish not to wound the person asking does not.";
  let r = list_random_item_or_empty([
    " Maybe another time?",
    " Could we come back to it later?",
    " I hope you understand.",
  ]);
  return r;
}
