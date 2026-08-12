import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_equal_number_string_true_false_title_name_id } from "./app_code_lesson_expression_equal_number_string_true_false_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { app_code_lesson_expression_string_concat_pair } from "./app_code_lesson_expression_string_concat_pair.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_equal_number_string_true_false() {
  "=== across a number, a string, and true or false: it is true only when both sides are the same one of those three. A number can equal a number, a string can equal a string, true and false can equal each other - but a number never equals a string, and neither ever equals true or false.";
  "The three groups are NEVER named with a word of their own - not type, not kind, not sort. Every lesson before this one taught them one at a time under the names the learner already has: number, string, true and false. A collective noun would be a fourth thing to remember on a screen whose whole content is a rule about the three, and the rule states perfectly well without it - a number, a string, and true or false are never the same as each other. The word for it can wait for the lesson that needs it, which is the one that teaches typeof.";
  "The two look-alikes carry the lesson: \"1\" and 1, \"true\" and true. A reader who thinks those pairs are equal is exactly the reader this lesson is for, and no other example can catch them - 1 === \"hello\" they would call false already, for the wrong reason. So the quiz asks a look-alike every screen, and the closing card names the only difference between the two sides: the quotes.";
  "This is the prerequisite the chained-=== lessons lean on. true === 5 === 5 is worked out left to right, so its second step compares a true or false to a number, and there is no honest way to say what that answers without this rule.";
  let name_id =
    app_code_lesson_expression_equal_number_string_true_false_title_name_id();
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 4,
    decoys: app_code_comparison_decoys,
    forwards_question_label: app_code_label_code_question(),
    forwards_answer_label: app_code_label_value(),
    backwards_question_label: app_code_label_value(),
    backwards_answer_label: app_code_label_value_backwards(),
    forwards_answer_count_override: 2,
  });
  return lesson;
  function compared(left_code, right_code) {
    "two pieces of code with === between them";
    let symbol = js_operator_triple_equal_symbol();
    let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
    return code;
  }
  function look_alike() {
    "a value and the string spelled exactly like it: \"5\" === 5, or \"true\" === true. Always false, and the one line the lesson exists for. The word is held as its own code text from the start, so the same word serves both sides - quoted on the left, bare on the right - and the two can never drift apart";
    let word = list_random_item(["1", "2", "5", "true", "false"]);
    let quoted = app_code_string_code(word);
    let code = compared(quoted, word);
    return code;
  }
  function number_and_true_false() {
    "a number against a true or false, with no quotes anywhere: 1 === true. Also always false, and it is here so the rule cannot be read off the quotes alone - a reader who has decided that quotes mean false has nothing to go on in this line";
    let number = list_random_item(["0", "1", "2"]);
    let t2 = js_keyword_true();
    let f2 = js_keyword_false();
    let word = list_random_item([t2, f2]);
    let code = compared(number, word);
    return code;
  }
  function same_string() {
    "one word from the shared verse compared with itself, quotes and all: true, because both sides are strings and the text matches. The screen needs a true line whose two sides are both strings, or every quoted example on it would be false and the quotes would look like the thing that makes an answer false";
    let two = app_code_lesson_expression_string_concat_pair();
    let word = list_get(two, 0);
    let quoted = app_code_string_code(word);
    let code = compared(quoted, quoted);
    return code;
  }
  function same_plain() {
    "a number or a true or false compared with itself: true. The plain half of the same pairing as same_string";
    let word = list_random_item(["1", "5", "true", "false"]);
    let code = compared(word, word);
    return code;
  }
  function refill() {
    "four examples a screen, two true and two false, and the two false ones are the two shapes this lesson adds. The true lines are not filler - they are what stops the false ones being answerable by a rule the lesson never taught, so each false shape is shown beside a true line that looks like it";
    let v = look_alike();
    let v2 = same_string();
    let v3 = number_and_true_false();
    let v4 = same_plain();
    let list = [v, v2, v3, v4];
    return list;
  }
  function above(root) {
    "what the learner already has, then the new rule with all three of its cases, then the one thing that tells the two sides of a look-alike apart";
    let t = js_keyword_true();
    let f = js_keyword_false();
    let known = app_code_container_light_blue(root);
    ("The recall card shows the three groups by example rather than listing them, and it uses the words the track has already spent on them - hello is the first string the learner ever met. Example before rule, and here the examples are also the proof that nothing new is being asked for yet.");
    html_div_cycle_code(known, [
      "We have compared numbers, strings, ",
      t,
      " and ",
      f,
    ]);
    html_div_cycle_code(known, ["", "1 === 1", " is ", "true"]);
    html_div_cycle_code(known, ["", '"hello" === "hello"', " is ", "true"]);
    html_div_cycle_code(known, ["", "true === true", " is ", "true"]);
    let never = app_code_container_light_blue(root);
    ("The rule names its three subjects rather than saying they - a pronoun here would point at three things that have never been gathered under one word, which is exactly the word this lesson is refusing to introduce.");
    html_div_cycle_code(never, [
      "But a number, a string, and ",
      t,
      " or ",
      f,
      " are never the same as each other",
    ]);
    html_div_cycle_code(never, ["", '"1" === 1', " is ", "false"]);
    html_div_cycle_code(never, ["", '"true" === true', " is ", "false"]);
    html_div_cycle_code(never, ["", "1 === true", " is ", "false"]);
    let quotes = app_code_container_light_blue(root);
    ("Quotes, not quote marks - the first string lesson defined a string as text in quotes and every string lesson since has said quotes, so this card adds no word at all. It only points the one already there at the difference the learner is looking straight at.");
    html_div_cycle_code(quotes, ["The quotes are what make it a string"]);
    html_div_cycle_code(quotes, ["", '"1"', " is a string"]);
    html_div_cycle_code(quotes, ["", "1", " is a number"]);
  }
}
