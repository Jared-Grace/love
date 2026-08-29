import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function bible_glyph_chapter_references() {
  arguments_assert(arguments, 0);
  ("Every chapter the picture Bible has written, as its code and the words a reader knows it by, and nothing else about any of them.");
  ("IT IS A SECOND COPY OF SOMETHING ",
    fn_name("bible_glyph_chapters"),
    " ALREADY KNOWS, AND THE COPY IS THE POINT. That list is built by calling each chapter, so anything importing it carries all twenty five chapters: four hundred and forty KiB of verses, measured on the twenty eighth of August. This is fifty short words, and it lets a page draw the whole way around this Bible - the list of chapters, the arrows between them, the reference in the bar - without carrying a single verse.");
  ("THE REFERENCE IS HERE AND NOT ONLY THE CODE, because the code is what a link spells and the reference is what a person reads, and every screen that offers a chapter has to show one and carry the other. Holding only the codes meant the page could say whether a chapter existed but not what to call it, and the only way to the name was the whole Bible.");
  ("A COPY DRIFTS, so ",
    fn_name("bible_glyph_chapter_references_gate_run"),
    " holds the two together and prints the list to paste when they part. Nothing here is authored - every word of it is already spelled in a chapter file - so the gate can always say exactly what belongs.");
  ("In the order Scripture puts them, which is the order a reader meets them in and not the order they were written in. The stored order is a build log; this is the list as the page shows it, so the arrows either side of a chapter and the rows of the index agree without anybody keeping a second order in step.");
  let references = [
    {
      chapter_code: "EXO20",
      reference: "Exodus 20",
    },
    {
      chapter_code: "DEU30",
      reference: "Deuteronomy 30",
    },
    {
      chapter_code: "JDG13",
      reference: "Judges 13",
    },
    {
      chapter_code: "PSA023",
      reference: "Psalm 23",
    },
    {
      chapter_code: "PSA029",
      reference: "Psalm 29",
    },
    {
      chapter_code: "PSA100",
      reference: "Psalm 100",
    },
    {
      chapter_code: "PSA136",
      reference: "Psalm 136",
    },
    {
      chapter_code: "PSA138",
      reference: "Psalm 138",
    },
    {
      chapter_code: "EZK18",
      reference: "Ezekiel 18",
    },
    {
      chapter_code: "EZK33",
      reference: "Ezekiel 33",
    },
    {
      chapter_code: "JHN01",
      reference: "John 1",
    },
    {
      chapter_code: "JHN03",
      reference: "John 3",
    },
    {
      chapter_code: "JHN04",
      reference: "John 4",
    },
    {
      chapter_code: "JHN09",
      reference: "John 9",
    },
    {
      chapter_code: "JHN10",
      reference: "John 10",
    },
    {
      chapter_code: "JHN14",
      reference: "John 14",
    },
    {
      chapter_code: "JHN17",
      reference: "John 17",
    },
    {
      chapter_code: "JHN20",
      reference: "John 20",
    },
    {
      chapter_code: "1JN01",
      reference: "1 John 1",
    },
    {
      chapter_code: "1JN02",
      reference: "1 John 2",
    },
    {
      chapter_code: "1JN03",
      reference: "1 John 3",
    },
    {
      chapter_code: "1JN04",
      reference: "1 John 4",
    },
    {
      chapter_code: "1JN05",
      reference: "1 John 5",
    },
    {
      chapter_code: "2JN01",
      reference: "2 John",
    },
    {
      chapter_code: "3JN01",
      reference: "3 John",
    },
    {
      chapter_code: "JUD01",
      reference: "Jude",
    },
  ];
  return references;
}
