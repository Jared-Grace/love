import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { list_lowered_set } from "./list_lowered_set.mjs";
export async function bible_words_written_lowered_set(bible_folder) {
  "$plain bible_folder";
  "Every different word one whole bible is written with, put into small letters, as a set to ask membership of.";
  "This is the shape three readings wanted and each of them built out by hand: the written words, lowered, made into a set. What each of them then asked it was the same question in the same words - is this spelling one the bible actually writes - and the answer only means that if the word being asked is lowered too.";
  ("★ THE CAPITALS ARE THROWN AWAY HERE AND CANNOT BE ASKED FOR AFTERWARDS. The reader underneath keeps them on purpose, because a capital is the only mark in the text saying a word is a name, and that is why this is a separate name rather than a change to it. A caller wanting to tell a name from an ordinary word must ask the reader underneath, or ask ",
    fn_name("bible_words_names_apart"),
    ", and not this.");
  ("The folder is a parameter rather than settled here, the same way the reader underneath asks for one, because which marks count as punctuation is the bible's own language's business.");
  ("The lowering and the making of the set are ",
    fn_name("list_lowered_set"),
    ", because two readings keep the words as they are written for their own count and can only ask for the set afterwards. So this is what a bible's own words add to that shape and nothing else: which reader to ask, and which folder to ask it about.");
  arguments_assert(arguments, 1);
  let written = await bible_words_written(bible_folder);
  let vocabulary = list_lowered_set(written);
  return vocabulary;
}
