export default defineAppConfig({
  global: {
    picture: {
      light: '/profile.jpg',
      dark: '/profile.jpg',
      alt: 'Mauricio Velázquez'
    },
    meetingLink: 'mailto:mauri_i9070@hotmail.com',
    email: 'mauri_i9070@hotmail.com',
    github: 'https://github.com/maurii9070',
    linkedin: 'https://www.linkedin.com/in/mauricio-velazquez-dev/',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Hecho con Nuxt UI · © ${new Date().getFullYear()} Mauricio Velázquez`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/maurii9070',
      'target': '_blank',
      'aria-label': 'GitHub de Mauricio'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/mauricio-velazquez-dev/',
      'target': '_blank',
      'aria-label': 'LinkedIn de Mauricio'
    }, {
      'icon': 'i-lucide-mail',
      'to': 'mailto:mauri_i9070@hotmail.com',
      'aria-label': 'Email de Mauricio'
    }]
  }
})
