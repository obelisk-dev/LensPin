// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'lensTheme',
    themes: {
      lensTheme: {
        colors: {
          dark: "true",
          background: "#2a2a2e",
          surface: "#18181B",
          primary: "#ABFE2C",
          "primary-darken-1": "#ABFE2C",
          secondary: "#FCFCFC",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
          black: "#212322",
          lime: "#ABFE2C",
          peas:"#E5FFBE",
          lilac:"D3B6FF",
          coolgrey: "#FCFCFC",
          basil: "#00501E",
          darkgrey: "#3b3b40"

        },
        variables: {} //ADD AN EMPTY OBJECT
     }
   }
  }
})
