import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_split_marks_planned } from "./bible_glyph_chapters_split_marks_planned.mjs";
import { bible_glyph_chapters_decided_redraw } from "./bible_glyph_chapters_decided_redraw.mjs";
export async function bible_glyph_chapters_split_marks_redraw() {
  arguments_assert(arguments, 0);
  ("Redraws every mark the chapters still draw for a picture two roots used to share, wherever the split reading could say which picture each mark now is, and hands back the verses it could not.");
  ("UNLIKE THE SEAT SPLIT REDRAW, IT WRITES WHAT IS DECIDED WHILE SOME VERSES ARE NOT. There the refusal kept one word from being spelled two ways on one page. Here the old picture is not retired - it stays the picture of one of its two roots - so a verse left alone still draws a real mark, the same one it drew before, and the overdrawn gate keeps naming it. Each undecided entry is a verse and a picture; no decided entry shares both, so no verse is half redrawn for one picture.");
  let plan = await bible_glyph_chapters_split_marks_planned();
  let written = await bible_glyph_chapters_decided_redraw(plan.decided);
  let r = {
    chapters_written: written.chapters_written,
    redrawn: written.redrawn,
    undecided: plan.undecided,
  };
  return r;
}
