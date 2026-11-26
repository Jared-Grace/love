import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_objects_array_lines } from "./app_learn_js_objects_array_lines.mjs";
import { json_to } from "./json_to.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_array_for_find } from "./app_learn_js_lesson_array_for_find.mjs";
import { app_learn_js_lesson_object_list_people_for } from "./app_learn_js_lesson_object_list_people_for.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_learn_js_code_lines_writes_out } from "./app_learn_js_code_lines_writes_out.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_code_logged_wrong_programs_stepping } from "./app_learn_js_lesson_code_logged_wrong_programs_stepping.mjs";
export function app_learn_js_lesson_object_list_find() {
  arguments_assert(arguments, 0);
  ('finding one object of a list by a property: a for loop doing let p = people[i]; if (p.town === "Bethany") { console.log(p.name); } writes out the name of the one person whose town is Bethany');
  ("2026-11-26, at the human's asking - the first of four lessons asking a question of a list of objects, after Each rise, as objects: Where is joy asked about each item in turn; here the if asks about one property of each object, and writes out another.");
  ("The people are the people and towns of Reading a property: Mary of Nazareth, Paul of Tarsus, Martha of Bethany, Lydia of Thyatira, Zacchaeus of Jericho, Peter of Capernaum. Every town is held by one person only, so there is always exactly one name to write out.");
  ("A set is four questions, three people twice and four people twice, the town asked drawn from the people in the program.");
  ("The wrong programs write out p.town in place of p.name (the town itself), leave out the if (every name), and ask !== in place of === (every other name). Each is kept only if it writes out something other than the answer.");
  ("No stepping: the tracer cannot yet read an object.");
  ("The writing is a first draft by Claude 2026-11-26.");
  let people = [
    {
      name: "Mary",
      town: "Nazareth",
    },
    {
      name: "Paul",
      town: "Tarsus",
    },
    {
      name: "Martha",
      town: "Bethany",
    },
    {
      name: "Lydia",
      town: "Thyatira",
    },
    {
      name: "Zacchaeus",
      town: "Jericho",
    },
    {
      name: "Peter",
      town: "Capernaum",
    },
  ];
  function program_with(input, compare, written) {
    "the people, then the loop asking each person's town and writing out a property";
    let lines = app_learn_js_objects_array_lines("people", input.drawn, [
      "name",
      "town",
    ]).concat([
      "for (let i = 0; i < people.length; i++) {",
      "  let p = people[i];",
      "  if (p.town " + compare + " " + json_to(input.town) + ") {",
      "    console.log(p." + written + ");",
      "  }",
      "}",
    ]);
    let code = list_join_newline(lines);
    return code;
  }
  function program_of(input) {
    let code = program_with(input, "===", "name");
    return code;
  }
  function wrong_programs_of(input) {
    let v = program_with(input, "===", "town");
    let lines = app_learn_js_objects_array_lines("people", input.drawn, [
      "name",
      "town",
    ]).concat([
      "for (let i = 0; i < people.length; i++) {",
      "  let p = people[i];",
      "  console.log(p.name);",
      "}",
    ]);
    let v2 = list_join_newline(lines);
    let v3 = program_with(input, "!==", "name");
    let programs = [v, v2, v3];
    return programs;
  }
  function wrong_outputs_of(input) {
    let none = [];
    return none;
  }
  function input_drawn(size) {
    let drawn = list_shuffle_take(people, size);
    let person = list_random_item(drawn);
    let input = {
      drawn,
      town: person.town,
    };
    return input;
  }
  function inputs_get() {
    "four inputs: three people twice, four people twice, shuffled";
    let inputs = [];
    for (let size of [3, 3, 4, 4]) {
      let v4 = input_drawn(size);
      inputs.push(v4);
    }
    list_shuffle(inputs);
    return inputs;
  }
  function above(root, context) {
    "Where is joy and Writing out an array of people remembered, then one person found by town";
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_array_for_find,
      ["", 'if (a[i] === "joy")', " asks about each item in turn"],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_two,
      context,
      app_learn_js_lesson_object_list_people_for,
      ["", "let p = people[i];", " gives each person in turn the name ", "p"],
    );
    let box_three = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_three, [
      "Now the ",
      "if",
      " asks about one property of each person, and writes out another:",
    ]);
    let code = program_of({
      drawn: [people[0], people[2], people[3]],
      town: "Bethany",
    });
    let lines = text_split_newline(code);
    let value = eval_console_log_lines(code);
    app_learn_js_code_lines_writes_out(box_three, lines, value);
    app_learn_js_div_cycle_code(box_three, [
      "",
      'p.town === "Bethany"',
      " is true only for ",
      "Martha",
      ", so only her name is written out",
    ]);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "Finding a person by town",
    'p.town === "Bethany"',
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
