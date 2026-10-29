import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_seat_split_planned_was } from "./bible_glyph_chapters_seat_split_planned_was.mjs";
import { bible_glyph_chapters_seat_split_decided_write } from "./bible_glyph_chapters_seat_split_decided_write.mjs";
export async function bible_glyph_chapters_seat_split_redraw_was(glyph, was) {
  "$plain glyph";
  "the glyph is the bare picture a chapter page draws too often, spelled as the character table spells it. It names a picture to look for and nothing that runs.";
  "$plain was";
  "the was is the group the table now seats for the words that wore the bare picture when the pages were drawn, spelled as the character table spells it. It names a picture and nothing that runs.";
  "Redraws the bare marks of every verse the history-told planner decided as the group the picture used to stand for, and hands back the verses it left alone.";
  "IT WRITES THE DECIDED VERSES EVEN WHILE OTHERS ARE UNDECIDED, unlike the plain split redraw. That refusal guards a page half redrawn with nothing to say which lines were reached; here every verse left alone still draws more of the bare picture than it seats, so the overdrawn walk names each one, and they come back here too.";
  arguments_assert(arguments, 2);
  let plan = await bible_glyph_chapters_seat_split_planned_was(glyph, was);
  let written = await bible_glyph_chapters_seat_split_decided_write(
    plan.decided,
  );
  let r = {
    glyph,
    was,
    chapters_written: written.chapters_written,
    redrawn: written.redrawn,
    undecided: plan.undecided,
  };
  return r;
}
