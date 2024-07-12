function checkFlag() {
    const flag = document.getElementById('flag').value;
    const result = document.getElementById('result');

    if (flag === 'FLAG{con_gr6_ats9}') {
        result.textContent = 'Congratulations! You found the flag!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect flag. Try again!';
        result.style.color = 'red';
    }
}
