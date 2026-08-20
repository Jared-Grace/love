export function ebible_verse_numbers_compatible_is(numbers, numbers_other) {
  "Whether two bibles' verse numbers for one chapter can be read as naming the same verses.";
  "They can when one list holds everything the other does. Same numbers is the plain case; one carrying a verse the other has not is the other, and it is harmless here - the King James keeps verses later manuscripts drop, so its chapter runs one number longer while every number in it still points at the verse a reader would be shown. Only a list holding a number the other has not, in both directions at once, says the two are counting differently.";
  "This on its own cannot see a chapter that was renumbered and happens to keep the same verse numbers anyway, which is why nothing decides on this answer alone - the book it stands in is asked as well.";
  let mine_inside = list_subset_is(numbers, numbers_other);
  let theirs_inside = list_subset_is(numbers_other, numbers);
  let compatible = or(mine_inside, theirs_inside);
  return compatible;
}
