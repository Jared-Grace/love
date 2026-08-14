import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_text_to } from "./list_sort_text_to.mjs";
export async function baseline_known_add(names, path, offending) {
  arguments_assert(arguments, 3);
  ("Record NAMED offenders in a ratchet file and leave every other one still red.");
  ("The whole-file writer is the only way to answer a red ratchet today, and it takes everything the repo carries right now. That is right when every offender is structural, and wrong the moment some of them are not: one run buries a real leak under the ones that were never going to clear, and nothing afterwards can tell the two apart. So the caller says which ones, and the rest keep failing.");
  ("TWO REFUSALS, and both exist because a name is easy to mistype and a blessing is hard to notice afterwards. A name that is not failing right now is not absorbed - it would be a permanent line in the record for something the repo does not do, and no later gate can find it. A name the record already holds is not absorbed either - asking for it means the caller believes something about the file that is not true, and doing nothing quietly would leave them believing it.");
  ("This does not weaken the ratchet: what it adds is a subset of what the whole-file writer would have added, and the growth assert its twin runs is exactly the check this replaces with a narrower one.");
  let phantom = list_difference(names, offending);
  list_empty_is_assert_json(phantom, {
    hint: "these are not failing right now, so there is nothing to record - a ratchet only ever blesses what is actually red, and a line recorded for something the repo does not do can never be found again",
  });
  let known = await baseline_known_read(path);
  let already = list_intersection(names, known);
  list_empty_is_assert_json(already, {
    hint: "the record already holds these, so asking for them again means it does not say what you think it says - read the file",
  });
  list_add_multiple(known, names);
  list_sort_text_to(known);
  let written = await baseline_known_write(known, path);
  let r = {
    added: list_size(names),
    known: written,
  };
  return r;
}
