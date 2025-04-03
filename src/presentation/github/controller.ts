import { Request, Response } from "express";



export class GithubController {

    constructor() {}



    webhookHanler = (req: Request, res: Response) => {

        const githubEvent = req.headers['x-github-event'] || 'unknown';
        const payload = req.body;

        console.log({githubEvent})

        res.json('ok')
    }

}