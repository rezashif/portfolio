let arr=[1,2,3,4,5,6]
console.log(arr);

//for-of loop
for(let i of arr){
    console.log(i*5);
}

console.log("accsing elmnts");
console.log(arr[3]);//4

//dynamically or loosely typed long
let a=[2, 2.2 , 'HLO', true]
console.log(a);
console.log("updated array");
1[2]="red"
console.log(a);
console.log("length of arr a ->>"+a.length);

let  b=[10,20,30,40,50]
console.log(a.concat(b));
//spread oprtr -> ...
console.log("spread oprtr");
console.log(...a,...b,102, "str");

let c=[1,2,3,5,6,89,9,4,'sd',false]
console.log("delete emnts");
c.splice(5,2)
console.log(c);
c.splice(2,0)//(index,no of elmnts)
console.log(c);

//[1,2,3,5,6,4, 'sd',false]
c.splice(1,2,3)
//(index,no_of elmnts to be deleted, new elmt to add)
console.log(c);c

console.log(c.reverse());
//[false, 'sd', 4, 6, 5, 3, 1]

console.log("adding & deleting mthods");

let d=[10,20,30,40]
d.push(100)//add elmnt to end
console.log(d);
d.pop()//delete elmnt from end 
console.log(d);
//[10, 20, 30, 40]
d.shift()
console.log(d);//[20, 30, 40]
d.unshift(200)
console.log(d);//[200, 20, 30, 40]

//200, 20, 30, 40
d.shift(200)//20,30,40
d.unshift(100)//100,20,30,40
d.push(45)
d.pop()
console.log(d);
//[100, 20, 30, 40]
