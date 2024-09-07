import { json } from '@sveltejs/kit';

let listeners = [];

function emitFireAlert() {
	listeners.forEach((listener) => {
		try {
			listener({ type: 'fire-alert' });
		} catch (error) {
			console.error('Error sending fire alert:', error);
		}
	});
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	emitFireAlert();
	return json({ message: 'Fire alert received and processed' });
}

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return new Response(
		new ReadableStream({
			start(controller) {
				const listener = (event) => {
					try {
						const data = JSON.stringify(event);
						controller.enqueue(`data: ${data}\n\n`);
					} catch (error) {
						console.error('Error sending event:', error);
						controller.close();
					}
				};

				listeners.push(listener);

				return () => {
					listeners = listeners.filter((l) => l !== listener);
				};
			},
			cancel() {
				listeners = listeners.filter((l) => l !== listener);
			}
		}),
		{
			headers: {
				'Content-Type': 'text/event-stream',
				'Cache-Control': 'no-cache',
				Connection: 'keep-alive'
			}
		}
	);
}
