import * as Twit from 'twit'
import * as moment from 'moment'
import { sleep } from './util/functions'

const twit = new Twit({
  consumer_key:         'yY2Y6iBdWKQ25q0uVWLK2GecT',
  consumer_secret:      'X9YalLEYOTIURmMhJA9UHAbHTh3HamhOmIF20BkSaQ1hG8Mm3f',
  access_token:         '1934377310-QjkvLlJAVa3LcJV1hk1In2CCXl8fyWrbGhagFc6',
  access_token_secret:  'KJ2js2oCpZvSQdV7nFXwoMemAwSGU52ZGXHCbKPFH9D4b'
})

const tweetIfFox = (list: {
  text: string,
  user: { screen_name: string }
}[]) => {
  list.map((p) => {
    if(p.text.includes('fox')){
      twit.post('statuses/update', {
        status: `Fuck the fox ${Math.random()} times`,
      })
      console.log(p.user.screen_name)
    }
  })
}

const fn = async (since_id: string | undefined = undefined) => {
  const tweets = await twit.get('search/tweets', {q:'@super_fake_cat', since_id})
  const list: Twit.Twitter.Status[] = tweets.data.statuses
  since_id = list[0].id_str
  tweetIfFox(list)

  let goOn: boolean | undefined = await sleep(5000)
  if (goOn) fn()
}
fn()
process.stdin.resume();
