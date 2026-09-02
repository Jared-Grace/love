import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { list_tally_covers_is } from "./list_tally_covers_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { js_tokens_parenthesis_group_sizes } from "./js_tokens_parenthesis_group_sizes.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { js_tokens_join_repeated_is } from "./js_tokens_join_repeated_is.mjs";
import { equal } from "./equal.mjs";
import { list_last_is } from "./list_last_is.mjs";
import { list_remove_last } from "./list_remove_last.mjs";
import { each } from "./each.mjs";
export function app_code_lesson_quiz_token_select_variations_spelled(
  variations,
  code,
  expression_is,
) {
  arguments_assert(arguments, 3);
  ("$plain code");
  ("$plain expression_is");
  ("The orderings left once the ones that say the right thing the wrong way have been dropped, and once the semicolon a value never wrote has been taken off the end.");
  ("EVERY CHECK HERE IS THE SAME CHECK ASKED ABOUT A DIFFERENT SPELLING. Everything that built the pool went by value, and by value all of these are the question's own line - which is exactly why nothing above stopped them. A lesson is not about the value though, it is about the writing, so what is compared here is how the question was written against how the answer was: which tiles, how much each bracket gathered, whether the join wrote the same word twice.");
  ("THE QUESTION'S OWN TOKENS ARE READ ONCE AND ASKED THREE TIMES. All three readings are of the same list, and reading it per check meant tokenising the question three times for every pool.");
  ("An arrangement may not leave out a token the question wrote. Everything above widens the pool - a sign that reads both ways, a call whose arguments come in any order, another way of saying the same value - and one of those ways is to say it with fewer symbols. Re-printing a line from its tree drops a bracket the value does not depend on, so (3 === 5) === false came back as 3 === 5 === false as well, and a lesson whose whole subject is the brackets accepted an answer with no brackets in it. The learner is told they are right without having done the thing.");
  ("Measured across every line the course can hand out, this drops something in twenty-seven of seven hundred and sixty-one, and every one of them is a lesson losing an answer that omitted its own subject: the four bracket lessons, and the statement lesson, which was accepting console.log(5) without the semicolon it had just taught.");
  ("The other direction is left alone on purpose. An arrangement with MORE in it than the question is not this fault - it is either a real second way of saying the line, or unbuildable for want of a button, and the caller already drops the unbuildable ones.");
  ("This cannot empty the pool. The question's own wording is put in by hand by the caller, and it holds its own tokens exactly.");
  let asked = app_code_quiz_tokens(code);
  function tokens_none_missing_is(variation) {
    let covers = list_tally_covers_is(variation, asked);
    return covers;
  }
  let kept = list_filter(variations, tokens_none_missing_is);
  ("Brackets have to gather as much as the question's brackets gathered. Leaving them out is only the loud half of the same fault; the quiet half keeps every tile and moves the brackets somewhere they change nothing, so (3 === 5) === false was also accepting (3) === 5 === false and (3 === 5 === false). Those are the same line by value - which is exactly why every check that goes by value calls them right - and they are not the same answer to a lesson whose subject is which part the brackets are around.");
  ("This is asked of the whole pool rather than of the half it came from, because both halves can produce it: the free rearrangement of tiles is where these came from today, and a swap that re-prints from the tree is free to bracket a different side tomorrow.");
  ("How much each bracket gathered is asked, and not which tiles it gathered. Rearranging the tiles is the whole of what the learner is doing, so a bracket holding a different comparison is not a bracket that moved - (3 !== 2) !== (8 === 6) and (8 !== 6) === (2 !== 3) put a comparison inside each bracket either way. Whether the rearranged line still says what the question said is asked separately, by the reading the caller does above.");
  ("A genuine swap survives, because the amounts are compared as a set and not by where they fall - (4 < 5) === (5 < 4) swapped over still gathers three tiles on each side. A question with no brackets is unaffected: it has no bracket button, so nothing bracketed was ever buildable.");
  let asked_groups = js_tokens_parenthesis_group_sizes(asked);
  function brackets_alike_is(variation) {
    let groups = js_tokens_parenthesis_group_sizes(variation);
    let alike = lists_equal_pair(groups, asked_groups);
    return alike;
  }
  kept = list_filter(kept, brackets_alike_is);
  ("A line that writes the same word either side of its join must go on writing it. Two comparisons that share an end are saying something about the thing they share, and the swap that reads both ways carries that shared word to the outside - so a middle written twice comes back as two different numbers meeting at the join. The same line by value, and no longer the line the lesson is about. This is the bracket rule standing in another place: same value, different answer to the question actually asked.");
  ("Asked of the question rather than fixed, so it binds only a line that had the repeat to begin with. Where the two comparisons share nothing, the swap is a real second right answer and is left exactly as it was - which is what the lesson before this one spends its whole length teaching.");
  let asked_join_repeated = js_tokens_join_repeated_is(asked);
  function join_repeat_alike_is(variation) {
    let repeated = js_tokens_join_repeated_is(variation);
    let alike = equal(repeated, asked_join_repeated);
    return alike;
  }
  kept = list_filter(kept, join_repeat_alike_is);
  ("A line standing for a value never wrote the semicolon, so an ordering that ends in one is carrying a tile the question did not hand out. It is taken off rather than the ordering dropped, because the tile is at the end and nothing else about the arrangement is wrong.");
  if (expression_is) {
    function trim_semicolon(item) {
      let expected_last = ";";
      let has_semicolon = list_last_is(item, expected_last);
      if (has_semicolon) {
        list_remove_last(item);
      }
    }
    each(kept, trim_semicolon);
  }
  return kept;
}
