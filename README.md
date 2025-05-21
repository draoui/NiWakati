# Ni Wakati ASBL Website

This is the official website for Ni Wakati ASBL, a non-profit organization dedicated to community support and development.

## Project Overview

The Ni Wakati website is built using Next.js, a React framework that enables server-side rendering and generating static websites. The site features information about the organization, its activities, and ways to get involved.

## Features

- Responsive design for all device sizes
- Multi-language support
- Activity calendar
- Membership registration
- Contact form
- Blog integration

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI with Shadcn/UI
- **Database**: Prisma ORM
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ni-wakati/website.git
cd website
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```
Edit the `.env.local` file with your configuration.

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/app` - Next.js app directory with pages and layouts
- `/components` - Reusable UI components
- `/lib` - Utility functions, hooks, and services
- `/prisma` - Database schema and migrations
- `/public` - Static assets like images and fonts

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add some amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Ni Wakati ASBL - [contact@ni-wakati.be](mailto:contact@ni-wakati.be)

Website: [https://ni-wakati.be](https://ni-wakati.be)
