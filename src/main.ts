
const types = {
  any: 'any',
  never: 'never',
  void: 'for functions that do not return something',
  unknown: 'unknown',
}



const badIdea: any = 'anything or type'

const something = (): never => {
  throw "never"
}

const doSomething = (): void => {
  console.log('doSomething')
}

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;

//Type asertion, converting one type to another
let s2: string = vUnknown as string;


let pageNumber: string = '1'
let numericPageNUmber: number = pageNumber as unknown as number