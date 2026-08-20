import { equal_by_json_lambda } from "./equal_by_json_lambda.mjs";
export function ebible_verse_numbers_compatible_is(numbers, numbers_other) {
  "Whether two bibles number one chapter's verses the same way, which is to say they name exactly the same numbers in the same order.";
  "Letting one hold a verse the other has not was tried and is wrong, however reasonable it sounds. A moved psalm usually lands on one a verse shorter, so the short list sits inside the long one and a renumbering reads as agreement: against the Douay-Rheims that reading admitted all hundred and fifty Psalms, the whole thing this is here to keep out.";
  "This on its own still cannot see a chapter that was renumbered and happens to keep the very same verse numbers, which is why nothing decides on this answer alone - the book it stands in is asked as well.";
  let same_is = equal_by_json_lambda(numbers_other);
  let compatible = same_is(numbers);
  return compatible;
}
