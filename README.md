### Backend
api.gingermesto.ml
www.api.gingermesto.ml

### Frontend
gingermesto.ml
www.gingermesto.ml

### Публичный IP
84.201.153.107

 --- 
Запросы


    GET /users — возвращает всех пользователей из базы
    GET /users/:userId - возвращает пользователя по _id
    POST /users — создаёт пользователя с переданными в теле запроса name, about и avatar
    GET /cards — возвращает все карточки из базы
    POST /cards — создаёт карточку с переданными в теле запроса name и link
    DELETE /cards/:cardId — удаляет карточку по _id
    PATCH /users/me — обновляет профиль
    PATCH /users/me/avatar — обновляет аватар
    PUT /cards/:cardId/likes — поставить лайк карточке
    DELETE /cards/:cardId/likes — убрать лайк с карточки    
 
