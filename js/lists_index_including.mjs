import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map } from "./list_map.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function lists_index_including(lists, item) {
  arguments_assert(arguments, 2);
  ("which of several lists holds a given thing, as its place among them: asked of a first list holding a and a second holding b and c, and then asked about c, it answers 1");
  ("A set of classes laid out in an order is the same shape as a scale, so the place a member is found at IS its number on that scale. Written this way, a class put in the middle needs nothing above it renumbered.");
  ("A thing no list holds throws rather than coming back as a number. A scale answering for something it was never given a place on is the worst of the three possible answers: it is not a refusal, it is not right, and it cannot be told apart from a real answer.");
  function including(list) {
    "whether this one of the lists is the one holding the thing";
    let includes = list_includes(list, item);
    return includes;
  }
  let holds = list_map(lists, including);
  let index = list_index_of(holds, true);
  return index;
}
