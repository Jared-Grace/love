export function app_shared_bible_reference_open(reference) {
  "$plain reference";
  "Opens the bible reader beside what is already open, at the passage a written reference names.";
  "BESIDE, NOT INSTEAD. Somebody reading a song and looking up what one of its lines rests on has not finished with the song - taking the page away from them would cost them their place in it, and a reference is exactly the kind of thing a reader glances at and comes back from.";
  "The reference travels as the words a person writes rather than as a chapter and a verse number, because that is what a page holding a hand-written list of passages has. The reader knows how to read one.";
  "The spaces become plusses because everything after the hash is one word to a browser, and a space in it is not carried the same way by everything that might pass the address on.";
  arguments_assert(arguments, 1);
  let key = app_shared_bible_reference_hash_key();
  let plus = "+";
  let spelled = text_replace_space_to(reference, plus);
  let hash = {};
  property_set(hash, key, spelled);
  let f_name = fn_name("app_bible");
  window_open_app(f_name, hash);
}
