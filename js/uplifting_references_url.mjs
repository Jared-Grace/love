import { web_assets_bible_uplifting_url } from "./web_assets_bible_uplifting_url.mjs";
export function uplifting_references_url() {
  "Where the verses app fetches the list of which verses it draws from.";
  "The list is data rather than code, so it can change without the app being rebuilt - and it is fetched from storage rather than served beside the page, so a change reaches every reader at once instead of at the next deploy.";
  let file_name = "references.json";
  let url = web_assets_bible_uplifting_url(file_name);
  return url;
}
