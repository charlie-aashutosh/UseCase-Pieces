document.getElementById('analyzeButton').addEventListener('click', analyzeSentiment);

async function analyzeSentiment() {
    const text = document.getElementById('inputText').value;
    const response = await fetch("https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment", {
        method: "POST",
        headers: {
            Authorization: "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",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: text })
    });

    try {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        document.getElementById('result').textContent = `Sentiment: ${result[0].label}`;
    } catch (error) {
        console.error('Error analyzing sentiment:', error);
        document.getElementById('result').textContent = 'Error analyzing sentiment.';
    }
}
