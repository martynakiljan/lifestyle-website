import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/fonts.scss'
import App from './App.jsx'
import './assets/styles/global.scss'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
)
