import { app_code_lessons_unscramble_codes } from "./app_code_lessons_unscramble_codes.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse_try } from "./js_parse_try.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_lesson_quiz_token_select_variations } from "./app_code_lesson_quiz_token_select_variations.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_quiz_unscramble_unreadable_accepted(rounds) {
  "Every unscramble that will accept an answer that is not a line of code at all - one the language cannot even read - though the question it was asked about reads fine.";
  "Paid for by a real lesson: let equal = a === b; accepted let equal === a = b; because the dealing of signs counted the assignment as a sign and swapped it with the comparison. Nothing that reads meaning could object, because only expressions are asked their meaning and a let line is a statement; so the one question every accepted answer must pass - does it read at all - is asked here of every line, statement or not.";
  "A question that does not read is passed over rather than reported. Its whole pool fails for the question's sake, which says nothing about the pool.";
  let asked = app_code_lessons_unscramble_codes(rounds);
  let found = [];
  let orderings = 0;
  for (let item of asked) {
    let code = property_get(item, "code");
    let lesson = property_get(item, "lesson");
    let own = js_parse_try(code);
    if (null_is(own)) {
      continue;
    }
    let variations = app_code_lesson_quiz_token_select_variations(code);
    for (let variation of variations) {
      orderings = orderings + 1;
      let accepted = list_join_space(variation);
      let read = js_parse_try(accepted);
      if (null_is(read)) {
        list_add(found, {
          lesson,
          code,
          accepted,
        });
      }
    }
  }
  let walked = list_size(asked);
  let r = {
    walked,
    orderings,
    found,
  };
  return r;
}
