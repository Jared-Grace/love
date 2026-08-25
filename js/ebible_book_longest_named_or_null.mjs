export function ebible_book_longest_named_or_null(line, names) {
  "The book name a hand-written passage line opens with, taken from a list of names, or nothing where the line opens with none of them.";
  "A NAME IS ONLY MATCHED WHERE THE NEXT CHARACTER IS A SPACE. Matched on the bare name, a bible whose list calls the book Psalm swallows the line Psalms 89:1 as well, and what is left after the name is stripped is the letter s - carried on as if it were a chapter and verse, and raising further downstream rather than here. One passage raising empties the whole reading of that bible, so it reads as carrying nothing at all, which cannot be told apart from one nobody uploaded. Four translations looked exactly like that.";
  "THE LONGER OF TWO NAMES THAT BOTH FIT WINS, so a list holding both Song and Song of Solomon cannot take the shorter and leave of Solomon behind as a chapter.";
  "MATCHING IGNORES UPPER AND LOWER CASE, which is the whole of what stood between the all-capitals bible and being readable, and costs nothing anywhere else because two books of one bible never differ by case alone.";
  "The list of names is handed in rather than fetched, because the same line is asked of this bible's own spellings and of the ordinary English ones, and which list answered is what the caller does the next thing with.";
  arguments_assert(arguments, 2);
  let lowered = text_lower_to(line);
  let longest = "";
  function lambda(book_text) {
    let book_prefix = text_combine(book_text, " ");
    let prefix_lowered = text_lower_to(book_prefix);
    let starts = text_starts_with(lowered, prefix_lowered);
    if (starts) {
      let book_size = text_size(book_text);
      let longest_size = text_size(longest);
      let longer = greater_than(book_size, longest_size);
      if (longer) {
        longest = book_text;
      }
    }
  }
  each(names, lambda);
  let none = text_empty_is(longest);
  let found = ternary(none, null, longest);
  return found;
}
