// existing:
function hello(name){
    return `hello ${name}`;
  }
  
  function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
  }
  
  // new:
  
  // 1. Colour Mix
  function colour_mix(rgb_colour1, rgb_colour2){
    const primaries = ['red','green','blue'];
    if (!primaries.includes(rgb_colour1) || !primaries.includes(rgb_colour2)) {
      return 'Error';
    }
    if (rgb_colour1 === rgb_colour2) {
      return rgb_colour1;
    }
    const combos = {
      'red+blue':   'fuchsia',
      'blue+red':   'fuchsia',
      'red+green':  'yellow',
      'green+red':  'yellow',
      'green+blue': 'aqua',
      'blue+green': 'aqua'
    };
    return combos[`${rgb_colour1}+${rgb_colour2}`] || 'Error';
  }
  
  // 2. Largest Product
  function largest_product(val1, val2, val3){
    const [a,b] = [val1,val2,val3].sort((x,y)=>y-x);
    return a * b;
  }
  
  // 3. Day of the Week
  function day_of_the_week(day_num){
    const days = {
      1:'Sunday',2:'Monday',3:'Tuesday',
      4:'Wednesday',5:'Thursday',6:'Friday',
      7:'Saturday'
    };
    return days[day_num] || 'Error';
  }
  
  // 4. Pay Raise
  function pay_raise(status, years, salary){
    let pct = 0.02;
    if (status === 'F') {
      if (years >= 10) pct = 0.05;
      else if (years < 4) pct = 0.015;
    } else if (status === 'P') {
      if (years > 10) pct = 0.03;
      else if (years < 4) pct = 0.01;
    }
    return parseFloat((salary * (1 + pct)).toFixed(2));
  }
  
  // 5. Leap Year
  function is_leap(year){
    if (year % 4  !== 0) return false;
    if (year % 100 !== 0) return true;
    return year % 400 === 0;
  }
  
  // exports:
  export {
    hello,
    fahrenheitToCelsius,
    colour_mix,
    largest_product,
    day_of_the_week,
    pay_raise,
    is_leap
  };
  