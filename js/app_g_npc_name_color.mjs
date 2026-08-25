import { g_gender_female } from "./g_gender_female.mjs";
import { g_gender_male } from "./g_gender_male.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_npc_name_color(npc) {
  "The ink one person's own name is written in, keyed by gender - a deep rose for a woman and a deep blue for a man, dark enough to be read as words rather than as a tint.";
  "IT IS THE SECOND OF TWO GENDER COLOURS AND NOT A SHADE OF THE FIRST. The bubble colour is a wash laid behind a whole block; this one is laid on letters. A tint dark enough to sit behind a paragraph is too pale to read as a word, so the pair were chosen together and neither can be worked out from the other.";
  "IT LIVES HERE BECAUSE A SECOND SCREEN ASKED FOR IT. It was spelled inside the speech bubble while the bubble was the only thing that drew a person's name; the review bench draws their words in the same ink, and a second copy of the pair is two places for a colour to be changed in one.";
  let gender = property_get(npc, "gender");
  let map = {
    [g_gender_female()]: "#a3006e",
    [g_gender_male()]: "#1a3aa0",
  };
  let color = property_get(map, gender);
  return color;
}
