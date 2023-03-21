<!DOCTYPE html>
<html>

<head>
    <link href="./style.css" rel="stylesheet">
</head>

<body>
    <?php

    $a = $_SERVER['PATH_INFO'] ?? '';

    echo '<script>';
    require(".{$a}.js");
    echo '</script>';
    ?>
    <div class="cnt"><a href="/1">1</a><a href="/2">2</a><a href="/3">3</a></div>

</body>

</html>