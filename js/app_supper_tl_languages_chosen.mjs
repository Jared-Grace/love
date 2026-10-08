import { ebible_folder_tagalog } from "./ebible_folder_tagalog.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
export function app_supper_tl_languages_chosen() {
  "The two languages the Tagalog Lord's Supper page opens in, in the order it lays them out: Tagalog, with English beside it. That order is the whole of what the card promises a stranger, so it is a named answer rather than a list written inside the page - a check standing outside a browser can ask this, and could not ask the page.";
  "Tagalog is spelled out here rather than taken from the list of languages, because the list is sorted by how many people speak each one and re-derived whenever the licences change, so which entry came back could move. The folder is asked for by name, which is the part that must not drift.";
  let tagalog = {
    name: "Tagalog",
    bible_folder: ebible_folder_tagalog(),
  };
  let english = ebible_language_english();
  let chosen = [tagalog, english];
  return chosen;
}
