import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { app_code_note_div_cycle_code } from "./app_code_note_div_cycle_code.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_code_lesson_cups_row_holding } from "./app_code_lesson_cups_row_holding.mjs";
export function app_code_lesson_cups_copy_story(
  box,
  cups_kept,
  cup_from,
  name_to,
  names,
) {
  arguments_assert(arguments, 5);
  ("the cup story of one name being given what another name holds: someone looks inside the cup it comes from, fetches more of the same, puts it in the other cup, and nothing leaves the first");
  ("Told once for every lesson that copies a name, so the lessons cannot tell it two ways. The story never pours: a cup cannot be poured into another without emptying, which is exactly the reading a learner has to be kept from, so someone looks, sees what is there, and fetches more of the same - which is what the code does.");
  ("It is said twice that the first cup lost nothing - once in what the person did, and once flatly afterwards. This is the one thing every learner gets wrong here, and it is worth the second line.");
  ("The cups standing before the one being filled are handed in, so the row drawn here is the row drawn above it with one cup changed, standing in the same place.");
  let word_from = list_first(cup_from);
  let name_from = list_last(cup_from);
  app_code_note_div_cycle_code(
    box,
    [
      "Suppose you asked someone to look inside cup ",
      name_from,
      ", and whatever was in cup ",
      name_from,
      ", also put some in cup ",
      name_to,
    ],
    names,
  );
  let found = list_join_empty([
    " has ",
    word_from,
    ", so suppose they found some more ",
    word_from,
    " and put those ",
    word_from,
    " in cup ",
  ]);
  app_code_note_div_cycle_code(box, ["Cup ", name_from, found, name_to], names);
  let cup_to = [word_from, name_to];
  let cups = list_concat(cups_kept, [cup_to]);
  app_code_lesson_cups_row_holding(box, cups, names);
  let both = list_join_empty([" both have ", word_from, " in them"]);
  app_code_note_div_cycle_code(
    box,
    ["So now cups ", name_from, " and ", name_to, both],
    names,
  );
  ("A colon and THE PERSON, not a comma and THEY. The half before the colon says what did not happen and the half after says what did, and a comma joins them as though the second were more of the first - the colon marks it as the correction it is. THEY, this far down the box, has the cups and the person all behind it to point at; the person is the one who did the fetching, and saying so costs two words and leaves nothing to work out.");
  let removed = list_join_empty(["No ", word_from, " were removed from cup "]);
  let other = list_join_empty([
    ": the person found some other ",
    word_from,
    " to put in cup ",
  ]);
  app_code_note_div_cycle_code(
    box,
    [removed, name_from, other, name_to],
    names,
  );
}
