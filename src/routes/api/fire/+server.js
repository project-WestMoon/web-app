import { json } from '@sveltejs/kit';

let listeners = [];

function emitFireAlert(tempvalue, humidvalue) {
	listeners = listeners.filter((listener) => !listener.closed);
	listeners.forEach((listener) => {
		try {
			listener.enqueue(JSON.stringify({ type: 'fire-alert', tempvalue, humidvalue }));
		} catch (error) {
			console.error('Error sending fire alert:', error);
		}
	});
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const body = await request.json();
	const { tempvalue, humidvalue } = body;

	console.log('Received temperature value:', tempvalue);
	console.log('Received humidity value:', humidvalue);

	fetch('http://172.16.50.117:3000/fire', {
		method: 'POST',
		headers : {
			"Content-Type":"application/json; charset=utf-8"
		},
		body: JSON.stringify({
			'tempvalue': tempvalue,
			'humidvalue': humidvalue,
		})
	})

	emitFireAlert(tempvalue, humidvalue);
	return json({ message: 'Fire alert received and processed', tempvalue, humidvalue });
}

/** @type {import('./$types').RequestHandler} */
export function GET() {
	return new Response(
		new ReadableStream({
			start(controller) {
				const listener = {
					enqueue: (data) => {
						if (!listener.closed) {
							controller.enqueue(`data: ${data}\n\n`);
						}
					},
					close: () => {
						listener.closed = true;
						controller.close();
					},
					closed: false
				};

				listeners.push(listener);

				return () => {
					listener.close();
					listeners = listeners.filter((l) => l !== listener);
				};
			},
			cancel() {
				listeners = listeners.filter((l) => !l.closed);
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
