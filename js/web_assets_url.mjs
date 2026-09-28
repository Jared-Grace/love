import { bible_word_voice_path_url } from "./bible_word_voice_path_url.mjs";
import { web_assets_version } from "./web_assets_version.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function web_assets_url(path) {
  "$plain path";
  "Where a browser fetches one asset, given where it sits under the assets folder.";
  "IT TAKES THE WHOLE PATH AND NEVER A PIECE OF ONE. Storage spells the slashes in an address as %2F, so a caller that took a folder's address and stuck the rest of the path on the end would produce something with real slashes half way through it, which storage reads as a different file that is not there. Building the whole path first and asking once is what keeps that impossible.";
  "The address ends in a STAMP, and every asset address in the repo is built here, so saying it once here says it everywhere. Storage names a file by its path alone, which means a redrawn picture keeps the address the old one had; the stamp is what makes new art a new address, and that is what pays for a browser being told it may keep the old address for a year without ever asking again.";
  "Storage ignores a query it was not expecting, so the stamp costs nothing at the far end. It is read by the browser and by nothing else - which is the point, because the only thing that needs to notice is the store of pictures a phone is already holding.";
  let url = bible_word_voice_path_url(path);
  let stamp = web_assets_version();
  let stamped = text_combine_multiple([url, "&v=", stamp]);
  return stamped;
}
