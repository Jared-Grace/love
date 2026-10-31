import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path } from "./app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
export async function app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_growth_assert(
  known,
) {
  "Refuse to record an Urdu explanation quoting a Bible chapter with words it does not hold, that the record did not already hold.";
  "A quote arriving here was written today, and the chapter it names is one open command away. The remedy is to copy the words from that chapter of the Urdu Bible, not to let tonight's chapter widen the record on the way past.";
  arguments_assert(arguments, 1);
  let path = app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "recording these would bless quotes the reader cannot find - open the cited chapter of the Urdu Bible and copy its words, rather than widening the record",
  );
}
