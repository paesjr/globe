# Interactive 3D Globe Component

An interactive 3D globe visualization built with Next.js, React Three Fiber, and Three.js. Based on the GitHub globe style from [Aceternity UI](https://ui.aceternity.com/components/github-globe).

![Interactive Globe](https://ui.aceternity.com/images/components/github-globe.webp)

## Features

✨ **Visual Features:**

- **Animated Arcs**: Dynamic connections between locations with flowing animations
- **Country Boundaries**: Hexagonal polygon visualization of world countries
- **Pulsing Rings**: Animated rings that appear at point locations
- **Atmosphere Effect**: Beautiful blue glow around the globe
- **Auto-Rotation**: Continuous slow rotation for dynamic display
- **Interactive Controls**: Mouse drag to orbit, zoom functionality
- **Multiple Colored Connections**: Each arc has its own color
- **Points Markers**: Visual markers at start and end locations

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technical Stack

- **Next.js 16** - React framework with App Router
- **React Three Fiber** - React renderer for Three.js
- **Three Drei** - Helper utilities and OrbitControls
- **three-globe** - Globe visualization library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling

## Quick Usage

### Basic Implementation

```tsx
import { ClientGlobe } from "@/components/client-globe";

export default function Home() {
  return (
    <div className="h-screen bg-black">
      <ClientGlobe />
    </div>
  );
}
```

### Custom Globe Configuration

```tsx
import { World } from "@/components/ui/globe";
import type { GlobeConfig } from "@/components/ui/globe";

const customConfig: GlobeConfig = {
  pointSize: 2,
  globeColor: "#062056",
  showAtmosphere: true,
  atmosphereColor: "#3a9dd1",
  autoRotate: true,
  autoRotateSpeed: 0.8,
};

const customData = [
  {
    order: 1,
    startLat: 40.7128,
    startLng: -74.006,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.3,
    color: "#ff6b6b",
  },
  // ... more connections
];

export default function CustomGlobe() {
  return (
    <div className="w-full h-[600px] bg-black">
      <World globeConfig={customConfig} data={customData} />
    </div>
  );
}
```

## Configuration

### GlobeConfig Props

| Prop                   | Type      | Default                   | Description                 |
| ---------------------- | --------- | ------------------------- | --------------------------- |
| `pointSize`            | `number`  | `1.5`                     | Size of point markers       |
| `globeColor`           | `string`  | `"#062056"`               | Color of the globe sphere   |
| `showAtmosphere`       | `boolean` | `true`                    | Show atmosphere glow        |
| `atmosphereColor`      | `string`  | `"#3a9dd1"`               | Color of atmosphere         |
| `atmosphereAltitude`   | `number`  | `0.15`                    | Height of atmosphere layer  |
| `emissive`             | `string`  | `"#062056"`               | Emissive color of material  |
| `emissiveIntensity`    | `number`  | `0.1`                     | Intensity of emissive glow  |
| `shininess`            | `number`  | `0.9`                     | Material shininess          |
| `polygonColor`         | `string`  | `"rgba(255,255,255,0.7)"` | Country polygon color       |
| `ambientLight`         | `string`  | `"#ffffff"`               | Ambient light color         |
| `directionalLeftLight` | `string`  | `"#ffffff"`               | Left directional light      |
| `directionalTopLight`  | `string`  | `"#ffffff"`               | Top directional light       |
| `pointLight`           | `string`  | `"#ffffff"`               | Point light color           |
| `arcTime`              | `number`  | `4000`                    | Arc animation duration (ms) |
| `arcLength`            | `number`  | `0.5`                     | Arc dash length             |
| `rings`                | `number`  | `3`                       | Number of rings             |
| `maxRings`             | `number`  | `3`                       | Maximum rings to display    |
| `autoRotate`           | `boolean` | `true`                    | Enable auto-rotation        |
| `autoRotateSpeed`      | `number`  | `0.5`                     | Rotation speed              |

### Position Data Structure

Each arc connecting two points requires a `Position` object:

```typescript
type Position = {
  order: number; // Animation order
  startLat: number; // Starting latitude
  startLng: number; // Starting longitude
  endLat: number; // Ending latitude
  endLng: number; // Ending longitude
  arcAlt: number; // Arc altitude (0-1)
  color: string; // Hex color code
};
```

## Key Locations (Latitude/Longitude Reference)

| City          | Latitude | Longitude |
| ------------- | -------- | --------- |
| New York      | 40.7128  | -74.0060  |
| London        | 51.5074  | -0.1278   |
| Tokyo         | 35.6762  | 139.6503  |
| Sydney        | -33.8688 | 151.2093  |
| Delhi         | 28.6139  | 77.209    |
| Paris         | 48.8566  | 2.3522    |
| San Francisco | 37.7749  | -122.4194 |
| Moscow        | 55.7558  | 37.6173   |

## Customization Examples

### Change Globe Appearance

```typescript
const darkGlobe: GlobeConfig = {
  globeColor: "#1d072e", // Dark purple
  atmosphereColor: "#3a9dd1", // Blue glow
  polygonColor: "rgba(255,255,255,0.3)", // Subtle country outlines
};
```

### Adjust Animation Speed

```typescript
const fastGlobe: GlobeConfig = {
  autoRotateSpeed: 2.0, // Faster rotation
  arcTime: 2000, // Faster arc animation
};
```

### Disable Auto-Rotation

```typescript
const staticGlobe: GlobeConfig = {
  autoRotate: false,
  // ... other config
};
```

## File Structure

```
globe-test/
├── components/
│   ├── ui/
│   │   └── globe.tsx          # Main globe component
│   └── client-globe.tsx       # Client wrapper with SSR disabled
├── data/
│   └── globe.json             # Country boundaries data (12K+ lines)
├── app/
│   ├── page.tsx                # Demo page implementation
│   └── globals.css             # Global styles with dark theme
└── lib/
    └── utils.ts                # Utility functions
```

## Interactive Controls

- **Drag**: Orbit around the globe
- **Zoom**: Mouse wheel (if enabled)
- **Auto-Rotate**: Automatically rotates when enabled

## Troubleshooting

### Globe appears oval instead of round

- Ensure the container has `aspect-square` class
- Check that aspect ratio is set to `1.0` in camera config

### Globe not loading

- Verify `data/globe.json` exists in the correct location
- Check browser console for errors
- Ensure all dependencies are installed

### Performance issues

- Reduce the number of arcs/connections
- Lower the animation complexity
- Use smaller country polygons (adjust `hexPolygonResolution`)

## Next Steps / Enhancement Ideas

- Add click handlers to points for more info
- Implement data-driven connections from API
- Add tooltips showing location names
- Create custom color schemes
- Add real-time data updates
- Implement story/timeline mode
- Add multiple globe views (different data sets)
- Create overlay information panels

## Resources

- [Aceternity UI Globe](https://ui.aceternity.com/components/github-globe)
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [three-globe GitHub](https://github.com/vasturiano/three-globe)

## License

This component is inspired by the Aceternity UI GitHub Globe component and uses open-source libraries under their respective licenses.

## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
