import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_repack_only_is_cases() {
  "Functions written out, each beside the answer the reading of them owes. The sweep built on that reading walks the whole repo, where every answer is a name in a long list and a reading that had quietly started saying no to everything would leave the sweep looking clean. So the reading is pinned here, on functions small enough to check by eye.";
  "The two allowances are the reason this exists rather than a shorter list of the plain shapes. Each was added because the strict rule missed something real, and each is one sentence away from letting a function that does work through, so a corpus that only held the obvious cases would let either be dropped without a word.";
  "The bodies are written as text because the reading takes a parsed function and there is nowhere else to say what was parsed. The one real name among them is the getter the reading looks for, joined in rather than spelled, so that renaming the getter carries the corpus with it; every other name they call is one nothing answers to, because what is being asked is the shape of the lines.";
  let getter = fn_name("property_get");
  let arity_line = fn_name("arguments_assert");
  let cases = [
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); let v = { x, y }; return v; }',
      ]),
      repack_is: true,
      why: "the plain shape: two names lifted out of a record and put straight back into another one, handed over through a name - nothing happened in between, so whoever called this could have read both where they already were",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); return { x, y }; }',
      ]),
      repack_is: true,
      why: "the same shape with the record handed back where it stands rather than through a name, because a cut leaves either form depending on where it was made",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); let z = made_here(); return { x, y, z }; }',
      ]),
      repack_is: true,
      why: "the first allowance: one entry is genuinely new and the rest are carried, which is the worst real case in the repo - eighteen lines of carrying around a single value. A rule that asked for every entry to be lifted would call this honest work and never see it",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = null; return { x, y }; }',
      ]),
      repack_is: true,
      why: "the second allowance: an entry opened at nothing and never written to is carried along like any other, since deciding nothing is not doing anything. Without this the reading missed a function whose lifting was what pushed a page past its size",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = null; if (x) { y = 1; } return { x, y }; }',
      ]),
      repack_is: false,
      why: "the edge of that second allowance: the same opening at nothing, but something is written to it further down, so the function decides. This is the case that keeps the allowance from swallowing real work",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = 1; let z = 2; return { x, y, z }; }',
      ]),
      repack_is: false,
      why: "the edge of the first allowance: two entries are new rather than one, so the function is making a record rather than passing one along",
    },
    {
      code: "function a(r) { let x = 1; let y = 2; return { x, y }; }",
      repack_is: false,
      why: "nothing was lifted at all, so there is no round trip to complain about - this is a function that writes a record down, which is an ordinary thing to want",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); return { x }; }',
      ]),
      repack_is: false,
      why: "one entry is not a repack. Handing one thing back under a name is how a getter is written, and the complaint is about a body that grows with the number of names",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); return { x, z: y }; }',
      ]),
      repack_is: false,
      why: "an entry is given a name of its own rather than keeping the one it arrived with, so something was decided about what to call it and the record is not the one that came in",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); let p = work_one(x); let q = work_two(y); return { x, y }; }',
      ]),
      repack_is: false,
      why: "two calls stand in the body doing something with what was lifted, which is work however little the record afterwards says about it",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); function inner() { return x; } return { x, y, inner }; }',
      ]),
      repack_is: false,
      why: "a function written inside means more than one place hands something back, and the lines belong to whoever calls the inner one - they cannot be put back where the outer one was called from",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); return [x, y]; }',
      ]),
      repack_is: false,
      why: "what is handed back is a list, so the names were dropped and only their order kept - a real change to how the caller has to read it",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); paint(x); return { x, y }; }',
      ]),
      repack_is: true,
      why: "the one thing allowed, wearing the shape that binds no name. A line may do something and hand nothing back, and it costs the same one out of the allowance as a line that names what it got - otherwise the allowance would depend on whether the answer was wanted",
    },
    {
      code: text_combine_multiple([
        "function a(r) { let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); paint(x); let z = made_here(); return { x, y, z }; }',
      ]),
      repack_is: false,
      why: "two things done, one of them binding no name. Reading only the lines that bind a name saw one here and called this a pure repack, which named page painters and list walkers alongside the real ones. It is the case that pays for the second walk",
    },
    {
      code: text_combine_multiple([
        "function a(r) { ",
        arity_line,
        "(arguments, 1); let x = ",
        getter,
        '(r, "x"); let y = ',
        getter,
        '(r, "y"); let z = made_here(); return { x, y, z }; }',
      ]),
      repack_is: true,
      why: "the line counting the arguments is not a thing done. It stands in every function here because the canonical pass writes it, so spending the allowance on it would spend the same allowance in every body alike and hide every repack that does its one thing besides",
    },
  ];
  return cases;
}
