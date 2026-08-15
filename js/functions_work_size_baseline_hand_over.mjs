import { list_index_of } from "./list_index_of.mjs";
import { list_replace } from "./list_replace.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { functions_work_size_baseline_path } from "./functions_work_size_baseline_path.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_intersection } from "./list_intersection.mjs";
export async function functions_work_size_baseline_hand_over(
  f_name_before,
  f_name_after,
) {
  arguments_assert(arguments, 2);
  ("Pass one name's place in the record of who is already over the size ceiling along to another name, for when the work was moved out to a function of its own rather than cut away.");
  ("A move that takes a run of work out of one function and gives it a name of its own leaves the same work in the repo under a new name. The record is kept by name and only ever shrinks, so that move always reads as growth even though nothing grew, and the gate goes red on an improvement.");
  ("It works from the record rather than from who is over the ceiling today, and it changes exactly two names in it. Rewriting the whole record instead would sweep in whatever anybody else has grown in the meantime, filing their work under this one's name - and the record only shrinks precisely so that cannot happen quietly.");
  let path = functions_work_size_baseline_path();
  let known = await baseline_known_read(path);
  list_includes_assert_json(known, f_name_before, {
    hint: "the name handing its place along has to be one the record already holds, or there is no place to hand along. Would you like to check the spelling?",
  });
  let over = await functions_work_oversize_names();
  ("Both readings are taken of who is over the ceiling now, so the pair really is one name leaving and one arriving, rather than a name being let in beside a first one that is still over.");
  let before_over = list_intersection(over, [f_name_before]);
  list_empty_is_assert_json(before_over, {
    hint: "the name handing its place along is still over the ceiling itself, so it has not handed anything along. Would you like to cut it down first?",
    f_name_before,
  });
  list_includes_assert_json(over, f_name_after, {
    hint: "the name receiving the place is not over the ceiling, so it does not need one. Would you like to leave the record one name shorter instead?",
  });
  let after_known = list_intersection(known, [f_name_after]);
  list_empty_is_assert_json(after_known, {
    hint: "the name receiving the place is already in the record, so handing it a second one would make the record longer rather than the same length.",
    f_name_after,
  });
  ("The new name is written where the old one stood, rather than the record being built again from the two of them. Every other line then comes back out byte for byte, so what is read of the change is the one line that changed.");
  let at = list_index_of(known, f_name_before);
  list_replace(known, at, f_name_after);
  let r = await baseline_known_write(known, path);
  return r;
}
