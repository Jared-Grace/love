import { arguments_assert } from "./arguments_assert.mjs";
import { functions_numbers_shared_spread } from "./functions_numbers_shared_spread.mjs";
import { functions_numbers_shared } from "./functions_numbers_shared.mjs";
export async function functions_numbers_shared_report() {
  "Every number worth looking at that this repo writes in more than one function, at the spread this repo has measured as the point where a decision stops and a count begins.";
  "The one to run when looking for a value to name. Its neighbour takes the spread as an argument, for anyone who wants to look wider or narrower than the measured answer.";
  arguments_assert(arguments, 0);
  let most = functions_numbers_shared_spread();
  let r = await functions_numbers_shared(most);
  return r;
}
