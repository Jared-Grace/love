import { property_get } from "./property_get.mjs";
import { app_original_bible_gloss_parsings_exceeding_chapters } from "./app_original_bible_gloss_parsings_exceeding_chapters.mjs";
import { greater_than } from "./greater_than.mjs";
import { json_format_to } from "./json_format_to.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_original_bible_gloss_parsings_gate_run() {
  "Gate: no authored chapter of the original-language gloss explains a word by naming a tense, a mood or a form that no word of its own passage carries. Throws so the dispatcher seam exits nonzero.";
  "The parsing is the one thing in a word explanation that was handed to its author rather than worked out by them, so it is the one claim a machine can settle without knowing Greek. A chapter passing here has been checked on that claim and on nothing else.";
  "Only the places with nowhere to point are gated. Where the named form does stand on some other word of the passage the explanation was almost certainly comparing the two, which is a thing the rubric asks for; where it stands on no word at all the reader is being told about a form that is not on the screen, and the passage is the whole of what the reader can see.";
  "It starts at nothing and there is no baseline beside it, because a list to add offenders to would turn a red light into a place to write things down. A store that is not clean today therefore stays out of the whole-repo list until it is, rather than having its faults written down as expected.";
  "How many chapters were reached travels out with the verdict. The store is a folder read at the moment of asking, so an empty answer would otherwise read the same whether every chapter came back clean or the folder had moved and none was opened at all.";
  let walked = await app_original_bible_gloss_parsings_exceeding_chapters();
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
      " authored chapters explain a word by naming a form no word of its passage carries - ",
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
