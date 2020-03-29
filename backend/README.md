# Tipos de Parametros 

# Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
## Na rota passamos seu parametro da seguinte forma -> localhost:8000/users?name=Gustavo&idade=24
## Esse parâmetro nós recebemos o seu valor na query da requisição, exemplo -> request.query

# Route Params: Parâmetros utilizados para identificar recursos
## Na rota passamos seu parametro da seguinte forma -> localhost:8000/users/3
## Esse parâmetro nós recebemos seu valor no params da requisição, exemplo -> request.params
## Na hora de declarar a rota, fazemos da seguinte forma app.put('users/:id', (req, res))

# Request Body: Corpo da requisição, utilizado para criação/edição de valores
## Esse parâmetro nós recebemos seu valor no body da requisição, exemplo -> request.body

# Quando for importar arquivos criados por você em uma aplicação node, utilizar o caminho relativo.

### O comando npx knex init cria um arquivo de configuraçao do knex

Mapa para fazer o Modelo de Entidade Relacional 

  1 - Localizar quais informações serão armazenadas no banco de dados
    * ONG
    * Casos (Incidents)

  2 - Identificar quais funcionalidades essas entidades terão
    * Login de ONG
    * Cadastro de ONG
    * Logout da ONG
    * Cadastro de Incidents
    * Remover os Incidents
    * Listar os Incidents especificos de uma ONG
    * Listar todos os casos
    * Entrar em contato com a ONG

# Estudar sobre o CORS
### O Cors é um modulo de segurança, uma forma de proteger a aplicação é indicar quais dominios estão autorizados a acessar a aplicação -> Exemplo: cors({ origin: 'https://meuapp.com' });

#### Usando o Celebrate para fazer validações do código
O Express funciona como um telefone sem fio começando da esquerda para a direita
TDD -> Test Driven Development