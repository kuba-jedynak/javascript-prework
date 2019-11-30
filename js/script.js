{
    const stone ='kamień',
          scissors = 'nożyce',
          paper = 'papier';
    const playGame = function(playerInput) {
    clearMessages()

    const getMoveName = function (argMoveId) {
        if (argMoveId == 1) {
            return stone;
        }
        else if (argMoveId == 2) {
            return paper;
        }
        else if (argMoveId == 3) {
            return scissors;
        }
        else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);
    const argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);

    const displayResult = function(argComputerMove, argPlayerMove) {
        printMessage('Komputer zagrał: ' + argComputerMove + ', gracz zagrał ' + argPlayerMove);
        if (argComputerMove == stone && argPlayerMove == paper) {
            printMessage('Gracz wygrywa!');
        }
        else if (argComputerMove == stone && argPlayerMove == scissors) {
            printMessage('Komputer wygrywa!');
        }
        else if (argComputerMove == paper && argPlayerMove == scissors) {
            printMessage('Gracz wygrywa!');
        }
        else if (argComputerMove == paper && argPlayerMove == stone) {
            printMessage('Komputer wygrywa!');
        }
        else if (argComputerMove == scissors && argPlayerMove == stone) {
            printMessage('Gracz wygrywa!');
        }
        else if (argComputerMove == scissors && argPlayerMove == paper) {
            printMessage('Komputer wygrywa!');
        }
        else if (argComputerMove == argPlayerMove) {
            printMessage('Nikt nie wygrywa!');
        }
        else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Błąd');
        }
    }

    displayResult(argComputerMove, argPlayerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
}