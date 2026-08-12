export function app_code_progress_storage_key() {
  "The word the code app keeps a learner's progress under on their own disk, so the lesson list can show what they have already finished when they come back.";
  "It is frozen because it names storage in somebody else's browser: retyping it would leave every future read looking for the new word while every learner's record stayed under the old one, and nothing here can reach in and move it.";
  let v = "lessons_progress";
  return v;
}
