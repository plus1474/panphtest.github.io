document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const inputText = document.getElementById('inputText');

    // ボタンが存在するかチェック
    if (startButton) {
        startButton.addEventListener('click', () => {
            const inputValue = inputText.value;
            localStorage.setItem('p5jsInput', inputValue);
            window.location.href = 'main.html';
        });
    }
});
