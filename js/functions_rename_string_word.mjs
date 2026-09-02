import { arguments_assert } from "./arguments_assert.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { function_string_word_replace } from "./function_string_word_replace.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function functions_rename_string_word(word_before, word_after) {
  arguments_assert(arguments, 2);
  ("Swaps one underscore-separated word for another inside every written-out string in the repo - the twin of the rename that does the same to function NAMES.");
  ("A word spelled as a value in fourteen files is one fact about the program wearing fourteen faces, and the two renames together are what let that fact be changed at all: one moves the names, this moves the words those names are spoken with.");
  ("It finds its own set rather than being handed a list of files. Every function whose source so much as mentions the word is offered to the rewrite, and the rewrite itself decides whether anything there is really the word - so the sweep cannot drift from what is actually in the folder, and adding a fifteenth file needs nothing said here.");
  ("The whole sweep is ONE change and so ONE commit. A rung word is a single fact about the game rather than fourteen independent ones, and committing it in pieces would leave the folder in a state where half of it names a rung the ladder no longer has.");
  let mentioning = await repo_functions_names_code_includes(
    "love",
    word_before,
  );
  async function replaced_of(f_name) {
    let result = await function_string_word_replace(
      f_name,
      word_before,
      word_after,
    );
    return result;
  }
  let results = await list_map_async(mentioning, replaced_of);
  let changed = list_filter_property(results, "changed", true);
  let refused = list_filter_property_not(results, "error_message", "");
  let report = {
    asked: list_size(mentioning),
    changed: list_map_property(changed, "name"),
    refused: list_map_property(refused, "name"),
    reasons: list_map_property(refused, "error_message"),
  };
  return report;
}
