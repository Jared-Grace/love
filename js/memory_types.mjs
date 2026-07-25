export function memory_types() {
  "The four kinds a memory note can be, as the memory instructions name them. Who the user is, guidance they have given on how to work, ongoing work that the code and its history do not record, and a pointer to something outside the repo.";
  "Written down here so the check and the instructions cannot drift apart quietly - a fifth kind invented in passing fails the gate rather than settling in.";
  let types = ["user", "feedback", "project", "reference"];
  return types;
}
