import { privateProcedure, publicProcedure, router } from '../trpc';

export const greetRouter = router({
	hello: publicProcedure.query(() => {
		return 'hello';
	}),
	hi: publicProcedure.query(() => {
		return 'hi';
	})
});

export const privateGreetRouter = router({
	privateHi: privateProcedure.query(({ ctx }) => {
		return `Your name is ${ctx.session.user.name}!`;
	})
});
