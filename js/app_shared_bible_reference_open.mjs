import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_reference_hash } from "./app_shared_bible_reference_hash.mjs";
import { window_open_app } from "./window_open_app.mjs";
import { fn_name } from "./fn_name.mjs";
export function app_shared_bible_reference_open(reference) {
  "$plain reference";
  "Opens the bible reader beside what is already open, at the passage a written reference names.";
  "BESIDE, NOT INSTEAD. Somebody reading a song and looking up what one of its lines rests on has not finished with the song - taking the page away from them would cost them their place in it, and a reference is exactly the kind of thing a reader glances at and comes back from.";
  "The reference travels as the words a person writes rather than as a chapter and a verse number, because that is what a page holding a hand-written list of passages has. The reader knows how to read one.";
  arguments_assert(arguments, 1);
  let hash = app_shared_bible_reference_hash(reference);
  window_open_app(fn_name("app_bible"), hash);
}
