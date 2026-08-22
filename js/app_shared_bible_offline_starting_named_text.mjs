import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_offline_starting_named_text(name) {
  "What one language's own line says between the press and the first thing arriving, in the language the reader of this app reads, when several are being fetched beside each other.";
  "The name is said here and left out of the single-row wording, because there the row it sits in already says which language it belongs to. Several lines under one button do not, and a count with no name on it belongs to any of them.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: "Starting the download of ",
      after: "",
    },
    ur: {
      before: "",
      after: " کا ڈاؤن لوڈ شروع ہو رہا ہے",
    },
    translated_from: {
      ur: {
        before: "Starting the download of ",
        after: "",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, name);
  return text;
}
