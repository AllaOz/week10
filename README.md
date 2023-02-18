# week10
1.	Function Expression ex. let sum = function(a, b) { return a + b; };
Function Declaration ex. function sum(a, b) { //sum - название функции return a + b; }
Arrow functions ex. let func = (arg1, argN) => expression //в нём действительно есть стрелка
2.	functionName ();
    Immediately-invoked Function Expression ( function(){ .. } () )
    Ecли function declaration, то можно вызвать до объявления функции
3.	Тестирование – это тест для процесса поиска и выявления ошибок, а отладка (debugging) – процесс исправления ошибок. Логирование – выведение в консоль console.log() позволяет в консоли увидеть и найти ошибки
4.	Function Declaration – функция, объявленная в основном потоке кода. Function Expression – объявление функции в контексте какого-либо выражения, например присваивания. Функции, объявленные как Function Declaration, будут доступны, даже если обратится к ним до того, как они были объявлены.
5.	Console.log() выводит в консоль
6.	Потому что при инициализации кода движком js сначала ищется функция function expression, обрабатывает их и потом может выполнить, а это потому что function expression cоздается внутри другого выражения или конструкции, а function declaration  объявляется как отдельная конструкция и может быть вызвана и до объявления, тк движок js сначала ищет все function declaration
7.	Глобальная область видимости – область вне любых функций, переменные в ней везде видны.
8.	28
9.	5
10.	Ошибка, т.к не 
