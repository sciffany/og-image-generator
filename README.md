## Getting Started

First, run the development server:

```
pnpm dev
```

## Folder structure 
```
|- assets
   |- FreeSansBold.ttf - font for simple/clean style OG images
|- pages
   |- api
       |-og.tsx - endpoint to generate simple/clean-style OG images
       |-og2.tsx - endpoint to generate black torn paper OG images (unused)
       |-og3.tsx - endpoint to generate original blue OG images (unused)
   |-index*.tsx - sample usage of OG images
|- public
   |- proposal/* - original Photoshop designs (unused)
   |- *.* - blue overlay for original blue design (unused)
       
```

## How to generate OG images

**Endpoint:** `https://og-image-generator-ochre.vercel.app/api/og`

| Parameter name | Description                         | Mandatory |
|----------------|-------------------------------------|-----------|
| image-url      | Image URL of the logo               | Yes       |
| name           | Name of the company                 | Yes       |
| color1         | Hex colour on the left of the gradient (including # symbol or %23)  | Yes       |
| color2         | Hex colour on the right of the gradient (including # symbol or %23) | Yes       |
| text-color         | Hex colour of the text (including # symbol or %23) | No       |

### Sample endpoint:

`https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2Fad73aead-5449-43fb-929c-c8f368d7cb64.jpeg&w=256&q=75&name=Nasi%20Lemak%20Kuning%20Daun%20Pisang&color1=%23FEEACB&color2=%23FEEACB`


### Sample image:
<img src="https://og-image-generator-ochre.vercel.app/api/og?image-url=https%3A%2F%2Fstorage.googleapis.com%2Ftakesg%2Fad73aead-5449-43fb-929c-c8f368d7cb64.jpeg&w=256&q=75&name=Nasi%20Lemak%20Kuning%20Daun%20Pisang&color1=%23FEEACB&color2=%23FEEACB" width="200px"/>


### Sample usage:
https://github.com/sciffany/og-image-generator/blob/main/pages/index.tsx

## OG Image details

- Size: `1200px x 630px`
- OG image type: `PNG`

## How to deploy on Vercel
- Use Next.js presets
- Root directory - ""
- Node version: 18.x
- No environment variables
