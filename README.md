# Website
`npm run dev`

## To deploy
Install wrangler
`sudo npm install -g wrangler`

Login to Cloudflare account
`wrangler login`

Build project
`npm run build`

Deploy dist folder to Cloudflare via Wrangler
`npx wrangler pages deploy dist`