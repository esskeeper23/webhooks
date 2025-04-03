import { GithubIssue, GithubStar } from "../../interfaces";



export class GithubService {

    constructor() {}


    onStart( payload: GithubStar ): string {

        const { action, sender, repository, starred_at } = payload;

        return `User ${sender.login} ${action} star on ${repository.name} at ${starred_at}`; 

    }

    onIssue( payload: GithubIssue ): string {

        const { action, repository, sender, issue  } = payload;

        if ( action === 'opened' ) {
            const message = `An issue was opened by ${sender.login} on ${repository.name} with title: ${issue.title}`;
            console.log(message)
            return message;
        }
        if ( action === 'closed' ) {
            const message = `An issue was closed by ${sender.login} on ${repository.name} with title: ${issue.title}`;
            console.log(message)
            return message;
        }
        if ( action === 'reopened' ) {
            const message = `An issue was reopened by ${sender.login} on ${repository.name} with title: ${issue.title}`;
            console.log(message)
            return message;
        }
        if ( action === 'edited' ) {
            const message = `An issue was edited by ${sender.login} on ${repository.name} with title: ${issue.title}`;
            console.log(message)
            return message;
        }

        return `Unhandled action: ${action}`;

    }

}