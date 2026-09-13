import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_timing_chosen_first() {
  arguments_assert(arguments, 0);
  ("The recording the timing screen opens on when this device has never been used to time one.");
  ("IT IS ONLY EVER THE FIRST ANSWER, not the answer. Every visit after the first opens on whatever was last worked on, so this is read once in the life of a device and then never again. That is why it can be a psalm picked by hand rather than anything cleverer: being wrong here costs one press, and only once.");
  ("The ends and the mark are empty, which is how the rest of this screen says a whole chapter in its plain recording. A device that has never timed anything has no take to open on, and empty is the one answer that is true of every psalm rather than a guess about this one.");
  let first = {
    book_code: "PSA",
    chapter_number: 149,
    verse_first: "",
    verse_last: "",
    mark: "",
  };
  return first;
}
