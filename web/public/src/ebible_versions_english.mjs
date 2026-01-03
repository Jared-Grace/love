import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { ebible_versions } from "../../../love/public/src/ebible_versions.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english() {
  marker("1");
  let v = await ebible_versions();
  let filtered = list_filter_starts_with(list, prefix);
  return v;
}
