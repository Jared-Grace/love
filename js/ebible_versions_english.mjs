import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { ebible_versions } from "./ebible_versions.mjs";
export async function ebible_versions_english() {
  "Every Bible version that is in English. They are picked out by their name starting eng, which is how the source marks the language rather than something worked out here.";
  let v = await ebible_versions();
  let filtered = list_filter_starts_with(v, "eng");
  return filtered;
}
