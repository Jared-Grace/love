import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { assert_json } from "./assert_json.mjs";
import { purge_words_allowed } from "./purge_words_allowed.mjs";
import { list_size } from "./list_size.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export async function purge_words_rows_words(rows_text) {
  "$plain rows_text";
  "Turns rows named by their number into the words standing at those rows of the list kept outside every repository - the one step between what a person may safely write down and what a rewrite has to be handed.";
  "★ ROWS ARE NAMED AND WORDS ARE NOT, BECAUSE A COMMAND LINE IS AMONG THE MOST TRAVELLED TEXT THERE IS. It is read back by whoever looks at the history of the conversation, it is written into a shell's own record of what was run, and it is what a commit message would be built from. A word that has to be taken out of a public past must not be typed into any of those on the way to taking it out. A row number is a reference: it says which word without being it, and it means nothing at all to anybody without the list.";
  "★ THE LOOKUP IS SPELLED ONCE BECAUSE EVERY CALLER OF IT IS A REWRITE. Both the taking-out and the exchanging commands need exactly this - a row checked to be a whole number, checked to be inside the list, and turned into the word - and a second copy would be a second place for a bounds check to be softened. Off by one here is not a wrong answer: it is a rewrite of a past aimed at the wrong word.";
  ("The rows are counted from zero, the same way ",
    fn_name("purge_words_live_offenders"),
    " reports them, so what a sweep complains about and what a rewrite is asked for are the same numbers with nothing to translate between them.");
  ("A row outside the list is refused rather than passed on as nothing. The list can be shorter than the caller believes, and a missing word would leave the rewrite quietly doing less than it was asked while every count it reports still agrees with itself.");
  arguments_assert(arguments, 1);
  let asked = text_split_comma(rows_text);
  let any = list_empty_not_is(asked);
  assert_json(any, {
    hint: "no rows were named - would you like to pass them as one comma-joined word, counting from zero?",
    rows_text,
  });
  let rows = await purge_words_allowed();
  let walked = list_size(rows);
  let words = [];
  for (let spelling of asked) {
    let at = number_from_text(spelling);
    let sane = less_than(-1, at);
    assert_json(sane, {
      hint: "a row was named that comes before the start of the list - rows are counted from zero",
      spelling,
      walked,
    });
    let inside = less_than(at, walked);
    assert_json(inside, {
      hint: "a row was named that comes after the end of the list - rows are counted from zero",
      spelling,
      walked,
    });
    let row = rows[at];
    list_add(words, row.word);
  }
  return words;
}
