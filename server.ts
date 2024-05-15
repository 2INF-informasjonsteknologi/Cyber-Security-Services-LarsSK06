// Packages

import express, {
	Express as E,
	Request as Req,
	Response as Res
} from "express";

import fs from "node:fs";
import bcrypt from "bcrypt";



// Configuration

const app: E = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));



// Endpoints

app.get("/documents", async (req: Req, res: Res): Promise<void | Res> => {
	if(!req.body.hasOwnProperty("key")){
		return res.status(400).send({
			code: 400,
			message: "Request query missing \"key\" parameter!"
		});
	}
	const password: string = fs.readFileSync("password.key").toString();
	const key: string = req.query.key?.toString() || "";
	if(!(await bcrypt.compare(key, password))){
		return res.status(403).send({
			code: 403,
			message: "Invalid password!"
		});
	}
	let documents: Array<{title: string, content: string, created: Date}> = [];
	try{
		documents = JSON.parse(fs.readFileSync("documents.json").toString());
	}
	catch{
		return res.status(500).send({
			code: 500,
			message: "There was an error retrieving the documents!"
		});
	}
	res.status(200).send(documents);
});

app.post("/document", (req: Req, res: Res): void | Res => {
	const requiredKeys: Array<string> = ["title", "content"];
	for(let i = 0; i < requiredKeys.length; i++){
		if(!req.body.hasOwnProperty(requiredKeys[i])){
			return res.status(400).send({
				code: 400,
				message: `Request body missing \"${requiredKeys[i]}\" key!`
			});
		}
	}
	let documents: Array<{title: string, content: string, created: Date}> = [];
	try{
		documents = JSON.parse(fs.readFileSync("documents.json").toString());
	}
	catch{
		return res.status(500).send({
			code: 500,
			message: "There was an error updating the documents!"
		});
	}
	const {title, content} = req.body;
	documents.push({
		title,
		content,
		created: new Date()
	});
	res.status(200).send({
		code: 200,
		message: "Document successfully sent in!"
	});
});

app.all("*", (_, res: Res): Res => res.status(404).send({
	code: 404,
	message: "This page or endpoint does not exist!"
}));



// Hosting

app.listen(4000, "0.0.0.0", (): void => {
	console.log("Server online!");
});