async function submitURL() {
    const url = document.getElementById('urlInput').value;
    const resultText = document.getElementById("result");

    if (!url) {
        alert("Please enter a URL.");
        return;
    }

    try {
        const response = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url })
        });

        const data = await response.text();
        resultText.innerText = "Response: " + data;

    } catch (error) {
        resultText.innerText = "Error: " + error.message;
    }
}
