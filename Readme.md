## CLI-File-Manager

### Навигация 

`up` - перемещает на каталог выше;

`cd path_to_directory` - Перейти в папку из текущего каталога ( `path_to_directory` - может быть относительным или абсолютным); 

`ls` - Вывести в консоли список всех файлов и папок в текущем каталоге;

### Работа с файлами

`cat path_to_file` - чтение файлов (`path_to_file` - абсолютный путь до файла); 

`add new_file_name` - Создать пустой файл в текущем каталоге(`new_file_name` - название файла);

`rn path_to_file new_filename` - Переименовать файл (`path_to_file` - абсолютный путь до файла, `new_filename` - новое название файла)

`cp path_to_file path_to_new_directory` - Копирование файла (`path_to_file` - абсолютный путь до файла, `path_to_new_directory` - абсолютный путь куда нужно скопировать файл);

`mv path_to_file path_to_new_directory` - Переместить файл (`path_to_file` - абсолютный путь до файла, `path_to_new_directory` - абсолютный путь куда нужно скопировать файл);

`rm path_to_file` - удалить файл (`path_to_file` - абсолютный путь до файла);

### Информация о системе.

`os --EOL` - Вывести EOL;

`os --cpus` - Вывести информация о процессоре;

`os --homedir` - Вывести домашний каталог;

`os --username` - Вывести имя системного юзера;

`os --architecture` - Вывести архитектуру ЦП;

### Расчет хэша.

`hash path_to_file` - Вывести хэш файла

### Архиватор.

`compress path_to_file path_to_destination` - Заархивировать файл(`path_to_file` - абсолютный путь до файла который надо заархивировать `path_to_destination` - абсолютный путь куда добавить);

`decompress path_to_file path_to_destination` - разархивировать файл(`path_to_file` - абсолютный путь до файла который надо заархивировать `path_to_destination` - абсолютный путь куда добавить);


