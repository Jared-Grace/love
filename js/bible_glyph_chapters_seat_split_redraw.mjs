import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { bible_glyph_chapters_seat_split_planned } from "./bible_glyph_chapters_seat_split_planned.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
import { bible_glyph_chapters_decided_redraw } from "./bible_glyph_chapters_decided_redraw.mjs";
export async function bible_glyph_chapters_seat_split_redraw(glyphs_comma) {
  "$plain glyphs_comma";
  "the glyphs are the bare pictures whose words were just moved onto groups, joined by commas, spelled as the character table spells them. They name pictures to look for and nothing that runs.";
  "Redraws every bare mark the written chapters still carry for a picture whose words were just moved onto groups of their own, so each mark on the page becomes the mark the table now seats under it.";
  "IT REFUSES TO WRITE ANYTHING WHILE ANY VERSE OF THOSE PICTURES IS UNDECIDED, for the reason the collision redraw gives: a page half redrawn spells one word two ways with nothing to say which lines were reached. The undecided verses come back in the refusal, so the next step is to read them, not to rerun this.";
  "The page itself is rewritten by the decided writer, which says how it reads the shorthand and why it counts before it writes.";
  arguments_assert(arguments, 1);
  let glyphs = text_split_comma(glyphs_comma);
  let plan = await bible_glyph_chapters_seat_split_planned(glyphs);
  let undecided = plan.undecided;
  let b = equal(undecided.length, 0);
  assert_json(b, {
    undecided: undecided.length,
    first: undecided.slice(0, 10),
    hint: "some verses cannot say which word a bare mark was drawn for, so nothing is redrawn - read those verses, or keep that picture unsplit",
  });
  let written = await bible_glyph_chapters_decided_redraw(plan.decided);
  let r = {
    glyphs,
    chapters_written: written.chapters_written,
    redrawn: written.redrawn,
  };
  return r;
}
