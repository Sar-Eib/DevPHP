# WordPress and Laravel API Setup

This app can load products from two different backends:

1. WordPress API for the WordPress product feed.
2. Laravel API for the Laravel product feed.

On the home screen, choose which API to use. The shop page then fetches and normalizes the response from the selected source.

## API Endpoints

WordPress products:

`https://wordpress-api-production.up.railway.app/wp-json/wp/v2/products?_embed`

Laravel products:

`https://php-api-production-9e90.up.railway.app/api/products`

## Local Setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set `VITE_API_URL` to your Laravel API base URL.

```env
VITE_API_URL=http://127.0.0.1:8000/api
```

If your Laravel backend runs somewhere else, replace that value with the correct host.

## Response Shape

The app converts both APIs into the same product format before rendering:

```text
{
  id,
  name,
  image,
  price,
  desc
}
```

WordPress products use `title`, `content`, `acf.price`, and embedded featured media.
Laravel products use `id`, `name`, `img_url`, `price`, and `desc`.

## Notes

- The WordPress API request uses `_embed` so the featured image can be read from the embedded media response.
- The Laravel API is fetched from the `/products` endpoint.
- The app defaults to the Laravel source unless the user selects WordPress from the home page.
