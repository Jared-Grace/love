import { arguments_assert } from "./arguments_assert.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_prose_code_line } from "./app_code_prose_code_line.mjs";
import { app_code_prose_rule_line } from "./app_code_prose_rule_line.mjs";
export function app_code_lesson_expression_string_order_above(root) {
  arguments_assert(arguments, 1);
  ("first a recall box anchoring on the < and > the learner already knows on numbers, revealing they also order strings alphabetically (dictionary order); then two rule boxes, each its own light-blue container - < and > - within each the true direction and the false direction stated on their own line, condition first (When ... then ... is true/false), the first letter of each paragraph capitalised. Strict ordering only, no equal case - that is the string trichotomy lesson. No worked examples here: the refreshable examples below demonstrate the cases.");
  let true_text = js_keyword_true();
  let false_text = js_keyword_false();
  let recall = app_code_container_light_blue(root);
  app_code_prose_code_line(recall, [
    ["text", "You've used "],
    ["code", "<"],
    ["text", " and "],
    ["code", ">"],
    ["text", " to compare two numbers"],
  ]);
  app_code_prose_code_line(recall, [
    ["code", "<"],
    ["text", " and "],
    ["code", ">"],
    ["text", " can also compare two strings"],
  ]);
  app_code_prose_code_line(recall, [
    [
      "text",
      "Strings are compared in alphabetical order, the way words are listed in a dictionary",
    ],
  ]);
  let stage_one = app_code_container_light_blue(root);
  app_code_prose_code_line(stage_one, [
    ["code", '"g"'],
    ["text", " comes before "],
    ["code", '"h"'],
  ]);
  app_code_prose_code_line(stage_one, [
    ["code", "g"],
    ["text", " comes earlier in the alphabet than "],
    ["code", "h"],
    ["text", ", so "],
    ["code", '"g"'],
    ["text", " is before "],
    ["code", '"h"'],
  ]);
  let stage_two = app_code_container_light_blue(root);
  app_code_prose_code_line(stage_two, [
    ["code", '"ag"'],
    ["text", " comes before "],
    ["code", '"ah"'],
  ]);
  app_code_prose_code_line(stage_two, [
    ["code", '"ag"'],
    ["text", " and "],
    ["code", '"ah"'],
    ["text", " have the same first symbol ("],
    ["code", "a"],
    ["text", ")"],
  ]);
  app_code_prose_code_line(stage_two, [
    ["text", "So the second symbols are compared ("],
    ["code", "g"],
    ["text", ", "],
    ["code", "h"],
    ["text", ")"],
  ]);
  app_code_prose_code_line(stage_two, [
    ["code", "g"],
    ["text", " comes earlier in the alphabet than "],
    ["code", "h"],
    ["text", ", so "],
    ["code", '"ag"'],
    ["text", " is before "],
    ["code", '"ah"'],
  ]);
  let stage_three = app_code_container_light_blue(root);
  app_code_prose_code_line(stage_three, [
    ["code", '"abg"'],
    ["text", " and "],
    ["code", '"abh"'],
    ["text", " have the same first 2 symbols ("],
    ["code", "ab"],
    ["text", ")"],
  ]);
  app_code_prose_code_line(stage_three, [
    ["text", "So the third symbols are compared ("],
    ["code", "g"],
    ["text", ", "],
    ["code", "h"],
    ["text", ")"],
  ]);
  app_code_prose_code_line(stage_three, [
    ["code", "g"],
    ["text", " comes earlier in the alphabet than "],
    ["code", "h"],
    ["text", ", so "],
    ["code", '"abg"'],
    ["text", " is before "],
    ["code", '"abh"'],
  ]);
  let pattern = app_code_container_light_blue(root);
  app_code_prose_code_line(pattern, [["text", "This pattern continues:"]]);
  app_code_prose_code_line(pattern, [
    [
      "text",
      "If the first symbols are the same, then the first symbols that are different are compared",
    ],
  ]);
  let less_box = app_code_container_light_blue(root);
  app_code_prose_rule_line(
    less_box,
    "the left string comes before the right string",
    "<",
    true_text,
  );
  app_code_prose_rule_line(
    less_box,
    "the left string comes after the right string",
    "<",
    false_text,
  );
  let greater_box = app_code_container_light_blue(root);
  app_code_prose_rule_line(
    greater_box,
    "the left string comes after the right string",
    ">",
    true_text,
  );
  app_code_prose_rule_line(
    greater_box,
    "the left string comes before the right string",
    ">",
    false_text,
  );
}
