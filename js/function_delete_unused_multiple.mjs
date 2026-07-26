export async function function_delete_unused_multiple(names_comma) {
  arguments_assert(arguments, 1);
  ("Removes each of these, and refuses any one of them that something outside the");
  ("list still calls.");
  ("Clearing away several at once is the ordinary case — a thing built out of small");
  ("parts is retired in small parts — and running the single form once per name");
  ("leaves a commit that can only be described rather than named, which is the one");
  ("thing a commit message here must never be.");
  ("The list is read as one group rather than as several separate questions, since");
  ("the parts of a retired subsystem import each other: asked one at a time every");
  ("one of them is still in use, and the set stays standing with nothing outside it");
  ("reaching in.");
  let names = text_split_comma(names_comma);
  async function deleted_of(s) {
    let result = await function_delete_unused_among(s, names);
    return result;
  }
  let results = await list_map_async(names, deleted_of);
  return results;
}
