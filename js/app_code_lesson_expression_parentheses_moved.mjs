import { app_code_lesson_expression_parentheses_moved_title_name_id } from "./app_code_lesson_expression_parentheses_moved_title_name_id.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { integer_random } from "./integer_random.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split } from "./text_split.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_parentheses_moved() {
  "the same three numbers and the same two operators, with the ( and ) in one of two places: (2 + 3) * 4 is 20 and 2 + (3 * 4) is 14. The first parentheses lesson showed the brackets against no brackets. This one shows them against THEMSELVES - nothing on the line differs except where the pair sits, so the answer can only come from reading their position. That is also the first place a learner sees brackets that change nothing: 2 + (3 * 4) is what 2 + 3 * 4 already did, because the brackets there agree with the * being stronger.";
  "The two wrong answers offered are the values of BOTH placements. One of them is the real answer and the multiple choice drops it as a duplicate, so what is left is always the other placement - the exact mistake of reading the brackets in the wrong spot.";
  let name_id = app_code_lesson_expression_parentheses_moved_title_name_id();
  let next_arg = list_iterator_refillable(refill);
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 4,
    decoys,
  });
  return lesson;
  function expression(group_first) {
    "a + b * c with the ( and ) around either the a + b or the b * c. Every number is 2..5, so both placements stay whole and above zero and their two answers can never coincide";
    let a = integer_random(2, 5);
    let b = integer_random(2, 5);
    let c = integer_random(2, 5);
    let code = arrange(a, b, c, group_first);
    return code;
  }
  function arrange(a, b, c, group_first) {
    "(a + b) * c when group_first, otherwise a + (b * c)";
    let plus = js_operator_plus_symbol();
    let times = js_operator_asterisk_symbol();
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let a_text = text_to(a);
    let b_text = text_to(b);
    let c_text = text_to(c);
    let grouped = [
      open,
      a_text,
      " ",
      plus,
      " ",
      b_text,
      close,
      " ",
      times,
      " ",
      c_text,
    ];
    let spread = [
      a_text,
      " ",
      plus,
      " ",
      open,
      b_text,
      " ",
      times,
      " ",
      c_text,
      close,
    ];
    let parts = ternary(group_first, grouped, spread);
    let code = text_combine_multiple(parts);
    return code;
  }
  function decoys(question, answer) {
    "both placements of the very same three numbers. The one equal to the real answer is dropped as a duplicate, leaving the other placement as the wrong answer on offer";
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let without_open = text_replace(question, open, "");
    let flat = text_replace(without_open, close, "");
    let words = text_split(flat, " ");
    let a = words[0];
    let b = words[2];
    let c = words[4];
    let grouped = arrange(a, b, c, true);
    let spread = arrange(a, b, c, false);
    let r = [eval(grouped), eval(spread)];
    return r;
  }
  function refill() {
    "four examples a screen, the group twice around the + and twice around the *";
    let v = expression(true);
    let v2 = expression(false);
    let v3 = expression(true);
    let v4 = expression(false);
    let list = [v, v2, v3, v4];
    return list;
  }
  function above(root) {
    "the two placements worked out side by side on the same numbers, then what that means, then the placement that changes nothing";
    let plus = js_operator_plus_symbol();
    let times = js_operator_asterisk_symbol();
    let open = js_code_parenthesis_left();
    let close = js_code_parenthesis_right();
    let idea = app_code_container_light_blue(root);
    html_div_cycle_code(idea, [
      "Remember: whatever is inside ",
      open,
      " and ",
      close,
      " is solved first",
    ]);
    html_div_cycle_code(idea, [
      "The same numbers can have the ",
      open,
      " and ",
      close,
      " in two places",
    ]);
    let around_plus = app_code_container_light_blue(root);
    html_div_cycle_code(around_plus, [
      "",
      "(2 + 3) * 4",
      " does the ",
      "2 + 3",
      " first",
    ]);
    html_div_cycle_code(around_plus, [
      "",
      "2 + 3",
      " is ",
      "5",
      ", so we have ",
      "5 * 4",
    ]);
    html_div_cycle_code(around_plus, ["So ", "(2 + 3) * 4", " is ", "20"]);
    let around_times = app_code_container_light_blue(root);
    html_div_cycle_code(around_times, [
      "",
      "2 + (3 * 4)",
      " does the ",
      "3 * 4",
      " first",
    ]);
    html_div_cycle_code(around_times, [
      "",
      "3 * 4",
      " is ",
      "12",
      ", so we have ",
      "2 + 12",
    ]);
    html_div_cycle_code(around_times, ["So ", "2 + (3 * 4)", " is ", "14"]);
    let point = app_code_container_light_blue(root);
    html_div_cycle_code(point, [
      "Same numbers, same ",
      plus,
      " and ",
      times,
      ", different answer",
    ]);
    html_div_cycle_code(point, [
      "Where the ",
      open,
      " and ",
      close,
      " go is part of what the line says",
    ]);
    let nothing = app_code_container_light_blue(root);
    html_div_cycle_code(nothing, [
      "",
      "2 + (3 * 4)",
      " is what ",
      "2 + 3 * 4",
      " does anyway",
    ]);
    html_div_cycle_code(nothing, [
      "The ",
      times,
      " is stronger, so it goes first either way",
    ]);
    html_div_cycle_code(nothing, [
      "Those ",
      open,
      " and ",
      close,
      " change nothing - they only make it plain",
    ]);
  }
}
