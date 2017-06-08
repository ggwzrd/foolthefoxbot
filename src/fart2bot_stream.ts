import * as Twit from 'twit'
import * as moment from 'moment'
import { sleep } from './util/functions'

const twit = new Twit({
  consumer_key:         'yY2Y6iBdWKQ25q0uVWLK2GecT',
  consumer_secret:      'X9YalLEYOTIURmMhJA9UHAbHTh3HamhOmIF20BkSaQ1hG8Mm3f',
  access_token:         '1934377310-QjkvLlJAVa3LcJV1hk1In2CCXl8fyWrbGhagFc6',
  access_token_secret:  'KJ2js2oCpZvSQdV7nFXwoMemAwSGU52ZGXHCbKPFH9D4b'
})

const tweetIfFox = (tweet: {
  text: string,
  user: { screen_name: string }
}) => {
  console.log(`NEW POST: ${tweet.text}`)
  if(tweet.text.includes('fox')){
    twit.post('statuses/update', {
      status: `Thank you @${tweet.user.screen_name} you also participate at @foolthefox at ${moment()}\n http://gph.is/1fKaTiE \n @codaisseur`,
    })
    console.log(`POSTED BY: ${tweet.user.screen_name}`)
  }
}

const stream = twit.stream('statuses/filter', {track: '@super_fake_cat'})
stream.on('tweet', (tweet: Twit.Twitter.Status) => tweetIfFox(tweet))
stream.on('error', console.error)
