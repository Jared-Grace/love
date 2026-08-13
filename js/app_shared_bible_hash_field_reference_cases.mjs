export function app_shared_bible_hash_field_reference_cases() {
  "References written into a link the wrong way, each with the corrections a reader should be offered for it.";
  "A handful of books rather than the whole bible, because what is being asked is how the offering behaves and not which books exist - and a short list is one a reader of the corpus can hold in their head while reading what it expects. The books that are here are the ones that crowd around John, since a near miss is only interesting where there is something else nearby to be confused with.";
  "Written in the form a link carries, plusses and all, because that is what the field is handed. A correction is offered back in the same form for the same reason - it is written straight back into the address.";
  let books = [
    {
      book_code: "GEN",
      text: "Genesis",
    },
    {
      book_code: "JOS",
      text: "Joshua",
    },
    {
      book_code: "JOB",
      text: "Job",
    },
    {
      book_code: "JHN",
      text: "John",
    },
    {
      book_code: "1JN",
      text: "1 John",
    },
    {
      book_code: "2JN",
      text: "2 John",
    },
    {
      book_code: "JON",
      text: "Jonah",
    },
  ];
  let cases = [
    {
      books,
      reference: "Jhon+3:16",
      suggestions: ["John+3:16", "Jonah+3:16"],
      why: "Two letters swapped in the book name, and the chapter and verse the reader wrote is carried into every offer untouched.",
    },
    {
      books,
      reference: "1+Jhon+3:2",
      suggestions: ["1 John+3:2"],
      why: "A book whose name is two words splits at the last space, so the number in front of it counts as part of the book and not as the chapter.",
    },
    {
      books,
      reference: "JHN+3:16",
      suggestions: ["John+3:16"],
      why: "A link elsewhere in the page carries books as codes, so somebody may well write one here - and the offer turns it into the name a reference is read by.",
    },
    {
      books,
      reference: "Jhon",
      suggestions: [],
      why: "No chapter anywhere in it, so there is nothing to offer back that would not have a chapter invented for it.",
    },
    {
      books,
      reference: "Zzzzzz+3:16",
      suggestions: [],
      why: "Nothing we have is spelled anything like it, and a wild guess is worse than saying so.",
    },
  ];
  return cases;
}
