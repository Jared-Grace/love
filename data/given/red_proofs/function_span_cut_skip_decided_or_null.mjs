import { function_span_cut_skip_decided_or_null } from "../../../js/function_span_cut_skip_decided_or_null.mjs";
import { function_span_cut_skip_decided_or_null_cases } from "../../../js/function_span_cut_skip_decided_or_null_cases.mjs";
import { js_name_lambda_is } from "../../../js/js_name_lambda_is.mjs";
import { text_numbered_is } from "../../../js/text_numbered_is.mjs";
import { text_size_1 } from "../../../js/text_size_1.mjs";
import { text_lower_is } from "../../../js/text_lower_is.mjs";
import { text_letters_is } from "../../../js/text_letters_is.mjs";
import { text_capitals_apart_is } from "../../../js/text_capitals_apart_is.mjs";
import { text_capitals_underscore_lower } from "../../../js/text_capitals_underscore_lower.mjs";
import { function_name_word_repeated_is } from "../../../js/function_name_word_repeated_is.mjs";

("Fifteen wrong ways of deciding whether a run of lines should be stepped over rather than cut out, kept so the corpus can be asked again whether it still tells them apart.");

("The order the reasons are asked in is written out here rather than borrowed, because that order is the thing under test. The small readings each reason rests on - what a handed-out word looks like, what a counted word looks like, whether a name says one word twice - are imported, because each of those is its own function with its own corpus and a wrong version of one of them would be a check on something else.");

("The one reading that is written out again is the working out of the name a run would take. Three of the wrong versions here are wrong about exactly that, so a version borrowing the real one could not have been wrong about it at all.");

function name_of(f_name, address_to, options) {
  if (options.name_from_word_only) {
    return address_to;
  }
  if (js_name_lambda_is(address_to)) {
    return null;
  }
  let nested = address_to;
  if (!text_lower_is(address_to)) {
    if (options.capitals_refused) {
      return null;
    }
    if (!text_letters_is(address_to)) {
      return null;
    }
    if (!text_capitals_apart_is(address_to)) {
      return null;
    }
    nested = text_capitals_underscore_lower(address_to);
  }
  let held = f_name + "_";
  if (!options.holder_joined_always && nested.startsWith(held)) {
    return nested;
  }
  return f_name + "_" + nested;
}

function reader_of(options) {
  function answer(one) {
    let f_name = one.f_name;
    let address_from = one.address_from;
    let address_to = one.address_to;
    let opening_is = one.opening_is;
    let answered_to_is = one.answered_to_is;
    let name_taken_is = one.name_taken_is;
    let from = options.address_from_kept ? address_from : null;

    function start_row() {
      return {
        about: "start",
        address_from,
        address_to,
        f_name_new: null,
      };
    }

    function name_row(f_name_new) {
      return {
        about: "name",
        address_from: from,
        address_to,
        f_name_new,
      };
    }

    function plain_row() {
      let carried = options.f_name_new_always
        ? name_of(f_name, address_to, options)
        : null;
      return name_row(carried);
    }

    function start_hit() {
      if (options.start_dropped) {
        return false;
      }
      if (options.start_inverted) {
        return !opening_is;
      }
      return opening_is;
    }

    function name_reason() {
      if (!options.handed_out_dropped && js_name_lambda_is(address_to)) {
        return plain_row();
      }
      if (!options.numbered_dropped && text_numbered_is(address_to)) {
        return plain_row();
      }
      if (!options.letter_dropped && text_size_1(address_to)) {
        return plain_row();
      }
      if (!options.answered_to_dropped && answered_to_is) {
        return plain_row();
      }
      let f_name_new = name_of(f_name, address_to, options);
      if (!options.unspelled_dropped && f_name_new === null) {
        return plain_row();
      }
      if (
        !options.repeated_dropped &&
        function_name_word_repeated_is(f_name_new)
      ) {
        return name_row(f_name_new);
      }
      if (!options.name_taken_dropped && name_taken_is) {
        return name_row(f_name_new);
      }
      return null;
    }

    if (!options.start_last) {
      if (start_hit()) {
        return start_row();
      }
      return name_reason();
    }
    let reason = name_reason();
    if (reason !== null) {
      return reason;
    }
    if (start_hit()) {
      return start_row();
    }
    return null;
  }
  return answer;
}

export const red_proof = {
  fn: function_span_cut_skip_decided_or_null.name,
  cases: function_span_cut_skip_decided_or_null_cases,
  expected: "skip",
  described: "name",
  wrong: {
    start_dropped: reader_of({ start_dropped: true }),
    start_inverted: reader_of({ start_inverted: true }),
    start_last: reader_of({ start_last: true }),
    handed_out_dropped: reader_of({ handed_out_dropped: true }),
    numbered_dropped: reader_of({ numbered_dropped: true }),
    letter_dropped: reader_of({ letter_dropped: true }),
    answered_to_dropped: reader_of({ answered_to_dropped: true }),
    unspelled_dropped: reader_of({ unspelled_dropped: true }),
    repeated_dropped: reader_of({ repeated_dropped: true }),
    name_taken_dropped: reader_of({ name_taken_dropped: true }),
    address_from_kept: reader_of({ address_from_kept: true }),
    f_name_new_always: reader_of({ f_name_new_always: true }),
    name_from_word_only: reader_of({ name_from_word_only: true }),
    capitals_refused: reader_of({ capitals_refused: true }),
    holder_joined_always: reader_of({ holder_joined_always: true }),
  },
  allowed: {
    handed_out_dropped:
      "It stops asking whether the word the run ends on is one a pass handed out, and every case still comes back the same, because the working out of the name asks that very question itself and hands back nothing for such a word - so the run is turned down one reason further along for the same thing. What changes is only the sentence the person reads, and this corpus deliberately does not hold the sentences. It would stop being the same the day a handed-out word could be spelled into a name, and the reason left saying it out loud is what would then be missing.",
  },
};
