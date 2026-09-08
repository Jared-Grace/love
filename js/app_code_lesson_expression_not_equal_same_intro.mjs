import { fn_name } from "./fn_name.mjs";
import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { js_code_not_parenthesis_wrapped } from "./js_code_not_parenthesis_wrapped.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_not_changes_true_false } from "./app_code_not_changes_true_false.mjs";
export function app_code_lesson_expression_not_equal_same_intro(root) {
  "the two cards above the lesson matching a !== against a ! around an ===: first what each of the two comparison symbols asks, and that one therefore gives the opposite answer to the other; then, on a second card, what a ! does spelled out on true and false themselves before it is called an opposite - so the word opposite is earned in both halves before the two spellings are put together.";
  ("It stands in its own file for the same reason as ",
    fn_name("app_code_lesson_expression_not_comparison_intro"),
    ": a card is a different kind of thing from the questions a lesson draws, and the lesson was over the work-size ceiling with the card inside it.");
  ("The first card names SAME and DIFFERENT as opposite ideas before it says one symbol answers the opposite of the other. Without that line the word opposite arrives as a claim about two symbols the learner has only just met; with it, it is a thing they already knew about two ordinary English words, and the symbols merely inherit it.");
  ("Both spellings are shown in both directions. Reading only that a !== matches a ! round an === leaves a learner able to believe the trick runs one way, that a ! undoes the different-symbol and nothing else; the second pairing says the two symbols stand in the same relation whichever of them is written inside.");
  ("WHAT THE ! DOES IS RECALLED, NOT STATED. It opens with Remember because by here the learner has been told it twice and has solved lines with it, so a card announcing it as news would have them reading for something new in a sentence that has none. The sentence itself is asked for from the one place that holds it, so this card cannot drift out of step with the two lessons that recall the same thing.");
  ("SOLVE TO rather than GIVE, and SOLVE THE SAME ANSWER rather than WRITE THE SAME THING, because solve is the word every line of this course uses for carrying an expression down to its value, and a card that quietly switches to another word for it asks the learner to work out that nothing new is meant.");
  let different_symbol = js_operator_bang_double_equal_symbol();
  let same_symbol = js_operator_triple_equal_symbol();
  let bang_symbol = js_operator_bang_symbol();
  let true_word = js_keyword_true();
  let false_word = js_keyword_false();
  let three = "3";
  let five = "5";
  let short = app_code_operator_code(three, different_symbol, five);
  let inner = app_code_operator_code(three, same_symbol, five);
  let long = js_code_not_parenthesis_wrapped(inner);
  let long_other = js_code_not_parenthesis_wrapped(short);
  let asks = app_code_container_light_blue(root);
  html_div_cycle_code(asks, [
    "",
    short,
    " asks if the two sides are different",
  ]);
  html_div_cycle_code(asks, ["", inner, " asks if the two sides are the same"]);
  html_div_cycle_code(asks, ['"Same" and "different" are opposite ideas']);
  html_div_cycle_code(asks, [
    "So ",
    different_symbol,
    " gives the opposite answer to ",
    same_symbol,
  ]);
  let joins = app_code_container_light_blue(root);
  html_div_cycle_code(joins, [
    "",
    true_word,
    " and ",
    false_word,
    " are opposites",
  ]);
  let changes = app_code_not_changes_true_false("Remember: a ");
  html_div_cycle_code(joins, changes);
  html_div_cycle_code(joins, [
    "So, ",
    bang_symbol,
    " gives the opposite answer too",
  ]);
  html_div_cycle_code(joins, [
    "So ",
    short,
    " and ",
    long,
    " always solve to the same answer",
  ]);
  html_div_cycle_code(joins, ["Both are ways to solve the same answer"]);
  html_div_cycle_code(joins, [
    "Likewise, ",
    inner,
    " and ",
    long_other,
    " always solve to the same answer",
  ]);
}
