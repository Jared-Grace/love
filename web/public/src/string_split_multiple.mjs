import { log_json } from "../../../love/public/src/log_json.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function string_split_multiple(str, delimiters) {
  marker("1");
  function lambda(d) {
    let v = d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return v;
  }
  const escaped = delimiters.map(lambda);
  let v2 = escaped.join("");
  const regex = new RegExp(`[${v2}]`);
  const parts = str.split(regex);
  log_json({
    str,
    delimiters,
    parts,
  });
  return parts;
}
