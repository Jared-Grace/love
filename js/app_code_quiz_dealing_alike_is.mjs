import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_shape_alike_is } from "./js_code_shape_alike_is.mjs";
import { not } from "./not.mjs";
import { app_code_quiz_dealing_value_alike_is } from "./app_code_quiz_dealing_value_alike_is.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { app_code_quiz_tokens_group_skeletons } from "./app_code_quiz_tokens_group_skeletons.mjs";
import { json_equal } from "./json_equal.mjs";
import { js_tokens_comparisons_chained_is } from "./js_tokens_comparisons_chained_is.mjs";
import { implies } from "./implies.mjs";
import { app_code_quiz_tokens_values_mirrored_is } from "./app_code_quiz_tokens_values_mirrored_is.mjs";
export function app_code_quiz_dealing_alike_is(code, candidate) {
  "$plain code";
  "$plain candidate";
  arguments_assert(arguments, 2);
  ("Whether a line made out of a question's own tiles is still a right answer to the question the learner was actually asked: it is built to the same shape, it comes out to the value they were shown, and it keeps the two things about the question a learner can see on the screen without being told which lesson they are in - a repeat across a join, and values that read the same backwards.");
  ("The shape is asked first, and asking it first is what makes this safe to point at any string at all. A row of tiles laid out in any order at all is usually not a line, and the reader of values tokenizes before it judges, so it throws rather than answering no. The shape reader parses and gives back nothing when there is nothing to parse, so a layout that is not a line is turned away here before anything that could throw is reached. Anything walking tiles more freely than a dealer does needs that, and nothing loses by it: a line that will not parse was never going to agree about a value either.");
  ("THE SHAPE IS ASKED AT ALL BECAUSE THE SIGNS MOVE NOW. A dealing used to leave every sign where the question put it, and then a dealt line could not help being the same sentence about different numbers - so the shape never needed asking. Once a sign may be handed to another sign's place that stops being free: 2 < 6 && 5 < 9 dealt into 2 && 6 < 5 < 9 is true, and is not a comparison of two comparisons at all. Holding every line to the question's own tree is what buys back the guarantee the fixed signs used to give, and it does it without naming a single lesson.");
  ("The value is the whole of what the screen says, and it is asked here by the core this is built on. Everything else is here because a lesson is about how a line is written and not only about what it comes to, so a line that keeps the value while writing a different sentence out of the same tiles is not the answer the lesson wanted.");
  ("The two rules below the value are read off the question rather than declared by a lesson, and that is deliberate. A chaining lesson writes 1 < 3 && 3 < 6, where the middle number is the one both comparisons are about, and the repeat across the join is what shows that; 3 < 6 && 1 < 3 is true out of the same tiles and chains nothing. A swapping lesson writes (7 === 6) === (6 === 7), whose values mirror; (7 === 7) === (6 === 6) is true out of the same tiles and has stopped being about swapping. Neither lesson has to say so, because both are things a learner can see in the line they were given.");
  ("Every lesson that measurably needed protecting is covered by one of the two - the four swapping lessons by the mirror, the chaining lesson by the join. Reading the rules off the question rather than off a list of lesson names is what keeps a new lesson from having to be added to anything. BOTH RULES BIND IN ONE DIRECTION ONLY. A question that repeats across its join, or whose values read the same backwards, hands that property to every answer it will accept, and that is the whole of what protects the lesson. A question that does neither cannot demand that its answers do neither, because the screen never told the learner which of the two it was. Shown true and the tiles of (6 < 6) === (4 > 4), a learner who builds (4 < 6) === (6 > 4) has written the same shape out of the same tiles and come out at the same value, and was told the fourth tile they pressed was wrong. Asked as equalities, the two rules refused that answer over a likeness the question was never about.");
  ("THE TREE IS NOT THE WHOLE SHAPE, BECAUSE PARSING THROWS THE GROUPING AWAY. Bracketing the and, bracketing nothing at all, and bracketing one lone value all give the identical tree for a line joined by and then or, so a reader that compares trees calls a learner's brackets right wherever they put them. The same parse drops the difference between two words each in its own pair of quotes and both words together inside one pair, which is one string compared to another either way and comes out false either way. So what a pair of brackets and a pair of quotes each encloses is asked separately, off the tiles, where it is still there to be read.");
  ("What is compared is what a pair encloses rather than which tiles are inside it, so handing the values round inside a bracket keeps the grouping and moving the bracket itself does not - which is the line the pool's two roads already draw between them. This one binds both ways, unlike the join and the mirror below it: a learner looking at the question can see where its brackets are, so the question may ask for them there.");
  let shape_alike = js_code_shape_alike_is(code, candidate);
  if (not(shape_alike)) {
    return false;
  }
  let value_alike = app_code_quiz_dealing_value_alike_is(code, candidate);
  if (not(value_alike)) {
    return false;
  }
  let asked = app_code_quiz_tokens(code);
  let dealt = app_code_quiz_tokens(candidate);
  let groups_asked = app_code_quiz_tokens_group_skeletons(asked);
  let groups_dealt = app_code_quiz_tokens_group_skeletons(dealt);
  let groups_alike = json_equal(groups_asked, groups_dealt);
  if (not(groups_alike)) {
    return false;
  }
  let join_asked = js_tokens_comparisons_chained_is(asked);
  let join_dealt = js_tokens_comparisons_chained_is(dealt);
  let join_alike = implies(join_asked, join_dealt);
  if (not(join_alike)) {
    return false;
  }
  let mirror_asked = app_code_quiz_tokens_values_mirrored_is(asked);
  let mirror_dealt = app_code_quiz_tokens_values_mirrored_is(dealt);
  let mirror_alike = implies(mirror_asked, mirror_dealt);
  return mirror_alike;
}
