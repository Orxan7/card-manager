# card-manager

Сначала создадим окружение виртуальное<br>
`python3 -m venv env`<br>
Скачаем все библиотеки нужные
`pip install -r requirements.txt`<br>
Перейдем в папку project/frontend и скачем все нужные библиотеки и соберем все<br>
`cd project/frontend`<br>
`npm install`<br>
`npm run build`<br>
Делаем миграцию<br>
`python3 manage.py migrate`
И запускаем сервер 
`python3 manage.py runserver`

