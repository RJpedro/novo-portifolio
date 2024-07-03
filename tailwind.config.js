/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/sections/*.{html,js,vue}', './src/components/*.{html,js,vue}'],
  theme: {
    colors: {
      'p-orange-100': 'var(--color-orange-100)',
      'p-orange-200': 'var(--color-orange-200)',
      'p-blue-100': 'var(--color-blue-100)',
      'p-blue-200': 'var(--color-blue-200)',
      'p-purple-200': 'var(--color-purple-200)',
      'p-transparent': 'transparent',
      'p-secundary-100': 'var(--color-secundary-100)',
      'p-secundary-200': 'var(--color-secundary-200)',
      'p-white': 'var(--color-white)',
      'p-black-100': 'var(--color-black-100)',
      'p-black-200': 'var(--color-black-200)',
      'p-black-300': 'var(--color-black-300)'
    }
  },
  plugins: []
}
