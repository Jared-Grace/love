import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { greater_than } from "./greater_than.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
export function commits_shape_name(commit) {
  "What kind of change a commit was, said in a few plain words, read off nothing but how many files it touched and how many lines it added and took away.";
  "Every commit in this repo carries the same message, so the log says who made a change and when but never what sort of change it was. These names are the missing sort. They are guessed from the numbers because the numbers are the only thing the log actually knows.";
  "The names are deliberately loose. Whether a commit was one file rewritten or one file with a block replaced is a matter of degree, and the point is to be able to count the kinds over hundreds of commits, not to be right about any single one.";
  "Many files with only a few lines each is the one shape worth calling out by what made it, because that is what a transform run leaves behind and a person editing by hand almost never does.";
  let files = property_get(commit, "files");
  let added = property_get(commit, "added");
  let removed = property_get(commit, "removed");
  let single = equal(files, 1);
  if (not(single)) {
    let touch = added + removed;
    let b = multiply(files, 6);
    let broad = greater_than(touch, b);
    if (broad) {
      let r = "many files, large";
      return r;
    }
    let r3 = "many files, small each (codemod-shaped)";
    return r3;
  }
  let pure_add = equal(removed, 0);
  if (pure_add) {
    let one = less_than(added, 4);
    if (one) {
      let r4 = "one file, a line or two added";
      return r4;
    }
    let body = less_than(added, 20);
    if (body) {
      let r5 = "one file, a block added";
      return r5;
    }
    let r6 = "one file, whole new function";
    return r6;
  }
  let pure_cut = equal(added, 0);
  if (pure_cut) {
    let r7 = "one file, lines only removed";
    return r7;
  }
  let swap = less_than(added, 4) && less_than(removed, 4);
  if (swap) {
    let r8 = "one file, a line or two replaced";
    return r8;
  }
  let small = less_than(added, 12) && less_than(removed, 12);
  if (small) {
    let r9 = "one file, a block replaced";
    return r9;
  }
  let r10 = "one file, rewritten";
  return r10;
}
