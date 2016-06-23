$(document).ready(function() { //attend le chargement de la page pour executer le script
$("form").submit(function () {//form désigne l'ensemble des formulaires
            var nom        = $("#nom").val();
            var email      = $("#email").val();
            var message    = $("#message").val();
            var dataString = nom + email + message;
            var msg_all    = "Merci de remplir tous les champs";

            if (dataString  == "") {
                $("#msg_all").html(msg_all).fadeIn(600);
            } else if (nom == "") {
                $("#msg_all").html(msg_all).fadeIn(600);
            } else if (email == "") {
                $("#msg_all").html(msg_all).fadeIn(600);
            } else if (message == "") {
                $("#msg_all").html(msg_all).fadeIn(600);
            } else {
                $.ajax({
                    type : "POST",
                    url: "process.php",
                    data: $(this).serialize(),
                    success : function() {
                        $("#msg_all").html("<p>Formulaire bien envoyé</p>");
                    },
                    error: function() {
                        $("#msg_all").html("<p>Erreur d'appel, le formulaire ne peut pas fonctionner</p>");
                    }
                });
            }

            return false;
        });
});
