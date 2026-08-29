import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_filter } from "./list_map_filter.mjs";
import { negative_not_is } from "./negative_not_is.mjs";
import { list_max_try } from "./list_max_try.mjs";
export function list_map_negative_not_max_try(list, mapper) {
  "$plain list";
  "$plain mapper";
  "The largest of what the mapper gives back over a list, counting only the answers that are not negative.";
  "★ NEGATIVE MEANS NOT FOUND HERE, WHICH IS WHY IT IS DROPPED RATHER THAN COMPARED. The mappers this is written for are searches that answer minus one when they find nothing, and minus one is smaller than every real answer - so keeping it would be harmless for a largest and fatal for a smallest, and the pair reads more plainly when both drop it for the same stated reason.";
  arguments_assert(arguments, 2);
  let filtered = list_map_filter(list, mapper, negative_not_is);
  let right = list_max_try(filtered);
  return right;
}
