export function qa_gate_said_accused_or_null_cases() {
  "What a gate said, and who it thereby accused, written down. Reading a gate as accusing somebody it only mentioned decides deployments, so it is answerable here rather than only where it is used.";
  "The names inside are invented, so that the canonicalizing pass cannot rewrite a case into a reference to a real function and quietly change what the case says.";
  let cases = [
    {
      said: '{"list":[{"f_name":"gate_named_this","app":"app_thing_named_that","steps":["a_thing"]}]}',
      accused: ["app_thing_named_that"],
      why: "the whole reason for it: the app is who can repair this and the function beside it is what the app reached, so only the app is answering for it",
    },
    {
      said: '{"list":[{"f_name":"one_thing","app":"app_a_thing"},{"f_name":"other_thing","app":"app_b_thing"},{"f_name":"third_thing","app":"app_a_thing"}]}',
      accused: ["app_a_thing", "app_b_thing"],
      why: "an app answering for two faults is named once, because a gate names who is at fault rather than how often",
    },
    {
      said: '{"list":[{"f_name":"one_thing","app":"app_a_thing"},{"f_name":"other_thing"}]}',
      accused: null,
      why: "half a record of this shape is a record of some other kind that happens to mention an app, and guessing which half to trust is the reading this exists to stop",
    },
    {
      said: '{"list":[{"name":"a_thing"},{"name":"b_thing"}]}',
      accused: null,
      why: "the gates that write their offenders under any other word are untouched, and the ordinary readers keep answering for them",
    },
    {
      said: "2 files are over the ceiling",
      accused: null,
      why: "a gate complaining in English wrote no record at all, so it accused nobody here and the sentence reader is the one with the answer",
    },
    {
      said: '{"list":[]}',
      accused: null,
      why: "a record naming nobody is not an accusation of nobody, and answering with an empty list would read as a gate that is every app's business",
    },
    {
      said: '{"list":[{"f_name":"one_thing","app":""}]}',
      accused: null,
      why: "a blank where the app goes says the gate did not know either, and an empty word matches every app and none",
    },
  ];
  return cases;
}
