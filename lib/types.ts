/**
 * Viewer control state
 * Manages user interactions with the 3D scene
 */

export interface ViewerState {
    autoRotate: boolean;
    isLoading: boolean;
}

//camera configuration
//initial camera settings

export interface CameraConfig{
    position: [number, number, number];
    target: [number, number, number];
    fov: number;  //field of view
}

//lighting config

export interface LightConfig{
    ambientIntensity: number;
    directionalIntensity: number;
    shadowQuality: number;
}

//performance presents for different devices
export type PerformancePreset = 'low' | 'medium' | 'high';

export interface PerformanceConfig{
    shadowsEnabled: boolean;
    shadowMapSize: number;
    antialias: boolean;
    pixelRatio: number;
}

export const getPerformanceConfig = (
  preset: PerformancePreset = 'high'
): PerformanceConfig => {
  switch (preset) {
    case 'high':
      return {
        shadowsEnabled: true,
        shadowMapSize: 2048,
        antialias: true,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
      };
    case 'medium':
      return {
        shadowsEnabled: true,
        shadowMapSize: 1024,
        antialias: true,
        pixelRatio: 1,
      };
    case 'low':
      return {
        shadowsEnabled: false,
        shadowMapSize: 512,
        antialias: false,
        pixelRatio: 1,
      };
    default:
      return getPerformanceConfig('high');
  }
};
