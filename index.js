console.log("working");


//Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

let studentRecords = 
[
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 } 
];


let arr = studentRecords.map(x=> x.name.toUpperCase());
console.log(arr);


//q2Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.


let element = studentRecords.filter(x => x.marks > 50);
console.log(element);


//q3 : Retrieve the details of students who scored more than 50 marks and have id greater than 120.


let element1 = studentRecords.filter(x => x.marks > 50 && x.id>120);
console.log(element1);


//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.	

let element2 = studentRecords.reduce((accu,curr) => accu + curr.marks,0);
console.log(element2);



//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let element3 = studentRecords.filter(x => x.marks > 50);
for(let i = 0; i<element3.length; i++){
    console.log(element3[i].name);
}


//Question 6: This time we are required to print the sum of marks of the students with id > 120.	

let arr1 = studentRecords.filter(x => x.id > 120);
let arr2 = arr1.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr2);


//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.


for(let x of studentRecords){
    if(x.marks<50){
        
        x.marks = x.marks + 15;
    }
}

let checkMarks = studentRecords.filter(x => x.marks > 50);
let addMarks = checkMarks.reduce((accu, curr) => accu + curr.marks,0);
console.log(addMarks);


//question 8 :Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 	

let s1 = {
    name : "Abhi",
    class : 12,
    roll_no : 1
}



let s2 = {
    name : "Nayan",
    class : "13",
    roll_no : 2
}

let s3 = {
    name : "Aman",
    class :" 14",
    roll_no : 3
}

let s4 = {
    name : "NIkhil",
    class : "B",
    roll_no : 13
}

let s5 = {
    name : "Swapnil",
    class : "B",
    roll_no : 32
}

let s6 = {
    name : "Ptakshit",
    class : "B",
    roll_no : 58
}

let  students = [{...s1},{...s2},{...s3},{...s4},{...s5},{...s6}];
console.log(students);


console.log("Thank You");


