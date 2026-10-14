import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_bow } from "./emoji_bow.mjs";
import { text_lord_bless } from "./text_lord_bless.mjs";
import { emoji_heart } from "./emoji_heart.mjs";
import { emoji_star_of_david } from "./emoji_star_of_david.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
export function prayer_blessing_aaronic() {
  "The priestly blessing of Numbers 6:24-26 (BSB), for a reader who chose Jewish: it names the LORD without the Trinity, so it is offered in place of the Christian blessing rather than beside it.";
  let v2 = emoji_bow();
  let v3 = text_lord_bless();
  let v4 = emoji_heart();
  let v5 = emoji_star_of_david();
  let v6 = emoji_pray();
  let v = text_combine_multiple([
    v2,
    " ",
    v3,
    "you and keep you; may the LORD make His face shine upon you and be gracious to you; may the LORD turn His face toward you and give you peace.",
    " Amen! ",
    v4,
    v5,
    v6,
  ]);
  return v;
}
