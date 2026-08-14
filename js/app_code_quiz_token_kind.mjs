import { js_keywords_true_false } from "./js_keywords_true_false.mjs";
import { list_all } from "./list_all.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
export function app_code_quiz_token_kind(token) {
  "What a tile of an unscramble is, as far as swapping it with another tile goes: a value, a sign, or something that holds its place.";
  "Two tiles of one kind can stand where the other stood and the line still reads. A number and a true both stand for something, so either can go where the other was; a plus and an equals both stand between two things, so likewise. A bracket, a comma, a semicolon, a dot and a name are none of that - they are the shape the line is written in, and moving one makes no line at all - so they are answered as holding their place and are never dealt anywhere else.";
  "The signs are asked by their characters rather than listed, because the list would be this language's own and would go out of step the day a sign is met that nobody wrote down here. A tile made of nothing but the characters signs are made of is a sign.";
  let sign_characters = "+-*/%<>=!&|";
  let value = "value";
  let sign = "sign";
  let placed = "placed";
  let token_digits = text_digits_is(token);
  if (token_digits) {
    return value;
  }
  let words = js_keywords_true_false();
  let boolean_word = list_includes(words, token);
  if (boolean_word) {
    return value;
  }
  let characters = text_split_empty(token);
  let empty = list_empty_is(characters);
  if (empty) {
    return placed;
  }
  function sign_character_is(character) {
    let hit = text_includes(sign_characters, character);
    return hit;
  }
  let all = list_all(characters, sign_character_is);
  if (all) {
    return sign;
  }
  return placed;
}
