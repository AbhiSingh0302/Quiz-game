let quest = [
    {
        q: 'Which team won 2011 world cup',
        id: 0
    },
    {
        q: 'Which team won 2019 world cup',
        id: 1
    }
];

let opt = [
    {
        opt1: 'India',
        opt2: 'Sri-lanka',
        opt3: 'Aus',
        opt4: 'Ban',
        id: 0
    },
    {
        opt1: 'Ind',
        opt2: 'New-Z',
        opt3: 'England',
        opt4: 'Aus',
        id: 1
    }
];

let input = document.querySelector('h2');
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let i = 0;

function addQues(){
    input.append(quest[i].q);
    a.append(opt[i].opt1);
    b.append(opt[i].opt2);
    c.append(opt[i].opt3);
    d.append(opt[i].opt4);
    document.getElementById('start').disabled = true;
    optChoose();
}

function optChoose(){
    console.log(i);
    if(i == 0) {
        a.addEventListener('click', function(){
            input.innerHTML = '';
            a.innerHTML = '';
            b.innerHTML = '';
            c.innerHTML = '';
            d.innerHTML = '';
            i++;
            addQues();
        })
        b.addEventListener('click', function(){
            alert('You are wrong...the correct answer is India');
            input.innerHTML = '';
            a.innerHTML = '';
            b.innerHTML = '';
            c.innerHTML = '';
            d.innerHTML = '';
            i++;
            addQues();
        })
        c.addEventListener('click', function(){
            alert('You are wrong...the correct answer is India')
            input.innerHTML = '';
            a.innerHTML = '';
            b.innerHTML = '';
            c.innerHTML = '';
            d.innerHTML = '';
            i++;
            addQues();
        })
        d.addEventListener('click', function(){
            alert('You are wrong...the correct answer is India')
            input.innerHTML = '';
            a.innerHTML = '';
            b.innerHTML = '';
            c.innerHTML = '';
            d.innerHTML = '';
            i++;
            addQues();
        })
    }
    else{
        a.addEventListener('click', function(){
            alert('You are wrong...the correct answer is England');
            window.close();
        })
        b.addEventListener('click', function(){
            alert('You are wrong...the correct answer is England');
            window.close();
        })
        c.addEventListener('click', function(){
            alert('Congrats......You are correct');
            window.close();
        })
        d.addEventListener('click', function(){
            alert('You are wrong...the correct answer is England');
            window.close();
        })
    }
}
