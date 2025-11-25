# Walkthrough - Fazenda Cristo Rei Website

I have successfully created the website for **Fazenda Cristo Rei** using Next.js 16 and Tailwind CSS v4.

## Features Implemented

- **Modern & Rustic Design**: Used a color palette inspired by coffee, wood, and nature (`#3E2723`, `#D84315`, `#A5D6A7`).
- **Typography**: Configured `Fraunces` (serif) for headings to give a rustic feel, and `Outfit` (sans-serif) for body text for readability.
- **Components**:
    - **Header**: Responsive navigation with mobile menu.
    - **Hero**: Full-screen welcome section with placeholder background.
    - **About**: History and values of the family.
    - **Activities**: Grid layout showcasing Coffee, Poultry, Pisciculture, Cattle, and Vegetable Garden.
    - **Leisure**: Section dedicated to family gatherings, BBQ, and music.
    - **Family**: Cards presenting the 8 siblings and their families.
    - **Rex Helicoides**: Discrete section for the agricultural lab.
    - **Contact**: Location info and contact details.
    - **Footer**: Credits and copyright.
- **Tech Stack**: Next.js 16 (App Router), Tailwind CSS v4, TypeScript.

## How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

3.  **Build for Production**:
    ```bash
    npm run build
    npm start
    ```

## Notes

- **Images**: Due to quota limitations, I used placeholder images from `placehold.co`. You should replace these with actual high-quality photos of the farm and family in the respective components (`src/components/*.tsx`).
- **Tailwind v4**: The project is configured with Tailwind v4 using the new `@theme` directive in `app/globals.css`.

## Verification

The project builds successfully (`npm run build` passed). The design is responsive and follows the requested aesthetic.
