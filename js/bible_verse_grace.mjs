import { giveaway_bible_verses_words_text } from "./giveaway_bible_verses_words_text.mjs";
import { list_to } from "./list_to.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { ebible_references_parse_lines } from "./ebible_references_parse_lines.mjs";
export async function bible_verse_grace(reference) {
  let args = list_to(arguments);
  let joined = list_join_space(args);
  let v = await ebible_references_parse_lines(["cebulb", "tglulb"], [joined]);
  let joined2 = giveaway_bible_verses_words_text(v);
  return joined2;
}
