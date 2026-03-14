import { word_plural } from "../../../love/public/src/word_plural.mjs";
export function g_themes_plural_list(root) {
  let r = word_plural(root);
  let v = [root, r];
  return v;
}
