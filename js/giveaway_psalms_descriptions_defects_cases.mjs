import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
export function giveaway_psalms_descriptions_defects_cases() {
  arguments_assert(arguments, 0);
  ("The written cases proving that a box holding a kind of file nothing has ever heard of is a fault the description check names, that a box no sentence can be written for is another, and that a box as the shelf stands is neither.");
  ("★ THE SHELF AS IT STANDS DESCRIBES ITSELF FROM END TO END, SO RUNNING THE CHECK OVER IT PROVES ONLY THAT IT SAYS NOTHING - WHICH IS WHAT A CHECK THAT HAD STOPPED WORKING ALSO SAYS. These cases are the only place either fault is ever seen. The clean case is here from the other side: a check that answered with a fault for every box would pass all of these but that one.");
  ("★ THE UNLISTED KIND CANNOT BE REACHED FROM THE REAL SHELF AT ALL, WHICH IS WHY IT HAS TO BE MADE UP HERE. A box is built by reading the record, and nothing gets into the record without a kind off the fixed list, so no shelf this repo can build will ever hold a kind the list has not got. The fault still has to be watched, because the day someone writes a row by hand or adds a fifth kind to the list without words to say it, the paragraph does not break - it comes out a clause short and reads perfectly.");
  ("★ THE BOX HOLDING THREE FILES OF ONE UNHEARD-OF KIND AND TWO OF ANOTHER IS THE CASE THAT PINS THE COUNTING, AND IT IS THE ONE A REWRITE WOULD GET WRONG. It is two faults and not five: a box with a hundred and thirty-six pictures in it has one thing wrong with it, not a hundred and thirty-six, and a report that said otherwise would bury the other boxes. Written one line differently the check would report per file, and every case here but this one would still pass.");
  ("★ THE BOX WITH NOTHING IN IT IS THE LOUD FAULT, AND IT IS WRITTEN DOWN BECAUSE IT IS THE ONLY ONE THE DESCRIPTION ITSELF REFUSES. The sentence is built by counting the files of each kind, so an empty box would trail off after the word includes - the description stops rather than publish that, and this check reports the stopping instead of letting an upload run into it halfway along the shelf.");
  ("★ THE LAST CASE SHOWS THE TWO FAULTS ARRIVING TOGETHER, WHICH IS WHAT A BOX OF NOTHING BUT AN UNKNOWN KIND REALLY IS. Every file in it is uncounted, so the sentence has nothing to say and refuses, and the unknown kind is named as well. Both have to come out, because the refusal alone would send a reader looking for an empty box and the unlisted kind alone would suggest a box that still described itself.");
  ("The boxes are spelled out rather than read off the record, so that a case says the same thing next year. A case that read the record would change its own meaning every time a song was added - and it could not reach the unlisted kind at all, since the record refuses to hold one.");
  function box(identifier, chapter, kinds) {
    let files = [];
    for (let kind of kinds) {
      let file = {
        kind: kind,
        path_in_item: identifier,
      };
      list_add(files, file);
    }
    let r = {
      identifier: identifier,
      chapter: chapter,
      files: files,
    };
    return r;
  }
  let whole = box("JESUSrosetolife_psa147", 147, [
    "song",
    "picture",
    "text",
    "text",
    "text",
  ]);
  let stray = box("JESUSrosetolife_psa148", 148, [
    "song",
    "text",
    "screen_capture",
  ]);
  let strays = box("JESUSrosetolife_psa149", 149, [
    "song",
    "screen_capture",
    "screen_capture",
    "screen_capture",
    "sheet_music",
    "sheet_music",
  ]);
  let empty = box("JESUSrosetolife_psa150", 150, []);
  let stray_only = box("JESUSrosetolife_psa001", 1, [
    "screen_capture",
    "screen_capture",
  ]);
  let cases = [
    {
      items: [whole],
      faults: "",
      why: "A box as every box on the shelf is today: the singing of a psalm, a painting from it, and that psalm's words in three renderings. Every kind in it has words to say it, so the sentence comes out whole and nothing is reported.",
    },
    {
      items: [stray],
      faults: "file_kind_unlisted",
      why: "A box carrying one file of a kind nothing has heard of. This is the silent fault: the sentence still reads perfectly, promising singing and words, and the reader who downloads it finds something else in there as well that nobody mentioned.",
    },
    {
      items: [strays],
      faults: "file_kind_unlisted,file_kind_unlisted",
      why: "Three files of one unheard-of kind and two of another. Two faults and not five - the box has two things wrong with it, and a report per file would bury every other box on the shelf under one badly built one.",
    },
    {
      items: [empty],
      faults: "description_refused",
      why: "A box with no files in it at all. The sentence is counted off the files, so there is nothing to say after the word includes and the description stops rather than publish a sentence that trails off. Asked here, the whole shelf answers before anything has left this machine.",
    },
    {
      items: [stray_only],
      faults: "file_kind_unlisted,description_refused",
      why: "A box holding nothing but an unheard-of kind, which is both faults at once: every file in it goes uncounted, so the sentence has nothing left to say and refuses, and the kind is named as well. Either fault alone would send somebody looking for the wrong thing.",
    },
  ];
  return cases;
}
