import { arguments_assert } from "./arguments_assert.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { ebible_folder_cebuano } from "./ebible_folder_cebuano.mjs";
import { bible_words_written } from "./bible_words_written.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { add } from "./add.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
export async function app_ceb_bible_gloss_dictionary_unwritten_answered() {
  "How often the dictionary on this disk gave a root for a word the Cebuano translation never writes standing alone, set against how often it gave one for a word the translation does write, so that the rate it answers about forms nobody wrote can be read rather than guessed at.";
  "★ A LOOKUP THAT SUCCEEDS ON A CUT-UP WORD INVENTS A ROOT FOR IT, AND SUCCEEDING IS THEN THE WARNING RATHER THAN THE CONFIRMATION. Reading twenty-one rows by hand turned up gamhana, cut from gamhanang, answered galam; hitas, cut from kahitas-an, answered hita, which is a thigh; guliang answered ligo. Each of those is a real word of the language that the mangled form happens to be spelled near, so the answer looks exactly like a good one. This asks how far that reaches instead of leaving it at three examples.";
  "The two rates together are the reading and neither alone is. A dictionary that answers about half of everything says nothing by answering about a cut-up form. One that answers nearly everything it is asked has no refusal in it at all, and every answer it gave about a form nobody wrote is then worth as much as its silence would have been. The measurement below lands between those two and nearer the first, which was not what the hand-read examples pointed at.";
  "Never written alone does not mean not a word. This translation writes hibulong only with something attached to it, and hibulong is an ordinary Cebuano stem; so the unwritten pile holds real words beside the cut-up ones and the count is an exposure rather than a fault list. What it prices is how much of the store rests on answers that had nothing checking them.";
  "Measured: 10722 words have been asked, and 10356 of them are words the translation writes standing alone. It gave a root for 77.4 percent of those. Of the 366 it was asked about that the translation never writes alone, it gave a root for 33.6 percent - 123 answers. So it does refuse, and it refuses more than twice as readily on a form nobody wrote, which is more discrimination than the three hand-read examples suggested.";
  "That is the reassuring half and the 366 is the other half. Three words in a hundred that were asked about are forms this translation never writes, and reading the 123 it answered shows both kinds side by side: hibalo, higugma, hibulong, awayan, balantay and dangpan are ordinary stems, while ad answered alad, at answered alat, dag answered da, bung answered bulong and gipakig answered gipak are fragments being given roots. The exposure is small and it is real, and the count is the size of it rather than a list of faults.";
  "The dictionary is read off the disk and nothing is asked of the site.";
  arguments_assert(arguments, 0);
  let known = await binisaya_words_known();
  let asked = object_property_names(known);
  let bible_folder = ebible_folder_cebuano();
  let written = await bible_words_written(bible_folder);
  let lowered = list_map_unique(written, text_lower_to);
  let written_asked = 0;
  let written_answered = 0;
  let unwritten_asked = 0;
  let unwritten_answered = 0;
  let unwritten_rows = [];
  function word_read(word) {
    let held = property_get(known, word);
    let root = property_get_or_null(held, "root");
    let missing = null_is(root);
    let bare = missing ? true : equal(root, "");
    let answered = not(bare);
    let item = text_lower_to(word);
    let there = list_includes(lowered, item);
    if (there) {
      written_asked = add(written_asked, 1);
      if (answered) {
        written_answered = add(written_answered, 1);
      }
      return;
    }
    unwritten_asked = add(unwritten_asked, 1);
    if (answered) {
      unwritten_answered = add(unwritten_answered, 1);
      list_add(unwritten_rows, {
        word: word,
        root: root,
      });
    }
  }
  each(asked, word_read);
  let r = {
    asked: list_size(asked),
    written_asked: written_asked,
    written_answered: written_answered,
    unwritten_asked: unwritten_asked,
    unwritten_answered: unwritten_answered,
    unwritten_rows: unwritten_rows,
  };
  return r;
}
