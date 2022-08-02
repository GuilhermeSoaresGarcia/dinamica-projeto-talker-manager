
1 - Crie uma rota GET /posts/:id que receba uma requisição com um id como param route, verifique existência do post com aquele id, onde:

    1. O id deve existir;
    2. Para todos os casos não atendidos acima deve ser retornado o código de status e um JSON com uma mensagem de erro, ex: status 404  e { "message": "post not found" };
    3. Caso tenha sucesso deve ser retornado uma resposta com o código de status e um JSON com as informações do respectivo post;

2 - Crie uma rota GET /posts que deve trazer todos os posts cadastrados, onde:

    1. Se não existir posts cadastrados retorne um array vazio e um status code, ex: status 200 e { "posts": [] };
    2. Se existir posts cadastrados retorne um array com os posts e um status code;

3 - Faça um middleware de erro. Caso tenha sido requisitada uma rota inexistente deve ser retornado o código de status e um JSON, ex: status 404 e { "message": "Opsss, route not found!" }


4 - Faça a conteinerização da sua aplicação.
    1. Sua aplicação deve ser executada na porta 3001 de um container Docker.
    2. As alterações realizadas no código devem ser refletidas sem a necessidade de reinicialização do container.

Dicas: separe suas rotas em arquivos e utilize middleware de erro para capturar uma rota inexistente.
