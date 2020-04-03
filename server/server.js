let express = require('express')
let request = require('request')
let querystring = require('querystring')

let app = express()

// console.log(process.env.SPOTIFY_CLIENT_ID)
// console.log(process.env.SPOTIFY_CLIENT_SECRET)

let redirect_uri = 
  process.env.REDIRECT_URI || 
  'http://localhost:8888/callback'

app.get('/login', function(req, res) {
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public',
      // expires_in: 3600000,
      redirect_uri
    }))
})

app.get('/callback', function(req, res) {
  // 如果拿过来的状态是ok的，我们接着拿到access_token和refresh_token
  let code = req.query.code || null
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(
        process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
      ).toString('base64'))
    },
    json: true
  }
  request.post(authOptions, function(error, response, body) {
    if(!error && response.statusCode === 200){
      var access_token = body.access_token
      var refresh_token = body.refresh_token
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000'
      res.redirect(uri + '?access_token=' + access_token + '?refresh_token=' + refresh_token)
    } else {
      res.redirect(`/#${querystring.stringify({ error: 'invalid_token' })}`);
    }
  })
})
app.get('/refresh_token', function(req, res) {
  // requesting access token from refresh token
  const refresh_token = req.query.refresh_token;
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': `Basic` + (new Buffer(
          process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64')),
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token,
    },
    json: true,
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({ access_token });
    }
  });
});

let port = process.env.PORT || 8888
console.log(` Node cluster listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)