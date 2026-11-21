import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { json_from } from "./json_from.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_worker_stage } from "./calendar_worker_stage.mjs";
import { npx_run } from "./npx_run.mjs";
export async function calendar_db_remote() {
  arguments_assert(arguments, 0);
  ("The live calendar database, from this machine, in the shape the Worker hands its code - prepare(sql).bind(...values) then first(), all() or run() - so the same calendar_db_ functions the Worker runs can be run here against the real rows. Each statement is one wrangler d1 execute against the live database, a few seconds apiece.");
  ('It exists so a tool on this machine can act as the host without the host\'s sign-in: the reply tool makes a booking link for the person in a Messenger chat (human, 2026-11-21: "automation is safer"). Whoever can run this can already deploy the Worker, so it reaches nothing that machine could not reach before.');
  ("★ VALUES ARE WRITTEN INTO THE STATEMENT, because wrangler's --command takes no bound values. Each is written as SQL itself spells a value - a number as digits, null as NULL, anything else as text in single quotes with every quote inside doubled, which SQLite reads back exactly and in which nothing else is special. Each ?N is replaced in one pass, so a value holding ?2 is never read as a place for another. A bare ? is refused rather than guessed at.");
  let folder = await calendar_worker_stage([]);
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
            fn_name("calendar_db_remote"),
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
          fn_name("calendar_db_remote"),
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
            fn_name("calendar_db_remote"),
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
    let words = [
      "wrangler",
      "d1",
      "execute",
      "calendar",
      "--remote",
      "--json",
      "--command",
      sql,
    ];
    let printed = await npx_run(
      words,
      {
        cwd: folder,
      },
      180000,
    );
    let answers = json_from(printed);
    let last = answers[subtract(answers.length, 1)];
    if (not(last) || equal(last.success, false)) {
      throw new Error(
        text_combine_multiple([
          fn_name("calendar_db_remote"),
          ": the statement failed: ",
        ]) + printed.slice(0, 500),
      );
    }
    return last;
  }
  function bound_to(sql, values) {
    let text = written(sql, values);
    async function first() {
      let answer = await executed(text);
      let rows = answer.results || [];
      let r7 = rows.length ? rows[0] : null;
      return r7;
    }
    async function all() {
      let answer = await executed(text);
      let r8 = {
        results: answer.results || [],
      };
      return r8;
    }
    async function run() {
      let answer = await executed(text);
      let meta = answer.meta || {};
      let r9 = {
        meta: {
          changes: Number(meta.changes || 0),
        },
      };
      return r9;
    }
    let r10 = {
      first,
      all,
      run,
      text,
    };
    return r10;
  }
  function prepare(sql) {
    function bind(...values) {
      let r11 = bound_to(sql, values);
      return r11;
    }
    let r12 = {
      bind,
    };
    return r12;
  }
  async function batch(statements) {
    "All in one execute, so they land together or not at all, as a Worker's batch does.";
    function lambda(s) {
      let r13 = s.text.replace(/;\s*$/, "");
      return r13;
    }
    let joined = statements.map(lambda).join(";\n") + ";";
    let words = [
      "wrangler",
      "d1",
      "execute",
      "calendar",
      "--remote",
      "--json",
      "--command",
      joined,
    ];
    let printed = await npx_run(
      words,
      {
        cwd: folder,
      },
      180000,
    );
    let answers = json_from(printed);
    function lambda2(a) {
      let r14 = {
        meta: {
          changes: Number((a.meta || {}).changes || 0),
        },
      };
      return r14;
    }
    let r15 = answers.map(lambda2);
    return r15;
  }
  let r16 = {
    prepare,
    batch,
  };
  return r16;
}
