import { app_ceb_bible_verses_all } from "./app_ceb_bible_verses_all.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_verses_hyphen_pieces_unwritten } from "./bible_verses_hyphen_pieces_unwritten.mjs";
export async function app_ceb_bible_hyphen_pieces_unwritten() {
  "Every word a search of the Cebuano bible will say it contains that the Cebuano bible never writes.";
  "Ask this before believing a yes. A judgment about how a Cebuano word is spelled is checked by asking the translation whether it says it, and a translation laid out for searching answers yes to any run of letters standing between two hyphens - so a word that is only ever half of a hyphened word gets a yes it has not earned, and the check that was meant to be able to contradict the person who made the judgment can no longer do it.";
  "★ A NO IS STILL WORTH WHAT IT ALWAYS WAS. Nothing here is missing from the search and nothing comes back empty that should not; the whole fault runs the one way, so only a yes has to be brought here.";
  arguments_assert(arguments, 0);
  let verses = await app_ceb_bible_verses_all();
  let r = bible_verses_hyphen_pieces_unwritten(verses);
  return r;
}
