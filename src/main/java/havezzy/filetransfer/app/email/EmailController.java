package havezzy.filetransfer.app.email;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

	@Autowired
	private EmailService emailService;
	
	@RequestMapping("/add")
	public void addEmail(@RequestBody Email email) throws UnsupportedEncodingException, MessagingException {
		emailService.addEmail(email);
	}
}
