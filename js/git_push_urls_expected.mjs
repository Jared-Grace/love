export function git_push_urls_expected() {
  "Which repositories are meant to write to more than one place, and where - one entry for each repository that has an answer.";
  "A repository absent from here is not checked at all, and that silence is the design rather than an omission. Work that is nobody else's to read has no business being copied onto a public host, so saying nothing has to be the way to say so; adding an entry is a deliberate act, exactly as adding an address to push to is.";
  "Each entry is keyed by the address the repository is read from, which names the repository itself rather than the folder it happens to sit in. A second checkout on another machine is then the same repository and is held to the same answer, while somebody who copied this and can write to neither address matches nothing and is asked for nothing.";
  let expected = [
    {
      fetch_url: "git@github.com:Jared-Grace/love.git",
      push_urls: [
        "git@github.com:Jared-Grace/love.git",
        "git@gitlab.com:JESUSrosetolife/love.git",
      ],
    },
    {
      fetch_url: "https://github.com/Jared-Grace/love_claude_memory.git",
      push_urls: [
        "https://github.com/Jared-Grace/love_claude_memory.git",
        "git@gitlab.com:JESUSrosetolife/love_claude_memory.git",
      ],
    },
  ];
  return expected;
}
