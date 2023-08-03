const app = require('express')();
const fs = require('fs/promises');

app.get('/', async (_, res) => {
	try {
		const html = await fs.readFile('./index.html', 'utf8');
		res.setHeader('Content-type', 'text/html;charset=utf-8');
		return res.send(html);
	} catch (error) {
		console.log('I decided to not do anything with this error. BAD BAD me');
		console.error(error);
	}
});

app.get('/csp', async (_, res) => {
	try {
		const html = await fs.readFile('./csp.html', 'utf8');
		res.setHeader('Content-Security-Policy', "default-src 'self'");
		res.setHeader('Content-type', 'text/html;charset=utf-8');
		return res.send(html);
	} catch (error) {
		console.log('I decided to not do anything with this error. BAD BAD me');
		console.error(error);
	}
});

app.get('/locking-the-event-loop', async (_, res) => {
	try {
		const html = await fs.readFile('./locking-the-event-loop.html', 'utf8');
		res.setHeader('Content-type', 'text/html;charset=utf-8');
		return res.send(html);
	} catch (error) {
		console.log('I decided to not do anything with this error. BAD BAD me');
		console.error(error);
	}
});

app.get('/out-of-memory', async (_, res) => {
	try {
		const html = await fs.readFile('./out-of-memory.html', 'utf8');
		res.setHeader('Content-type', 'text/html;charset=utf-8');
		return res.send(html);
	} catch (error) {
		console.log('I decided to not do anything with this error. BAD BAD me');
		console.error(error);
	}
});

app.listen(3000, () => {
	console.log('Server is listening on port 3000');
});
