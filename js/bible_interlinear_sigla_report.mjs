import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { bible_interlinear_json_path } from "./bible_interlinear_json_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { bible_interlinear_original_keys_find } from "./bible_interlinear_original_keys_find.mjs";
import { text_trim } from "./text_trim.mjs";
import { bible_interlinear_row_marked_text } from "./bible_interlinear_row_marked_text.mjs";
import { bible_interlinear_word_marks_text } from "./bible_interlinear_word_marks_text.mjs";
import { text_codepoints_name } from "./text_codepoints_name.mjs";
export async function bible_interlinear_sigla_report() {
  "Which editorial marks actually occur in the interlinear's marked base-text column, and";
  "how many words each one covers - counted off the data rather than read off the header.";
  "The header names seven editions, but a header is a claim about the column and the";
  "counts are the column itself; a mark that never occurs would have us writing a filter";
  "for nothing, and one that occurs but is unnamed would have us shipping it unnoticed.";
  "That found a guillemet and a trailing asterisk the header never mentions, and counted";
  "NE's chevrons as never occurring at all.";
  "Each sample carries the verse it sits in. The readable reference is stamped only on a";
  "verse's FIRST word, so it is carried forward down the rows rather than read per word.";
  "A mark with no reference cannot be looked up, and a mark nobody can look up cannot be";
  "classified - which is the whole job here, since two of the marks are undocumented, and";
  "looking them up is what showed the guillemets to be wrapping words the base already has.";
  let path = bible_interlinear_json_path();
  let rows = await file_read_json(path);
  let keys = bible_interlinear_original_keys_find(rows);
  let counts = {};
  let samples = {};
  let words_total = 0;
  let words_marked = 0;
  function text_of(row, key) {
    let message = bible_interlinear_row_marked_text(row, key);
    let trimmed = text_trim(message);
    return trimmed;
  }
  let reference = "";
  function row_read(row) {
    let stamped = row["VerseId"];
    if (stamped) {
      reference = String(stamped);
    }
    let marked = text_of(row, keys.marked);
    if (equal(marked, "")) {
      return;
    }
    words_total = words_total + 1;
    let mark = bible_interlinear_word_marks_text(marked);
    if (equal(mark, "")) {
      return;
    }
    words_marked = words_marked + 1;
    let codepoints = text_codepoints_name(mark);
    counts[codepoints] = (counts[codepoints] || 0) + 1;
    let seen = samples[codepoints] || [];
    if (less_than(seen.length, 3)) {
      seen.push({
        reference,
        marked,
        plain: text_of(row, keys.plain),
        mark,
      });
      samples[codepoints] = seen;
    }
  }
  rows.forEach(row_read);
  let report = {
    keys,
    words_total,
    words_marked,
    counts,
    samples,
  };
  return report;
}
