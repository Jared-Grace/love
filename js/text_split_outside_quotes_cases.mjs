import { arguments_assert } from "./arguments_assert.mjs";
export function text_split_outside_quotes_cases() {
  "Texts with the separators to cut them at and the pieces they must come apart into, written down so a cut that stops minding quotation marks is caught rather than quietly changing every count taken since.";
  "Both directions are held on purpose. A cut that misses a real separator understates a shape, which is only a smaller number; a cut that takes one inside quotation marks invents a piece nobody ran, and that is the failure this exists for, because it had already happened - a check of what the guard would say about a command was counted as though the command in the quotation marks had been run.";
  arguments_assert(arguments, 0);
  let shell = ["||", "&&", "|", ";", "\n"];
  let cases = [
    {
      value: "git log | head",
      separators: shell,
      pieces: ["git log ", " head"],
      why: "the ordinary case: a real pipe stands outside quotation marks and cuts",
    },
    {
      value: 'node scripts/ai.mjs guard_check "cat x | grep supper js/"',
      separators: shell,
      pieces: ['node scripts/ai.mjs guard_check "cat x | grep supper js/"'],
      why: "a whole command handed over as a quoted argument stays one piece - this is the case the counts were wrong about, where grep was counted as reached for though only the guard ran",
    },
    {
      value: "echo 'a; b'",
      separators: shell,
      pieces: ["echo 'a; b'"],
      why: "the single kind of quotation mark hides a separator just as the double kind does",
    },
    {
      value: "a || b",
      separators: shell,
      pieces: ["a ", " b"],
      why: "the two-character separator is matched whole, rather than as the single-character one it begins with followed by an empty piece",
    },
    {
      value: 'node -e "let a = 1;\nimport x"',
      separators: shell,
      pieces: ['node -e "let a = 1;\nimport x"'],
      why: "a script handed over between quotation marks stays one piece, which is where labels like `const` and `import` and `done` were coming from",
    },
    {
      value: "echo \"he said 'x | y'\"",
      separators: shell,
      pieces: ["echo \"he said 'x | y'\""],
      why: "a mark of one kind inside the other is ordinary text and closes nothing, so the pipe between them is still hidden",
    },
    {
      value: 'echo "a\\" | b"',
      separators: shell,
      pieces: ['echo "a\\" | b"'],
      why: "a backslash inside the double kind hides the mark that follows it, so the quoted run has not ended and the pipe is still inside it",
    },
    {
      value: "echo 'a\\' | wc",
      separators: shell,
      pieces: ["echo 'a\\' ", " wc"],
      why: "inside the single kind nothing is hidden, so the mark after the backslash does close the run and the pipe after it cuts - the same rule a shell keeps",
    },
    {
      value: 'echo "a | b',
      separators: shell,
      pieces: ['echo "a | b'],
      why: "a mark left open closes nothing and the rest comes back whole, which understates rather than invents",
    },
    {
      value: 'a,b,"c,d"',
      separators: [","],
      pieces: ["a", "b", '"c,d"'],
      why: "nothing here is about a shell: the separators are whatever the caller writes down, and the quotation marks are minded the same way",
    },
  ];
  return cases;
}
