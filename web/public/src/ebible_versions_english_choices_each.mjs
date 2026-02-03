import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
export async function ebible_versions_english_choices_each(
  lambda$bible_folder,
) {
  let english_choices = await ebible_versions_english_choices();
  await each_async(english_choices, lambda$bible_folder);
}
