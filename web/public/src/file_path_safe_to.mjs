import { marker } from "../../../love/public/src/marker.mjs";
export function file_path_safe_to(fp) {
  marker("1");
  let safe = encodeURIComponent(fp);
  return safe;
}
