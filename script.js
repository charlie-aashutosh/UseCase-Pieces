// Initialize Sentiment.js
const sentiment = new Sentiment();

// Event listener for the button
document.getElementById('analyzeBtn').addEventListener('click', () => {
  // Get user input
  const userInput = document.getElementById('userInput').value;

  // Check if input is empty
  if (!userInput) {
    document.getElementById('result').innerText = "Please enter some text.";
    return;
  }

  // Analyze sentiment
  const analysis = sentiment.analyze(userInput);

  // Determine sentiment type
  let sentimentText = "Neutral 😐";
  if (analysis.score > 0) sentimentText = "Positive 😊";
  else if (analysis.score < 0) sentimentText = "Negative 😞";

  // Display result
  document.getElementById('result').innerHTML = `
    Sentiment: <strong>${sentimentText}</strong><br>
    Score: ${analysis.score}
  `;
});
