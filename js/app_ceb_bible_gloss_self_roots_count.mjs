import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_chapters_self_roots } from "./gloss_chapters_self_roots.mjs";
import { list_size } from "./list_size.mjs";
import { list_single_property } from "./list_single_property.mjs";
import { list_flat } from "./list_flat.mjs";
export async function app_ceb_bible_gloss_self_roots_count() {
  "How many Cebuano explanations across the whole store give their own word as the root it is built from, and how many chapters they are spread over.";
  "The count is what says whether this is worth acting on. A handful over two hundred chapters is a thing to fix by hand; thousands is a thing to fix in the wording that produced them, and the two answers cost very different amounts, so the number is asked for before either is chosen.";
  "The findings themselves are not carried back. There are potentially thousands of them and a count is what the question was; whoever wants to read the prose asks one chapter for it.";
  let offenders = await gloss_chapters_self_roots(app_ceb_bible_gloss_generate);
  let chapters = list_size(offenders);
  let lists = list_single_property(offenders, "found");
  let found = list_flat(lists);
  let count = list_size(found);
  let r = {
    chapters,
    count,
  };
  return r;
}
