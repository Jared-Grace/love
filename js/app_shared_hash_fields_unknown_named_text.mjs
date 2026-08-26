import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_text_reader_language_around } from "./app_shared_text_reader_language_around.mjs";
export function app_shared_hash_fields_unknown_named_text(name) {
  "What the line at the top of a broken link's screen says when one kind of thing is wrong and can be named, in the language the reader of this app reads.";
  "Naming the kind is what earns this its own saying. It often tells a reader the whole of what happened by itself - they recognise the language they meant to ask for and see the letter they missed.";
  "Asked for as what stands before the name of the field and what stands after it, because urdu does not put the naming where english does.";
  arguments_assert(arguments, 1);
  let parts = {
    en: {
      before: "This link asks for a ",
      after: " we do not have",
    },
    ur: {
      before: "یہ لنک ایسا ",
      after: " مانگتا ہے جو ہمارے پاس نہیں ہے",
    },
    translated_from: {
      ur: {
        before: "This link asks for a ",
        after: " we do not have",
      },
    },
  };
  let text = app_shared_text_reader_language_around(parts, name);
  return text;
}
