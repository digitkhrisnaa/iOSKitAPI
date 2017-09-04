import { exec } from 'child_process'
import path from 'path'
import nodemailer from 'nodemailer'

class exportController {
	constructor() {}

	simpleExport(req, res) {
		if (req.body.source == null || req.body.source == "") {
			return res.json({
				"status" : {
	  				"error_code" : 400,
		  			"message" : "Source undefined"
		  		},
		  		"header" : {
		  			"status" : "Failed to process"
		  		},
		  		"data" : null
		  	})
		}

		if (req.body.appname == null || req.body.appname == "") {
			return res.json({
				"status" : {
	  				"error_code" : 400,
		  			"message" : "Application Name undefined"
		  		},
		  		"header" : {
		  			"status" : "Failed to process"
		  		},
		  		"data" : null
		  	})
		}

		if (req.body.email == null || req.body.email == "") {
			return res.json({
				"status" : {
	  				"error_code" : 400,
		  			"message" : "Email undefined"
		  		},
		  		"header" : {
		  			"status" : "Failed to process"
		  		},
		  		"data" : null
		  	})
		}

		let transporter = nodemailer.createTransport({
	        service: 'gmail',
	        auth: {
	            user: 'no.reply.ioskit@gmail.com',
	            pass: 'Cyberlink2017'
	        }
	    })

	    let exportPath = process.cwd() + '/public'

		exec(`ioskit -e -source ${req.body.source} -exportPath ${exportPath}`, (err, stdout, stderr) => {
	  		if (err) {
	    		console.log(`Failure to archiving with error: ${err}`)
	  		}

	  		let mailOptions = {
		        from: 'no.reply.ioskit@gmail.com',
		        to: `${req.body.email}`,
		        subject: 'Generated IPA',
		    }

	  		if (stderr != "") {
	  			console.log(`stderr: ${stderr}`)
	  			mailOptions.text = `${stderr}`
	  		}

	  		if (stdout.includes('finish uploading')) {
	  			console.log('Archiving success')
	  			mailOptions.text = `Here your IPA ${req.headers.host}/${req.body.appname}.ipa`
	  		} else {
	  			console.log('Archiving failure!!!')
	  			mailOptions.text = `Archiving failure ${stdout}`
	  		}

		    transporter.sendMail(mailOptions, (error, info) => {
		        if (error) {
		            return console.log(error)
		        }

		        console.log('Message sent: %s', info.messageId)
		    })
	  	})

	  	return res.json({
	  		"status" : {
	  			"error_code" : 200,
	  			"message" : "OK"
	  		},
	  		"header" : {
	  			"status" : "On progress archiving"
	  		},
	  		"data" : null
	  	})
	}
}

export default exportController