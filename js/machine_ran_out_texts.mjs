export function machine_ran_out_texts() {
  "The words an error carries when the machine ran out of something, rather than when the thing being looked at was wrong.";
  "Every one of these is the operating system saying it could not lend what was asked for - file handles, memory, room on the disk. None of them says anything at all about the code that asked, which is the whole reason for keeping them together: an answer that came back carrying one of these is an answer about the machine and must never be read as an answer about the repo.";
  "The short codes are used rather than the sentences after them, because the sentence is written by whoever raised the error and varies, while the code is the same word every time and is what the operating system itself calls the condition.";
  let v = ["EMFILE", "ENFILE", "ENOMEM", "ENOSPC"];
  return v;
}
