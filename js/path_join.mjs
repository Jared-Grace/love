import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
export function path_join(segments) {
  if (!segments || !segments.length) throw new Error("Missing segments");
  let parts = [];
  let isAbsolute = false;
  for (let i = 0; i < segments.length; i++) {
    let seg = segments[i];
    if (!seg) continue;
    if (i === 0) {
      if (seg.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(seg)) {
        isAbsolute = true;
      }
    }
    let split = seg.split(/[\\/]+/);
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
  let joined = parts.join("/");
  return isAbsolute ? text_combine("/", joined) : joined;
}
