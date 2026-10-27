import { file_read } from "./file_read.mjs";
import { equal } from "./equal.mjs";
import { psalms_title_passage } from "./psalms_title_passage.mjs";
import { not_equal } from "./not_equal.mjs";
import { psalms_passage_description } from "./psalms_passage_description.mjs";
export async function facebook_psalm_post_text(description_path) {
  "$plain description_path";
  "The words of a facebook post for one psalm lyric video: one line that says what it is, then the verses that are sung, read off the same description file the youtube upload used.";
  "★ THE FIRST LINE IS THE PASSAGE AND 'PUT TO MUSIC USING AI', NOTHING MORE. The human asked for one sentence that draws a reader in, 2026-10-18: 'Psalm 150 put to music'; on 2026-10-19 they asked that it say 'put to music using AI'. The passage is read off the description's title line, the words before ' (BSB)'.";
  "★ ONLY THE VERSES, NEVER THE PAINTINGS OR A LINK. The human wanted the lyrics as the text of the post. A verse line is a line that starts with its verse number and a space - the shape the description writer gives every verse - so the painting list above them is left behind.";
  let text = await file_read(description_path);
  let lines = text.split("\n");
  let title = lines[0];
  let passage = title.split(" (BSB)")[0];
  function lambda(line) {
    let r_inner = /^\d+ /.test(line);
    return r_inner;
  }
  let verses = lines.filter(lambda);
  ("★ A DESCRIPTION WITH NO VERSES FALLS BACK TO THE BIBLE ITSELF. The Psalm 145 descriptions, written before the verses were added, list only the paintings; with nothing to fall back on, every run threw on the first of them and nothing at all was posted from 2026-10-26 7 PM. The verses are the same Berean words the description writer would have put there, laid out by the same writer, so the post reads as if the description had held them. A half verse such as 13a is given whole, the rule that writer already keeps.");
  if (equal(verses.length, 0)) {
    let named = psalms_title_passage(passage);
    let written = null;
    if (not_equal(named, null)) {
      written = await psalms_passage_description(named);
    }
    if (equal(written, null)) {
      throw new Error("no verse lines in " + description_path);
    }
    verses = written.split("\n").filter(lambda);
  }
  let r = [passage + " put to music using AI", ""].concat(verses).join("\n");
  return r;
}
