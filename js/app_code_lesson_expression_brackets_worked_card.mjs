import { and } from "./and.mjs";
import { app_code_lesson_expression_worked_card_two_operators } from "./app_code_lesson_expression_worked_card_two_operators.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_operator_or_symbol } from "./js_operator_or_symbol.mjs";
import { js_true_false_word } from "./js_true_false_word.mjs";
import { or } from "./or.mjs";
import { ternary } from "./ternary.mjs";
export function app_code_lesson_expression_brackets_worked_card(
  root,
  heading,
  left,
  middle,
  right,
  brackets_left,
  inner_or,
) {
  arguments_assert(arguments, 7);
  ("one worked card for the lessons that teach the brackets: three true or false words joined by an && and an || , with the marks round one pair or the other, carried all the way to its value");
  ("The three true or false words are asked for as plain true and false rather than as code, and both marks are worked out here rather than handed in, so a lesson says which line it wants and nothing about how the line is written or what it comes to. Every value on the card is then this one function's arithmetic, and a card cannot say a line is true while the line is false.");
  ("Both lessons the brackets are taught by show two of these cards, and before this they each built all of it themselves - the same six words looked up and the same three lines put together, twice over in two files. The words are the same words either way, so the only thing the two copies could ever do differently was drift.");
  ("Which pair the marks sit round and which mark is inside them are the two things asked for, because between them they are the whole of what the two lessons differ in. The mark outside is the other one of the two, so it is not asked for - a caller that could name both could name a line with two of the same mark in it, which is not a line either lesson has anything to say about.");
  let or_symbol = js_operator_or_symbol();
  let and_symbol = js_operator_and_symbol();
  let inner_symbol = ternary(inner_or, or_symbol, and_symbol);
  let outer_symbol = ternary(inner_or, and_symbol, or_symbol);
  let left_word = js_true_false_word(left);
  let right_word = js_true_false_word(right);
  let inside_first = ternary(brackets_left, left, middle);
  let inside_second = ternary(brackets_left, middle, right);
  let outside = ternary(brackets_left, right, left);
  let inside_first_word = js_true_false_word(inside_first);
  let inside_second_word = js_true_false_word(inside_second);
  let pair = app_code_operator_code(
    inside_first_word,
    inner_symbol,
    inside_second_word,
  );
  let bracketed = js_code_wrap_parenthesis(pair);
  let whole_left = app_code_operator_code(bracketed, outer_symbol, right_word);
  let whole_right = app_code_operator_code(left_word, outer_symbol, bracketed);
  let whole = ternary(brackets_left, whole_left, whole_right);
  let pair_ored = or(inside_first, inside_second);
  let pair_anded = and(inside_first, inside_second);
  let pair_value = ternary(inner_or, pair_ored, pair_anded);
  let pair_word = js_true_false_word(pair_value);
  let rest_left = app_code_operator_code(pair_word, outer_symbol, right_word);
  let rest_right = app_code_operator_code(left_word, outer_symbol, pair_word);
  let rest = ternary(brackets_left, rest_left, rest_right);
  let rest_ored = or(pair_value, outside);
  let rest_anded = and(pair_value, outside);
  let rest_value = ternary(inner_or, rest_anded, rest_ored);
  let rest_word = js_true_false_word(rest_value);
  app_code_lesson_expression_worked_card_two_operators(
    root,
    heading,
    whole,
    pair,
    pair_word,
    rest,
    rest_word,
  );
}
