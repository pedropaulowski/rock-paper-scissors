var options = ['rock', 'paper', 'scissors']
const html_options = document.getElementsByClassName('handleable')
const result_player = document.getElementById('player')
const result_computer = document.getElementById('computer')
const result_html = document.getElementById('result')

for(var i = 0; i < html_options.length; i++) {

    html_options[i].addEventListener("click", (e) => {
        var computer_number = computerChoose()
        var computer_html = htmlSelected(options[computer_number])
        var computer_choose = options[computer_number];
        var player_choose = e.target.getAttribute('data-value')
        result_html.innerHTML = result(player_choose, computer_choose)

        switch(e.target.getAttribute('data-value')) {
            case 'rock':
                result_player.innerHTML = htmlSelected('rock')
                break;
            case 'paper':
                result_player.innerHTML = htmlSelected('paper')
                break;
            case 'scissors':
                result_player.innerHTML = htmlSelected('scissors')
                break;
        }

        result_computer.innerHTML = computer_html

    }, false)
}

function htmlSelected(option) {
    var html = `<i class="far fa-hand-${option}"></i>`
    return html
}

function computerChoose() {
    var number = Math.floor(Math.random() * 3)
    return number
}

function result(player, computer) {
    switch(player) {
        case 'rock':
            if(computer == 'paper')
                return computer;
            else if(computer =='rock')
                return 'draw';
            else 
                return player;
                
            break;
        case 'paper':
            if(computer == 'paper')
                return "draw";
            else if(computer =='rock')
                return player;
            else 
                return computer;
            break;
        case 'scissors':
            if(computer == 'paper')
                return player;
            else if(computer =='rock')
                return computer;
            else 
                return "draw";
            break;
    }
}


    
