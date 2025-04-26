let str='Good afternoon'
console.log(str);
console.log(str.length);//15
console.log("index of mthod");
console.log(str.indexOf('G'));//0
console.log(str.indexOf('0'));//-1
console.log(str.indexOf('o'));//1
console.log(str.lastIndexOf('o'));//12
//Good afternoon
console.log("search mthod");
console.log(str.search('G'));//0
console.log(str.search('on'));//12


//Good afternoon
console.log("includes mthod");
console.log(str.includes('od'));//true
console.log(str.includes('noo'));//true
console.log(str.includes('good'));//false

console.log(`string manipulation->
     uppercase or lowercase`);
     console.log(str.toLowerCase());
     console.log(str.toUpperCase());

// Good aafternoon
console.log("trim mthod");
console.log(str);
console.log(str.length);
console.log(str.trim());
console.log(str.trim().length);
//  or-----
let trim_str=str.trim()
console.log(trim_str);
console.log(trim_str.length);

//Good afternoon
console.log("replace mthod");
console.log(str.replace('Good','happy'));
let str1="good morning & good afternoon"
console.log(str1.replace('Good','happy'));
console.log(str1.replaceAll('Good','happy'));

console.log("with reg expression");
// Good morning &Good afternoon
console.log(str1.replace(/gOoD/i,'hpy'));
//case in-sensitive  -i
//hpy morning & good afternoon 
console.log(str1.replace(/Good/g,'hpy'));

//g-global
//both
console.log(str1.replace(/goOD/ig,'happy'));

console.log("conver str to arr");
let arr=str1.split('');
console.log(arr);
let arr1=str1.split(' ');
console.log(arr1);

console.log("conver arr to str");
console.log(arr1.join(''));
//goodmorning&goodafternoon
console.log(arr1.join(' '));
//good morning & good afternoon

console.log('starts with & endswith mthod');
console.log(str1.startsWith('g'));//t
console.log(str1.startsWith('Go'));//f
console.log(str1.endsWith('Go'));//f
console.log(str1.endsWith('on'));//t

console.log("char at mthod")
console.log(str1.charAt(0));//g
console.log(str1.charAt(50));//space
console.log(str1.charCodeAt(0));//103
console.log(str1.charCodeAt(4));//32
console.log(str1.charCodeAt(50));//NaN

// Good morning & Good afternoon
console.log("substing mthod");
console.log(str1.substring());//og str
console.log(str1.substring(5,10));//5 to 10-1
console.log(str1.substring(7));//1 to end
console.log(str1.substring(-3,-1));//no output
console.log(str1.substring(-3));//og str
//substring not work with -ve index

     
console.log("slice method")
// Good morning & Good afternoon
console.log(str1.slice());//og str
console.log(str1.slice(3,9));//3 to 8
console.log(str1.slice(3));//3 to end
console.log(str1.slice(-3));//-3 to end
console.log(str1.slice(-3,-7));//ntg
console.log(str1.slice(-7,-3));//-7 to -4

console.log('substr mthod');
console.log(str1.substr());//og str
console.log(str1.substr(4));//4 to end
// (index, no of elmnts)
console.log(str1.substr(4,8));//4 to 8 index
console.log(str1.substr(-1,3));//n
console.log(str1.substr(-4,3));//noo
             
             