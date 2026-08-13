import { ebible_bible_folder_to_name } from "./ebible_bible_folder_to_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_bible_folder_label(bible_folder) {
  "How to name a bible to somebody choosing one: the language it is in, with the folder a link writes it as in brackets after.";
  "Both halves are needed and neither on its own will do. The folder alone is what the link says and means nothing to most people; the language alone leaves a reader unable to tell which of two near-identical guesses is the one their link nearly spelled.";
  let name = ebible_bible_folder_to_name(bible_folder);
  let label = text_combine_multiple([name, " (", bible_folder, ")"]);
  return label;
}
