import $, { Language } from "parsimmon";
import { Address, HexLen, LineNumber } from "../../utils/cwcheat";
import { Statement } from "./common/Statement";
import { NodeBuilder } from "../node";

const Sign = $.string("E");

/**
 * byte to check in a ConditionExpression
 *
 * @description
 *  0 => 16bit => 4digit
 *
 *  1 => 8bit => 2digit
 */
const Byte = $.oneOf("01");

const Value = HexLen(4).tie();
const Type = $.regexp(/[0-3]0/);

const LCondition = $.seqObj<any>(
  Sign,
  ["byte", Byte],
  ["lineNumber", LineNumber],
  ["value", Value]
);
const RCondition = $.seqObj<any>(["method", Type], ["address", Address]);

export const Condition = (lang: Language) => {
  return Statement(lang, ["expected", LCondition], ["actual", RCondition]).thru(
    NodeBuilder.CONDITION
  );
};
