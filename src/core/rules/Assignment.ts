import $, { Language } from "parsimmon";
import { Statement } from "./common/Statement";
import { Address, HexLen } from "../../utils/cwcheat";
import { NodeBuilder } from "../node";

const Type = $.regexp(/[0-2]0/);

const LAssignment = $.seqObj<any>(["byte", Type], ["address", Address]);

const Value = HexLen(8).tie();

const RAssignment = $.seqObj<any>(["data", Value]);

export const Assignment = (lang: Language) => {
  return Statement(
    lang,
    ["identifier", LAssignment],
    ["value", RAssignment]
  ).thru(NodeBuilder.ASSIGNMENT);
};
