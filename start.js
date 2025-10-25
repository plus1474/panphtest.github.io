document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const inputText = document.getElementById('inputText');
    const errorMessage = document.getElementById('errorMessage');

    startButton.addEventListener('click', () => {
        const inputValue = inputText.value;

        // 入力値が空または半角数字でない場合にエラーを表示し、処理を終了する
        if (inputValue === '' || !/^[0-9]+$/.test(inputValue)) {
            errorMessage.style.display = 'block'; 
            return; // ここで処理が止まり、以降のコードは実行されない
        }

        // 入力が正しい場合、ローカルストレージに保存してページ遷移する
        errorMessage.style.display = 'none';
        localStorage.setItem('p5jsInput', inputValue);
        window.location.href = 'main.html';
    });
});
