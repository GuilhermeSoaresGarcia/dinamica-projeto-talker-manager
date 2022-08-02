const express = require('express');
const app = express();

const array = [
  { id: 1, name: 'Batata' },
  { id: 2, name: 'Maçã' },
  { id: 3, name: 'Coca-Cola' }
];

const arrayVazio = [];

app.get('/posts/', (_req, res, next) => {
  try{
    if (array2.length === 0) return res.status(200).json({ "posts": arrayVazio });
    res.status(200).json(array);
  } catch {
    // throw new Error ('xablau 22');
    next(new Error ('xablau 22'))
  }
})

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const xablau = array.find(item => item.id === Number(id));
  if (!xablau) return res.status(404).json({ message: "post not found" });
  res.status(200).json(xablau);
});

//app.use(function (err, req, res, next)
app.use((err, req, res, next) => {
  res.status(404).json({ message: err.message });
});

app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, (req, res) => {
  console.log('Xablauzando na porta xablau e 1! ');
});


