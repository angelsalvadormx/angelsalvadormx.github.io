<?php
 $email = $_POST['email'];
 $msg = $_POST['form_msg'];
 $asunto = 'Contactanos';
 $destinatario = 'felipero15@hotmail.com';
 $mail_header = "De: $email \r\n";

 mail($destinatario, $asunto, $msg, $mail_header);
 header("Location: index.html?correo_enviado);
?>