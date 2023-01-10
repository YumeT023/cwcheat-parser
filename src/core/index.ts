import $ from "parsimmon";
import { Title, Comment, Condition, Assignment } from "./rules";
import { Label, Line, Pre } from "./rules/common";
import {
  Title as $Title,
  Comment as $Comment,
  Condition as $Condition,
  Assignment as $Assignment,
} from "./node";

const All = ({ Title, Comment, Condition, Assignment }: $.Language) => {
  return $.alt(Condition, Assignment, Title, Comment);
};

interface CWLang {
  Title: $Title;
  Comment: $Comment;
  Condition: $Condition;
  Assignment: $Assignment;
  Label: string;
  Line: string;
  Pre: string;
  All: $Title | $Comment | $Condition | $Assignment;
}

const Lang = $.createLanguage<CWLang>({
  All,
  Title,
  Comment,
  Condition,
  Assignment,
  Label,
  Line,
  Pre,
});

export { Lang };
export * from "./node";
