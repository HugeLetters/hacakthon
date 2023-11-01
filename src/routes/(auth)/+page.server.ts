import { redirectOnUnauthenticatedError } from '$lib/auth';
import { trpcServer } from '$lib/server/router';

export async function load(event) {
	await trpcServer.greet.hello.ssr(event);
	await trpcServer.post.randomPost.ssr(event);
	await redirectOnUnauthenticatedError(event, async () => {
		await trpcServer.privateGreet.privateHi.ssr(event);
	});
}
