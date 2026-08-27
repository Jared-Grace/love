export function sword_markup_removed_cases() {
  "What a verse of a Sword module has to come to once its marking is taken off, and why each one is worth holding.";
  "THE CASES ARE REAL ENTRIES OUT OF THE ROTHERHAM MODULE, not shapes invented to be easy. Each was read out of the module at the index the walker reaches it by, so a case passing means the reader handles what is actually on disk rather than what somebody imagined would be there.";
  "The closing marks are the reason this corpus exists. They do not sit on lines of their own - they ride on the end of the last verse of whatever they close - so they arrive stuck to real words, and every verse that ends a chapter carries one. A reader that left them in would put a tag in front of a person at the end of every chapter in the bible.";
  let plain = {
    markup: "In the beginning, God created the heavens and the earth.",
    text: "In the beginning, God created the heavens and the earth.",
    why: "a verse carrying no marking at all comes back exactly as it went in, which is the ordinary case and most of the bible",
  };
  let preverse = {
    markup:
      '<div type="x-milestone" subType="x-preverse" sID="pv1"/><div sID="gen6" type="paragraph"/> <div type="x-milestone" subType="x-preverse" eID="pv1"/>And God said—Light, be, And light was.',
    text: "And God said—Light, be, And light was.",
    why: "a verse that begins a paragraph carries three marks in front of its first word, and none of them is anything a reader sees",
  };
  let chapter_closed = {
    markup:
      'and God called the light, day, but the darkness, called he, night. So it was evening—and it was morning, one day. <div eID="gen6" type="paragraph"/>',
    text: "and God called the light, day, but the darkness, called he, night. So it was evening—and it was morning, one day.",
    why: "the verse that ends a paragraph carries the closing mark stuck to its last word, and the words must come back without it",
  };
  let book_closed = {
    markup:
      'So Joseph died, being a hundred and ten years old,—and they embalmed him, and put him in a coffin in Egypt. <div eID="gen1" type="book"/>',
    text: "So Joseph died, being a hundred and ten years old,—and they embalmed him, and put him in a coffin in Egypt.",
    why: "the last verse of a book carries the book's own closing mark, so the mark a careless reader mistakes for a heading is here proved to be part of a verse",
  };
  let title = {
    markup:
      '<title type="psalm">A Melody of David.</title> Yahweh, is my shepherd—I shall not want:',
    text: "A Melody of David. Yahweh, is my shepherd—I shall not want:",
    why: "a psalm's title is words Rotherham printed, so the marking around it goes and the words themselves stay",
  };
  let bracket = {
    markup: "The favour of the Lord Jesus [ Christ ] be with the saints.",
    text: "The favour of the Lord Jesus [ Christ ] be with the saints.",
    why: "Rotherham's own square brackets mark a word he judged doubtful and are part of what he wrote, so nothing here may treat them as marking",
  };
  let cases = [plain, preverse, chapter_closed, book_closed, title, bracket];
  return cases;
}
