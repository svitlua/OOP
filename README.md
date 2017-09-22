# OOP
JS OOP practice for Cursor Education
# [CURSOR Education](http://cursor.education/) | Personal homework for OOP week

- task "**Market**"
  - You need to find, weigh and buy 15 items in supermarket. 
  - Every item should have place, price and weight. 
  - Also, you need to get a bill for each item.

- task "**Casino**"
  - Потрібно створити два класи Casino (Казино) і SlotMachine (Ігровий Автомат)
  - Конструктор класу Casino приймає два параметри: кількість SlotMachine у казино (number) і початкову суму грошей яка заноситься в казино (number).
  - Конструктор класу SlotMachine приймає один вхідний параметр: початкову суму грошей яка заноситься в автомат (number).
  - При створенні екземпляру Casino його конструктор створює необхідну кількість екземплярів SlotMachine (один з екземплярів SlotMachine повинен бути lucky) і розподіляє рівномірно(залишок заноситься на перший автомат) вхідну суму між усіма автоматами.
  - Клас Casino має мати публічні методи, які дозволяють:
    - Отримати загальну суму грошей у казино
    - Отримати кількість автоматів у казино
    - Додати новий автомат (в цьому випадку новий автомат має отримати як стартову суму, половину грошей з автомата, у якому їх на даний момент найбільше)
    - Видалити автомат за номером (гроші з видаленого автомату розподіляються між рештою кас)
    - Забрати з казино гроші. Вхідний аргумент - сума (number). Функція має зібрати потрібну суму з автоматів(послідовність від автомата, у якому грошей найбільше, до автомата у якому грошей найменше) і повернути її. 
  - Клас SlotMachine має мати публічні методи, які дозволяють:
    - Отримати загальну суму грошей у автоматі
    - Забрати гроші . Вхідний аргумент - сума (number).
    - Покласти гроші . Вхідний аргумент - сума (number).
    - Зіграти. Вхідний аргумент - сума (number) грошей яку гравець закидує в автомат. Гроші зараховуються у суму автомату.  Метод генерить випадкове 3-х значне число (наприклад 124). Якщо у числі 2 цифри однакові, повертається сума у 2 рази більша ніж прийшла в аргументі (і віднімається від суми грошей в автоматі). Якщо 3 цифри однакові - повертається 5-кратна сума. Якщо число дорівнює 777, повертаються усі гроші, які є в автоматі.  Якщо даний SlotMachine є lucky тоді 3-х значне число не випадкове а дорівнює 777.
  - Необхідно запобігти нелогічній поведінці (кількість автоматів менше нуля, намагаємось видалити неіснуючий автомат, кількість грошей в автоматі чи в казино менше нуля)
  - Потрібно написати скрипт, який буде демонструвати роботу усіх створених методів.

- task "**People management**"
  - Create form in html file for adding people with following fields:
    - name
    - sex (male/female/other)
    - birth date
    - address
    - phone
    - email
  - and table with the same columns under the form for added people.
  - When we click “save” button you should create instance of User. Every time when we create new user, push it’s instance to users array, then render our users to table under the form.
  - User should inherit next method from SuperUser:
     - changeDataVisibility() //changes value of property isDataVisible (from User)
  - When we click on table row (tr), we have to get user by index from array and call changeDataVisibility. Depending on isDataVisible property you should show or hide all columns in table except name for current user.
  - // tip: user’s index can be stored in tr attribute, for instance <tr data-id=”3”>


## Advanced level

- task "**2d game**" *(can be done in team)*
  - the **jQuery** should be used (required)
  - the **Underscore** should be used as well
  - the **OOP** should be used
  - no pre/post processors, only **plain css & html**
  - the **fps** (frames per second) should be optimized
  - the map should be generated from **map-object** (and you need to provide few maps for demonstration)
    - ```var map = {...}```
    - you should provide ability to **change map in realtime** (by user clicking no change-map button)
  - the player element should be able to **move by pressing UP/DOWN/LEFT/RIGHT** keyboard keys
    - also, the player element should have NO possibility to move over the wall-elements
  - **no fire action**, only movement
  - the **sound effects** should be implemented
    - you need to made a research & choose the appropriate library for that
  - ![](http://new.tinygrab.com/7020c0e8b00757efede212ecaed404ddbff288d04a.png)
  - The code should be submitted to github gh-pages, and link to game should be provided.
  - The code SHOULD pass the jslint & jshint validations.
  - Team will get "-1" point for result estimate in case if submitted code will have "errors" (warnings are ok).
