import { ebible_references_parse_lines } from "./ebible_references_parse_lines.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { bible_verses_encouragement } from "./bible_verses_encouragement.mjs";
import { marker } from "./marker.mjs";
export async function sandbox() {
  marker("1");
  let v = bible_verses_encouragement();
  let en = ebible_folder_english();
  let r = "Proverbs 3:5-6";
  let list = await ebible_references_parse_lines([en], [r]);
}
