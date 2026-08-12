import { bible_interlinear_json_path } from "./bible_interlinear_json_path.mjs";
import { bible_interlinear_original_key } from "./bible_interlinear_original_key.mjs";
import { bible_interlinear_original_marked_key } from "./bible_interlinear_original_marked_key.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { text_trim } from "./text_trim.mjs";
("Which editorial sigla actually occur in the interlinear's marked base-text column, and");
("how many words each one covers - counted off the data rather than read off the header.");
("The header names seven editions, but a header is a claim about the column and the");
("counts are the column itself; a siglum that never occurs would have us writing a filter");
("for nothing, and one that occurs but is unnamed would have us shipping it unnoticed.");
("Also reports every wrapping character seen, so an unlisted siglum cannot hide, and the");
("count of rows where removing the wrappers does NOT reproduce the stripped twin - that");
("number must be small, or the two columns are not the same text and no filter is valid.");
export async function bible_interlinear_sigla_report() {
  let path = bible_interlinear_json_path();
  let rows = await file_read_json(path);
  let marked_key = bible_interlinear_original_marked_key();
  let plain_key = bible_interlinear_original_key();
  let openers = "{⧼(〈[‹";
  let counts = {};
  let samples = {};
  let characters = {};
  let words_total = 0;
  let mismatched = 0;
  let mismatch_samples = [];
  let index = 0;
  while (index < rows.length) {
    let row = rows[index];
    index = index + 1;
    let marked_value = row[marked_key];
    let marked =
      marked_value === undefined || marked_value === null
        ? ""
        : text_trim(String(marked_value));
    if (marked === "") {
      continue;
    }
    words_total = words_total + 1;
    let bare = marked.replace(/[{}⧼⧽()〈〉\[\]‹›]/g, "");
    let plain_value = row[plain_key];
    let plain =
      plain_value === undefined || plain_value === null
        ? ""
        : text_trim(String(plain_value));
    if (bare !== plain) {
      mismatched = mismatched + 1;
      if (mismatch_samples.length < 8) {
        mismatch_samples.push({ marked, bare, plain });
      }
    }
    let position = 0;
    while (position < marked.length) {
      let character = marked[position];
      position = position + 1;
      if (openers.includes(character)) {
        characters[character] = (characters[character] || 0) + 1;
      }
    }
    let head = marked.slice(0, 2);
    let kind = head === "[[" ? "[[ECM]]" : openers.includes(marked[0]) ? marked[0] : "base";
    counts[kind] = (counts[kind] || 0) + 1;
    let seen = samples[kind] || [];
    if (seen.length < 4) {
      seen.push(marked);
      samples[kind] = seen;
    }
  }
  let report = {
    words_total,
    counts,
    samples,
    opening_characters: characters,
    mismatched,
    mismatch_samples,
  };
  return report;
}
