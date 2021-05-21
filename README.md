# CCOM 
CCOM is minimal interface for writing React components

# INSTALL
`npm install ccom`

# Usage
```js
import ccom from 'ccom'

const Comp = ccom('div')(
  `
    classname1 classname2 ...
  `,
  `
    styles...
  `
)

```

# Example
```js
const EmptyDiv = ccom('div')()

const ClassDiv = ccom('div')(
  `
    bg-primary
  `
)

const StyleImg = ccom('img')(``,
  `
    width: 175px;
    height: 167px;
  `
)


const CondButton = ccom('button')(
  ({disabled}) => `
    bg-white
    border-solid border-2
    ${disabled ? `text-disabled` : `text-primary`}
    ${disabled ? `border-disabled` : `border-primary`}
  `,
  ({w=120}) => `
    width: ${w}px;
    height: 36px; 
  `
)
```
