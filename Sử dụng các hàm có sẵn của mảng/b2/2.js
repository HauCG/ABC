function processArray() {
    // Lấy giá trị từ input
    let input = document.getElementById('numberInput').value;

    // Tách giá trị thành mảng các số
    let numbers = input.split('');

    // Kiểm tra và chèn dấu '-' giữa các số chia hết cho 2 liên tiếp
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0) {
            numbers.splice(i + 1, 0, '-');
            i++; // Bỏ qua phần tử '-' mới chèn vào
        }
    }

    // Gộp lại mảng thành chuỗi kết quả
    let result = numbers.join('');

    // Hiển thị kết quả
    document.getElementById('result').textContent = result;
}