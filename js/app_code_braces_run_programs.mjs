import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_two_ifs } from "./app_code_braces_two_ifs.mjs";
import { app_code_braces_two_if_else } from "./app_code_braces_two_if_else.mjs";
import { app_code_braces_two_nested } from "./app_code_braces_two_nested.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_concat } from "./list_concat.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_json_statement } from "./js_code_let_json_statement.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map } from "./list_map.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
export function app_code_braces_run_programs() {
  arguments_assert(arguments, 0);
  ("four programs with two pairs of braces, each opened by the lets its ifs ask: two ifs one after the other, an if and its else, an if inside an if, and one of those again, in a random order");
  ("At least one section of every program does not run, so every program has something to swallow: two names are never both true, and an if with an else always skips one of its two.");
  let pairs = [
    [true, false],
    [false, true],
    [false, false],
  ];
  let shapes = [
    {
      code_get: app_code_braces_two_ifs,
      count: 2,
    },
    {
      code_get: app_code_braces_two_if_else,
      count: 1,
    },
    {
      code_get: app_code_braces_two_nested,
      count: 2,
    },
  ];
  let extra = list_random_item(shapes);
  let chosen = list_concat(shapes, [extra]);
  function program(shape) {
    "the lets, then the code of one shape";
    let code_get = property_get(shape, "code_get");
    let count = property_get(shape, "count");
    let values = list_random_item(pairs);
    let names = ["a", "b"];
    let lets = [];
    for (let i = 0; less_than(i, count); i++) {
      let name = list_get(names, i);
      let value = list_get(values, i);
      let statement = js_code_let_json_statement(name, value);
      list_add(lets, statement);
    }
    let code = code_get();
    let lines = list_concat(lets, [code]);
    let joined = list_join_newline(lines);
    return joined;
  }
  let programs = list_map(chosen, program);
  list_shuffle(programs);
  return programs;
}
