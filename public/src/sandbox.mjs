import { wiki_monotheism_dates } from "../../../love/public/src/wiki_monotheism_dates.mjs";
export async function sandbox() {
  let r = await wiki_monotheism_dates();
  return r;
}
