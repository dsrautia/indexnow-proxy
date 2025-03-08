export async function onRequestPost(context) {
    try {
        const data = await context.request.json();
        const bingAPI = "https://www.bing.com/indexnow";
        const apiKey = "068b1a5a119a487b9d6fd6700ecd480e"; // Replace with your actual Bing API key

        const requestBody = JSON.stringify({
            host: new URL(data.url).hostname,
            key: apiKey,
            keyLocation: `https://${new URL(data.url).hostname}/indexnow-key.txt`,
            urlList: [data.url]
        });

        const response = await fetch(bingAPI, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: requestBody
        });

        return new Response(await response.text(), {
            headers: { "Access-Control-Allow-Origin": "*" }
        });

    } catch (error) {
        return new Response(`Error: ${error.message}`, {
            status: 500,
            headers: { "Access-Control-Allow-Origin": "*" }
        });
    }
}
