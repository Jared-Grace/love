import { log } from "../../../love/public/src/log.mjs";
import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
export async function ebible_versions_english_choices_each(
  lambda$bible_folder,
) {
  let english_choices = await ebible_versions_english_choices();
  let index = list_index_of(english_choices, "engBBE");
  let skipped = list_skip(english_choices, index);
  log({
    skipped,
  });
  return;
  await each_async(skipped, lambda$bible_folder);
}
