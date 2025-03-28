import { compatibleOpenAi } from "./../../../lib/model";
import { Message, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages }: { messages: Message[] } = await req.json();

    // check if user has sent a PDF
    const messagesHavePDF = messages.some((message) =>
        message.experimental_attachments?.some(
            (a) => a.contentType === "application/pdf",
        )
    );

    const result = streamText({
        model: messagesHavePDF ? compatibleOpenAi('claude-3-5-sonnet-latest') : compatibleOpenAi("gpt-4o"),
        messages,
    });

    return result.toDataStreamResponse();
}
