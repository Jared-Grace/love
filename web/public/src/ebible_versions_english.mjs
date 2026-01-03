import { ebible_versions } from "../../../love/public/src/ebible_versions.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function ebible_versions_english() {
  marker("1");
  return await ebible_versions();
}
