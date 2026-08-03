export function marker_aliases_retired() {
  "An archive of the alias keys the marker family held before selectors replaced it.";
  "Kept as a copy so the keys can be restored if the family is revived.";
  "Do not normalize this file: the values are live function names, and the normalize pass would rewrite each one into a name reference.";
  "LIVE-NAMES-AS-VALUES - do NOT auto-canonicalize";
  let aliases = {
    m: "marker_top",
    md: "marker_down",
    ma: "marker_assign_replace",
    mc: "marker_call",
    mcr: "marker_call_replace",
    mnd: "marker_next_delete",
    mx: "marker_expand",
    mn: "marker_new",
    mca: "marker_call_atomize",
    ms: "marker_current_set",
    mm: "marker_move",
    mf: "marker_functionize",
    ars: "marker_assign_replace_text",
    mdc: "marker_down_choices",
    mrt: "marker_remove_marker_top",
    me: "marker_enter",
    mab: "marker_above",
    mda: "marker_above_delete",
    ml: "marker_leave",
    mb: "marker_below",
    mna: "marker_next_await",
    mpa: "marker_param_add",
    mi: "marker_if_test_replace",
    mbt: "marker_bottom",
    mdm: "marker_next_delete_multiple",
    mdd: "marker_down_1",
    muu: "marker_up_1",
    mk: "marker",
    mg: "data_marker_current_get",
  };
  return aliases;
}
