import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { python_code_mirror } from "./python_code_mirror.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { equal } from "./equal.mjs";
export async function python_mirror_checked(mirror) {
  arguments_assert(arguments, 1);
  ("Says whether one mirrored list on disk still says what this side says. A file");
  ("that cannot be read at all counts as stale rather than as an error, because the");
  ("answer wanted here is the same either way: write it again.");
  let path = property_get(mirror, "path");
  let expected = python_code_mirror(mirror);
  let actual = await file_read_try(path);
  let fresh = equal(actual, expected);
  let checked = {
    path,
    fresh,
  };
  return checked;
}
