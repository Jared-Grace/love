import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { text_skip } from "./text_skip.mjs";
import { biblehub_strong_url } from "./biblehub_strong_url.mjs";
export function biblehub_strong_lettered_url(strong_lettered) {
  arguments_assert(arguments, 1);
  ("$plain strong_lettered");
  ("the text is a Strong's number written with its letter in front, H for Hebrew or G for Greek, like H430. It is joined into an address and nothing runs.");
  ("BibleHub's page for a Strong's number that carries its own letter, so the caller needs no testament: the letter already says which half of the dictionary the number is in.");
  let testament_name = ebible_testament_old_name();
  let greek = text_starts_with(strong_lettered, "G");
  if (greek) {
    testament_name = ebible_testament_new_name();
  }
  let strong = text_skip(strong_lettered, 1);
  let url = biblehub_strong_url(testament_name, strong);
  return url;
}
