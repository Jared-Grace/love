import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function function_span_cut_named_skip_decided_or_null_cases() {
  arguments_assert(arguments, 0);
  ("Runs of lines written out beside the reason a cut under a chosen name should not take them, or beside nothing where it should.");
  ("Four cases for two reasons and a way through, which is the whole of what this reading holds. Both reasons had gone unexercised since the day they were written, because the reading they lived in reached the repo while making up its mind and so could not be handed a run written down anywhere. Handed the repo's answers already decided, it can.");
  ("The words are made up rather than taken from a real function, and the two answers a repository would give are written down as part of the case. So a run that exists nowhere, under a name nothing answers to anywhere, can still be asked about.");
  ("What is checked is what the reason is about and which words it names, never the sentence it says. Those sentences are written for a person and are meant to be improved; pinning them would turn every improvement into a failing gate.");
  ("The second case is the one that pins the order. Its run both starts on the first line of work and carries a name already spoken for, so it is the only case that can tell the two reasons being asked in this order from the same two asked the other way round. The first and the last case tell nothing apart that the others do not - they are here because a reason and the way through both deserve a plain case somebody can read, and neither is worth removing to make a count look tidier.");
  let cases = [
    {
      name: "a run starting on the first line of work is stepped over for where it starts, and the name chosen for it goes unmentioned",
      address_from: text_frozen("list"),
      address_to: text_frozen("count"),
      f_name_new: text_frozen("app_reply_rows_counted"),
      opening_is: true,
      name_taken_is: false,
      skip: {
        about: text_frozen("start"),
        address_from: text_frozen("list"),
        address_to: text_frozen("count"),
        f_name_new: null,
      },
    },
    {
      name: "where the run starts is asked before the name is, so a run at the top of a body is stepped over for that even when its name is already spoken for",
      address_from: text_frozen("held"),
      address_to: text_frozen("drawn"),
      f_name_new: text_frozen("list_add"),
      opening_is: true,
      name_taken_is: true,
      skip: {
        about: text_frozen("start"),
        address_from: text_frozen("held"),
        address_to: text_frozen("drawn"),
        f_name_new: null,
      },
    },
    {
      name: "a run starting lower down, under a name a function already answers to",
      address_from: text_frozen("seen"),
      address_to: text_frozen("kept"),
      f_name_new: text_frozen("property_get"),
      opening_is: false,
      name_taken_is: true,
      skip: {
        about: text_frozen("name"),
        address_from: null,
        address_to: text_frozen("kept"),
        f_name_new: text_frozen("property_get"),
      },
    },
    {
      name: "nothing at all when the run starts lower down and nothing answers to the name chosen for it",
      address_from: text_frozen("sound"),
      address_to: text_frozen("played"),
      f_name_new: text_frozen("app_reply_sound_played"),
      opening_is: false,
      name_taken_is: false,
      skip: null,
    },
  ];
  return cases;
}
