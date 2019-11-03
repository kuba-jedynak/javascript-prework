function playGame(playerInput) {
    clearMessages()

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        }
        else if (argMoveId == 2) {
            return 'papier';
        }
        else if (argMoveId == 3) {
            return 'nożyce';
        }
        else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    //console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);

    function displeyResult(argComputerMove, argPlayerMove) {
        printMessage('Komputer zagrał: ' + argComputerMove + ', gracz zagrał ' + argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Gracz wygrywa!');
        }
        else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Komputer wygrywa!');
        }
        else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Nikt nie wygrywa!');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Gracz wygrywa!');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Komputer wygrywa!');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Nikt nie wygrywa!');
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Gracz wygrywa!');
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Komputer wygrywa!');
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Nikt nie wygrywa!');
        }
        else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Błąd');
        }
    }

    displeyResult(argComputerMove, argPlayerMove);
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