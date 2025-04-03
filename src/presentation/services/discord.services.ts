import { envs } from "../../config";




export class DiscordService {


    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor() {}


    async notify( message: string ) {

        const body = {
            content: message,
        }

        const resp = await fetch( this.discordWebhookUrl, {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify( body )
        } );

        if ( !resp.ok ) {
            console.error( 'Error sending Discord notification:', resp.statusText );
            return false;
        }
        return true;
    }


}

