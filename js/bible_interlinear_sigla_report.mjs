import { bible_interlinear_original_keys_find } from "./bible_interlinear_original_keys_find.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { bible_interlinear_json_path } from "./bible_interlinear_json_path.mjs";
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
  let keys = bible_interlinear_original_keys_find(rows);
  let marked_key = keys.marked;
  let plain_key = keys.plain;
  let openers = "{⧼(〈[‹";
  let counts = {};
  let samples = {};
  let characters = {};
  let words_total = 0;
  let mismatched = 0;
  let mismatch_samples = [];
  let index = 0;
  while (less_than(index, rows.length)) {
    let row = rows[index];
    index = index + 1;
    let marked_value = row[marked_key];
    let message = String(marked_value);
    let marked =
      equal(marked_value, undefined) || equal(marked_value, null)
        ? ""
        : text_trim(message);
    if (equal(marked, "")) {
      continue;
    }
    words_total = words_total + 1;
    let bare = marked.replace(/[{}⧼⧽()〈〉\[\]‹›]/g, "");
    let plain_value = row[plain_key];
    let message2 = String(plain_value);
    let plain =
      equal(plain_value, undefined) || equal(plain_value, null)
        ? ""
        : text_trim(message2);
    if (not_equal(bare, plain)) {
      mismatched = mismatched + 1;
      if (less_than(mismatch_samples.length, 8)) {
        mismatch_samples.push({
          marked,
          bare,
          plain,
        });
      }
    }
    let position = 0;
    while (less_than(position, marked.length)) {
      let character = marked[position];
      position = position + 1;
      if (openers.includes(character)) {
        characters[character] = (characters[character] || 0) + 1;
      }
    }
    let head = marked.slice(0, 2);
    let kind = equal(head, "[[")
      ? "[[ECM]]"
      : openers.includes(marked[0])
        ? marked[0]
        : "base";
    counts[kind] = (counts[kind] || 0) + 1;
    let seen = samples[kind] || [];
    if (less_than(seen.length, 4)) {
      seen.push(marked);
      samples[kind] = seen;
    }
  }
  let report = {
    keys,
    words_total,
    counts,
    samples,
    opening_characters: characters,
    mismatched,
    mismatch_samples,
  };
  return report;
}
