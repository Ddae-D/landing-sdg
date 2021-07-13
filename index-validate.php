<!DOCTYPE html>
<html lang="en">

<head>
    <title>plugin validate</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="css/main.css" type="text/css" rel="stylesheet">
    <script src="js/jquery-3.6.0.js"></script>
    <script src="js/jquery.validate.js"></script>
    <script src="js/md5.js"></script>
    <script src="js/main.js"></script>
</head>

<body>
    <div id="content-main">
        <div id="cont-form">
            <form id="formuler" name="formuler">
                <h1>Estamos usando el plugin validate de Jquery</h1>
                <input type="text" id="user" name="user" placeholder="ingresa tu usuario" class="controller" />
                <input type="password" id="pass" name="pass" placeholder="ingresa tu contraseña" class="controller" />
                <input type="password" id="conf" name="conf" placeholder="ingresa tu contraseña nuevamente" class="controller" />
                <input type="submit" id="enviar" value="enviar">
            </form>
        </div>

    </div>
</body>

</html>