import collection from './../model'

class templateController {
	constructor() {}

	index(req, res) {
		collection.template
				.find({})
				.then((result) => {				
					return res.json({
						"hello" : result
					})
				})
				.catch((error) => {
					console.log(error)
				})
	}

	save(req, res) {
		const tmplt = new collection.template({
			"name" : "A",
			"url" : "B",
			"bundleID" : "C.c.CC"
		})

		tmplt.save().then((ttt) => {
			res.json({
				"Yooo" : ttt
			})
		}).catch((err) => {
			res.json({
				"HIII" : err
			})
		})
	}

	update(req, res) {
		return res.json({
			"Hello" : "Update"
		})
	}

	delete(req, res) {
		return res.json({
			"Hello" : "Delete"
		})
	}
}

export default templateController