<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="./" method="post">
        <input type="text" name="word" placeholder="Favor digitar uma palavra">
        <input type="submit" value="Anagram">
    </form>
</body>

</html>

<?php

function pairsOfAnagram()
{
    $input = $_POST["word"];
    $index = strlen($input) - 1;
    $count = 0;
    for ($size = 1; $size <= $index; $size++) {
        for ($i = 0; $i <= $index - $size; $i++) {
            $a = substr($input, $i, $size);
            for ($j = $i + 1; $j <= $index - $size + 1; $j++) {
                $b = substr($input, $j, $size);
                if (count_chars($a, 1) == count_chars($b, 1))
                    $count++;
            }
        }
    }
    return "O número de pares de anagramas para esta palavra é: {$count}";
}

echo pairsOfAnagram();
