chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
}, function(selection) {
    const apiKey = 'Replace with your actual API key';
    const endpoint = 'https://api.openai.com/v1/completions';

    const prompt = `summarize this text and in case of comments write detailed analysis point wise: ${selection}`;

    const data = {
        "model": "text-davinci-003",
        "prompt": prompt,
        "temperature": 0,
        "max_tokens": 1000,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    };

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const summary = data.choices[0].text;
        document.getElementById('summary').innerHTML = summary;
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

  
