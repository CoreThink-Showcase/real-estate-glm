# Real Estate Comparison AI

A minimal React + TypeScript frontend for an AI that helps compare house listings and explain tradeoffs.

## Features

- Single-page layout with property listings and chat interface
- Basic chat interface with text input and message list
- Simple property summary display (text-only)
- Mock AI responses for property comparisons
- No backend required - all data is hardcoded

## Project Structure

```
real-estate-glm1/
├── src/
│   ├── components/
│   │   ├── PropertySummary.tsx    # Displays property details
│   │   └── ChatWindow.tsx         # Chat interface component
│   ├── types.ts                   # TypeScript interfaces
│   ├── mockData.ts                # Mock property data and responses
│   ├── App.tsx                    # Main application component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Basic styles
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
└── vite.config.ts                 # Vite config
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

1. View the three mock properties displayed on the left side
2. Use the chat interface on the right to ask questions
3. Try commands like:
   - "Compare property 1 and 2"
   - "What are the differences between property 2 and 3?"
   - "Compare property 1 and 3"

The AI will respond with detailed comparisons including:
- Property specifications
- Key tradeoffs
- Recommendations

## Technical Details

- **React 18** with TypeScript
- **Vite** for build tooling
- **No external UI libraries** - pure React with inline styles
- **Mock data** - no backend required
- **Minimal styling** - basic CSS for layout only

## Mock Data

The application includes three sample properties:
- Property 1: Modern 3-bed home ($850,000)
- Property 2: Older 2-bed home ($720,000)
- Property 3: New 4-bed home ($950,000)

Each property includes details like price, bedrooms, bathrooms, square footage, year built, lot size, and description.
