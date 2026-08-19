import { error_json } from "./error_json.mjs";
import { less_than } from "./less_than.mjs";
import { null_is } from "./null_is.mjs";
import { or } from "./or.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
export function path_join(segments) {
  "One path built out of the pieces given, with the separators and the doubling up between them sorted out, and a piece that is nothing at all refused rather than passed over.";
  "A piece that arrives as nothing is a caller who went to work one out and came back with nothing, so it is thrown for. Passed over instead, what comes back is a real path to the wrong place, and every reader and writer handed it then answers about that place without a word of complaint. That is how a store's own folder went missing out of the middle of a handover path: the folder is named after a function, a caller handed the function's name over as text, the piece came out as nothing, the file was written beside the folder rather than inside it, and the run that read it reported success over a stale file somebody else had left there.";
  "An empty piece is a different thing and is still passed over. Nothing was worked out and lost there - a caller wrote the emptiness down themselves, and joining nothing on adds nothing.";
  if (not(segments) || not(segments.length)) {
    throw new Error("Missing segments");
  }
  let parts = [];
  let isAbsolute = false;
  for (let i = 0; less_than(i, segments.length); i++) {
    let seg = segments[i];
    let left = null_is(seg);
    let right = undefined_is(seg);
    let absent = or(left, right);
    if (absent) {
      error_json({
        hint: "one of the pieces this path is to be built out of is nothing at all, so the path would have come back naming a real place that is not the one asked for. the piece at the position below is the one to work out before calling - a function's name read off a piece of text rather than off the function is the usual way it comes to be missing",
        index: i,
        segments,
      });
    }
    if (not(seg)) {
      continue;
    }
    if (equal(i, 0)) {
      if (seg.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(seg)) {
        isAbsolute = true;
      }
    }
    let split = seg.split(/[\\/]+/);
    for (let s of split) {
      if (equal(s, "") || equal(s, ".")) {
        continue;
      }
      if (equal(s, "..")) {
        if (parts.length && not_equal(parts[subtract(parts.length, 1)], "..")) {
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
  let r = isAbsolute ? text_combine("/", joined) : joined;
  return r;
}
