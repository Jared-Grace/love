export function ebible_book_name_aliases() {
  "The book names people spell more than one way, keyed by the spelling most of these bibles use: Psalm for Psalms, and Song of Solomon or Song of Songs for Song.";
  "★ ONE LIST FOR EVERY READER OF A BOOK NAME, so a passage line and a message heading cannot come to disagree about which spellings name a book.";
  let r = {
    Psalms: ["Psalm"],
    Song: ["Song of Solomon", "Song of Songs"],
  };
  return r;
}
