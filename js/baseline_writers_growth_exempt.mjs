import { fn_name } from "./fn_name.mjs";
export function baseline_writers_growth_exempt() {
  "the ratchet writers that are allowed to put a record on disk without first refusing to grow it, each with the reason it is allowed";
  "written down rather than worked out, because every one of these is a judgment somebody made and wrote into the function's own prose. a rule that tried to spot them by shape would have to guess at that judgment, and would go wrong in the direction that matters: quietly excusing the next writer that forgot";
  "an entry here is a claim that growth is honest for this one. it is the sort of claim worth making somebody argue for out loud, which is what a named list with a reason beside it costs";
  let exempt = [
    {
      f_name: fn_name("memory_symbols_baseline_write"),
      why: "growth is deliberate and its own prose says so at length: a call-shaped name in a note is a fault only sometimes, since prose quotes callbacks, records old names, and names things written in other languages. refusing to write those down would leave a gate red with no honest way to clear it, and a gate nobody can clear is one people learn to skip",
    },
    {
      f_name: fn_name("permission_grants_baseline_file_write"),
      why: "the shared writer both of its callers end at, so the refusal belongs one level up where the two ways of changing the record are told apart. one rewrites wholesale from what fails now and does refuse growth; the other grows by one deliberately named grant, which is the whole point of it",
    },
    {
      f_name: fn_name("pages_published_baseline_write"),
      why: "a new page is a new address, and there is nothing wrong with a new address. what its record is for is the opposite direction: that an address already typed into somebody's bar, kept in a bookmark, or sent to another person goes on answering. refusing growth here would make adding a page a fight with a gate, and would teach people to clear the record wholesale, which is exactly how a name that went missing gets written away",
    },
    {
      f_name: fn_name("baseline_known_write"),
      why: "the one writer every ratchet ends at, and the one the refusal itself would have to call. putting the check here would put it inside the thing it checks",
    },
  ];
  return exempt;
}
