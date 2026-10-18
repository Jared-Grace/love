import { equal } from "./equal.mjs";
import { file_read } from "./file_read.mjs";
export async function facebook_psalm_post_text(description_path) {
  "$plain description_path";
  "The words of a facebook post for one psalm lyric video: one line that says what it is, then the verses that are sung, read off the same description file the youtube upload used.";
  "★ THE FIRST LINE IS THE PASSAGE AND 'PUT TO MUSIC', NOTHING MORE. The human asked for one sentence that draws a reader in, 2026-10-18: 'Psalm 150 put to music'. The passage is read off the description's title line, the words before ' (BSB)'.";
  "★ ONLY THE VERSES, NEVER THE PAINTINGS OR A LINK. The human wanted the lyrics as the text of the post. A verse line is a line that starts with its verse number and a space - the shape the description writer gives every verse - so the painting list above them is left behind.";
  let text = await file_read(description_path);
  let lines = text.split("\n");
  let title = lines[0];
  let passage = title.split(" (BSB)")[0];
  function lambda(line) {
    let r = /^\d+ /.test(line);
    return r;
  }
  let verses = lines.filter(lambda);
  if (equal(verses.length, 0)) {
    throw new Error("no verse lines in " + description_path);
  }
  let r = [passage + " put to music", ""].concat(verses).join("\n");
  return r;
}
