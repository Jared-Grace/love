import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_unscramble_codes } from "./app_code_lessons_unscramble_codes.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { list_repeated } from "./list_repeated.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_quiz_unscramble_tiles_hidden(rounds) {
  "$plain rounds";
  arguments_assert(arguments, 1);
  ("Every unscramble whose row of buttons cannot say how long its answer is - the line uses some piece more than once, and the row holds one button per DIFFERENT piece, so the count is nowhere on the screen.");
  ("The quiz builds its row from the line's pieces named once each, which is right for a row you tap out of rather than a set of tiles you use up. What it costs is the one thing an unscramble normally gives away: with real tiles, how many of each there are IS the answer's length, and a learner who has laid them all out is finished. Named once each, three buttons stand for a line of five pieces and nothing on the screen separates that from a line of three.");
  ("It matters because the backwards direction shows the learner a VALUE and not a line. Given eighteen and the buttons 3, * and 2, the line 3 * 3 * 2 and the line 3 ** 2 * 2 are both eighteen and both look spellable, and only one of them is the question. The learner picks between them by guessing, and the guess that loses is marked wrong.");
  ("A line that spells every piece once is not reported. Its row already holds exactly its own pieces, so laying them all out is the answer and there is nothing hidden.");
  let asked = app_code_lessons_unscramble_codes(rounds);
  let found = [];
  for (let item of asked) {
    let code = property_get(item, "code");
    let lesson = property_get(item, "lesson");
    let tokens = app_code_quiz_tokens(code);
    let repeated = list_repeated(tokens);
    let b = list_empty_is(repeated);
    let hides = not(b);
    if (hides) {
      let pieces = list_size(tokens);
      let list = list_unique(tokens);
      let buttons = list_size(list);
      list_add(found, {
        lesson,
        code,
        pieces,
        buttons,
        repeated,
      });
    }
  }
  let walked = list_size(asked);
  let r = {
    walked,
    found,
  };
  return r;
}
