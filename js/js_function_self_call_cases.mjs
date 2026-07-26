export function js_function_self_call_cases() {
  "Which functions go round forever and which merely call themselves, written down. The sweep built on this reading walks the whole repo, where the honest answer today is that nothing is wrong - so a reader that had quietly stopped looking would leave that sweep reporting a clean repo it never really read.";
  "The cases answering false carry more weight here than the ones answering true. Every way real recursion differs from the fault is written down separately: it sits under a test, or it changes an argument, or it passes a different number of them. A reader that flagged any self call at all would pass a corpus of faults alone and then condemn every recursive function in the repo.";
  "The names inside are invented on purpose. A real one written in a string here would be rewritten into a reference to that function by the canonicalizer, which would quietly change what the case says.";
  let cases = [
    {
      code: "export function loop_forever(items) { loop_forever(items); }",
      forever: true,
      why: "the fault itself, in the shape it was found in: one word of the callee name was meant to be another, and every call runs out of stack",
    },
    {
      code: "export function hands_on(a, b) { return hands_on(a, b); }",
      forever: true,
      why: "handing the call straight back is the same fault written differently, and it is the shape a function whose whole body is one call takes",
    },
    {
      code: "export function kept(items) { let r = kept(items); return r; }",
      forever: true,
      why: "keeping what the call gives back changes nothing about whether it ever gives anything back",
    },
    {
      code: "export async function waits(a) { await waits(a); }",
      forever: true,
      why: "waiting on it does not make it finish, so the asynchronous spelling has to read the same as the plain one",
    },
    {
      code: "export function step_down(items, index) { step_down(items, index + 1); }",
      forever: false,
      why: "recursion that walks somewhere: the next call is handed something the current one computed, so it is not the same call again",
    },
    {
      code: "export function guarded(items) { if (items.length) { guarded(items); } }",
      forever: false,
      why: "recursion under a test, which is most of it. The call is not at the top level, so something above it can stop it and the whole judgment does not apply",
    },
    {
      code: "export function fewer(a, b) { fewer(a); }",
      forever: false,
      why: "a different number of arguments is a different call, so passing fewer of them is not passing on what was handed in",
    },
    {
      code: "export function other_call(items) { plain_sort(items); }",
      forever: false,
      why: "calling something else is the ordinary case, and the reader has to tell the callee name apart from the name of the function it sits in",
    },
  ];
  return cases;
}
