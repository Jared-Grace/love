import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_get } from "./list_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_swap_at } from "./list_swap_at.mjs";
import { modulo } from "./modulo.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_braces_run_programs_shape(code_get, names) {
  arguments_assert(arguments, 2);
  ("four programs of one shape, code_get's, each opened by a let giving every one of names true or false, in a random order: the values differ between the four wherever the names give that many ways, so the learner meets the shape going different ways");
  ("Every way is allowed, every section running included: a section that runs has its own steps now, the if around it going and its lines moving out, so a program with nothing to swallow still has something to show.");
  ("The first two differ in the first name, so the first example and the next show the first if both running and not: at the human's asking 2026-10-11, after If inside an if opened twice with a false, and the if inside was never reached. The examples are taken from the front of these in order, so the order is kept rather than shuffled at the end.");
  let ways = [[]];
  for (let n = 0; less_than(n, list_size(names)); n++) {
    let longer = [];
    for (let way of ways) {
      let item = list_concat(way, [true]);
      list_add(longer, item);
      let item2 = list_concat(way, [false]);
      list_add(longer, item2);
    }
    ways = longer;
  }
  list_shuffle(ways);
  let list = list_get(ways, 0);
  let first = list_get(list, 0);
  for (let k = 1; less_than(k, list_size(ways)); k++) {
    let list2 = list_get(ways, k);
    let left = list_get(list2, 0);
    if (not_equal(left, first)) {
      list_swap_at(ways, 1, k);
      break;
    }
  }
  let count = 4;
  let programs = [];
  for (let i = 0; less_than(i, count); i++) {
    let right = list_size(ways);
    let index = modulo(i, right);
    let values = list_get(ways, index);
    let lets = [];
    for (let j = 0; less_than(j, list_size(names)); j++) {
      let name = list_get(names, j);
      let value = list_get(values, j);
      let statement = js_code_let_json_statement(name, value);
      list_add(lets, statement);
    }
    let code = code_get();
    let lines = list_concat(lets, [code]);
    let joined = list_join_newline(lines);
    list_add(programs, joined);
  }
  return programs;
}
