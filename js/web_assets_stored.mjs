import { web_assets_storage_prefix } from "./web_assets_storage_prefix.mjs";
import { firebase_storage_stored } from "./firebase_storage_stored.mjs";
export async function web_assets_stored() {
  "What storage already holds of the assets: for each address, the checksum of its bytes and the two settings it was written with.";
  "Listing is charged per page and writing per file, so asking this before an upload costs about two hundred charged operations where writing everything again cost two hundred thousand.";
  let prefix = web_assets_storage_prefix();
  let stored = await firebase_storage_stored(prefix + "/");
  return stored;
}
