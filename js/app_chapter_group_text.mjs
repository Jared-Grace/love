import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_trim } from "./text_trim.mjs";
import { song_text_pronounced } from "./song_text_pronounced.mjs";
export function app_chapter_group_text(pieces) {
  "$plain pieces";
  "The verses of one group ready to be sung: written one after another with no verse numbers, each with the white space that stands before it in the printing, and every name a song generator says wrongly spelled the way it sounds.";
  "The white space is kept because it is how the passage is shaped - a line break, a line stepped in - and it is the same shaping the command that copies a whole chapter for singing gives. What stood before the first verse is let go, since nothing of this group comes before it.";
  "The respelling is the same one that command uses, so a group copied here and a chapter copied there say every name alike.";
  arguments_assert(arguments, 1);
  let joined = "";
  for (let piece of pieces) {
    let before = property_get(piece, "before");
    let text = property_get(piece, "text");
    joined = joined + before + text;
  }
  ("A blank line between stanzas is taken out, leaving the line break alone, because a song generator reads a blank line as the end of a part and the group is one part.");
  let unbroken = joined.replace(/\n[ \t]*(?=\n)/g, "");
  let trimmed = text_trim(unbroken);
  let pronounced = song_text_pronounced(trimmed);
  return pronounced;
}
