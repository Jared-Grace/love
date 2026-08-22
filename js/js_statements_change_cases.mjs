import { arguments_assert } from "./arguments_assert.mjs";
export function js_statements_change_cases() {
  "A run of statements before an edit and after it, with the name that edit ought to come back under, and why.";
  "THE STATEMENTS ARE WRITTEN AS CODE AND PARSED BY THE GATE, so a case says what a person would have typed rather than a tree nobody can read. It also means the corpus is checked against the same parser and the same printer the reading itself stands on.";
  "THE PAIRS THAT MOVE THINGS ARE THE ONES WORTH HAVING. Counting what went in and what came out was never the hard half; telling an addition apart from an addition that also shuffled the rest was, and that is the difference between a command somebody can write and a bucket nobody can act on.";
  arguments_assert(arguments, 0);
  let cases = [
    {
      before: ["work(a);", "work(b);", "work(c);"],
      after: ["work(a);", "work(b);", "work(c);"],
      named: "the statements unchanged",
      why: "nothing moved, which the caller needs said rather than guessed at, because a commit can touch a file without touching its statements at all",
    },
    {
      before: ["work(a);", "work(b);", "work(c);"],
      after: ["work(c);", "work(a);", "work(b);"],
      named: "statements reordered",
      why: "the same three statements in another order - nothing put in and nothing taken out, which a count of lines reports as six lines changed",
    },
    {
      before: ["work(a);", "work(c);"],
      after: ["work(a);", "work(b);", "work(c);"],
      named: "one statement added",
      why: "put in the middle rather than at the end, which is where comparing the two lists position by position starts calling everything after it different",
    },
    {
      before: ["work(a);"],
      after: ["work(a);", "work(b);", "work(c);"],
      named: "statements added",
      why: "more than one, so the name says so - one command puts a single statement somewhere and another writes a run of them",
    },
    {
      before: ["work(a);", "work(b);", "work(c);"],
      after: ["work(a);", "work(c);"],
      named: "one statement removed",
      why: "the mirror of putting one in, and it is the same reading with the two lists swapped",
    },
    {
      before: ["work(a);", "work(b);", "work(c);"],
      after: ["work(a);"],
      named: "statements removed",
      why: "two taken out, and the rest still standing in the order it stood in",
    },
    {
      before: ["work(a);", "work(b);", "work(c);"],
      after: ["work(a);", "work(x);", "work(c);"],
      named: "one statement replaced",
      why: "one out and one in at the same place, which is the shape of a line edited rather than a line moved - and it is the only shape here where both lists changed and the edit is still small",
    },
    {
      before: ["work(a);", "work(b);"],
      after: ["work(b);", "work(a);", "work(c);"],
      named: "statements added and reordered",
      why: "nothing was taken out, so counting alone calls this an addition - and it is not one, because a command that only puts a statement in leaves the rest where it found them",
    },
    {
      before: ["work(b);", "work(a);", "work(c);"],
      after: ["work(a);", "work(b);"],
      named: "statements removed and reordered",
      why: "the same trap the other way round: nothing new arrived, and still the surviving two swapped places",
    },
    {
      before: ["work(a);", "work(b);", "work(c);"],
      after: ["work(b);", "work(a);", "work(x);"],
      named: "one statement replaced and others reordered",
      why: "one out and one in and the run the length it was, which is the whole of what counting can see - and three positions changed, so pointing a replace command at a position would point it at the wrong one",
    },
    {
      before: ["function inner(a) {\n  work(a);\n}", "work(b);"],
      after: ["function inner(a, b) {\n  work(a);\n}", "work(b);"],
      named: "a nested function's header changed",
      why: "the body came back identical and the two are still written differently, so what moved was the line the function opens with - here a parameter put in, which is a command in its own right",
    },
    {
      before: ["function inner(a) {\n  work(a);\n}", "work(b);"],
      after: ["function inner(a) {\n  work(a);\n  work(c);\n}", "work(b);"],
      named: "in a nested function, one statement added",
      why: "comparing only the lines the run is written out of, this is one statement swapped for another - and the edit is a single statement put inside a function that never moved",
    },
    {
      before: ["work(a);", "work(b);", "work(c);"],
      after: ["work(x);", "work(y);", "work(z);"],
      named: "the body rewritten",
      why: "nothing survives, and no command is being asked for - this is the bucket that stays honestly unnamed, and it earns its keep by being small",
    },
  ];
  return cases;
}
