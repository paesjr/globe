# Interactive 3D Globe Component Documentation

## Overview

The Interactive Globe component is a stunning 3D visualization built with React Three Fiber and Three.js. It's based on the GitHub globe visualization style from Aceternity UI, featuring animated arcs between locations, country boundaries, and atmospheric effects.

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

## Technical Stack

- **React Three Fiber** (`@react-three/fiber`) - React renderer for Three.js
- **Three Drei** (`@react-three/drei`) - Helper utilities and OrbitControls
- **three-globe** - Globe visualization library
- **Next.js** - Server-side rendering support with client-side dynamic loading

## Configuration Options

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

## Usage Examples

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

### Modifying the Default Data

Edit `components/ui/globe.tsx` to customize the default sample data:

```typescript
const sampleData: Position[] = [
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.5,
    color: "#ff6b6b",
  },
  // Add your own connections here
];
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

## Customization Tips

### 1. **Change Globe Appearance**

```typescript
const darkGlobe: GlobeConfig = {
  globeColor: "#1d072e", // Dark purple
  atmosphereColor: "#3a9dd1", // Blue glow
  polygonColor: "rgba(255,255,255,0.3)", // Subtle country outlines
};
```

### 2. **Adjust Animation Speed**

```typescript
const fastGlobe: GlobeConfig = {
  autoRotateSpeed: 2.0, // Faster rotation
  arcTime: 2000, // Faster arc animation
};
```

### 3. **Create Your Own Data Set**

```typescript
const myConnections: Position[] = [
  // Create arcs between your locations
  {
    order: 1,
    startLat: YOUR_START_LAT,
    startLng: YOUR_START_LNG,
    endLat: YOUR_END_LAT,
    endLng: YOUR_END_LNG,
    arcAlt: 0.4,
    color: "#ff0000", // Red connection
  },
];
```

### 4. **Disable Auto-Rotation**

```typescript
const staticGlobe: GlobeConfig = {
  autoRotate: false,
  // ... other config
};
```

## Styling

### Background Color

The globe renders on a black background by default. To change:

```tsx
<div className="w-full h-full bg-blue-900">
  {" "}
  {/* Navy background */}
  <ClientGlobe />
</div>
```

### Container Size

Control the globe size:

```tsx
<div className="w-full h-[800px]"> {/* Tall globe */}
  <ClientGlobe />
</div>

<div className="w-[500px] h-[500px]"> {/* Square globe */}
  <ClientGlobe />
</div>
```

## Interactive Controls

- **Drag**: Orbit around the globe
- **Zoom**: Mouse wheel (if enabled)
- **Auto-Rotate**: Automatically rotates when enabled

## Performance Considerations

- The globe uses WebGL for rendering
- Countries data (from `data/globe.json`) loads dynamically
- Component uses SSR-disabled rendering for browser compatibility
- Aspect ratio is fixed at 1:1 for perfect circle

## Troubleshooting

### Globe appears oval/shaped wrong

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

## File Structure

```
globe-test/
├── components/
│   ├── ui/
│   │   └── globe.tsx          # Main globe component
│   └── client-globe.tsx       # Client wrapper with SSR disabled
├── data/
│   └── globe.json             # Country boundaries data (12K+ lines)
└── app/
    └── page.tsx                # Demo page implementation
```

## Next Steps / Ideas

🎯 **Potential Enhancements:**

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
- [three-globe Documentation](https://github.com/vasturiano/three-globe)

## License

This component is inspired by the Aceternity UI GitHub Globe component and uses open-source libraries under their respective licenses.
