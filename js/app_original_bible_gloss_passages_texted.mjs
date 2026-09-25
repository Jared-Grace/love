import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { object_copy_property_set } from "./object_copy_property_set.mjs";
import { list_map } from "./list_map.mjs";
export function app_original_bible_gloss_passages_texted(passages) {
  "A chapter's passages from the original-language store, with the Hebrew and Greek lines standing where every other gloss store keeps the wording its explanations are about.";
  "THIS STORE EXPLAINS THE LINE BESIDE THE TEXTS RATHER THAN ONE OF THEM. A Cebuano or Urdu chapter keeps the wording under explanation among its texts, so a reading can be told which one it is by a number. This one keeps the original under its own name and keeps the English translations in texts, so there is no number that reaches it, and a reading handed the number zero would settle every claim against the English instead - against words the explanations were never written about.";
  "The passages are laid out into the shape the shared reading already understands rather than the shared reading being taught a second shape. Teaching it both would put a choice inside a reading that two stores are already green on, and a wrong answer there would be wrong for all three at once. Laying out a copy here can only ever be wrong for this store.";
  "Nothing is changed in place. A copy of each passage carries the original lines as its only text, and everything else the passage held travels with it untouched, so a caller still reading its verse numbers or its explanations finds them where they were.";
  "The English translations are dropped from the copy rather than kept beside the originals. Nothing downstream reads past the one text it was pointed at, and a second text left in the list would only be a second thing a later reading could point at by mistake.";
  arguments_assert(arguments, 1);
  function passage_texted(passage) {
    let originals = property_get(passage, "originals");
    let texts = [originals];
    let texted = object_copy_property_set(passage, "texts", texts);
    return texted;
  }
  let r = list_map(passages, passage_texted);
  return r;
}
