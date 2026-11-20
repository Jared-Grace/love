import { app_learn_en_gloss_authored_get } from "./app_learn_en_gloss_authored_get.mjs";
import { property_get } from "./property_get.mjs";
import { app_learn_en_gloss_passages_read } from "./app_learn_en_gloss_passages_read.mjs";
import { gloss_chapters_write_coverage_generic } from "./gloss_chapters_write_coverage_generic.mjs";
export async function app_learn_en_gloss_write_coverage_all(language_code) {
  "How many chapters one language's gloss store holds, and every one of them still carrying passages nobody has explained yet, named by the verses those cover.";
  "Read it before uploading, because uploading is what puts a chapter in front of a reader: a chapter listed as waiting has holes.";
  "$plain language_code";
  "the code is a language's short name, like tgl or es. It picks an entry from a fixed list and nothing that runs.";
  let store = app_learn_en_gloss_authored_get(language_code);
  let fn = property_get(store, "generate");
  let passages_read = app_learn_en_gloss_passages_read(language_code);
  let r = await gloss_chapters_write_coverage_generic(fn, passages_read);
  return r;
}
