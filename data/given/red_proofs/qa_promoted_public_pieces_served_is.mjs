import { qa_promoted_public_pieces_served_is } from "../../../js/qa_promoted_public_pieces_served_is.mjs";
import { qa_promoted_public_pieces_served_is_cases } from "../../../js/qa_promoted_public_pieces_served_is_cases.mjs";

("Thirteen wrong ways of deciding whether a folder of waiting pieces can go out without putting anything new on the internet, kept so the cases can be asked again whether they still tell them apart.");

("What is being decided is an account a deploy will accept without a note - so a version that is too generous does not merely answer wrongly, it puts a file nobody has judged in front of everybody. That is why more than half of these are the generous direction: forgiving a piece nothing serves, forgiving the page, forgiving the page's bytes, forgiving everything once nothing is being served at all. The strict ones are here because the reading being replaced was strict in exactly one of these ways and refused five apps for it.");

("The walk is written out here rather than borrowed from the real one. A wrong version that called the function it is meant to be wrong about would follow that function wherever it went, and a version that cannot disagree is not a version at all.");

("The page is named by sticking the ending onto the app's name, which is the one place this copies a rule rather than a line. It is the same rule wherever a page is named in this repo, and a wrong version that got that rule wrong would be wrong about something no case here is asking about.");

function names_of(pieces) {
  let names = [];
  for (let name in pieces) {
    names.push(name);
  }
  return names;
}

function page_needed_of(names, options) {
  if (options.page_not_required) {
    return false;
  }
  if (options.page_required_only_when_anything_waits) {
    let anything = names.length > 0;
    return anything;
  }
  if (options.page_looked_for_only_in_an_empty_folder) {
    let empty = names.length === 0;
    return empty;
  }
  return true;
}

function reader_of(options) {
  function answer(one) {
    let disk = one.disk;
    let live = one.live;
    let page_name = one.app + ".html";
    let names = names_of(disk);
    let served_names = names_of(live);
    let page_needed = page_needed_of(names, options);
    if (page_needed) {
      let with_page = names.includes(page_name);
      if (!with_page) {
        return false;
      }
    }
    if (options.set_equal_required) {
      let same_count = names.length === served_names.length;
      if (!same_count) {
        return false;
      }
    }
    if (options.strictly_fewer_required) {
      let fewer = names.length < served_names.length;
      if (!fewer) {
        return false;
      }
    }
    if (options.nothing_served_allowed) {
      let none_served = served_names.length === 0;
      if (none_served) {
        return true;
      }
    }
    if (options.any_piece_enough) {
      for (let name of names) {
        let served = name in live;
        let same = served && live[name] === disk[name];
        if (same) {
          return true;
        }
      }
      return false;
    }
    if (options.direction_reversed) {
      for (let name of served_names) {
        let waiting = name in disk;
        if (!waiting) {
          return false;
        }
        let same = disk[name] === live[name];
        if (!same) {
          return false;
        }
      }
      return true;
    }
    for (let name of names) {
      let served = name in live;
      if (!served) {
        let leftover = options.extra_piece_allowed && name !== page_name;
        if (leftover) {
          continue;
        }
        return false;
      }
      if (options.names_only_compared) {
        continue;
      }
      let is_page = name === page_name;
      if (options.page_hash_ignored && is_page) {
        continue;
      }
      if (options.only_page_hash_compared && !is_page) {
        continue;
      }
      if (options.hash_start_compared) {
        let alike = disk[name].slice(0, 3) === live[name].slice(0, 3);
        if (!alike) {
          return false;
        }
        continue;
      }
      let same = disk[name] === live[name];
      if (!same) {
        return false;
      }
    }
    return true;
  }
  return answer;
}

export const red_proof = {
  fn: qa_promoted_public_pieces_served_is.name,
  cases: qa_promoted_public_pieces_served_is_cases,
  expected: "served_is",
  described: "why",
  wrong: {
    set_equal_required: reader_of({ set_equal_required: true }),
    strictly_fewer_required: reader_of({ strictly_fewer_required: true }),
    names_only_compared: reader_of({ names_only_compared: true }),
    any_piece_enough: reader_of({ any_piece_enough: true }),
    extra_piece_allowed: reader_of({ extra_piece_allowed: true }),
    page_not_required: reader_of({ page_not_required: true }),
    page_required_only_when_anything_waits: reader_of({
      page_required_only_when_anything_waits: true,
    }),
    page_looked_for_only_in_an_empty_folder: reader_of({
      page_looked_for_only_in_an_empty_folder: true,
    }),
    nothing_served_allowed: reader_of({ nothing_served_allowed: true }),
    direction_reversed: reader_of({ direction_reversed: true }),
    page_hash_ignored: reader_of({ page_hash_ignored: true }),
    only_page_hash_compared: reader_of({ only_page_hash_compared: true }),
    hash_start_compared: reader_of({ hash_start_compared: true }),
  },
  allowed: {},
};
