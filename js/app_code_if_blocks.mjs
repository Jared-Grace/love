import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { not_equal } from "./not_equal.mjs";
import { js_visit } from "./js_visit.mjs";
import { error } from "./error.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_index_of_last_try } from "./text_index_of_last_try.mjs";
import { subtract } from "./subtract.mjs";
import { text_index_of_from } from "./text_index_of_from.mjs";
import { text_indent_size } from "./text_indent_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
export function app_code_if_blocks(code) {
  arguments_assert(arguments, 1);
  ("every { ... } of every if, else if and else in a program, in the order they open, each with where its braces stand, whether it runs, and the steps that take the program to what runs of it once the learner has said so. A step fades some stretches of the program and may then move the lines between a pair of braces out by one indent, as the braces around them go");
  ("Whether a section runs is read off the values the program's lets give, so the program's ifs may ask only a name a let gave true or false, or true or false itself; anything else is not a program this answers for, and stops rather than guessing.");
  ("Whether a section runs is said of the section as if the code around it ran: a section inside another that does not run is never reached, which the caller can see from where their braces stand. Within one if and the else ifs and else after it, only the first section whose test is true runs, and an else runs when none before it did.");
  ("The steps, asked for by the human 2026-10-11. The sections of one if, its else ifs and its else are answered in order, and one that does not run has its lines fade and its braces close up as it is answered. Once the last of them is answered, what is left of them goes: all of it when none ran; otherwise everything after the section that ran goes, and then that section loses everything before its { and its own }, and its lines move out to where they now stand. An if with nothing after it is then the same rule with one section, and an if and its else the same with two.");
  let ast = js_parse(code);
  let values = {};
  let ifs = [];
  let followers = [];
  function on_visit(v) {
    "a let's value written down, or an if kept, noting an if that is written straight after an else";
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
      let alternate = property_get(node, "alternate");
      if (
        not_equal(alternate, null) &&
        equal(property_get(alternate, "type"), "IfStatement")
      ) {
        list_add(followers, alternate);
      }
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
  function fading(ranges) {
    let step = {
      fades: ranges,
      dedent: null,
    };
    return step;
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
  function sections_get(node) {
    "the { ... } of an if, of every else if after it, and of its else, in order, each with the test that guards it, an else having none";
    let sections = [];
    let current = node;
    while (true) {
      let test = property_get(current, "test");
      let consequent = property_get(current, "consequent");
      list_add(sections, {
        test,
        block: consequent,
      });
      let alternate = property_get(current, "alternate");
      if (equal(alternate, null)) {
        break;
      }
      let alternate_type = property_get(alternate, "type");
      if (equal(alternate_type, "IfStatement")) {
        current = alternate;
        continue;
      }
      if (not_equal(alternate_type, "BlockStatement")) {
        error({
          message: "an else must be a { ... } or an if",
          code,
          alternate_type,
        });
      }
      list_add(sections, {
        test: null,
        block: alternate,
      });
      break;
    }
    return sections;
  }
  let blocks = [];
  for (let node of ifs) {
    if (list_includes(followers, node)) {
      continue;
    }
    let start = property_get(node, "start");
    let end = property_get(node, "end");
    let sections = sections_get(node);
    let ran = null;
    let count = list_size(sections);
    for (let i = 0; less_than(i, count); i++) {
      let object = list_get(sections, i);
      let test = property_get(object, "test");
      let value = equal(test, null) ? true : test_value(test);
      if (equal(ran, null) && value) {
        ran = i;
      }
    }
    let last = subtract(count, 1);
    for (let i = 0; less_than(i, count); i++) {
      let object2 = list_get(sections, i);
      let block = property_get(object2, "block");
      let open = property_get(block, "start");
      let left3 = property_get(block, "end");
      let close = subtract(left3, 1);
      let runs = equal(i, ran);
      ("what the section asks, as code, an else asking nothing; and whether a section before it in the same if ran, which is why an else if or an else whose own test does not decide it does not run: for a walkthrough to give the reason, asked for by the human 2026-10-12");
      let test2 = property_get(object2, "test");
      let asked = equal(test2, null) ? null : js_unparse(test2);
      let before_ran = not_equal(ran, null) && less_than(ran, i);
      ("whether this is the last section of its if, the one whose answer takes the rest of the if away, and whether any section of the if ran, which decides whether all of it goes: for the walkthrough to say what is removed, asked for by the human 2026-10-12");
      let is_last = equal(i, last);
      let ran_any = not_equal(ran, null);
      let steps = [];
      if (not(runs)) {
        let r2 = range(open + 1, close);
        let item = fading([r2]);
        list_add(steps, item);
      }
      if (equal(i, last)) {
        if (equal(ran, null)) {
          let r3 = range(start, end);
          let item2 = fading([r3]);
          list_add(steps, item2);
        } else {
          let object3 = list_get(sections, ran);
          let block_ran = property_get(object3, "block");
          let after = property_get(block_ran, "end");
          if (less_than(after, end)) {
            let r4 = range(after, end);
            let item3 = fading([r4]);
            list_add(steps, item3);
          }
          let item4 = unwrap(start, block_ran);
          list_add(steps, item4);
        }
      }
      list_add(blocks, {
        open,
        close,
        runs,
        steps,
        asked,
        before_ran,
        is_last,
        ran_any,
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
