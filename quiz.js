let quest = [
    {
        q: 'Which team won 2011 world cup'
    },
    {
        q: 'Which team won 2019 world cup'
    }
];

let opt = [
    {
        opt1: ['India',true],
        opt2: ['Sri-lanka',false],
        opt3: ['Aus',false],
        opt4: ['Ban',false]
    },
    {
        opt1: ['India',false],
        opt2: ['New-Z',false],
        opt3: ['England',true],
        opt4: ['Aus',false]
    }
];

let input = document.querySelector('h2');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let i = 0;

document.querySelector('.options').style.visibility = 'hidden';
document.querySelector('#next').style.visibility = 'hidden';

function addQues() {
    console.log(i);
    console.log(opt[i].opt1[0]);
    // document.getElementById('start').style.visibility = 'hidden';
    // document.getElementById('start').disabled = true;
    // document.getElementById('start').innerHTML = 'Best of luck';
    // document.getElementById('start').style.border = 'none';
    document.getElementById('start').style.display = 'none';
    document.querySelector('.options').style.visibility = 'visible';
    input.append(quest[i].q);
    a.append(opt[i].opt1[0]);
    b.append(opt[i].opt2[0]);
    c.append(opt[i].opt3[0]);
    d.append(opt[i].opt4[0]);
    optChoose();
}

function optChoose() {
        a.addEventListener('click', function () {
            let showOpt = this.getAttribute('id');
            let optOne = opt[i].opt1[1];
            console.log(optOne);
            toCheck(optOne,showOpt);
        })
        b.addEventListener('click', function () {
            let showOpt = this.getAttribute('id');
            let optTwo = opt[i].opt2[1];
            console.log(optTwo);
            toCheck(optTwo,showOpt);
        })
        c.addEventListener('click', function () {
            let showOpt = this.getAttribute('id');
            let optThree = opt[i].opt3[1];
            console.log(optThree);
            toCheck(optThree,showOpt);
        })
        d.addEventListener('click', function () {
            let showOpt = this.getAttribute('id');
            let optFour = opt[i].opt4[1];
            console.log(optFour);
            toCheck(optFour,showOpt);
        })
    }

function toCheck(check,option){
    document.querySelector('.options').style.visibility = 'hidden';
    document.getElementById(option).style.visibility = 'visible';
    document.querySelector('#next').style.visibility = 'visible';
    if(check){
        document.getElementById('check').innerHTML = 'You are correct'; 
        document.getElementById(option).style.backgroundColor = 'green';
    }
    else{
        document.getElementById('check').innerHTML = 'You are incorrect';
        document.getElementById(option).style.backgroundColor = 'red';
    }
    next(option);
}

function next(option) {
    document.querySelector('#next').addEventListener('click', function () {
        document.getElementById(option).style.backgroundColor = 'initial';
        document.getElementById(option).style.visibility = 'initial';
        // document.querySelector('.options').style.visibility = 'hidden';
        document.getElementById('check').innerHTML = '';
        document.getElementById('a').innerHTML = '';
        document.getElementById('b').innerHTML = '';
        document.getElementById('c').innerHTML = '';
        document.getElementById('d').innerHTML = '';
        document.querySelector('h2').innerHTML = '';
        document.querySelector('main').style.backgroundColor = 'initial';
        document.querySelector('#next').style.visibility = 'hidden';
        i++;
        addQues();
    })
}










// document.querySelector('main').style.backgroundColor = 'green';
            // document.getElementById('check').innerHTML = 'You are correct';
            // clearAll();

            // document.querySelector('#next').style.visibility = 'visible';
            // next();
// if (i == 0) {
//     else {
//         a.addEventListener('click', function () {
//             // alert('You are wrong...the correct answer is England');
//             if (confirm('Do you want to re-attempt?')) {
//                 i = 0;
//                 document.querySelector('main').style.backgroundColor = 'initial';
//                 addQues();
//             } else {
//                 window.close();
//             }
//         })
//         b.addEventListener('click', function () {
//             alert('You are wrong...the correct answer is England');
//             window.close();
//         })
//         c.addEventListener('click', function () {
//             alert('Congrats......You are correct');
//             window.close();
//         })
//         d.addEventListener('click', function () {
//             alert('You are wrong...the correct answer is England');
//             window.close();
//         })
//     }
// }

// toCheck(){
//     if()
// }



// function clearAll() {
//     document.querySelector('.Same-style').style.visibility = 'hidden'; 
//     i++;
// }


