import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { property_set } from "./property_set.mjs";
import { text_index_of_skip } from "./text_index_of_skip.mjs";
import { text_split_first } from "./text_split_first.mjs";
export function g_arc_review_line_apply_turn_start(marks, state, line) {
  "A fresh turn put on the conversation being read and made the one the lines after it are read into, for the line of a review page that opens a turn by numbering it.";
  "A TURN IS MARKED BY BEGINNING WITH A DIGIT, which is the one mark on the page that is not a word - a reviewer numbers the turns the way anybody numbers anything, and a page that had to spell the mark out would read as a machine's page rather than a person's.";
  "THE NUMBER AND THE WORDS BEFORE THE ANSWER COME OFF THE SAME LINE, split at the same mark, so the line cannot be read one way for one of them and another way for the other.";
  "THE THREE FIELDS ARE MADE EMPTY RATHER THAN LEFT OUT, because the lines that fill them are optional and a turn missing a word altogether reads back as a different shape from a turn whose word is blank.";
  "THE OPENER IS TAKEN FROM THE RUNNING STATE rather than from this line: an opener is written once and belongs to every turn under it, so each turn keeps its own copy of what it was opened with and a conversation split later still says how each half began.";
  arguments_assert(arguments, 3);
  let item = property_get(marks, "number");
  let before = text_index_of_skip(line, item);
  let number = text_split_first(line, item);
  property_set(state, "number", number);
  let opener = property_get(state, "opener");
  let turn = {
    opener,
    before,
    reference: "",
    after: "",
    believes: "",
  };
  let turns = property_path_get_2(state, "conversation", "turns");
  list_add(turns, turn);
  property_set(state, "turn", turn);
}
