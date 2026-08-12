import { qa_commit_named_forget } from "./qa_commit_named_forget.mjs";
import { qa_commit_named_entry_stale_is } from "./qa_commit_named_entry_stale_is.mjs";
export async function qa_commit_named_stale_remove() {
  "Forgets every judged commit whose kept names the reader could no longer say, so that it is judged again instead of being answered from a record written by a reader that no longer exists";
  "A judgement is remembered under the commit it was made about, and a commit is frozen, so the record was taken to be true forever. Half of that holds. What the gates FOUND at that commit cannot change; which functions each of them was taken to have NAMED was worked out by whatever reader was loaded at the moment of judging, and that reader lives in the working tree rather than in the commit being judged";
  "So the day the reader stopped treating a single everyday word as a name, thirteen of the sixteen commits already judged went on holding words like not, and, or and each - and because a remembered judgement is never worked out twice, the correction could not reach a single one of them. Every app ships those words, so those thirteen commits would have refused every deployment of every app for as long as the record stood";
  "Being unsure is the safe answer here, which is what makes this safe to run unasked: a commit this forgets reads as never judged, and never judged already means the deployment waits. It can cost time and it cannot let anything out";
  "A single everyday word is the whole test, because the reader can no longer produce one - so a record holding one was certainly written by the older reader. Nothing here guesses at which names look wrong; it asks the same question the reader now asks, and disbelieves any record that disagrees with it";
  "The whole entry goes rather than the offending name alone. The names of one judging were worked out together by one reader, so a record half of which came from a reader that has been replaced is not a record of anything - and trimming it would leave something that looks judged and is not";
  "Only the question belongs here. Walking the record, keeping what the question says no to, writing what is left and proving none of it survived is the same work whatever the reason for forgetting, so it is done in one place and this names the reason.";
  let r = await qa_commit_named_forget(qa_commit_named_entry_stale_is);
  return r;
}
