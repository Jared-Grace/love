import { import_lift_probe_inner } from "./import_lift_probe_inner.mjs";
import express from "express";
import { arguments_assert } from "./arguments_assert.mjs";
export function import_lift_probe() {
  arguments_assert(arguments, 0);
  ("A throwaway, made to ask one question and then deleted: does moving a function out to stand on its own carry over an import of something this repo does not hold?");
  let kept = express.static("public");
  let r = import_lift_probe_inner();
  let r2 = [r, kept];
  return r2;
}
