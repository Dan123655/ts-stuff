import React from 'react';

import './App.css';

function App() {

  let name: string;
  let age: number | string;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string];
  // let printName: Function;
  // let printName: unknown;
  let smth: unknown;
  let printName: (arg0: any) => void;//return undefined
  let printSmth: (arg0: any) => never;//returns nothing

  role = [5, 'rolestring'];

  // function printName(name:string) {
  //   console.log(name)
  // }; printName('someName')





  type Person = {
    name: string;
    age: number;
    sex?:'string'
  }
  let person: Person = {
    name: 'ben',
    age: 25,
  }
  let people: Person[];









  return (
    <div className="App">

    </div>
  );
}

export default App;
