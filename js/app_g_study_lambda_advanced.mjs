import { arguments_assert } from "./arguments_assert.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { not } from "./not.mjs";
export function app_g_study_lambda_advanced(
  sermon_index,
  mistakes,
  sermon_correct_list,
) {
  "Where a right tap leaves the study: which part of the passage comes next, whether anything has gone wrong so far, and whether the passage has now been got through cleanly.";
  "GETTING TO THE END WITH A WRONG TAP BEHIND YOU IS NOT FINISHING: the passage starts again from its first part and the record of wrongness is wiped, so the next time through has to be clean on its own.";
  "NOTHING IS DRAWN AND NOTHING IS SAVED HERE, only worked out, because the two things this decides are the two the drawing reads - so the drawing has to happen after they have been put back, never inside the working out.";
  arguments_assert(arguments, 3);
  let index = sermon_index + 1;
  let li = list_index_last_is(sermon_correct_list, index);
  if (not(li)) {
    let r = {
      sermon_index: index,
      mistakes,
      done: false,
    };
    return r;
  }
  if (mistakes) {
    let r2 = {
      sermon_index: 0,
      mistakes: false,
      done: false,
    };
    return r2;
  }
  let r3 = {
    sermon_index: index,
    mistakes,
    done: true,
  };
  return r3;
}
