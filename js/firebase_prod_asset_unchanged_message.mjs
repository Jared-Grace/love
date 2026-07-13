import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function firebase_prod_asset_unchanged_message(file_name) {
  let message = text_combine_multiple([
    "Beloved, prod's ",
    file_name,
    " looks different from what's on disk, so uploading would change what is already live. Might we reconcile the two before we deploy? 💛",
  ]);
  return message;
}
