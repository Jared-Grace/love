import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_base } from "./path_base.mjs";
import { file_read_lines } from "./file_read_lines.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { text_split } from "./text_split.mjs";
import { list_size_equal } from "./list_size_equal.mjs";
import { list_first_second } from "./list_first_second.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
export async function git_commit_map_read(file_path) {
  "$plain file_path";
  "One saved rewrite record read into a lookup from the name a commit had before that rewrite to the name it had after, carrying the file's own name so that an answer can say which rewrite did the renaming.";
  "★ EVERY LINE IS REQUIRED TO BE A PAIR OF TWO WHOLE NAMES, AND THE ONE LINE THAT IS NOT IS REQUIRED TO BE THE COLUMN HEADING. A line stepped over quietly is worse here than a line refused: the record is the only account of that rewrite, so a commit whose line was skipped answers 'not written down here' - and that is word for word the answer given for a commit which was never in that repository at all. Two opposite meanings arriving as one word is the whole reason this read is checked rather than forgiving.";
  arguments_assert(arguments, 1);
  let name = path_base(file_path);
  let all = await file_read_lines(file_path);
  let filled = list_filter_text_empty_not_is(all);
  let r2 = list_first_remaining(filled);
  let remaining = property_get(r2, "remaining");
  let first = property_get(r2, "first");
  let headed = text_starts_with(first, "old");
  true_is_assert_json(headed, {
    hint: "the first line of a rewrite record is its column heading and starts with the word old - this file's first line does not, so either the file is not a rewrite record or its heading was lost, and reading it as pairs would take the heading itself for a commit",
    file_path,
    first: first,
  });
  let old_to_new = {};
  for (let line of remaining) {
    let parts = text_split(line, " ");
    let paired = list_size_equal(parts, 2);
    true_is_assert_json(paired, {
      hint: "every line of a rewrite record after the heading is the name a commit had before, one space, and the name it had after - this line is not, so the record cannot be trusted to account for every commit",
      file_path,
      line,
    });
    let r3 = list_first_second(parts);
    let after = property_get(r3, "second");
    let before = property_get(r3, "first");
    property_set(old_to_new, before, after);
  }
  let rows = list_size(remaining);
  let r = {
    name,
    rows,
    old_to_new,
  };
  return r;
}
