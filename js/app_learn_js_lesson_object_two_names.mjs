import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_object_people_renamed } from "./app_learn_js_object_people_renamed.mjs";
import { app_learn_js_object_code } from "./app_learn_js_object_code.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_object_property_set } from "./app_learn_js_lesson_object_property_set.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { list_first } from "./list_first.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_object_two_names() {
  arguments_assert(arguments, 0);
  ('two names for one object: let p = { name: "Saul", town: "Tarsus" }; let q = p; q.name = "Paul"; console.log(q.name); console.log(p.name); writes out Paul twice, since let q = p; gives the one object a second name rather than making a second object');
  ("2026-11-26, at the human's asking - the one new idea objects still needed: setting a property through a second name changes the object the first name holds too. Put straight after Setting a property, with its people and its renamings, since it needs nothing else. It is what Writing out an array of people noted no lesson taught yet, and why cheapest = item; in The cheapest keeps the item itself rather than a copy.");
  ("Both names are written out, q first, so the answer is two lines and every way of getting it wrong is a different two lines: the old name twice (setting changed nothing), the new name then the old (q was a copy), and the old name then the new.");
  ("A set is four questions, each person of Setting a property once, shuffled.");
  ("Reading backwards, the wrong programs are q made as a second object with the same properties (its own braces, so setting q leaves p as it was) and the program without the setting line. Making q a copy from p's properties is not offered, since putting a variable in braces is taught later, in An object from variables.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let people = app_learn_js_object_people_renamed();
  function object_code(person) {
    let code = app_learn_js_object_code(person, ["name", "town"]);
    return code;
  }
  function program_with(person, q_right, set) {
    "p, then q, then maybe the line setting q.name, then q.name and p.name written out";
    let lines = [
      "let p = " + object_code(person) + ";",
      "let q = " + q_right + ";",
    ];
    if (set) {
      lines.push("q.name = " + json_to(person.renamed) + ";");
    }
    lines.push("console.log(q.name);");
    lines.push("console.log(p.name);");
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(person) {
    let code = program_with(person, "p", true);
    return code;
  }
  function wrong_programs_of(person) {
    let v4 = object_code(person);
    let v = program_with(person, v4, true);
    let v2 = program_with(person, "p", false);
    let programs = [v, v2];
    return programs;
  }
  function wrong_outputs_of(person) {
    "the old name then the new, which no wrong program here writes out";
    let v3 = list_join_newline([person.name, person.renamed]);
    let outputs = [v3];
    return outputs;
  }
  function inputs_get() {
    "each person once, shuffled";
    let order = people.slice();
    list_shuffle(order);
    return order;
  }
  function above(root, context) {
    "Setting a property remembered, then two names for one object";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_object_property_set,
      ["", 'p.name = "Abraham";', " sets the property named ", "name"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "let q = p;",
      " does not make a second object. It gives the same object a second name, ",
      "q",
      ", so setting ",
      "q.name",
      " sets ",
      "p.name",
      " too:",
    ]);
    let person = list_first(people);
    let code = program_of(person);
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_two, lines, value);
    app_learn_js_div_cycle_code(box_two, [
      "",
      "p",
      " and ",
      "q",
      " are one person, so both names written out are ",
      person.renamed,
      "",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Two names for one object",
    "let q = p;",
  );
  let lesson = app_learn_js_lesson_code_logged_wrong_programs_stepping(
    {
      name_id,
      above,
      inputs_get,
      program_of,
      wrong_programs_of,
      wrong_outputs_of,
    },
    false,
  );
  return lesson;
}
