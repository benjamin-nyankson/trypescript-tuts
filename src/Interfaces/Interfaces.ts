interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const Person1: IsPerson = {
  name: "Benjamin",
  age: 20,
  speak(text: string): void {
    console.log('I speak ', text);
  },
  spend(amount:number):number{
    console.log('I spent ', amount)
    return amount 
  }
};

console.log(Person1)