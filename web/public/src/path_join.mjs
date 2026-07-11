import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function path_join(segments) {
  if (!segments || !segments.length) throw new Error("Missing segments");
  const parts = [];
  let isAbsolute = false;
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    if (!seg) continue;
    if (i === 0) {
      if (seg.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(seg)) {
        isAbsolute = true;
      }
    }
    const split = seg.split(/[\\/]+/);
    for (let s of split) {
      if (s === "" || s === ".") continue;
      if (s === "..") {
        if (parts.length && parts[subtract(parts.length, 1)] !== "..") {
          parts.pop();
        } else {
          parts.push("..");
        }
      } else {
        parts.push(s);
      }
    }
  }
  const joined = parts.join("/");
  return isAbsolute ? text_combine("/", joined) : joined;
}
