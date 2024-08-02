
interface ConditonalType {
    live(): void
}
interface extendsConditonalType extends ConditonalType {
    woof(): void
}

type Example1 = extendsConditonalType extends  ConditonalType ? number: string;
type Example2 = RegExp extends  ConditonalType ? number: string;
const  exampleVlue:Example1 = 10
const  exampleVlue2:Example2 = 'something string'
// console.log(exampleVlue)
// console.log(exampleVlue2)


interface IdLabel {
    id: number /* some fields */;
  }
  interface NameLabel {
    name: string /* other fields */;
  }
//   function createLabel(id: number): IdLabel;
//   function createLabel(name: string): NameLabel;
//   function createLabel(nameOrId: string | number): IdLabel | NameLabel;
// function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   throw "unimplemented";
// }

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;


  type lavelId = NameOrId<number>
  type lavelName = NameOrId<string>
  
let lavel:lavelName = {name: 'ami string bolci'}
let lavel2:lavelId = {id: 20}
console.log(lavel, 'lavel 2', lavel2)
// interface IdLabel2 {
//     id: number
// }
// interface NameLabel2{
//     name: string
// }

// function createLabel2(id: number| string): IdLabel
// function createLabel2(name: string | number): NameLabel |IdLabel

// function createLabel2(nameOrId: string | number): IdLabel | NameLabel {
//     if(typeof nameOrId === 'number'){
//         return { id: nameOrId, name: 'from hare if' } 
//     }else {
//         return { name: nameOrId}
//     }
// }

// console.log(createLabel2('400'))
