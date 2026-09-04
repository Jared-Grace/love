import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { gloss_chapter_affix_kinds_wrong } from "./gloss_chapter_affix_kinds_wrong.mjs";
import { gloss_affix_kinds_drafts_file_path } from "./gloss_affix_kinds_drafts_file_path.mjs";
import { file_read_json_exists_ensure } from "./file_read_json_exists_ensure.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_affix_kinds_repair_explain } from "./gloss_affix_kinds_repair_explain.mjs";
import { property_set } from "./property_set.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_affix_kinds_chapter_drafts_write_generic(
  fn,
  chapter_code,
) {
  "One chapter's wrong affix claims written again by the machine and left in the drafts file to be read, answered for by which words were newly written and which were already waiting there.";
  "$plain chapter_code";
  "the code is a chapter's name, like PSA023, chosen from the Bible's own book and chapter numbering. It names a store entry and nothing that runs.";
  "It asks the chapter what is wrong rather than being handed a list, so it cannot drift from what the check actually finds, and a chapter repaired in the meantime simply draws nothing.";
  "A word already standing in the drafts file is left exactly as it is. That is what lets a person edit a draft in place and re-run this over the same chapter without their sentence being thrown away - the paid call would have been free either way, since the answers are kept by the words that were asked, so the only thing this protects is the reading.";
  "One chapter at a time and not the whole store, because the store is a thousand of these and the service is paid for by the word. Reading one chapter's worth decides whether the next thousand are worth buying, and that decision cannot be made after the money is spent.";
  let known = await binisaya_words_known();
  let found = await gloss_chapter_affix_kinds_wrong(chapter_code, fn, known);
  let path = gloss_affix_kinds_drafts_file_path(fn);
  let drafts = await file_read_json_exists_ensure(path);
  let held = property_get_or_null(drafts, chapter_code);
  let chapter_drafts = held;
  if (null_is(held)) {
    chapter_drafts = {};
  }
  let written = [];
  let waiting = [];
  async function finding_draft(finding) {
    let word = property_get(finding, "word");
    let standing = property_get_or_null(chapter_drafts, word);
    if (null_is(standing)) {
      let root = property_get(finding, "root");
      let affixes = property_get(finding, "affixes");
      let explain = property_get(finding, "explain");
      let drafted = await gloss_affix_kinds_repair_explain(
        word,
        root,
        affixes,
        explain,
      );
      property_set(chapter_drafts, word, drafted);
      list_add(written, word);
      return;
    }
    list_add(waiting, word);
  }
  await each_async(found, finding_draft);
  property_set(drafts, chapter_code, chapter_drafts);
  await file_overwrite_json(path, drafts);
  let wrong = list_size(found);
  let r = {
    chapter_code,
    path,
    wrong,
    written,
    waiting,
  };
  return r;
}
