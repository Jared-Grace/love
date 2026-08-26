import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
export function app_shared_hash_fields_unknown_number_text(name) {
  "What the line at the top of a broken link's screen says when the one thing wrong is a field that should hold a count, in the language the reader of this app reads.";
  "It is said the other way round from its sibling. Nothing is missing from what we have - every number is one we could be asked for - so what went wrong is that the word in the link is not a number at all, and saying we do not have it would send a reader looking for something that was never the trouble.";
  "Asked for as what stands before the name of the field and what stands after it, because urdu does not put the naming where english does.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: "The ",
      after: " in this link is not a number",
    },
    ur: {
      before: "اس لنک میں دیا گیا ",
      after: " عدد نہیں ہے",
    },
    translated_from: {
      ur: {
        before: "The ",
        after: " in this link is not a number",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, name);
  return text;
}
