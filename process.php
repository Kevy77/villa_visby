<?php
    header('Content-Type: text/html; charset=utf-8');

    // CONDITIONS NOM
    if ( (isset($_POST["nom"])) && (strlen(trim($_POST["nom"])) > 0) ) {
        $nom = stripslashes(strip_tags($_POST["nom"]));
    } else {
        echo "Merci d'écrire un nom <br />";
        $nom = "";
    }

    // CONDITIONS EMAIL
    if ( (isset($_POST["email"])) && (strlen(trim($_POST["email"])) > 0) && (filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) ) {
        $email = stripslashes(strip_tags($_POST["email"]));
    } elseif (empty($_POST["email"])) {
        echo "Merci d'écrire une adresse email <br />";
        $email = "";
    } else {
        echo "Email invalide :(<br />";
        $email = "";
    }

    // CONDITIONS MESSAGE
    if ( (isset($_POST["message"])) && (strlen(trim($_POST["message"])) > 0) ) {
        $message = stripslashes(strip_tags($_POST["message"]));
    } else {
        echo "Merci d'écrire un message<br />";
        $message = "";
    }

    // Les messages d'erreurs ci-dessus s'afficheront si Javascript est désactivé

    // PREPARATION DES DONNEES
    $ip           = $_SERVER["REMOTE_ADDR"];
    $hostname     = gethostbyaddr($_SERVER["REMOTE_ADDR"]);
    $destinataire = "kevy@hkcreativity.com";
    $objet        = "[Villa Visby Site Internet] ";
    $contenu      = " Nom : " . $nom . "\r\n";
    $contenu     .= "Message : " . $message . "\r\n\n";

    $headers  = "CC: " . $email . " \r\n"; // ici l'expediteur du mail
    $headers .= "From:" . $email . " \r\n";
    $headers .= "Reply-To:" . $email . " \r\n";
    $headers .= "MIME-Version: 1.0";
    $headers .= "Content-Type: text/plain; charset=\"ISO-8859-1\"; DelSp=\"Yes\"; format=flowed /r/n";
    $headers .= "Content-Disposition: inline \r\n";
    $headers .= "Content-Transfer-Encoding: 8bit \r\n";
    $headers .= "MIME-Version: 1.0";


    // SI LES CHAMPS SONT MAL REMPLIS
    if ( (empty($nom)) && (empty($email)) && (!filter_var($email, FILTER_VALIDATE_EMAIL)) && (empty($message)) ) {
        echo 'echec :( <br /><a href="contact.html">Retour au formulaire</a>';
    } else {
        // ENCAPSULATION DES DONNEES
        mail($destinataire, $objet, utf8_decode($contenu), $headers);
        echo 'Formulaire envoyé';
    }

    // Les messages d'erreurs ci-dessus s'afficheront si Javascript est désactivé
?>
