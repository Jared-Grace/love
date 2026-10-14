import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_document_name_take_is(document_name) {
  arguments_assert(arguments, 1);
  ("Whether a lyric video document's name says it is a superseded take rather than the version in use.");
  ("★ THE NAME IS THE WHOLE OF THE EVIDENCE, BECAUSE THE PERSON WHO SAVED THE TAKE IS THE ONE WHO SAID IT WAS ONE. A take file is written by hand at the moment a render is replaced, and the suffix is the only mark of that decision anywhere - nothing inside the document says which version is current, and nothing beside it does either. Working it out from mtimes or from which file is newest would be a guess standing in for a sentence somebody already wrote down.");
  ("★ THE DISTINCTION IS NOT COSMETIC, IT DECIDES WHETHER A REPAIR IS ALLOWED AT ALL. A superseded take naming a crop that no longer exists is finished business: the video was made, the painting has since been swapped, and the old crop is gone for good, so the only honest repair is to stop naming it. The same absence in the document in use means the opposite - a crop still needs drawing - and quietly dropping the picture there would shorten a video nobody has rendered yet, with no gate able to tell that from a psalm whose scenes were never written. Measured 2026-10-14: four Psalm 91 documents named one deleted crop, and one of the four was the version in use.");
  ("The digits after the word are not read, only required. How many takes there have been is a fact about the song and no business of this test, but a name ending in the bare word with no number is not a take file this repo has ever written, and treating it as one would let a hand-typed name through.");
  let matched = /_take[0-9]+$/.test(document_name);
  return matched;
}
