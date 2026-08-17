import { app_code_lesson_statement_name_two_word } from "./app_code_lesson_statement_name_two_word.mjs";
import { app_code_lesson_statement_name_value_word } from "./app_code_lesson_statement_name_value_word.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_grape } from "./emoji_grape.mjs";
import { emoji_olive } from "./emoji_olive.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_fruit_emoji(word) {
  arguments_assert(arguments, 1);
  ("the picture drawn inside a cup, given the word the screen writes out for what is in it");
  (
    "The picture and the word are one fact, and every cup screen had them as two: it fetched the word from one place and the picture from another, and nothing anywhere said which picture went with which word. A screen could draw olives and write out grapes and no gate would have anything to say about it."
  );
  (
    "Asked for by the word rather than the other way round, because the word is the thing the lesson is about - it is what the code puts under the name and what comes out at the end - and the picture is how it is shown."
  );
  (
    "A word nothing is drawn for stops the screen rather than drawing nothing. There is no cup here worth showing empty: an empty cup already means something on these screens, and a missing picture would say it by accident."
  );
  let grapes = app_code_lesson_statement_name_value_word();
  let olives = app_code_lesson_statement_name_two_word();
  let fruits = {};
  fruits[grapes] = emoji_grape();
  fruits[olives] = emoji_olive();
  let emoji = property_get(fruits, word);
  return emoji;
}
