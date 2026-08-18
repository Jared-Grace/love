import { function_name_word_repeated_is } from "./function_name_word_repeated_is.mjs";
import { function_span_opening_is } from "./function_span_opening_is.mjs";
import { text_digits_only } from "./text_digits_only.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_name_lambda_is } from "./js_name_lambda_is.mjs";
import { function_part_name_or_null } from "./function_part_name_or_null.mjs";
import { function_exists } from "./function_exists.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function function_span_cut_skip_or_null(
  f_name,
  address_from,
  address_to,
) {
  "$plain f_name";
  "$plain address_from";
  "$plain address_to";
  arguments_assert(arguments, 3);
  ("Why a run of lines is being stepped over rather than cut out, or nothing at all when there is no reason to step over it.");
  ("The twin of the one beside it, for the other shape of cut, and three of its four reasons over again. A run has no name of its own to be asked about, so it borrows the name at the end of it - which is why the reading about a word the language will not let a function bind is missing here and only there: that one is asked of what a piece reaches out for, and what a run reaches out for is worked out by the cut itself rather than carried on the row.");
  ("Two more are asked here that are asked nowhere else, and both are about the borrowing rather than the cut. A closure carries a name somebody chose for it, so the lift can take that name and be sure of it; a run carries whatever word its last line happens to mention first, and that word is a good name for the run only sometimes. Measured over every run in the repo standing over the ceiling, sixteen of fifty-one borrowed a word that named the run wrongly - so these two are the difference between a walk that names thirty-five runs well and one that names fifty-one runs half well.");
  ("Every one of them is stepped over rather than thrown, because none is a fault. Each names a run somebody could name well in a moment, and a walk that stopped at the first would leave every later run uncut for a reason that had nothing to do with it.");
  ("A third about the borrowing was added on 2026-08-18, after a walk of the whole repo cut sixty-seven runs and six of them came out under a name saying one word twice running. That one is asked of the name rather than of the word, because a word can only be seen to repeat once it stands beside the name it is joining.");
  ("They are asked in this order because each rests on the one before. The first ones ask about the word itself and can be asked straight away; the last ones ask about the name built out of it, and there is no name to ask about until the word is one this repo can spell a name from.");
  let opening_is = await function_span_opening_is(f_name, address_from);
  if (opening_is) {
    let preamble = {
      address_from,
      address_to,
      why: "the run starts on the first line of work in the body, which is where the function keeps the things that are about itself rather than about the work - how many arguments it was called with, and the prose saying what it is for. A cut from there carries all of that away with it, so the function left behind stands with no count of its own arguments and nothing said about it, and the piece cut out is explained as though it were the whole. Would you like to start the run one line lower?",
    };
    return preamble;
  }
  let handed_out_is = js_name_lambda_is(address_to);
  if (handed_out_is) {
    let unnamed = {
      address_to,
      why: "the run ends on a word a pass handed out rather than one anybody chose, so a function carrying that word in its name would stand in the repo where no search for what it does could reach it. Would you like to name that line for what it holds first?",
    };
    return unnamed;
  }
  let counted = text_digits_only(address_to);
  let counted_is = text_empty_not_is(counted);
  if (counted_is) {
    let serial = {
      address_to,
      why: "the run ends on a word with a number counted into it, which is how somebody writes a second one of something rather than how they say what it is, so a function named after it would say only that it was the eighteenth. Would you like to name that line for what it holds first?",
    };
    return serial;
  }
  let known = await function_exists(address_to);
  let answered_to_is = property_get(known, "exists");
  if (answered_to_is) {
    let borrowed = {
      address_to,
      why: "the word the run ends on is one this repo already answers to, so the name would say what the run calls on its last line rather than what the run is for. Would you like to choose the name yourself?",
    };
    return borrowed;
  }
  let f_name_new = function_part_name_or_null(f_name, address_to);
  let named_is = null_not_is(f_name_new);
  if (not(named_is)) {
    let unspelled = {
      address_to,
      why: "the word the run ends on is not spelled the way this repo spells names, so what the run should be called once it stands on its own is for somebody reading it to choose",
    };
    return unspelled;
  }
  let repeated_is = function_name_word_repeated_is(f_name_new);
  if (repeated_is) {
    let doubled = {
      address_to,
      f_name_new,
      why: "the word the run ends on is the word its holder is already called, so the name would say that one word twice running and the second telling would narrow nothing. Would you like to choose the name yourself?",
    };
    return doubled;
  }
  let search = await function_exists(f_name_new);
  let taken = property_get(search, "exists");
  if (taken) {
    let spoken_for = {
      address_to,
      f_name_new,
      why: "a function already answers to the name this run would take, and whether the two are the same work is a question for somebody reading both",
    };
    return spoken_for;
  }
  return null;
}
