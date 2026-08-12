export function app_shared_bible_biblehub_buttons(
  parent,
  chapter_name,
  book_name,
  verse_number,
) {
  "the three ways out to biblehub for one verse - the original languages side by side, the other English translations side by side, and what the commentators said. they open the same row in both bible readers, in this order, so a reader switching between the whole chapter and the single verse finds the same button under the same thumb";
  "written once because they were written twice and then drifted: the whole-chapter reader grew a share button on the end of this row and the single-verse reader did not, which is what a row copied into two files does the first time somebody adds to one of them. what still differs between the two rows genuinely differs - each reader wires its own copy and its own way across to the other reader - so only the part that is the same is here";
  html_button_biblehub_open_interlinear(
    parent,
    chapter_name,
    book_name,
    verse_number,
  );
  html_button_biblehub_open_parallel(
    parent,
    chapter_name,
    book_name,
    verse_number,
  );
  html_button_biblehub_open_commentary(
    parent,
    chapter_name,
    book_name,
    verse_number,
  );
}
