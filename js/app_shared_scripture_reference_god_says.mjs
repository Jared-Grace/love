import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
export function app_shared_scripture_reference_god_says(reference) {
  "the citation shown above a passage the player may CHOOSE to say — 'God says in John 3:16' rather than a bare 'John 3:16'. the player is picking words to speak to somebody, so the line names WHO is speaking them; a bare book-chapter-verse reads as a filing address, and a player who has never opened a Bible has no reason to know that the address is the point. it also says the one thing the passage buttons are for: the words are God's, not the player's own — which is why the verse is gold and this line is not.";
  "said in the language the reader reads, and asked for as what stands before the address and what stands after it. english puts the naming of the speaker and the joining word both in front; urdu puts the speaking after the address, so a sentence with the joining word fixed in the middle would come out backwards with every word in it right.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: "God says in ",
      after: "",
    },
    ur: {
      before: "خدا ",
      after: " میں فرماتا ہے",
    },
    translated_from: {
      ur: {
        before: "God says in ",
        after: "",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, reference);
  return text;
}
