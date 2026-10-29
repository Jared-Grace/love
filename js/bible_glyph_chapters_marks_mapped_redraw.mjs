import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_marks_mapped_planned } from "./bible_glyph_chapters_marks_mapped_planned.mjs";
import { bible_glyph_chapters_decided_redraw } from "./bible_glyph_chapters_decided_redraw.mjs";
export async function bible_glyph_chapters_marks_mapped_redraw(
  froms_comma,
  tos_comma,
  testament_name,
) {
  "$plain froms_comma";
  "the froms are the pictures an older root table seated, joined by commas, spelled as the character table spells them. They name pictures to look for and nothing that runs.";
  "$plain tos_comma";
  "the tos are the pictures the table seats now for the words that wore each of the froms, in the same order, joined by commas. They name pictures and nothing that runs.";
  "$plain testament_name";
  "the name is a testament's own, spelled as the book divisions spell it, like New Testament. It names which chapters to walk and nothing that runs.";
  "Moves the old pictures of every page the mapped planner found drawn under an older table onto the pictures their words wear now, and hands back the verses it left alone.";
  "IT WRITES THE DECIDED VERSES EVEN WHILE OTHERS ARE UNDECIDED, for the reason the history-told seat redraw gives: a verse left alone still disagrees with the table, so the overdrawn walk names it, and it comes back here too.";
  arguments_assert(arguments, 3);
  let plan = await bible_glyph_chapters_marks_mapped_planned(
    froms_comma,
    tos_comma,
    testament_name,
  );
  let written = await bible_glyph_chapters_decided_redraw(plan.decided);
  let r = {
    testament_name,
    chapters_written: written.chapters_written,
    redrawn: written.redrawn,
    undecided: plan.undecided.length,
  };
  return r;
}
