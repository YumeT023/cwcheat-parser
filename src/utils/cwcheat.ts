import $ from "parsimmon";

export const HexLen = (len = 1) => $.regexp(/[\da-z]/i).times(len);

export const LineNumber = HexLen(2).tie();

export const Address = HexLen(6).tie();

export const _ = $.whitespace;
export const _$ = $.optWhitespace;
