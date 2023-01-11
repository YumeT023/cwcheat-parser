# CwCheat Parser

cw-cheat parser is a parser that lives on top of [Parsimmon](https://www.npmjs.com/package/parsimmon), which allows you to parse Tekken 6 psp cw-cheat.

It basically looks like the following:

```
_C1 GAN (main)
//GAN u/f+1+2
_L 0xE00E08C0 0x204078E2
_L 0xE00D0016 0x004078B4
_L 0x208C42CC 0x00000019
_L 0x208C42D0 0x090A0930
_L 0x208C42D4 0x08E410C8
_L 0x208C42D8 0x00000019
_L 0xE002086A 0x004078E2
_L 0x208C42C8 0x086B2B0C
_L 0x208C42DC 0x086B0034
_L 0xE0020875 0x004078E2
_L 0x208C42C8 0x0875E70C
_L 0x208C42DC 0x0875BC34
```

### Run it locally ?

```
git clone https://github.com/YumeT023/cwcheat-parser
```

```
npm install
```

that's it (mess with it as you want)

### using it as a node project dependency ?

```
    npm install cwcheat-parser
```

here is an example on how to use it

```javascript
import { CWCheatParser } from "cwcheat-parser";

const inputExample = `_C0 disabled title here
    _L 0xE01D08C0 0x204078E2 // inline comment
    // block comment here
    _L 0x20407D24 0x09084000 // assignment
    `;

const parser = new CWCheatParser(inputExample);

const astLike = parser.parse();
```

### Other Feature ?

actually, `cwcheat-parser` expose some APIs like Node, NodeType that you can use
if you want to build a generator for it :D (would u ? )
