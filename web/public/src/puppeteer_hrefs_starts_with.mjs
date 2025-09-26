import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
export async function puppeteer_hrefs_starts_with(page, prefix) {
  const hrefs = await puppeteer_hrefs_starts_with(page);
  let filtered = list_filter_starts_with(hrefs, prefix);
  return filtered;
}
