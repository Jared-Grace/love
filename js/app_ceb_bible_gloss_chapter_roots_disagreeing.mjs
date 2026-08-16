import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapter_roots_disagreeing } from "./gloss_chapter_roots_disagreeing.mjs";
import { list_size } from "./list_size.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function app_ceb_bible_gloss_chapter_roots_disagreeing(
  chapter_code,
) {
  "Every Cebuano explanation in one chapter that says nothing about the root binisaya.com takes its word back to.";
  "$plain chapter_code";
  "the code is a chapter's name, like PRO22, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "The whole-store sweep answers in hours and cannot be pointed at the one chapter that was just rewritten, so it is the wrong instrument for asking whether a rewrite improved anything. This asks the same question of a single chapter and comes back at once, which is what lets a before and an after be put side by side.";
  "The number of words consulted comes back beside the findings, because two counts taken from the same chapter only compare when the dictionary behind them was the same size both times - a gathering job running alongside grows it, and a fall in findings would then be partly its doing rather than the rewrite's.";
  let known = await binisaya_words_known();
  let list = object_property_names(known);
  let consulted = list_size(list);
  let disagreeing = await gloss_chapter_roots_disagreeing(
    chapter_code,
    app_ceb_bible_gloss_generate,
    known,
  );
  let count = list_size(disagreeing);
  let r = {
    chapter_code,
    consulted,
    count,
    disagreeing,
  };
  return r;
}
