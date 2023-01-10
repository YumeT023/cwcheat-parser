import $ from "parsimmon";

export const Label = () => $.takeWhile((char) => char !== "\n");
