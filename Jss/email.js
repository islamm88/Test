function emailSend()
{

    Email.send({
        Host : "smtp.mailendo.com",
        Username : "islam.mustafa1977@gmail.com",
        Password : "26974507FD2A4F394DEDE3347C3F8D68E22C",
        To : 'them@website.com',
        From : "islam.mustafa1977@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}