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
import { text_slice } from "./text_slice.mjs";
import { text_index_of_last_try } from "./text_index_of_last_try.mjs";
import { text_index_of_from } from "./text_index_of_from.mjs";
import { text_indent_size } from "./text_indent_size.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function app_code_if_blocks(code) {
  arguments_assert(arguments, 1);
  ("every { ... } of every if and else in a program, in the order they open, each with where its braces stand, whether it runs, and the steps that take the program to what runs of it once the learner has said so. A step fades some stretches of the program and may then move the lines between a pair of braces out by one indent, as the braces around them go");
  ("Whether a section runs is read off the values the program's lets give, so the program's ifs may ask only a name a let gave true or false, or true or false itself; anything else is not a program this answers for, and stops rather than guessing.");
  ("Whether a section runs is said of the section alone, as if the code around it ran: a section inside another that does not run is never reached, which the caller can see from where their braces stand.");
  ("The steps, asked for by the human 2026-10-11. A section that runs loses its if, or its if () { } else {, and its last }, and its lines move out to where they now stand. One that does not run has its lines fade and its braces close up; an if with no else then goes whole, and an else goes from the end of its if, after which its if, which ran, goes as a section that runs does. An if with an else waits for the else to be answered before its own if () { goes.");
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
  function column(index) {
    "how far along its line a place in the program stands";
    let before = text_slice(code, 0, index);
    ("a place on the first line has no newline before it, which is found at one before the program begins, so the same subtraction answers for it");
    let newline = text_index_of_last_try(before, "\n");
    let left = subtract(index, newline);
    let difference = subtract(left, 1);
    return difference;
  }
  function range(from, to) {
    let r = {
      from,
      to,
    };
    return r;
  }
  function unwrap(start, block) {
    "a statement beginning at start losing everything up to block's { and block's own }, and the lines between them moving out by the indent they were given";
    let open = property_get(block, "start");
    let left2 = property_get(block, "end");
    let close = subtract(left2, 1);
    let header = range(start, open + 1);
    let closing = range(close, close + 1);
    let newline = text_index_of_from(code, "\n", open);
    let line = text_slice(code, newline + 1, close);
    let body_indent = text_indent_size(line);
    let right = column(start);
    let step = {
      fades: [header, closing],
      dedent: {
        from: open,
        to: close,
        size: subtract(body_indent, right),
      },
    };
    return step;
  }
  function fading(ranges) {
    let step = {
      fades: ranges,
      dedent: null,
    };
    return step;
  }
  let blocks = [];
  for (let node of ifs) {
    let start = property_get(node, "start");
    let end = property_get(node, "end");
    let test = property_get(node, "test");
    let runs = test_value(test);
    let consequent = property_get(node, "consequent");
    let alternate = property_get(node, "alternate");
    let open = property_get(consequent, "start");
    let left3 = property_get(consequent, "end");
    let close = subtract(left3, 1);
    let r2 = range(open + 1, close);
    let inside = fading([r2]);
    let if_unwrap = unwrap(start, consequent);
    let steps = [];
    if (equal(alternate, null)) {
      let r3 = range(start, end);
      let v2 = fading([r3]);
      steps = runs ? [if_unwrap] : [inside, v2];
    } else if (not(runs)) {
      steps = [inside];
    }
    list_add(blocks, {
      open,
      close,
      runs,
      steps,
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
      let else_open = property_get(alternate, "start");
      let left4 = property_get(alternate, "end");
      let else_close = subtract(left4, 1);
      let r4 = range(else_open + 1, else_close);
      let else_inside = fading([r4]);
      let r5 = range(close + 1, end);
      let else_after = fading([r5]);
      let else_unwrap = unwrap(start, alternate);
      let else_steps = runs
        ? [else_inside, else_after, if_unwrap]
        : [else_unwrap];
      list_add(blocks, {
        open: else_open,
        close: else_close,
        runs: not(runs),
        steps: else_steps,
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
