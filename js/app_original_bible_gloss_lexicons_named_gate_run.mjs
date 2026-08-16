import { app_original_bible_gloss_lexicons_named_chapters } from "./app_original_bible_gloss_lexicons_named_chapters.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_original_bible_gloss_lexicons_named_gate_run() {
  "Gate: no authored chapter of the original-language gloss says the name of a lexicon to its reader. Throws so the dispatcher seam exits nonzero.";
  "The corpus was found written in two voices - two chapters naming Strong's to the reader hundreds of times, four naming it not once - and the human settled it: the meaning is given and the source is not. Every chapter was then read and brought to zero. Nothing but this stops the next chapter authored bringing the other voice back, and a voice that splits again costs a full re-reading of everything written in between.";
  "It starts at nothing and there is no baseline beside it, because a list to add offenders to would turn a red light into a place to write things down.";
  "How many chapters were reached travels out with the verdict. The store is a folder read at the moment of asking, so an empty answer would otherwise read the same whether every chapter came back clean or the folder had moved and none was opened at all.";
  let walked = await app_original_bible_gloss_lexicons_named_chapters();
  let chapters = property_get(walked, "chapters");
  let offenders = property_get(walked, "offenders");
  let count = list_size(offenders);
  let any = greater_than(count, 0);
  if (any) {
    let shown = json_format_to(offenders);
    let message = text_combine_multiple([
      "original bible gloss: ",
      count,
      " of ",
      chapters,
      " authored chapters say the name of a lexicon to the reader - ",
      shown,
    ]);
    throw new Error(message);
  }
  let r = {
    chapters,
    offenders: 0,
  };
  return r;
}
