import { puppeteer_hrefs } from "../../../love/public/src/puppeteer_hrefs.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
export async function puppeteer_hrefs_starts_with(page, prefix) {
  const hrefs = await puppeteer_hrefs(page);
  let filtered = list_filter_starts_with(hrefs, prefix);
  return filtered;
}
