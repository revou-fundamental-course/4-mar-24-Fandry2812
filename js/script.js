document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var gender = document.getElementById('gender').value;

    // Calculate BMI
    var bmi = calculateBMI(height, weight);

    // Classify BMI
    var bmiCategory = classifyBMI(bmi);

    // Display result
    displayResult(bmi, gender, bmiCategory);
});

function calculateBMI(height, weight) {
    // BMI formula: weight (kg) / height (m)^2
    var heightMeters = height / 100; // Convert height to meters
    return weight / (heightMeters * heightMeters);
}

function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal";
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "Kelebihan berat badan";
    } else {
        return "Kegemukan (Obesitas)";
    }
}

function displayResult(bmi, gender, bmiCategory) {
    var resultDiv = document.getElementById('result');
    var resultText = '';
    if (!isNaN(bmi)) {
        resultText = 'BMI Anda adalah ' + bmi.toFixed(2) + '. ';
        resultText += 'Anda termasuk dalam kategori ' + bmiCategory + '. ';
        if (gender === 'male') {
            resultText += 'Anda adalah seorang laki-laki.';
        } else {
            resultText += 'Anda adalah seorang wanita.';
        }
    } else {
        resultText = 'Masukkan tinggi dan berat yang valid.';
    }
    resultDiv.textContent = resultText;
}