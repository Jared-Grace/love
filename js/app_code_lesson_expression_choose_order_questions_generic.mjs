import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { app_code_expression_value } from "./app_code_expression_value.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_qa_question } from "./app_code_lesson_quiz_qa_question.mjs";
import { not } from "./not.mjs";
export function app_code_lesson_expression_choose_order_questions_generic(
  expression,
  tree_of_code,
) {
  arguments_assert(arguments, 2);
  ("the question bank a press-at-a-time lesson draws on: lines built as shapes by the maker handed in, given out one a screen, and worked out again from the writing they were printed as by the reader handed in");
  ("The maker is handed in because several lessons ask the same question about different families of line - one with === in the middle, one with any other comparison, one with && - and everything about the asking is the same. Written out once a lesson, the turn-taking and the reading-back would be that many copies to keep in step for the sake of one word each.");
  ("The reader comes in beside the maker because the two are one decision. A line is written out by the maker and read back by the reader, and a reader that could not take apart what its own maker builds would throw where a learner was owed a question - so a lesson that changes the shape of its lines changes both together or neither.");
  ("The first line a learner meets is a true one, because a true line is the one that has something to say: two sides that look nothing alike and land where the comparison wanted them. A false line met first would be read as the ordinary case and the true one as the surprise, which is the wrong way round for what the lesson is about.");
  ("After that true and false take turns rather than being drawn by chance. Chance would run three or four true lines together often enough for a learner to settle into answering true without solving, and turns cost nothing to arrange.");
  ("Nothing is said here about the shape of a line, and nothing should be. Which operator may go first is already the maker's own decision - it is what the shape it builds says - so a maker that always builds the one shape and a maker that turns it over from question to question are both served without this knowing which it has. A lesson taught by a mark rather than by a place needs the turning, because a mark always at the same end of the line is a place; a lesson whose point IS which operator wins would be asking a different lesson's question if it turned.");
  let want_true = true;
  function tree_new() {
    "the next line: the other answer from last time";
    let tree = expression(want_true);
    want_true = not(want_true);
    return tree;
  }
  function item_new() {
    "a question is the line as written and its answer is what the line comes to";
    let tree = tree_new();
    let question = app_code_expression_code(tree);
    let answer = app_code_expression_value(tree);
    let item = {
      question,
      answer,
    };
    return item;
  }
  function batch_get() {
    "one line a screen";
    let item = item_new();
    let list = [item];
    return list;
  }
  function tree_for(question) {
    "the shape behind a line, worked out again from the writing it was printed as";
    let tree = tree_of_code(question);
    return tree;
  }
  function tree_of(qa, info) {
    "the same working out done from a quiz's question and answer pair, which is how the quiz side of a lesson holds the line it is asking about";
    let answer_property = property_get(info, "answer_property");
    let question = app_code_lesson_quiz_qa_question(qa, answer_property);
    let tree = tree_for(question);
    return tree;
  }
  let bank = {
    batch_get,
    tree_for,
    tree_of,
  };
  return bank;
}
