import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_names_read_own } from "./js_statement_names_read_own.mjs";
import { js_statement_names_bound_own } from "./js_statement_names_bound_own.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { js_statement_waits_own_is } from "./js_statement_waits_own_is.mjs";
export function js_statement_move_before_refusals_flow(
  refusals,
  moved,
  crossed,
) {
  arguments_assert(arguments, 3);
  ("Every reason the values would come out differently if one line were lifted over a run of lines, said in words, and nothing added when there is none.");
  ("THREE THINGS CAN GO WRONG AND ALL THREE ARE ABOUT ORDER. The line may read a name that one of the lines it jumps over is what gives a value to, and above that line the name holds nothing yet. A line it jumps over may itself read a name the moved line is what gives a value to, and below the move that line would be reading something else. Or one of them waits, and then what runs in between is not decided by either line.");
  ("Each is asked of what the line does at its own level and not of what a function written inside it would do when called, because a function written inside runs somewhere else. That is the difference between refusing a move and refusing every move: a body whose sections all close over one late name has that name written inside them everywhere, and every one of those mentions happens after the move either way.");
  let read = js_statement_names_read_own(moved);
  let bound = js_statement_names_bound_own(moved);
  function note(about, names, why) {
    function name_each(name) {
      let refusal = {
        about,
        name,
        why,
      };
      list_add(refusals, refusal);
    }
    each(names, name_each);
  }
  function crossed_each(statement) {
    let declared = js_statement_names_bound_own(statement);
    let unbound = list_intersection(read, declared);
    note(
      "unbound",
      unbound,
      "the moved line reads this name, and one of the lines it would jump over is the line that gives it its value - so above there the name holds nothing yet and the moved line would read a word that is not ready. Would you like to move that line up first, or to choose a place below it?",
    );
    let mentioned = js_statement_names_read_own(statement);
    let used = list_intersection(bound, mentioned);
    note(
      "used",
      used,
      "one of the lines that would be jumped over reads this name at its own level, and the moved line is what gives the name its value - so after the move that line reads a different thing from what it reads now.",
    );
    let waits = js_statement_waits_own_is(statement);
    if (waits) {
      let refusal = {
        about: "wait",
        name: null,
        why: "one of the lines that would be jumped over waits, so what else the page has done by the time the moved line runs is not decided by these lines at all. Nothing here can tell whether that matters, so it is refused rather than guessed at.",
      };
      list_add(refusals, refusal);
    }
  }
  each(crossed, crossed_each);
  let waits_moved = js_statement_waits_own_is(moved);
  if (waits_moved) {
    let refusal2 = {
      about: "wait",
      name: null,
      why: "the line being moved waits, so moving it changes when everything after it runs and not only when it runs itself. Nothing here can tell whether that matters, so it is refused rather than guessed at.",
    };
    list_add(refusals, refusal2);
  }
}
