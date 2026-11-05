import { json_to } from "./json_to.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_bible_verses } from "./reply_bible_verses.mjs";
import { reply_bible_references_closed } from "./reply_bible_references_closed.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_last } from "./reply_last.mjs";
import { reply_bible_verse_references_written } from "./reply_bible_verse_references_written.mjs";
import { reply_bible_verse_wordings } from "./reply_bible_verse_wordings.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
export async function reply_bible_verses_wordings_gate_run() {
  "Gate: every wording of every verse with a rule, in every Bible on this disk, gets an answer. Rewriting how the rules are built must never lose one, and six made-up cases could not show that.";
  let item = reply_bible_verses();
  let room = reply_once_or_more(item);
  let last = reply_last();
  let rule2 = reply_sequence([room, last]);
  let rule = reply_bible_references_closed(rule2);
  let references = await reply_bible_verse_references_written();
  let checked = 0;
  let failures = [];
  for (let reference of references) {
    let wordings = await reply_bible_verse_wordings(
      reference.chapter_code,
      reference.verse_number,
    );
    for (let wording of wordings) {
      checked = checked + 1;
      let got = await reply_attempt(wording, rule);
      if (not(got.answered)) {
        failures.push({
          reference,
          wording,
        });
      }
    }
  }
  if (greater_than(failures.length, 0)) {
    let json = json_to(failures);
    throw new Error(json);
  }
  let r = {
    checked,
  };
  return r;
}
