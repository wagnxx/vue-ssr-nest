## TS basic



### 关于 类型设定 interface
- 描述带有属性的普通对象
- 描述函数类型
```js
interface Calculator {
    (num1: number, num2: number): number;
}

// 使用接口定义的函数类型
const add: Calculator = (num1, num2) => num1 + num2;
const subtract: Calculator = (num1, num2) => num1 - num2;
const multiply: Calculator = (num1, num2) => num1 * num2;

```

- 声明合并
    + TypeScript中的声明会创建以下三种实体之一：命名空间，类型或值
    + 正常合并是按顺序合并
    + 特例，重载函数参数是 单一的字符串字面量
    ```js
    interface Document {
      createElement(tagName: any): Element;
    }
    interface Document {
        createElement(tagName: "div"): HTMLDivElement;
        createElement(tagName: "span"): HTMLSpanElement;
    }
    interface Document {
        createElement(tagName: string): HTMLElement;
        createElement(tagName: "canvas"): HTMLCanvasElement;
    }
    // 合并后的 Document将会像下面这样：
    interface Document {
        createElement(tagName: "canvas"): HTMLCanvasElement;
        createElement(tagName: "div"): HTMLDivElement;
        createElement(tagName: "span"): HTMLSpanElement;
        createElement(tagName: string): HTMLElement;
        createElement(tagName: any): Element;
    }

    ```

- 高级类型
    + 联合声明  a:A|AA, parameterName is Type
    + 类型保护
    ```js
    function isNumber(x: any): x is number {
        return typeof x === "number";
    }

    function isString(x: any): x is string {
        return typeof x === "string";
    }

    function padLeft(value: string, padding: string | number) {
        if (isNumber(padding)) {
            return Array(padding + 1).join(" ") + value;
        }
        if (isString(padding)) {
            return padding + value;
        }
        throw new Error(`Expected string or number, got '${padding}'.`);
    }

    // typeof x === "number"  TypeScript可以将它识别为一个类型保护

    ```

    + 高级类型别名
    ```ts

    type Readonly<T> = {
     readonly [P in keyof T]: T[P];
    }

    type Partial<T> = {
        [P in keyof T]?: T[P];
    }

    type Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    }
    type Record<K extends string, T> = {
        [P in K]: T;
    }

    // Readonly， Partial和 Pick是同态的，但 Record不是。 因为 Record并不需要输入类型来拷贝属性，所以它不属于同态
    type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>


    ```