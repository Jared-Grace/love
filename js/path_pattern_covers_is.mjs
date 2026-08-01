import { text_ends_with } from "./text_ends_with.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function path_pattern_covers_is(pattern, path) {
  arguments_assert(arguments, 2);
  ("whether a permission path pattern grants a given file, where a pattern is a plain path, or a folder and one star meaning the files directly in it, or a folder and two stars meaning everything below it");
  ("both are spelled from the root before they arrive, because a pattern written from where the command runs and a file written the same way are the same file and do not look it. Doing that here instead would make this answer depend on where it was asked from, which is the one thing a plain yes or no should not do.");
  ("one star is not two. A folder and one star reaches the files sitting directly in that folder and stops, so asking only whether the file is somewhere underneath says yes to a whole tree the rule never granted.");
  let separator = "/";
  let deep = "/**";
  if (text_ends_with(pattern, deep)) {
    let difference = subtract(pattern.length, deep.length);
    let folder = pattern.slice(0, difference);
    let under = text_combine(folder, separator);
    let below = text_starts_with(path, under);
    return below;
  }
  let flat = "/*";
  if (text_ends_with(pattern, flat)) {
    let difference2 = subtract(pattern.length, flat.length);
    let folder2 = pattern.slice(0, difference2);
    let under2 = text_combine(folder2, separator);
    let below2 = text_starts_with(path, under2);
    if (not(below2)) {
      return false;
    }
    let leaf = path.slice(under2.length);
    let deeper = text_includes(leaf, separator);
    let n = not(deeper);
    return n;
  }
  let same = equal(pattern, path);
  return same;
}
