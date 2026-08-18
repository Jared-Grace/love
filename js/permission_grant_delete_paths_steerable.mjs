import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_last } from "./list_last.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { function_params_names } from "./function_params_names.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export async function permission_grant_delete_paths_steerable(delete_paths) {
  arguments_assert(arguments, 1);
  ("Of the chains by which a function reaches something that erases, the ones an argument handed to it could actually steer.");
  ("The reason a reach to a deleter refuses a grant is that a rule covers every argument the function is ever handed, so a caller choosing what gets erased is a caller nobody vetted. That reasoning needs an argument to travel the whole way down, and the chain says where it stops: the function that calls the deleter is the one that names what is deleted, so when that function declares nothing at all, what it erases is whatever its own committed source says and no argument above it can change it.");
  ("This is the reading already written into the refusal, applied at the far end of the chain rather than only at the near end. The near end asks whether the function being granted takes arguments, on exactly this ground - a function declaring none deletes whatever its source says. Asking the same of the last hop is not a weaker test, it is the same test asked where the target is actually chosen.");
  ("Conservative wherever it cannot see. A chain that is nothing but the deleter itself is kept, because there the near-end reading is the whole answer and this has nothing to add; and a caller taking any argument at all is kept, without asking whether that argument is the one that names the path, because that is a question about what flows where and this only reads how many.");
  ("What it does not cover, and could not: a function taking nothing can still be told something through a file that a function above it wrote. That hole is already in the near-end reading it copies, so nothing here widens it - and a function whose arguments reach a deleter through the disk is not a thing any reading of names can catch.");
  let names = object_property_names(delete_paths);
  let steerable = {};
  for (let name of names) {
    let chain = property_get(delete_paths, name);
    let seam_before = subtract(chain.length, 1);
    let callers = list_slice(chain, 0, seam_before);
    let alone = list_empty_is(callers);
    let called = not(alone);
    let keep = true;
    if (called) {
      let caller = list_last(callers);
      let params = await function_params_names(caller);
      keep = greater_than(params.length, 0);
    }
    if (keep) {
      property_set(steerable, name, chain);
    }
  }
  return steerable;
}
