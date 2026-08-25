export function bible_versions_english_choices_silent_named(usable, wordings) {
  "Which of the English translations on offer handed over no words in a set of wordings that came back - each against what it calls itself and which of the two places it comes from.";
  "SILENCE IS WORKED OUT BY ABSENCE RATHER THAN BY ASKING EACH TRANSLATION, because a wordings list only ever carries the translations that answered. What is on offer and not in that list is exactly what was offered and read as nothing, which is the whole of the question.";
  "IT TAKES THE WORDINGS ALREADY GATHERED AND NEVER FETCHES THEM, because the two readings built on this differ only in how many passages they gathered - one asks about a single passage and one runs several together and lays them end to end. Fetching here, the one that runs several would have to fetch them again.";
  "THE PLACE A TRANSLATION COMES FROM IS SAID BESIDE ITS NAME, because a whole place going quiet and a single translation going quiet are different faults with different repairs, and a list of names alone cannot tell a reader which of the two they are looking at.";
  arguments_assert(arguments, 2);
  let heard = list_map_property(wordings, bible_folder_key());
  function silent_is(record) {
    let wordless = property_in_list_not(record, bible_folder_key(), heard);
    return wordless;
  }
  let silent = list_filter(usable, silent_is);
  function named(record) {
    let bible_folder = property_get(record, "bible_folder");
    let name = property_get(record, "name");
    let source = bible_folder_source(bible_folder);
    let v = {
      bible_folder,
      name,
      source,
    };
    return v;
  }
  let reported = list_map(silent, named);
  return reported;
}
