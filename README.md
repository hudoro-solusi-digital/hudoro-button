# Hudoro Button

Hudoro Button is a strict and customizable button component for web development projects, designed for simplicity and adherence to strict design guidelines.

## Package instalation

Instal package using pnpm

```bash
  pnpm add @hudoro/button
```

Instal package using yarn

```bash
  yarn add @hudoro/button
```

Instal package using npm

```bash
  npm i @hudoro/button
```

import package to your project

```bash
  import {Button} from '@hudoro/button'
```

## Usage/Examples

```javascript
import {Button} from "@hudoro/button";

function App() {
  return (
    <Button primary size="lg">
      Hudoro Button The Best Choices
    </Button>
  );
}
```

## Props

#### Props that you can pass to @hudoro/button

| Prop Name  | Type     | Value                                             | Default |
| :--------- | :------- | :------------------------------------------------ | :------ |
| size       | `string` | 'xs', 'sm', 'md', 'lg'                            | 'md'    |
| corner     | `string` | 'rounded', 'circular'                             | 'md'    |
| iconLeft   | `string` | React.ReactElement<React.SVGProps<SVGSVGElement>> | null    |
| iconRight  | `string` | React.ReactElement<React.SVGProps<SVGSVGElement>> | null    |
| fullWidth  | boolean  | false / true                                      | false   |
| primary    | boolean  | false / true                                      | true    |
| secondary  | boolean  | false / true                                      | false   |
| tertiary   | boolean  | false / true                                      | false   |
| quaternary | boolean  | false / true                                      | false   |
| link       | boolean  | false / true                                      | false   |
| success    | boolean  | false / true                                      | false   |
| danger     | boolean  | false / true                                      | false   |
| warning    | boolean  | false / true                                      | false   |
