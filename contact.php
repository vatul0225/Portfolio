<?php
$conn = mysqli_connect('localhost', 'root', '', 'Portfolio');

$Name = $_POST['txtName'];
$Email = $_POST['txtEmail'];
$Message = $_POST['txtmessage'];

$sql = "Insert Into userdata (Name,Email,Message) VALUES ('$Name','$Email','$Message')";
$query = mysqli_query($conn, $sql);
if ($query == true) {
    echo "<script>alert('Thank you for reaching out! Your message has been received. I’ll get back to you as soon as possible.');window.location.href='index.html';</script>";
}
