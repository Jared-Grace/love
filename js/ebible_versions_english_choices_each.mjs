import { each_async } from "./each_async.mjs";
import { ebible_versions_english_choices } from "./ebible_versions_english_choices.mjs";
export async function ebible_versions_english_choices_each(
  lambda$bible_folder,
) {
  "Every English translation this repo offers from the eBible side, handed one at a time to whatever was asked to do something with one.";
  "IT WALKS THE WHOLE LIST. It used to start partway down, at a named translation, so that a long job stopped and restarted could pick up where it left off; the line that did that was left in place with its answer thrown away on the next line, which is the same as walking the whole list and says the opposite.";
  await each_async(
    await ebible_versions_english_choices(),
    lambda$bible_folder,
  );
}
