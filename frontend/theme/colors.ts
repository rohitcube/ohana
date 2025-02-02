export const brandColors = {
    primary: {
      light: '#4DA2FF',  // Lighter shade of primary
      main: '#007AFF',   // iOS blue - Your main brand color
      dark: '#0056B3',   // Darker shade for hover/active states
    },
    secondary: {
      light: '#6C757D',
      main: '#495057',
      dark: '#343A40',
    }
  };

  // UI feedback colors
  export const feedbackColors = {
    success: {
      light: '#4CAF50',  // Green
      main: '#34C759',   // iOS green
      dark: '#2E7D32',
    },
    warning: {
      light: '#FFB74D',
      main: '#FF9500',   // iOS orange
      dark: '#F57C00',
    },
    error: {
      light: '#FF6B6B',
      main: '#FF3B30',   // iOS red
      dark: '#D32F2F',
    },
    info: {
      light: '#64B5F6',
      main: '#2196F3',
      dark: '#1976D2',
    }
  };

  // Neutral colors for text, backgrounds, and borders
  export const neutralColors = {
    text: {
      primary: '#000000',    // Main text color
      secondary: '#666666',  // Secondary text, less emphasis
      disabled: '#9E9E9E',   // Disabled text
      hint: '#757575',       // Placeholder text
    },
    background: {
      default: '#FFFFFF',    // Default background
      paper: '#F5F5F5',      // Slightly off-white for cards/paper
      grey: '#F3F3F3',       // Grey background
      dark: '#121212',       // Dark mode background
    },
    border: {
      light: '#E5E5E5',      // Light borders
      main: '#CCCCCC',       // Main border color
      dark: '#999999',       // Dark borders
    }
  };

  // Grey palette for various UI elements
  export const greyScale = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  };

  // Combine all colors into a single export
  export const Colors = {
    ...brandColors,
    ...feedbackColors,
    ...neutralColors,
    grey: greyScale,
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
  };
