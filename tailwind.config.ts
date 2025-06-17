
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				warmth: {
					50: '#fef7ed',
					100: '#fdedd3',
					200: '#fbd8a5',
					300: '#f8bc6d',
					400: '#f59932',
					500: '#f17b0a',
					600: '#e25d00',
					700: '#bc4302',
					800: '#953408',
					900: '#7a2c0a',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'spring-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(20px)'
					},
					'50%': {
						opacity: '0.8',
						transform: 'scale(1.05) translateY(-5px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'spring-out': {
					'0%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'scale(0.95) translateY(10px)'
					}
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.8)', opacity: '1' },
					'100%': { transform: 'scale(2)', opacity: '0' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-10px) rotate(1deg)' },
					'66%': { transform: 'translateY(-5px) rotate(-1deg)' }
				},
				'slide-up-fade': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': {opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in-center': {
					'0%': { opacity: '0', transform: 'scale(0.5)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'bloom': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-gentle': {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.05)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(245, 158, 11, 0.6)' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'50%': { borderColor: 'transparent' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'spring-in': 'spring-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'spring-out': 'spring-out 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53)',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'shimmer': 'shimmer 1.5s infinite',
				'pulse-ring': 'pulse-ring 1.5s infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite',
				'float-gentle': 'float-gentle 3s ease-in-out infinite',
				'slide-up-fade': 'slide-up-fade 0.4s ease-out',
				'scale-in-center': 'scale-in-center 0.3s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'bloom': 'bloom 0.4s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'typing': 'typing 3.5s steps(40, end)',
				'blink': 'blink 1s infinite'
			},
			backdropBlur: {
				xs: '2px',
			},
			fontSize: {
				'2xs': '0.625rem',
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
			},
			zIndex: {
				'60': '60',
				'70': '70',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: any) {
			const newUtilities = {
				'.gpu-accelerated': {
					transform: 'translateZ(0)',
					willChange: 'transform, opacity',
				},
				'.text-gradient-warmth': {
					background: 'linear-gradient(135deg, #f59932 0%, #e25d00 100%)',
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				},
				'.text-gradient-purple': {
					background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				},
				'.text-gradient-teal': {
					background: 'linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)',
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				},
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
