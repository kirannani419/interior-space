
<?php
$username = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
// $subject = $_POST['subject'];
$message = $_POST['message'];

$to = "interiorspace2019@gmail.com";
			$from= $_POST['email'];
			$subject ="User Contact Details";
			$body = "<table>
			
			                <tr>
							    <th colspan='2'><h1 style=color:#3191c8><u>User Contact Details</u></h1></th>
							 </tr><br>
			                
	                         <tr>
							    <th colspan='2'><h3 style=color:green>This Mail  User Contact details From Interior Space!!.</h3></th>
							 </tr><br>
							 
							  <tr>
							    <td style=color:blue><b>User  Name :</b></td>
								<td>".$username."</td>
							 </tr><br>
                             

							 <tr>
							  <td style=color:blue><b>Email I'd :</b></td>
							  <td>".$email."</td>
							</tr><br>

							 <tr>
							    <td style=color:blue><b>Mobile Number  :</b></td>
								<td>".$phone."</td>
							 </tr><br>


							 
							
							<tr>
							  <td style=color:blue><b> Message :</b></td>
							  <td>".$message."</td>
							</tr><br>
	                     <table>";
	                     
	                     $body = preg_replace('/\\\\/','', $body); //Strip backslashes
	                     


$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
$headers .= "From: $email " . "\r\n" .
"Reply-To: " .$email. "\r\n" .
"X-Mailer: PHP/" . phpversion();

$mail= mail($to,$subject,$body,$headers);

header("Location:thankyou.php");


?>
