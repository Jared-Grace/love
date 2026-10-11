import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit } from "./js_visit.mjs";
import { error } from "./error.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function app_code_if_blocks(code) {
  arguments_assert(arguments, 1);
  ("every { ... } of every if and else in a program, in the order they open, each with where its braces stand, whether it runs, and what goes with it when it does not: an if with no else goes whole, an else goes from the end of the if before it");
  ("Whether a section runs is read off the values the program's lets give, so the program's ifs may ask only a name a let gave true or false, or true or false itself; anything else is not a program this answers for, and stops rather than guessing.");
  ("Whether a section runs is said of the section alone, as if the code around it ran: a section inside another that does not run is never reached, which the caller can see from where their braces stand.");
  let ast = js_parse(code);
  let values = {};
  let ifs = [];
  function on_visit(v) {
    "a let's value written down, or an if kept";
    let node = property_get(v, "node");
    let b = js_node_is(node);
    if (not(b)) {
      return;
    }
    let type = property_get(node, "type");
    if (equal(type, "VariableDeclarator")) {
      let id = property_get(node, "id");
      let name = property_get(id, "name");
      let init = property_get(node, "init");
      let value = property_get(init, "value");
      property_set(values, name, value);
    }
    if (equal(type, "IfStatement")) {
      list_add(ifs, node);
    }
  }
  js_visit(ast, on_visit);
  function test_value(test) {
    "true or false, for the test of an if";
    let type = property_get(test, "type");
    if (equal(type, "Identifier")) {
      let name = property_get(test, "name");
      let value = property_get(values, name);
      return value;
    }
    if (equal(type, "Literal")) {
      let value = property_get(test, "value");
      return value;
    }
    error({
      message: "an if may only ask a name or true or false",
      code,
      type,
    });
  }
  let blocks = [];
  for (let node of ifs) {
    let test = property_get(node, "test");
    let runs = test_value(test);
    let consequent = property_get(node, "consequent");
    let alternate = property_get(node, "alternate");
    let after = null;
    if (equal(alternate, null)) {
      after = {
        from: property_get(node, "start"),
        to: property_get(node, "end"),
      };
    }
    let left = property_get(consequent, "end");
    list_add(blocks, {
      open: property_get(consequent, "start"),
      close: subtract(left, 1),
      runs,
      after,
    });
    if (not_equal(alternate, null)) {
      let alternate_type = property_get(alternate, "type");
      if (not_equal(alternate_type, "BlockStatement")) {
        error({
          message: "an else must be a { ... }",
          code,
          alternate_type,
        });
      }
      let left2 = property_get(alternate, "end");
      list_add(blocks, {
        open: property_get(alternate, "start"),
        close: subtract(left2, 1),
        runs: not(runs),
        after: {
          from: property_get(consequent, "end"),
          to: property_get(alternate, "end"),
        },
      });
    }
  }
  function open_get(block) {
    let open = property_get(block, "open");
    return open;
  }
  let sorted = list_sort_number_mapper(blocks, open_get);
  return sorted;
}
