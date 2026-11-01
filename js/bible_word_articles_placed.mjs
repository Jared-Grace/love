import { fn_name } from "./fn_name.mjs";
import { bible_word_person_places } from "./bible_word_person_places.mjs";
import { equal } from "./equal.mjs";
import { bible_reference_in_places } from "./bible_reference_in_places.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
export function bible_word_articles_placed(rows, chapter_code, verse_number) {
  "The articles a tapped word matched, narrowed by where the verse stands: an article placed on one person is kept only in that person's passages, and inside them it pushes out the unplaced articles under the same name.";
  "$plain rows";
  "$plain chapter_code";
  "$plain verse_number";
  "the rows are articles one site's table matched, each a name, what it is about, its address and sometimes a word for the one person it is about; the code and number say which verse was tapped. All are data and none runs.";
  ("A PLAIN MARY OPENS THE MARY THE PASSAGE IS ABOUT, by the places in ",
    fn_name("bible_word_person_places"),
    ": in Luke 10 a site's article on Mary of Bethany is offered, and its articles on Mary Magdalene and on the Mary who is not placed are not.");
  ("A SITE WITH NO PLACED ARTICLE UNDER A NAME IS LEFT AS IT WAS - Easton's one article on every Mary is offered wherever Mary is tapped.");
  let places = bible_word_person_places();
  let kept = [];
  let names_placed = [];
  for (let row of rows) {
    let person = row[3];
    if (equal(person, undefined)) {
      continue;
    }
    if (bible_reference_in_places(chapter_code, verse_number, places[person])) {
      kept.push(row);
      names_placed.push(row[0]);
    }
  }
  ("ONE ARTICLE IS OFFERED ONCE, even when it is placed on two people the verse could mean.");
  let r = [];
  let files = [];
  for (let row of rows) {
    let placed = not_equal(row[3], undefined);
    let here = kept.includes(row);
    let pushed_out = not(placed) && names_placed.includes(row[0]);
    let offered = (placed && here) || (not(placed) && not(pushed_out));
    if (offered && not(files.includes(row[2]))) {
      files.push(row[2]);
      r.push(row);
    }
  }
  return r;
}
