Proyecto practico del curso llamado "JS en la Web: Validación de Formularios y HTML5". Se practica lo siguiente:

-Hacer validaciones en el propio HTML (sin javascript) usando atributos tales como required y type con el valor email, por ejemplo.

-Se puede utilizar el atributo pattern con una expresion regular para validar campos. Se crea la expresion regular ^(?!#\$%&\/\(\)\[\]\?¡)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$ para validar el campo contraseña la cual debe tener al menos 1 número, al menos una letra minúscula, al menos una letra mayúscula, no contener ninguno de los caracteres especiales siguientes: ?,!,#,$,%,&,/,(,),[,],?,! y tener una cantidad entre 6 y 12 caracteres. Se escapan algunos caracteres especiales con el simbolo \ para evitar que sean reconocidos como comando y solo sean considerados como caracteres.

-Se muestra un mensaje personalizado de error en el navegador para el input contraseña utilizando el atributo title

-Se muestra un mensaje personalizado de error en el navegador para el campo fecha de nacimiento vía javascript usando el método setCustomValidity() del input

-Se hace una mejora del código utilizando data atributtes y creando un objeto con el valor del atributo el cual se le asigna una funcion anónima. Posteriormente, se captura el valor del data atribute y se verifica que en el objeto exista esa propiedad. Si existe se accede a la funcion anónima y se muestra la validación de la edad el cual usa el método setCustomValidity() 

-Se agrega o remueve el nombre de una clase cuando el input pierde el focus (evento blur)

-Se accede a la propiedad validity de un input el cual DEBE tener el atributo required. La propiedad validity retorna un objeto y se accede a la propiedad valid que retorna un booleano diciendo si el input es valido o no ( si pasa el criterio de validacion)

-Se crea un array de strings con el nombre de las propiedades que arroja el objeto validity. Especificamente, las propiedades: valueMissing, typeMismatch, patternMismatch y customError

-Se crea una función para recorrer el array y en caso de que la propiedad del tipo de error sea verdadera, personalizar el mensaje de error que se muestra en el HTML cuando ocurre el evento blur sobre el input

-Se crean expresiones regulares para los input: Número Telefónico, Dirección, Ciudad, Estado y se agregan los data atrributes para los input que no los poseen