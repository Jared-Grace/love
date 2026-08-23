import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function pwa_icon_name(app_name, size) {
  "$plain app_name";
  "$plain size";
  "What one of an installed app's icon files is called, at one size.";
  "THE FILE THAT IS DRAWN AND THE FILE THE MANIFEST ASKS FOR ARE NAMED HERE TOGETHER. Spelled in both places instead, the two agree until one of them is edited, and what that costs is an installed app showing a blank square - which nobody sees while developing, because the page itself is fine and only the icon is missing.";
  let counted = text_to(size);
  let icon_name = text_combine_multiple([app_name, "-", counted, ".png"]);
  return icon_name;
}
