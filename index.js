const express = require('express')
const app = express();
const port = 3000;

const error = res => {
	res.status(422).send("Invalid information");
}

app.get('/', (req, res) => {
	error(res);
});
app.get('/:userId', (req, res) => {
	const user = new User(req.params.userId);
	if (!user.exist())
		return (error(res));
	res.send(user.info);
});

app.listen(port, () => console.log(`[info] Bourse API running on port ${port}`));
