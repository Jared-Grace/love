import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { text_combine } from "./text_combine.mjs";
export function uplifting_package_destination(bible_folder) {
  "where an uplifting verse-text package lives in firebase storage: bible/uplifting/<folder>.json, under the readable bible/ prefix. Storage, not hosting, is the home for this bulk generated bible text — the same bucket app_supper reads its verses from — so the packages no longer ride along in every hosting deploy.";
  let file = text_combine(bible_folder, ".json");
  let destination = list_join_slash_forward(["bible", "uplifting", file]);
  return destination;
}
