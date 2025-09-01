document.getElementById('startButton').addEventListener('click', () => {
    const inputValue = document.getElementById('inputText').value;
    localStorage.setItem('p5jsInput', inputValue);
    window.location.href = 'index.html';
});
