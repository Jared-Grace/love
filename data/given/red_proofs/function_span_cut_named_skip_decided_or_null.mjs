import { function_span_cut_named_skip_decided_or_null } from "../../../js/function_span_cut_named_skip_decided_or_null.mjs";
import { function_span_cut_named_skip_decided_or_null_cases } from "../../../js/function_span_cut_named_skip_decided_or_null_cases.mjs";

("Fourteen wrong ways of deciding whether a run of lines should be turned down rather than cut out under a name somebody has chosen, kept so the corpus can be asked again whether it still tells them apart.");

("Nothing is borrowed from the real one. This reading holds no working-out at all - it asks two questions it was handed the answers to, and builds a small record naming some of the words it was given and leaving the rest empty. So every wrong version here is wrong about the order the two are asked in, about which way round one of them is read, or about which words the record carries; and each of those is written out in full, because a version fetching any of it from the function it is meant to be wrong about could not have been wrong about it.");

("There is no exemption below, and that is worth saying out loud. Every one of these fourteen is turned down by at least one case, which is what should happen when a reading has no downstream step that could quietly ask the same question over again.");

function reader_of(options) {
  function answer(one) {
    let address_from = one.address_from;
    let address_to = one.address_to;
    let f_name_new = one.f_name_new;
    let opening_is = one.opening_is;
    let name_taken_is = one.name_taken_is;

    function about_of(said) {
      if (options.about_always_start) {
        return "start";
      }
      if (options.about_always_name) {
        return "name";
      }
      return said;
    }

    function start_row() {
      let from = options.start_address_from_dropped ? null : address_from;
      let carried = options.start_name_carried ? f_name_new : null;
      if (options.ends_swapped) {
        return {
          about: about_of("start"),
          address_from: address_to,
          address_to: address_from,
          f_name_new: carried,
        };
      }
      return {
        about: about_of("start"),
        address_from: from,
        address_to,
        f_name_new: carried,
      };
    }

    function name_row() {
      let from = options.name_address_from_kept ? address_from : null;
      let carried = options.name_dropped_from_reason ? null : f_name_new;
      let to = options.name_address_to_from_name ? f_name_new : address_to;
      return {
        about: about_of("name"),
        address_from: from,
        address_to: to,
        f_name_new: carried,
      };
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

    function name_hit() {
      if (options.name_taken_dropped) {
        return false;
      }
      if (options.name_taken_inverted) {
        return !name_taken_is;
      }
      return name_taken_is;
    }

    if (options.never_refuses) {
      return null;
    }
    if (options.start_last) {
      if (name_hit()) {
        return name_row();
      }
      if (start_hit()) {
        return start_row();
      }
      return null;
    }
    if (start_hit()) {
      return start_row();
    }
    if (name_hit()) {
      return name_row();
    }
    return null;
  }
  return answer;
}

export const red_proof = {
  fn: function_span_cut_named_skip_decided_or_null.name,
  cases: function_span_cut_named_skip_decided_or_null_cases,
  expected: "skip",
  described: "name",
  wrong: {
    start_dropped: reader_of({ start_dropped: true }),
    start_inverted: reader_of({ start_inverted: true }),
    start_last: reader_of({ start_last: true }),
    name_taken_dropped: reader_of({ name_taken_dropped: true }),
    name_taken_inverted: reader_of({ name_taken_inverted: true }),
    never_refuses: reader_of({ never_refuses: true }),
    about_always_start: reader_of({ about_always_start: true }),
    about_always_name: reader_of({ about_always_name: true }),
    start_address_from_dropped: reader_of({
      start_address_from_dropped: true,
    }),
    start_name_carried: reader_of({ start_name_carried: true }),
    ends_swapped: reader_of({ ends_swapped: true }),
    name_address_from_kept: reader_of({ name_address_from_kept: true }),
    name_dropped_from_reason: reader_of({ name_dropped_from_reason: true }),
    name_address_to_from_name: reader_of({ name_address_to_from_name: true }),
  },
  allowed: {},
};
