import { log } from "./log.mjs";
import { puppeteer_hrefs } from "./puppeteer_hrefs.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
export async function puppeteer_hrefs_starts_with(page, prefix) {
  const hrefs = await puppeteer_hrefs(page);
  let filtered = list_filter_starts_with(hrefs, prefix);
  log(message);
  return filtered;
}
