import { XMLParser } from "fast-xml-parser";

function run() {
    const url = Host.inputString();
    // Validate input URL
    if (!url || !url.startsWith("http")) {
        throw new Error("Invalid URL format. Please provide a valid http URL.");
    }

    const request = {
        method: "GET",
        url: url,
    };

    const response = Http.request(request);
    if (response.status !== 200) {
        throw new Error("Failed to fetch RSS feed:");
    }

    const parser = new XMLParser();
    const xmlDoc = parser.parse(response.body);

    let output = "";

    output += `Feed Title: ${xmlDoc.rss.channel.title}\n`;

    for (const item of xmlDoc.rss.channel.item) {
        output += `Article Title: ${item.title}\n`;
        output += item.link ? `Article Link: ${item.link}\n` : "";
    }

    Host.outputString(output);
}

module.exports = { run };