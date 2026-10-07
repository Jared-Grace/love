export function bible_glyph_roots_hebrew_drafted() {
  "The Old Testament words seated in bulk by the AI rather than one at a time in the hand-written table, one row each: the Strong's number, the root family it is filed under, its picture and a short gloss. The hand-written table merges these in, so every reader sees one table.";
  "THE HUMAN ASKED FOR THE WHOLE BIBLE ON 2026-10-07, names first and then everything else, with the AI deciding and readers correcting later. Seating thirteen thousand words one paragraph at a time would never finish, so the reasons are written once per rule here instead of once per word, and a word that needs a reason of its own goes in the hand-written table instead.";
  "NAMES ARE DRAWN BY WHAT STRONG'S SAYS THEY MEAN. A name made of a root and God is the two pictures in the order the name says them, with no tag, the way Joshua is I AM and the lifebuoy: Isaiah, Jah has saved, is the lifebuoy and I AM, and Jehoshaphat, Jehovah judged, is I AM and the scales. Yah, Yeho and the -iah ending are I AM; El is the burning heart. A name made of one root is that root's picture and the name tag. Where the root's picture is two parts, the part that carries the meaning stands, so hearing is the ear without the loudspeaker.";
  "A NAME IS FILED UNDER THE ROOT IT IS MADE FROM, so Samuel and Ishmael, both God hears, are one family and may share one picture without colliding; the letters under the picture still tell them apart.";
  "A NAME WAITS rather than half-drawn when Strong's calls it uncertain, when the root it names has no picture yet, or when the meaning Strong's gives is not what that root's picture shows. Saul and Judas wait by the human's choice.";
  "EACH ROW IS WRITTEN AS FOUR WORDS IN A LIST, number, root, picture, gloss, because thousands of rows spelled as objects would bury the decisions in their own punctuation.";
  let rows = [];
  let drafted = [];
  for (let row of rows) {
    drafted.push({
      strong: row[0],
      root: row[1],
      glyph: row[2],
      gloss: row[3],
    });
  }
  return drafted;
}
