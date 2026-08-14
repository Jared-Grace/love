import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_testament_new_roots } from "./ebible_testament_new_roots.mjs";
import { g_sermon_roots } from "./g_sermon_roots.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_roots_unjoined } from "./text_roots_unjoined.mjs";
export async function words_unjoined() {
  "Every near miss across the whole ground this repo's English rooting has to cover - the New Testament and the sermons written on it.";
  "The two are read together rather than one after the other because a pair only matters where both halves are met. Command in a verse and commandment in a line is exactly the miss worth finding, and neither text holds both.";
  "This is the reading to run before adding a word ending or an irregular form. What it names has been earned by a word actually being used; what is added without it has been earned by somebody remembering it.";
  let bible_folder = ebible_folder_english();
  let roots = await ebible_testament_new_roots(bible_folder);
  let sermon_roots = await g_sermon_roots();
  list_add_multiple(roots, sermon_roots);
  let unjoined = text_roots_unjoined(roots);
  return unjoined;
}
