import { list_get } from "./list_get.mjs";
import { each } from "./each.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_if_codes_halves(codes) {
  "four if programs, handed over as [runs with the if first, runs with the if last, does not run with the if first, does not run with the if last], put in an order whose first two and last two each hold one that runs and one that does not, one with the if first and one with it last, so the two examples drawn together show both ways, as the human asked of If less than 2026-10-07";
  let item = list_get(codes, 0);
  let item2 = list_get(codes, 3);
  let one_half = [item, item2];
  let item3 = list_get(codes, 1);
  let item4 = list_get(codes, 2);
  let other_half = [item3, item4];
  each([one_half, other_half], list_shuffle);
  let halves = [one_half, other_half];
  list_shuffle(halves);
  let a = list_first(halves);
  let b = list_last(halves);
  let ordered = list_concat(a, b);
  return ordered;
}
