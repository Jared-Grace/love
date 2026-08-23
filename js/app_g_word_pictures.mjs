import { app_shared_dev_overlay_status } from "./app_shared_dev_overlay_status.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_word_pictures_word_block } from "./app_g_word_pictures_word_block.mjs";
import { app_g_word_pictures_api } from "./app_g_word_pictures_api.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_clear } from "./html_clear.mjs";
import { words_game_taught_glosses } from "./words_game_taught_glosses.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_div } from "./html_div.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function app_g_word_pictures() {
  "The #word_pictures review bench: every taught word that has a picture, with each attempt ever drawn for it laid out beside the others, the word's own gloss and explain underneath, and the three presses the review is made of - keep this one, change what to ask for, ask for another.";
  "THE ATTEMPTS ARE SIDE BY SIDE BECAUSE THAT IS THE ONLY WAY THE QUESTION IS ANSWERABLE. Which attempt to keep is a comparison, and a screen showing one picture at a time asks a reader to hold the other one in their head. Everything else on this page is arranged around that row.";
  "THE PRESS IS BESIDE THE PICTURE IT IS ABOUT, and it did not start that way. The judgments used to be read off this page and then typed into a terminal by hand, which meant the person looking and the person recording were the same person at two keyboards, with the word and the number carried between them in their head. A wrong number typed there names a real file and so is accepted in silence. Here the number is never typed at all: it is the one already under the picture that was pressed.";
  "IT ASKS THE SERVER FOR ITS TABLES RATHER THAN CARRYING THEM. Drawing a picture writes a new file and rewrites the list of what is on disk, and a list compiled into this page is a copy of how that folder looked when the page was last built - so a page carrying its own copy would take the press, spend the money, and then show the same attempts as before. That reads as the draw having failed. Asked over the seam, every redraw is answered by a reader started after the write.";
  "DRAWING TAKES TWO PRESSES because it is the one press here that spends money, and a hand landing on the wrong word costs something no undo gets back. The second press is the button itself saying what it is about to do, not a box popped over the page: the browser's own confirm box stops everything the page is doing until somebody clears it, which is worse than the mistake it prevents.";
  "THE WORDS ARE UNDER THE PICTURES ON PURPOSE. The picture is offered to a child who is stuck on the word, so the thing being checked is whether the picture says what the sentence says. A sheet showing pictures alone would be checking whether they are good pictures, which is a different and easier question to pass.";
  "THE ATTEMPT NUMBER IS SHOWN AND IS THE FILE'S OWN NUMBER, not a fresh label. That number is already the name of the file and already what a redraw would be counted from, so lettering them a and b would invent a second name for a thing that has one, and the moment somebody said keep b nobody could tell which file they meant.";
  "THE DRAWING WORDING IS PRINTED UNDER EACH ATTEMPT, quietly, because half of what this sheet turns up is not a bad draw but a wording that asked for the wrong thing - and a reader who can only see the picture can say it is wrong without being able to say what to change.";
  "IT IS UNDER THE ATTEMPT AND NOT UNDER THE WORD because two attempts at one word are usually two different askings - the second exists because the first came out wrong and the wording was changed. Printed once at the top it would be the newest wording standing over the oldest picture, which reads as the generator having ignored a wording that in fact nobody ever gave it.";
  "SO THERE ARE TWO KINDS OF WORDING ON THIS PAGE AND THEY MUST NOT BE READ AS ONE. The line under a picture is what was asked for and cannot be changed, because the picture above it was already made from it. The box at the bottom of the word is what will be asked for next, and it is the only writing on this page a press can alter. A reader who edited the line under a picture would be editing history; a reader who expected the box to describe the pictures above it would be wrong for every word whose wording has ever been mended.";
  "IT IS A DEV SCREEN BY CONSTRUCTION. The pictures are addressed at the local server's copy of the ignored folder, so this screen shows nothing at all against the deployed site; a picture that has been chosen gets moved somewhere the site serves, and that move is what puts it in the game.";
  let top = app_shared_dev_overlay_status("Word pictures");
  let column = property_get(top, "column");
  let status_set = property_get(top, "status_set");
  let status_working = property_get(top, "status_working");
  let glosses = words_game_taught_glosses();
  let gap = app_shared_spaced_gap();
  let sheet = html_div(column);
  async function render() {
    "the three tables are asked for before anything is cleared, so a seam that is down leaves the sheet standing as it was instead of blanking the page.";
    let f_name = fn_name("word_pictures_drawn_known");
    let known = await app_g_word_pictures_api(f_name, []);
    let f_name3 = fn_name("word_picture_chosen");
    let chosen = await app_g_word_pictures_api(f_name3, []);
    let f_name4 = fn_name("word_picture_wordings");
    let wordings = await app_g_word_pictures_api(f_name4, []);
    html_clear(sheet);
    let words = object_property_names(known);
    function word_block(word) {
      let r = app_g_word_pictures_word_block(
        word,
        sheet,
        gap,
        glosses,
        chosen,
        known,
        status_working,
        status_set,
        render,
        wordings,
      );
      return r;
    }
    each(words, word_block);
  }
  await render();
}
