import { Request, Response } from "express";
import { GithubService } from "../services/github.services";
import { DiscordService } from "../services/discord.services";



export class GithubController {

    constructor(
        private readonly githubService = new GithubService(),
        private readonly discordService = new DiscordService(),
    ) {}



    webhookHanler = (req: Request, res: Response) => {

        const githubEvent = req.headers['x-github-event'] ?? 'unknown';
        const payload = req.body;
        let message:string;

        switch(githubEvent) {

            case 'star':
                message = this.githubService.onStart(payload);
            break;

            case 'issues':
                message = this.githubService.onIssue(payload);
            break;

            default:
                message = `Unknown event: ${githubEvent}`

        }
        this.discordService.notify( message )
            .then( () => res.status(200).send('Accepted') )
            .catch( () => res.status(500).json({error: 'Internal server error'}) )
    }

}