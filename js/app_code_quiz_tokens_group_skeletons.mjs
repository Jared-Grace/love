import { arguments_assert } from "./arguments_assert.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_quiz_token_kind } from "./app_code_quiz_token_kind.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_pop } from "./list_pop.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function app_code_quiz_tokens_group_skeletons(tokens) {
  arguments_assert(arguments, 1);
  ("What a row of tiles has been grouped into: one entry for every pair of brackets and every pair of quotes in it, saying what kind of thing each pair encloses. The entries come back sorted, because which pair is written first is not part of the grouping.");
  ('A TREE CANNOT ANSWER THIS, WHICH IS WHY IT IS ASKED OF THE TILES. Parsing a line throws its brackets away - (true && true) || false and true && true || false give the identical tree, and so does true && ( true ) || false. So a reader that compares trees calls all three the same line, and a learner who put the brackets round one value instead of round the and is told they matched a shape they did not write. The same goes for quotes: "world" === "shall" and " world shall " === " " are both one string compared to another, and both come out false.');
  ("An entry says the kinds of the tiles inside a pair rather than the tiles themselves, so that handing the values round inside a bracket keeps the grouping while moving the bracket itself does not. That is the line the two roads of the pool already draw between them.");
  ("Brackets are followed with a stack so a pair inside another pair is its own entry; quotes are followed by turning over, because a quote is its own opener and closer and cannot nest. A closing tile with nothing open is ignored rather than refused - a row like that will not parse, and the reader that parses is asked before this one is.");
  let opening = "(";
  let closing = ")";
  let quote = '"';
  let opened_at = [];
  let quote_open = false;
  let quote_at = 0;
  let skeletons = [];
  function record(mark, from, to) {
    let inside = list_slice(tokens, from, to);
    let kinds = list_map(inside, app_code_quiz_token_kind);
    let written = list_join_space(kinds);
    let entry = text_combine_multiple([mark, " ", written]);
    list_add(skeletons, entry);
  }
  let place = 0;
  for (let token of tokens) {
    let after = place + 1;
    let opens = equal(token, opening);
    if (opens) {
      list_add(opened_at, after);
    }
    let closes = equal(token, closing);
    if (closes) {
      let b = list_empty_is(opened_at);
      let waiting = not(b);
      if (waiting) {
        let from = list_pop(opened_at);
        record(opening, from, place);
      }
    }
    let quoted = equal(token, quote);
    if (quoted) {
      if (quote_open) {
        record(quote, quote_at, place);
        quote_open = false;
      } else {
        quote_open = true;
        quote_at = after;
      }
    }
    place = after;
  }
  let sorted = list_sort_text(skeletons);
  return sorted;
}
