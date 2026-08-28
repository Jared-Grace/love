import { property_list_empty_is } from "./property_list_empty_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_text_line_code_is } from "./app_code_lesson_text_line_code_is.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_text_split_at_operators } from "./app_code_lesson_text_split_at_operators.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { app_code_lesson_value_words } from "./app_code_lesson_value_words.mjs";
import { text_replace_multiple_to_space } from "./text_replace_multiple_to_space.mjs";
import { text_words } from "./text_words.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { list_add_unique } from "./list_add_unique.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_alphabet_includes } from "./text_alphabet_includes.mjs";
import { and } from "./and.mjs";
export function app_code_lesson_text_line_operand_kinds(text) {
  arguments_assert(arguments, 1);
  ("the kinds of thing a line of code puts on either side of its operators: a number, a written true or false, or a name. Nothing comes back for a piece that is not showing a line of code.");
  ("A kind is a third thing that can go unshown, apart from the brackets and apart from which end a value sits at. 2 !== 2 === false compares a number to a number and then that answer to a value; divisor === 0 compares a name to a number. A lesson that only ever showed numbers and then asks about a name has told nobody what a name does there, and neither of the other two marks can see it.");
  ("One operator is enough. A kind is a property of an operand rather than of the order the operators are worked in, so a single comparison already has two of them to be right or wrong about.");
  ("Brackets are read as spaces before the words are taken, so the call in Math.floor(14 / 4) gives up its name and its number instead of one word that is neither. Every word of an operand is read rather than the whole of it, because that is what a bracket leaves behind.");
  ("A name has to start with a letter. Anything else is left unnamed rather than called a name, which keeps a stray piece of punctuation - an operator this does not know about, most of all - from being reported as something the lesson teaches.");
  let code_is = app_code_lesson_text_line_code_is(text);
  let sentence = not(code_is);
  if (sentence) {
    let r = [];
    return r;
  }
  let split = app_code_lesson_text_split_at_operators(text);
  let none = property_list_empty_is(split, "operators");
  if (none) {
    let r2 = [];
    return r2;
  }
  let left = js_code_parenthesis_left();
  let right = js_code_parenthesis_right();
  let brackets = [left, right];
  let values = app_code_lesson_value_words();
  let operands = property_get(split, "operands");
  let found = [];
  for (let operand of operands) {
    let spaced = text_replace_multiple_to_space(operand, brackets);
    let words = text_words(spaced);
    for (let word of words) {
      let digits_is = text_digits_is(word);
      if (digits_is) {
        list_add_unique(found, "operand_number");
      }
      let value_is = list_includes(values, word);
      if (value_is) {
        list_add_unique(found, "operand_value");
      }
      let first = text_slice(word, 0, 1);
      let letter_is = text_alphabet_includes(first);
      let right2 = not(value_is);
      let named = and(letter_is, right2);
      if (named) {
        list_add_unique(found, "operand_name");
      }
    }
  }
  return found;
}
