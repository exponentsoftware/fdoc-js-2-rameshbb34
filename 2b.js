const users = [
    {
        name:'Brook', 
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    }, 
    {
        name:'David', 
        scores:75,
        skills:['HTM', 'CSS'],
        age:22
    }, 
    {
        name:'John', 
        scores:85,
        skills:['HTM'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha', 
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
    ];



// Write a function which addUser to the user array only if the user does not exist.

    function addUser(){
        users.forEach(user => {
            if(user.name !== 'Raj'){
                // users.push({name:'Vakul', scores:81, skills:['HTM', 'CSS', 'JS'], age:21});
                // users.push({name : "Vakul"}),
                users.name = "Raj",
                users.scores = 70,
                users.skills= ['HTM', 'CSS', 'JS'],
                users.age = 21
            }
        });
         console.log(users);
    }
    addUser(users)

