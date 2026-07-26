export function permission_grant_words_unsafe() {
  "the parameter-name words that disqualify a dispatcher function from an automatic allow rule";
  "an allow rule names the function and nothing else, so it covers every argument that function will ever be handed — only a function whose behaviour is fixed regardless of its arguments can be granted safely";
  "the first words say the argument becomes something to run, which is a command line wearing a function name; the rest say it names an arbitrary place to write, which a grant would hand over wholesale";
  let words = [
    "command",
    "code",
    "script",
    "shell",
    "eval",
    "path",
    "file",
    "folder",
    "directory",
  ];
  return words;
}
