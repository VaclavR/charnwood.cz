This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Styles
tailwind.config.js - tady se mohou nastavit CSS nove velikosti ci barvy. Dalsi moznost je napsat rovnou v html jako class
napriklad text-[#ffd4ff]
dokumentace https://tailwindcss.com/docs/

## Fonts

```
<p className='font-normal'>text</p>
<p className='font-medium'>buttons, menu</p>
<p className='font-semibold'>názvy projektů</p>
<p className='font-bold'>headings</p>
<p className='text-base'>16px</p> // neni nutne, defaultni font je 16px
<p className='text-20'>20px</p>
<p className='text-24'>24px</p>
<p className='text-28'>28px</p>
<p className='text-32'>32px</p>
<p className='text-36'>36px</p>
<p className='text-40'>40px</p>
<p className='text-55'>55px</p>
<p className='text-65'>65px</p>
<p className='text-100'>100px</p>
<p className='text-140'>140px</p>
<p className='text-200'>200px</p>
<p className='text-340'>340px</p>
```

## Colors

```
colors: 
{
    'very-dark-blue': '#02111D',
    'dark-blue': '#0C2F49',
    'medium-blue': '#1E4F73',
    'blue': '#386D95',
    'light-blue': '#548EBA',
    'very-light-blue': '#6BA2CB',
    'grey': '#eee',
},
```