import dotenv from 'dotenv'
import axios from 'axios';
import feras from '../utils/feras'
dotenv.config()

export const url_users = 'https://api.twitch.tv/helix/users?login=';
export const stream_url = 'https://api.twitch.tv/helix/streams?user_login=';

async function headers(): Promise<any> {
    const token = await auth();
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Client-Id': process.env.TWITCH_CLIENT_ID,
      },
    };
    return headers;
  }

async function auth(): Promise<string> {
    const token = await axios.post('https://id.twitch.tv/oauth2/token', {
        client_id: process.env.TWITCH_CLIENT_ID,
        client_secret: process.env.TWITCH_SECRET,
        grant_type: 'client_credentials',
    });
    return token.data.access_token;
}

function mergeFerasWithStreamData(twitchUsers:any, streamData:any){
    console.log(streamData);
    const team: any[] = [];
    twitchUsers.forEach((user: any) => {
      // console.log(user);
      const feraOnline = streamData.find(
        (stream: any) => stream.user_login === user.username,
      );
      // console.log(feraOnline);
      if (typeof feraOnline === undefined) return;
      const ferasStats = {
        is_live: feraOnline ? true : false,
        title: feraOnline ? feraOnline.title : '',
        viewer_count: feraOnline ? feraOnline.viewer_count : '',
        game_name: feraOnline ? feraOnline.game_name : '',
        user_name: feraOnline ? feraOnline.user_name : '',
        started_at: feraOnline ? feraOnline.started_at : '',
        language: feraOnline ? feraOnline.language : '',
        thumbnail_url: feraOnline ? feraOnline.thumbnail_url : '',
        user_id: feraOnline ? feraOnline.user_id : '',
        view_count: feraOnline ? feraOnline.view_count : '',
      };
  
      team.push({
        fera: user.username,
        profile_image_url: user.profile_image_url,
        ...ferasStats,
      });
    });
  
    return team;
  };

export async function getTeam() {
    const ferasUsernames = feras.map((f: any) => f.username);
    const streamData = await axios.get(
      stream_url + ferasUsernames.join('&user_login='),
      await headers(),
    );
    return mergeFerasWithStreamData(feras, streamData.data.data);
}