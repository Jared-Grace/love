export function ebible_book_division_uncategorized() {
  "the section a book falls into when no genre section of the 66-book canon claims it (a different canon, e.g. deuterocanon), grouped under a testament of its own so nothing is ever silently hidden. it holds no book codes because membership is decided by exclusion, and it lives here so the book picker and the search results call it the same thing";
  let division = {
    name: "Uncategorized",
    testament: "Other",
    book_codes: [],
  };
  return division;
}
