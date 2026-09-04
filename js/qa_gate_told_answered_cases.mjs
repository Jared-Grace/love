import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function qa_gate_told_answered_cases() {
  "The shapes a run of the gates has actually come back in, each written down beside whether it amounts to an answer.";
  "The two ordinary ones are here to hold the line rather than to find anything. A green run and a run that complains about a gate it can name are both answers, and a check that got either of them wrong would stop every judging in the repo being written down - so they are cheap to keep and loud when broken.";
  "The third is the one this exists for. A share of the gates stopped without complaining about a single gate, which is what a neighbour saving a file part way through leaves behind, and it was written into the shared record twice before anything told it apart from a verdict. While one of those sat at the front of the record, every cheap reading of what is red answered that nothing is - and the deployment it was holding out was the one thing that reading is for.";
  "The fourth has no list of gates at all rather than an empty one. The record is a file written over months by readers that have been replaced since, so an entry missing the field outright is a shape that reaches this, and it must land where an empty list lands - anything else would treat the oldest entries as though they had answered.";
  "The last two are the same run said to have got to its end and said to have stopped before it. Naming a gate is not on its own enough, because the names are printed one at a time and a share that dies in the middle of printing them has named some of what is wrong and lost the rest - so a run that says it stopped partway is refused however many names it carries. The one that says it finished has to stay an answer, and it is here so that the field that refuses cannot quietly start refusing every red run instead.";
  arguments_assert(arguments, 0);
  let f_name = fn_name("bundle_size_gate_run");
  let cases = [
    {
      told: {
        green: true,
        failed: [],
      },
      answer: true,
      why: "an ordinary green run, which is an answer and the best one there is",
    },
    {
      told: {
        green: false,
        failed: [f_name],
      },
      answer: true,
      why: "a gate complained and can be named, so somebody can go and look at what it complained about - red is an answer",
    },
    {
      told: {
        green: false,
        failed: [],
      },
      answer: false,
      why: "the share stopped and named no gate, so nothing was found out - this is the shape that must never be filed, because filed it looks judged and is never judged again",
    },
    {
      told: {
        green: false,
      },
      answer: false,
      why: "no list of gates at all, which an older reader left behind and which has to land exactly where an empty list lands",
    },
    {
      told: {
        green: false,
        failed: [f_name],
        finished: false,
      },
      answer: false,
      why: "a gate was named and then the share died before it could name the rest, so the list is short by an unknown amount and reading it as the whole of what is wrong is the mistake",
    },
    {
      told: {
        green: false,
        failed: [f_name],
        finished: true,
      },
      answer: true,
      why: "the same red run said to have reached its own end, which stays an answer - here so that refusing a run that stopped partway cannot spread to every red run",
    },
  ];
  return cases;
}
