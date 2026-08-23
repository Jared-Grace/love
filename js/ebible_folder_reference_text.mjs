import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_references_texts } from "./ebible_folder_references_texts.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
export async function ebible_folder_reference_text(bible_folder, reference) {
  arguments_assert(arguments, 2);
  ("$plain bible_folder");
  ("$plain reference");
  ("The words one named bible holds at one passage, or nothing when it does not carry that passage.");
  ("ONE BIBLE AND ONE PASSAGE IS WHAT A PERSON AT A KEYBOARD ASKS, and until now nothing answered it. The reader beside this one takes a list of passages, and a list cannot be handed to a function from a command line - so checking a single translation against a single verse meant reading every translation, or writing a throwaway to call the plural one. Both are slow ways to ask a small question.");
  ("IT IS ALSO THE ONLY WAY TO SEE A TRANSLATION FAIL. The comparison wraps each translation in a catch, on purpose, so one unreadable bible cannot empty a reading of twenty others - which means a bible that throws looks exactly like a bible that carries nothing. Asked here the throw arrives, and what is wrong can be read off it.");
  ("It asks the plural reader rather than repeating it, so the two cannot come to disagree about what a passage says. That costs one list of books, which is the slow half of a single reading either way.");
  let texts = await ebible_folder_references_texts(bible_folder, [reference]);
  let text = property_get_or_null(texts, reference);
  return text;
}
