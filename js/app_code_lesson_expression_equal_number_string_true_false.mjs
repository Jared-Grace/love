import { app_code_lesson_expression_equal_number_string_true_false_same_plain } from "./app_code_lesson_expression_equal_number_string_true_false_same_plain.mjs";
import { app_code_lesson_expression_equal_number_string_true_false_number_and_true_false } from "./app_code_lesson_expression_equal_number_string_true_false_number_and_true_false.mjs";
import { app_code_lesson_expression_equal_number_string_true_false_same_string } from "./app_code_lesson_expression_equal_number_string_true_false_same_string.mjs";
import { app_code_lesson_expression_equal_number_string_true_false_look_alike } from "./app_code_lesson_expression_equal_number_string_true_false_look_alike.mjs";
import { app_code_comparison_decoys } from "./app_code_comparison_decoys.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_label_value } from "./app_code_label_value.mjs";
import { app_code_label_value_backwards } from "./app_code_label_value_backwards.mjs";
import { app_code_lesson_expression_equal_number_string_true_false_title_name_id } from "./app_code_lesson_expression_equal_number_string_true_false_title_name_id.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
export function app_code_lesson_expression_equal_number_string_true_false() {
  "=== across a number, a string, and true or false: it is true only when both sides are the same one of those three. A number can equal a number, a string can equal a string, true and false can equal each other - but a number never equals a string, and neither ever equals true or false.";
  "The three groups are NEVER named with a word of their own - not type, not kind, not sort. Every lesson before this one taught them one at a time under the names the learner already has: number, string, true and false. A collective noun would be a fourth thing to remember on a screen whose whole content is a rule about the three, and the rule states perfectly well without it - a number, a string, and true or false are never the same as each other. The word for it can wait for the lesson that needs it, which is the one that teaches typeof.";
  "The two look-alikes carry the lesson: \"1\" and 1, \"true\" and true. A reader who thinks those pairs are equal is exactly the reader this lesson is for, and no other example can catch them - 1 === \"hello\" they would call false already, for the wrong reason. So the quiz asks a look-alike every screen, and the closing card says what the quotes do: they are what settles which of the two the 1 is.";
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
  function refill() {
    "four examples a screen, two true and two false, and the two false ones are the two shapes this lesson adds. The true lines are not filler - they are what stops the false ones being answerable by a rule the lesson never taught, so each false shape is shown beside a true line that looks like it";
    let v =
      app_code_lesson_expression_equal_number_string_true_false_look_alike();
    let v2 =
      app_code_lesson_expression_equal_number_string_true_false_same_string();
    let v3 =
      app_code_lesson_expression_equal_number_string_true_false_number_and_true_false();
    let v4 =
      app_code_lesson_expression_equal_number_string_true_false_same_plain();
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
    ("The rule names its subjects rather than saying they - a pronoun here would point at three things that have never been gathered under one word, which is exactly the word this lesson is refusing to introduce.");
    ("Three groups make three pairs, and the rule is stated as TWO sentences rather than one or three. Three - a number is never a string, true is never a number or a string, false is never a number or a string - repeats itself, because true and false answer alike and saying them apart invites the reader to look for the difference. One - none of the three is ever equal to another - is the tightest, and it is the one the reader has to unpack into the three pairs themselves before it says anything about the line in front of them. Two is where the factoring stops paying: it covers all three pairs, neither sentence needs unpacking, and each can stand directly above the example that shows it.");
    html_div_cycle_code(never, ["But a number is never equal to a string"]);
    html_div_cycle_code(never, ["", '"1" === 1', " is ", "false"]);
    html_div_cycle_code(never, [
      "",
      t,
      " and ",
      f,
      " are never equal to a number or a string",
    ]);
    html_div_cycle_code(never, ["", '"true" === true', " is ", "false"]);
    html_div_cycle_code(never, ["", "1 === true", " is ", "false"]);
    let quotes = app_code_container_light_blue(root);
    ("Quotes, not quote marks - the first string lesson defined a string as text in quotes and every string lesson since has said quotes, so this card adds no word at all. It only points the one already there at the difference the learner is looking straight at.");
    ("The two lines come first and the rule after them, which is the track's order everywhere.");
    ("The closing line says what the quotes DO, and does not say that they are the only difference. Only the quotes are different is a comparison: it hands the reader two lines, asks them to find every way the lines differ, and then asks them to trust that the one they found is the one that matters. That is a second inference on a card whose whole job is a first one. Saying that the quotes are what settles whether the 1 is a string or a number states the fact by itself - the two lines above are then an example of it rather than a puzzle it depends on.");
    html_div_cycle_code(quotes, ["", '"1"', " is a string"]);
    html_div_cycle_code(quotes, ["", "1", " is a number"]);
    html_div_cycle_code(quotes, [
      "The quotes say whether the ",
      "1",
      " is a string or a number",
    ]);
  }
}
