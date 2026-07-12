import { list_skip } from "./list_skip.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_versions_english_choices } from "./ebible_versions_english_choices.mjs";
export async function ebible_versions_english_choices_each(
  lambda$bible_folder,
) {
  let english_choices = await ebible_versions_english_choices();
  let index = list_index_of(english_choices, "eng-t4t");
  let skipped = list_skip(english_choices, index);
  skipped = english_choices;
  await each_async(skipped, lambda$bible_folder);
}
