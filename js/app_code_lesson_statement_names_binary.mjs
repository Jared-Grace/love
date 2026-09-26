import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_names_binary_decoys } from "./app_code_lesson_statement_names_binary_decoys.mjs";
export function app_code_lesson_statement_names_binary({
  words,
  symbol,
  answer_name,
  pairs_get,
  example_pair,
  remember_lesson,
  remember_parts,
  answer_count,
}) {
  arguments_assert(arguments, 1);
  ("a lesson about one symbol between two names: its title, the two boxes read before the questions, and questions whose programs give two values two names and write out the symbol between the names - through a name for the answer, when the lesson hands one in");
  ("Each lesson built on this hands in only what differs - the words of its title, its symbol, the name its answer is given, how its values are drawn, the pair its boxes show, the earlier lesson its reminder points at, and how many answers a question offers. Everything else is the same screen, so a learner meets the same shape once per symbol and reads only the symbol.");
  ("No tailored wrong answers: the other questions' answers are the wrong ones. A lesson that needs its own hands them to the twin that takes them.");
  let lesson = app_code_lesson_statement_names_binary_decoys({
    words,
    symbol,
    answer_name,
    pairs_get,
    example_pair,
    remember_lesson,
    remember_parts,
    answer_count,
    decoys: null,
  });
  return lesson;
}
