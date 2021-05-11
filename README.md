# Caronas

Web service feito para ser consumido por um aplicativo de dispositivos móveis com intuito de oferecer e pedir caronas com diferentes usuários.

# Instalação

Dentro da pasta raíz rodar seguinte comando:

```sh
yarn install
```

Rodar as queries localizadas no arquivo abaixo, banco de dados utilizado MySQL:

```sh
src/database/carpoolScripts.sql
```

# Inicialização

Dentro da pasta raíz rodar seguinte comando:

```sh
yarn start
```
Rotas para utilização

 - Criar novo usuário: 'http://localhost:3333/api/user'
 - Buscar todos usuários: 'http://localhost:3333/api/users'
 - Buscar usuário por ID: 'http://localhost:3333/api/user/:id'

 - Criar nova solicitação de carona: 'http://localhost:3333/api/carpool/request'
 - Buscar todas solicitações de carona: 'http://localhost:3333/api/carpool/requests'
 - Buscar soicitação de carona por ID: 'http://localhost:3333/api/carpool/request/:id'
 - Buscar todas solicitações de carona de outros usuários: 'http://localhost:3333/api/carpool/requests/others/:id'
 - Buscar todas solicitações de carona do usuário atual: 'http://localhost:3333/api/carpool/requests/user/:id'

 - Criar nova oferta de carona: 'http://localhost:3333/api/carpool/offer'
 - Buscar todas ofertas de carona: 'http://localhost:3333/api/carpool/offers'
 - Buscar oferta de carona por ID: 'http://localhost:3333/api/carpool/offer/:id'
 - Buscar todas ofertas de carona de outros usuários: 'http://localhost:3333/api/carpool/offers/others/:id'
 - Buscar todas ofertas de carona do usuário atual: 'http://localhost:3333/api/carpool/offers/user/:id'

 - Criar novo match de caronas: 'http://localhost:3333/api/carpool/match'
 - Buscar match de caronas por ID: 'http://localhost:3333/api/carpool/match/:id'
 - Buscar match de caronas por ID da solicitação: 'http://localhost:3333/api/carpool/match/request/:id'
 - Buscar match de caronas por ID da oferta: 'http://localhost:3333/api/carpool/match/offer/:id'
 - Buscar match de caronas por ID da oferta e da solicitação: 'http://localhost:3333/api/carpool/match/offer/:offer_id/request/:request_id'
 - Oferta aceitar a soicitação: 'http://localhost:3333/api/carpool/match/accept/offer/:offer_id/request/:request_id'

 - Cancelar solicitação de carona: 'http://localhost:3333/api/cancel/request/:id'
 - Cancelar oferta de carona: 'http://localhost:3333/api/cancel/offer/:id'
 - Adicionar vaga para oferta de carona: 'http://localhost:3333/api/vacancy/add/:id'
 - Remover vaga da oferta de carona: 'http://localhost:3333/api/vacancy/remove/:id'

Exemplo de body (json) usados:

Usuário:
```sh
{
  "email": "fernando@email.com",
  "name": "Fernando Heisser",
  "password": "password"
}
```

Solicitação de carona:
```sh
{
  "user_id": 1,
  "phone": "12345678900",
  "from_city": "Butia",
  "from_neighborhood": "Centro",
  "from_street": "Rua Lisboa",
  "to_city": "General Câmara",
  "to_neighborhood": "Cruz de Malta",
  "to_street": "Rua Flores da Cunha",
  "start_date": "2021-05-10T13:15:00.000Z",
  "end_date": "2021-05-10T13:30:00.000Z"
}
```

Oferta de carona:
```sh
{
  "user_id": 1,
  "phone": "12345678900",
  "from_city": "Charqueadas",
  "from_neighborhood": "Centro",
  "from_street": "Rua Santo Amaro",
  "to_city": "São Jêronimo",
  "to_neighborhood": "Acacia",
  "to_street": "Rua São João",
  "start_date": "2021-05-31T13:15:00.000Z",
  "end_date": "2021-05-31T13:30:00.000Z",
  "available_vacancies": 4
}
```

Match de caronas:
```sh
{
  "carpool_request_id": 6,
  "carpool_offer_id": 6
}
```



