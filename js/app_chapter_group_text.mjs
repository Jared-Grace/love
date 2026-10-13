import { arguments_assert } from "./arguments_assert.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { song_text_pronounced } from "./song_text_pronounced.mjs";
export function app_chapter_group_text(texts) {
  "$plain texts";
  "The verses of one group as a single line ready to be sung: one after another with one space between, no line breaks and no verse numbers, and every name a song generator says wrongly spelled the way it sounds.";
  "The respelling is the same one the command that copies a whole chapter for singing uses, so a group copied here and a chapter copied there say every name alike.";
  arguments_assert(arguments, 1);
  let joined = texts.join(" ");
  let line = whitespace_normalize(joined);
  let pronounced = song_text_pronounced(line);
  return pronounced;
}
