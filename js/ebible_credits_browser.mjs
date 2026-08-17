import { ebible_credits_name } from "./ebible_credits_name.mjs";
import { firebase_storage_download_ebible_cache } from "./firebase_storage_download_ebible_cache.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_credits_browser() {
  "The credit for every translation this app ships, fetched for a reader who has asked to see them.";
  "Fetched rather than carried, because the page that shows these is opened rarely and the list is large enough that every reader would feel it on every visit.";
  "The answer is kept once it arrives, so leaving the page and coming back asks storage nothing.";
  let name = ebible_credits_name();
  let v = await firebase_storage_download_ebible_cache(
    ebible_credits_browser,
    name,
    name,
  );
  let credits = property_get(v, "credits");
  return credits;
}
