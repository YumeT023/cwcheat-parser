import { Lang } from "./core";

class CWCheatParser {
  private lines: string[];
  private readonly _lang = Lang.All;

  constructor(input: string) {
    this.Input(input.trim());
  }

  /**
   * @param {string} input
   * replace the prev input with another
   */
  public Input(input: string) {
    this.lines = input.split("\n");
  }

  /**
   * parse the input and returns an Ast like
   */
  public parse() {
    const ast = [];

    for (let line of this.lines) {
      const $ast = this._lang.parse(line);
      ast.push($ast);
    }

    return ast;
  }
}

export * from "./core";
export { CWCheatParser };
