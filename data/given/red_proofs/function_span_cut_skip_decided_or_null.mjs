import { function_span_cut_skip_decided_or_null } from "../../../js/function_span_cut_skip_decided_or_null.mjs";
import { function_span_cut_skip_decided_or_null_cases } from "../../../js/function_span_cut_skip_decided_or_null_cases.mjs";
import { js_name_lambda_is } from "../../../js/js_name_lambda_is.mjs";
import { text_numbered_is } from "../../../js/text_numbered_is.mjs";
import { text_size_1 } from "../../../js/text_size_1.mjs";
import { function_part_name_or_null } from "../../../js/function_part_name_or_null.mjs";
import { function_name_word_repeated_is } from "../../../js/function_name_word_repeated_is.mjs";

("Sixteen wrong ways of deciding whether a run of lines should be stepped over, kept so the corpus can be asked again whether it still tells them apart.");

("This is the first reader proved this way that is not a checker of numbers - it hands back a reason or nothing at all, and what a caller acts on is which reason fired and which two words it names. So the wrong versions here are mostly reasons removed, reasons put in a different order, and reasons naming the wrong word, rather than arithmetic done differently.");

("The questions only a repository can answer arrive already decided in the case, which is what lets a wrong version of this be written at all. A reader that had to look a name up could only be run against a repository, and then what it was checked against would be whatever the repository happened to hold.");

function skip_start(address_from, address_to, options) {
  let named = {
    about: options.about_always_name ? "name" : "start",
    address_from: options.start_remembers_end_word ? null : address_from,
    address_to,
    f_name_new: null,
  };
  return named;
}

function skip_name(address_from, address_to, f_name_new, options) {
  let named = {
    about: "name",
    address_from: options.name_reasons_carry_from ? address_from : null,
    address_to,
    f_name_new: options.name_new_always_null ? null : f_name_new,
  };
  return named;
}

function name_new_of(f_name, address_to, options) {
  if (options.holder_name_joined_always) {
    let joined = f_name + "_" + address_to;
    return joined;
  }
  let worked = function_part_name_or_null(f_name, address_to);
  return worked;
}

function spellable_is(f_name, address_to, options) {
  if (options.camel_not_spellable) {
    let plain = address_to === address_to.toLowerCase();
    return plain;
  }
  let worked = function_part_name_or_null(f_name, address_to);
  let named = worked !== null;
  return named;
}

function reader_of(options) {
  function answer(one) {
    let f_name = one.f_name;
    let address_from = one.address_from;
    let address_to = one.address_to;
    let opening_is = one.opening_is;
    let answered_to_is = one.answered_to_is;
    let name_taken_is = one.name_taken_is;
    let opening_first = opening_is && !options.opening_last;
    if (opening_first && !options.no_opening) {
      return skip_start(address_from, address_to, options);
    }
    let given = options.name_new_always_given;
    if (js_name_lambda_is(address_to) && !options.no_handed_out) {
      let f_name_new = given ? name_new_of(f_name, address_to, options) : null;
      return skip_name(address_from, address_to, f_name_new, options);
    }
    if (text_numbered_is(address_to) && !options.no_numbered) {
      let f_name_new = given ? name_new_of(f_name, address_to, options) : null;
      return skip_name(address_from, address_to, f_name_new, options);
    }
    if (text_size_1(address_to) && !options.no_one_letter) {
      let f_name_new = given ? name_new_of(f_name, address_to, options) : null;
      return skip_name(address_from, address_to, f_name_new, options);
    }
    if (answered_to_is && !options.no_answered_to) {
      let f_name_new = given ? name_new_of(f_name, address_to, options) : null;
      return skip_name(address_from, address_to, f_name_new, options);
    }
    if (!spellable_is(f_name, address_to, options) && !options.no_unspelled) {
      let f_name_new = given ? name_new_of(f_name, address_to, options) : null;
      return skip_name(address_from, address_to, f_name_new, options);
    }
    let f_name_new = name_new_of(f_name, address_to, options);
    if (function_name_word_repeated_is(f_name_new) && !options.no_repeated) {
      return skip_name(address_from, address_to, f_name_new, options);
    }
    if (name_taken_is && !options.no_name_taken) {
      return skip_name(address_from, address_to, f_name_new, options);
    }
    if (options.opening_last && opening_is && !options.no_opening) {
      return skip_start(address_from, address_to, options);
    }
    if (options.never_taken) {
      return skip_name(address_from, address_to, f_name_new, options);
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
    no_opening: reader_of({ no_opening: true }),
    opening_last: reader_of({ opening_last: true }),
    no_handed_out: reader_of({ no_handed_out: true }),
    no_numbered: reader_of({ no_numbered: true }),
    no_one_letter: reader_of({ no_one_letter: true }),
    no_answered_to: reader_of({ no_answered_to: true }),
    no_unspelled: reader_of({ no_unspelled: true }),
    no_repeated: reader_of({ no_repeated: true }),
    no_name_taken: reader_of({ no_name_taken: true }),
    start_remembers_end_word: reader_of({ start_remembers_end_word: true }),
    name_reasons_carry_from: reader_of({ name_reasons_carry_from: true }),
    name_new_always_null: reader_of({ name_new_always_null: true }),
    name_new_always_given: reader_of({ name_new_always_given: true }),
    about_always_name: reader_of({ about_always_name: true }),
    holder_name_joined_always: reader_of({ holder_name_joined_always: true }),
    camel_not_spellable: reader_of({ camel_not_spellable: true }),
    never_taken: reader_of({ never_taken: true }),
  },
  allowed: {},
};
