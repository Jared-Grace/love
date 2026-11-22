import { json_to } from "./json_to.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { calendar_db_named_execute_json } from "./calendar_db_named_execute_json.mjs";
export function calendar_db_named(database_name) {
  arguments_assert(arguments, 1);
  ("A named calendar database - calendar (live) or calendar_test - from this machine, in the shape the Worker hands its code - prepare(sql).bind(...values) then first(), all() or run() - so the same calendar_db_ functions the Worker runs can be run here against its real rows. Each statement is one wrangler d1 execute, a few seconds apiece.");
  ("★ VALUES ARE WRITTEN INTO THE STATEMENT, because wrangler's --command takes no bound values. Each is written as SQL itself spells a value - a number as digits, null as NULL, anything else as text in single quotes with every quote inside doubled, which SQLite reads back exactly and in which nothing else is special. Each ?N is replaced in one pass, so a value holding ?2 is never read as a place for another. A bare ? is refused rather than guessed at.");
  function literal(value) {
    if (equal(value, null) || equal(value, undefined)) {
      let r = "NULL";
      return r;
    }
    if (equal(typeof value, "number")) {
      let b = Number.isFinite(value);
      if (not(b)) {
        throw new Error(
          text_combine_multiple([
            fn_name("calendar_db_named"),
            ": a number that is not finite: ",
          ]) + value,
        );
      }
      let r2 = String(value);
      return r2;
    }
    if (equal(typeof value, "boolean")) {
      let r3 = value ? "1" : "0";
      return r3;
    }
    let r4 = "'" + String(value).replaceAll("'", "''") + "'";
    return r4;
  }
  function written(sql, values) {
    if (/\?(?!\d)/.test(sql)) {
      throw new Error(
        text_combine_multiple([
          fn_name("calendar_db_named"),
          ": only numbered places (?1, ?2) are written in: ",
        ]) + sql,
      );
    }
    function place(whole, n) {
      let left = Number(n);
      let index = subtract(left, 1);
      if (greater_than_equal(index, values.length)) {
        throw new Error(
          text_combine_multiple([
            fn_name("calendar_db_named"),
            ": no value for ?",
          ]) + n,
        );
      }
      let r5 = literal(values[index]);
      return r5;
    }
    let r6 = sql.replace(/\?(\d+)/g, place);
    return r6;
  }
  async function executed(sql) {
    let answers = await calendar_db_named_execute_json(database_name, sql);
    let last = answers[subtract(answers.length, 1)];
    if (not(last) || equal(last.success, false)) {
      throw new Error(
        text_combine_multiple([
          fn_name("calendar_db_named"),
          ": the statement failed: ",
        ]) + json_to(answers).slice(0, 500),
      );
    }
    return last;
  }
  function changes_of(answer) {
    let r7 = {
      meta: {
        changes: Number((answer.meta || {}).changes || 0),
      },
    };
    return r7;
  }
  function bound_to(sql, values) {
    let text = written(sql, values);
    async function first() {
      let answer = await executed(text);
      let rows = answer.results || [];
      let r8 = rows.length ? rows[0] : null;
      return r8;
    }
    async function all() {
      let answer = await executed(text);
      let r9 = {
        results: answer.results || [],
      };
      return r9;
    }
    async function run() {
      let answer = await executed(text);
      let r10 = changes_of(answer);
      return r10;
    }
    let r11 = {
      first,
      all,
      run,
      text,
    };
    return r11;
  }
  function prepare(sql) {
    function bind(...values) {
      let r12 = bound_to(sql, values);
      return r12;
    }
    let r13 = {
      bind,
    };
    return r13;
  }
  async function batch(statements) {
    "All in one execute, so they land together or not at all, as a Worker's batch does.";
    function statement_text(s) {
      let r14 = s.text.replace(/;\s*$/, "");
      return r14;
    }
    let joined = statements.map(statement_text).join(";\n") + ";";
    let answers = await calendar_db_named_execute_json(database_name, joined);
    let r15 = answers.map(changes_of);
    return r15;
  }
  let r16 = {
    prepare,
    batch,
  };
  return r16;
}
