import { app_code_quiz_lenient_names_walked } from "./app_code_quiz_lenient_names_walked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_quiz_lenient_names() {
  arguments_assert(arguments, 0);
  ("every lesson and way round in the whole course that can be passed by reading the right answer off the code, named as the lesson and the way joined by a space");
  ("Each lesson is read many times over and a name is kept only where every reading agrees. A lesson draws new numbers and new words every time it is asked, so one reading answers about the draw it happened to get - and this list is measured against a written record, which fails on a name it does not hold as well as on a name it holds for nothing. A name that came and went between runs would fail that record in both directions by turns.");
  ("Many readings rather than a few, because agreeing every time is the thing being asked. A screen passable by how it is built is passable in every draw and survives any number of readings; one passable six draws in ten survives three readings a fifth of the time and twenty readings once in thirty thousand. The readings are cheap and a gate that goes red for nothing costs an afternoon.");
  ("The walk moved one name along when the gate above needed to know how many lessons had been drawn. The writer here only rewrites a record and has no use for that count, so it is read off next door and left behind.");
  let told = app_code_quiz_lenient_names_walked();
  let names = property_get(told, "offenders");
  return names;
}
