function startGame() {
    // starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Start new game...';
}

document.getElementById('startGame')!.addEventListener('click', startGame);