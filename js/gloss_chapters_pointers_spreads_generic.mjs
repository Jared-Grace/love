import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_passages_collect_all } from "./gloss_chapter_passages_collect_all.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passages_pointers_spreads } from "./gloss_passages_pointers_spreads.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_pointers_spreads_generic(
  fn,
  lambda$pointer_is,
) {
  "Across a whole gloss store, how often an address that catches several explanations is failing in each of the ways it can fail.";
  "It reads every chapter the store holds and writes nothing back.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let read = await gloss_chapter_passages_collect_all(chapter_code, fn);
    let passages = property_get(read, "collected");
    let spreads = gloss_passages_pointers_spreads(passages, lambda$pointer_is);
    return spreads;
  }
  let nested = await list_map_async(chapter_codes, chapter_read);
  let spreads = list_flat(nested);
  let counts = list_tally(spreads);
  let r = {
    chapters: list_size(chapter_codes),
    refused: list_size(spreads),
    counts,
  };
  return r;
}
