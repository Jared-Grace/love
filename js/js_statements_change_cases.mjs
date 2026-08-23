import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
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
      named: "work called differently",
      why: "one out and one in at the same place, which is the shape of a line edited rather than a line moved - and both lines call the same thing, so what changed is what it was handed rather than what was done",
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
      after: ["work(a);", "work(y);", "work(z);"],
      named: "statements replaced",
      why: "two out and two in and the run the length it was, with one statement still standing where it stood - which is a handful of lines swapped rather than a body thrown away, and it used to be counted as the second",
    },
    {
      before: ["work(a);", "work(b);", "work(c);"],
      after: ["work(a);", "work(x);"],
      named: "statements added and removed",
      why: "the run came out shorter, so as many did not go in as came out - no single command does that, and saying so is different from saying nothing survived",
    },
    {
      before: ["if (a) {\n  work(a);\n}", "work(b);"],
      after: ["if (a) {\n  work(a);\n  work(c);\n}", "work(b);"],
      named: "in an if, one statement added",
      why: "a condition hides an edit exactly as a function does, and this is the same statement put in one level down - named by the branch it landed in rather than by the whole if having been swapped",
    },
    {
      before: ["for (let x of xs) {\n  work(x);\n}", "work(b);"],
      after: ["for (let x of xs) {\n  work(x);\n  work(c);\n}", "work(b);"],
      named: "in a loop, one statement added",
      why: "all five kinds of loop answer to the one word, because which of them a run sits in changes nothing about the edit that happened inside it",
    },
    {
      before: ["if (a) {\n  work(a);\n} else {\n  work(b);\n}", "work(c);"],
      after: ["if (a) {\n  work(a);\n} else {\n  work(x);\n}", "work(c);"],
      named: "in an if, work called differently",
      why: "the branch that moved is the second one, so the runs have to be lined up in a fixed order - read out of the properties as they happen to be written, the then would be compared against the else",
    },
    {
      before: ["if (a) {\n  work(a);\n} else {\n  work(b);\n}", "work(c);"],
      after: ["if (a) {\n  work(x);\n} else {\n  work(y);\n}", "work(c);"],
      named: "one statement replaced",
      why: "both branches moved, which is two edits - the name is given up and the caller keeps the one it had, because pointing a command at the if would specify work nobody did",
    },
    {
      before: ["if (a) {\n  work(a);\n}", "work(c);"],
      after: ["if (b) {\n  work(a);\n}", "work(c);"],
      named: "a condition written differently",
      why: "every branch came back identical, so what moved was the condition itself - the reading that goes inside a branch gives this up on purpose, and the one that names the kind of line picks it up",
    },
    {
      before: ["if (a) {\n  work(a);\n}", "work(c);"],
      after: ["if (a) {\n  work(a);\n} else {\n  work(b);\n}", "work(c);"],
      named: "one statement replaced",
      why: "an else appearing changes how many runs there are to compare, so the two sides no longer line up at all - and it is a change to the if, not an edit inside a branch of it",
    },
    {
      before: ["let total = add(a, b);", "work(total);"],
      after: ["let total = add(a, c);", "work(total);"],
      named: "total written differently",
      why: "the binding kept its name and its value was written another way, so the name is the address a reader goes to - which is the whole difference between a specification and a count",
    },
    {
      before: ["let total = add(a, b);", "work(total);"],
      after: ["let sum = add(a, b);", "work(total);"],
      named: "one value written differently",
      why: "the name moved too, so saying either name would point at half the edit - the kind of line is still worth saying and the name is not",
    },
    {
      before: ["work(a);", "return a;"],
      after: ["work(a);", "return b;"],
      named: "what comes back written differently",
      why: "a different thing coming back is its own kind of edit, and there is only ever one of these to point at in a run",
    },
    {
      before: ["work(a);", "work(b);"],
      after: ["work(a);", "other(b);"],
      named: "one call swapped for another",
      why: "the line is still a call and it is a call to something else, which is a different edit from the same call handed different things",
    },
    {
      before: ["work(a);", "let total = a;"],
      after: ["work(a);", "return a;"],
      named: "one statement replaced",
      why: "a binding became a return, which is a change of what the line is for rather than a change inside it - and there is nothing shorter and true to say than that one went out and another came in",
    },
    {
      before: ["work(a);", '"why this is done at all";'],
      after: ["work(a);", '"why this is done at all, and when it is not";'],
      named: "the prose written differently",
      why: "a paragraph reworded and nothing else touched, which is three of every four edits that used to land in the bare bucket - this repo keeps its reasoning in its prose, so it is the change a later reader most wants to be able to find",
    },
    {
      before: ["work(a);", '("see ", other, " for the rest");'],
      after: ["work(a);", '"see other for the rest";'],
      named: "the prose written differently",
      why: "the same paragraph written in another of the three shapes a paragraph gets written in here, which is a fact about the writer's day rather than about the line - so the shapes answer to one reading and the name does not mention them",
    },
    {
      before: ["work(a);", "window.addEventListener(x, reload);"],
      after: ["work(a);", "other(reload);"],
      named: "one call swapped for another",
      why: "a call reached through a dot becoming a function of this repo, which is the shape of the wrapping done here constantly - the callee reading that answers only for plain names is the wrong one to ask, because it exists to tell callers whether a name is ours",
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
