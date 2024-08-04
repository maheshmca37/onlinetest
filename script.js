function downloadHTML(content, filename) {
    try {
        const blob = new Blob([content], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link); // Append the link to the body
        link.click();
        document.body.removeChild(link); // Remove the link after download
    } catch (error) {
        console.error('Failed to download HTML file:', error);
    }
}

function generateQuestionHTML(questionText, options) {
    return `
    <div class="question">
        <p>${questionText}</p>
        <ul class="options">
            ${options.map(option => `<li>${option}</li>`).join('')}
        </ul>
    </div>
    `;
}

const questionsHTML = `
<!DOCTYPE html>
<html lang="te">
<head>
    <meta charset="UTF-8">
    <title>Response Sheet</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .question {
            margin-bottom: 20px;
        }
        .question p {
            font-size: 18px;
        }
        .options {
            list-style-type: none;
            padding: 0;
        }
        .options li {
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>Response Sheet</h1>
    ${generateQuestionHTML(
        'వజ్రాల నగరం మరియు సిల్క్ సిటీ ఆఫ్ ఇండియా గా పేరుగాంచిన భారతీయ నగరం?   ఆరావళి పర్వతాలు ఈ క్రింది ఏ రాష్ట్రంలో కలవు?    భారత జాతీయ పాడి పరిశోధన సంస్థ ఎక్కడ ఉంది.',
        ['ఎంపిక 1', 'ఎంపిక 2', 'ఎంపిక 3', 'ఎంపిక 4']
    )}
    <!-- Repeat for other questions -->
</body>
</html>
`;

document.getElementById('html-btn').addEventListener('click', () => {
    downloadHTML(questionsHTML, 'response-sheet.html');
});
