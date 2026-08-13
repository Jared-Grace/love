export function ebible_bible_folder_apart_maximum() {
  "How far from a real bible folder a mistyped one may be before this repo stops guessing what was meant.";
  "Two edits, where the language codes next door allow only one, and the difference is the length of the words. A code is two or three letters, so nearly every code is two edits from nearly every other and guessing at two would answer anything at all with a list. A folder name is six to ten letters and hardly any two of them are close, so two edits still points at one bible rather than at the whole shelf.";
  let apart = 2;
  return apart;
}
