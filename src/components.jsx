import React from 'react';
import {
  hello,
  fahrenheitToCelsius,
  colour_mix,
  largest_product,
  day_of_the_week,
  pay_raise,
  is_leap
} from './functions.js';

// your original two:
function Question1(){
  return (
    <section>
      <h2>1. Hello Tests</h2>
      <p>hello("Rich")  → {hello('Rich')}</p>
      <p>hello("Bill")  → {hello('Bill')}</p>
      <p>hello("Chris") → {hello('Chris')}</p>
    </section>
  );
}

function Question2(){
  return (
    <section>
      <h2>2. Fahrenheit→Celsius</h2>
      <p>32°F  → {fahrenheitToCelsius(32).toFixed(1)}°C</p>
      <p>212°F → {fahrenheitToCelsius(212).toFixed(1)}°C</p>
      <p>70°F  → {fahrenheitToCelsius(70).toFixed(1)}°C</p>
    </section>
  );
}

// new test components:

export function ColourMixTests(){
  const cases = [['red','blue'],['red','green'],['green','blue']];
  return (
    <section>
      <h2>3. Colour Mix</h2>
      {cases.map(([c1,c2], i) => (
        <p key={i}>
          {c1} + {c2} → <strong>{colour_mix(c1,c2)}</strong>
        </p>
      ))}
    </section>
  );
}

export function LargestProductTests(){
  const cases = [[-8,12,20],[5,3,4],[7,7,7]];
  return (
    <section>
      <h2>4. Largest Product</h2>
      {cases.map(([a,b,c], i)=>(
        <p key={i}>
          values: {a}, {b}, {c} → <strong>{largest_product(a,b,c)}</strong>
        </p>
      ))}
    </section>
  );
}

export function DayOfWeekTests(){
  const cases = [1,5,8];
  return (
    <section>
      <h2>5. Day of the Week</h2>
      {cases.map((n,i)=>(
        <p key={i}>
          {n} → <strong>{day_of_the_week(n)}</strong>
        </p>
      ))}
    </section>
  );
}

export function PayRaiseTests(){
  const cases = [['F',2,25000],['F',10,20000],['P',3,18000]];
  return (
    <section>
      <h2>6. Pay Raise</h2>
      {cases.map(([st,yr,sal],i)=>(
        <p key={i}>
          {st}, {yr} yrs, ${sal} → <strong>${pay_raise(st,yr,sal)}</strong>
        </p>
      ))}
    </section>
  );
}

export function LeapYearTests(){
  const years = [1999,2000,1900];
  return (
    <section>
      <h2>7. Leap Year</h2>
      {years.map((yr,i)=>(
        <p key={i}>
          {yr} → <strong>{is_leap(yr).toString()}</strong>
        </p>
      ))}
    </section>
  );
}

// finally export your originals too:
export { Question1, Question2 };
