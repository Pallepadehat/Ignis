import React from 'react'
import ReactDOM from 'react-dom/client'
import { bangs } from "./bang"
import "./global.css"

function App() {
  const [copySuccess, setCopySuccess] = React.useState(false)
  const [currentUrl, setCurrentUrl] = React.useState("")
  
  React.useEffect(() => {
    // Get the current URL dynamically
    setCurrentUrl(`${window.location.protocol}//${window.location.host}?q=%s`)
  }, [])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentUrl)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD] dark:bg-black text-[#1D1D1F] dark:text-white flex flex-col items-center justify-center p-4 font-sf-pro">
      <div className="max-w-3xl w-full space-y-12 p-8">
        <div className="space-y-6 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
            Ignis
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Search
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#86868B] dark:text-[#86868B] leading-relaxed max-w-2xl mx-auto">
            Experience lightning-fast search with smart redirects. 
            Harness the power of{' '}
            <a 
              href="https://duckduckgo.com/bang.html" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              bang commands
            </a>
            {' '}with unmatched speed.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition duration-200"></div>
          <div className="relative flex items-center gap-2 bg-white dark:bg-[#1C1C1E] rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-800">
            <input
              type="text"
              value={currentUrl}
              readOnly
              className="flex-1 bg-transparent px-4 py-3 text-[#1D1D1F] dark:text-white focus:outline-none font-mono text-sm rounded-md"
            />
            <button 
              onClick={handleCopy}
              className="px-6 py-3 bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 rounded-lg transition-all duration-200 relative group flex items-center gap-2"
            >
              <img 
                src={copySuccess ? "/clipboard-check.svg" : "/clipboard.svg"} 
                alt="Copy" 
                className="w-5 h-5 opacity-90"
              />
              <span className="text-sm font-medium text-white">
                {copySuccess ? 'Copied' : 'Copy URL'}
              </span>
            </button>
          </div>
        </div>

        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-semibold text-[#1D1D1F] dark:text-white">
            Quick Setup
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-xl font-medium text-[#1D1D1F] dark:text-white">1. Copy</div>
              <p className="text-[#86868B]">Copy the URL above</p>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-medium text-[#1D1D1F] dark:text-white">2. Add</div>
              <p className="text-[#86868B]">Add as custom search engine</p>
            </div>
            <div className="space-y-2">
              <div className="text-xl font-medium text-[#1D1D1F] dark:text-white">3. Search</div>
              <p className="text-[#86868B]">Use !bangs for instant search</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 text-[#86868B] flex items-center gap-4">
        <a href="https://github.com/pallepadehat" target="_blank" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors text-sm">Pallepadehat</a>
        <span>•</span>
        <a href="https://github.com/pallepadehat/ignis" target="_blank" className="hover:text-[#1D1D1F] dark:hover:text-white transition-colors text-sm">github</a>
      </footer>
    </div>
  )
}

const LS_DEFAULT_BANG = localStorage.getItem("default-bang") ?? "g"
const defaultBang = bangs.find((b) => b.t === LS_DEFAULT_BANG)

function getBangredirectUrl() {
  const url = new URL(window.location.href)
  const query = url.searchParams.get("q")?.trim() ?? ""
  if (!query) return null

  const match = query.match(/!(\S+)/i)
  const bangCandidate = match?.[1]?.toLowerCase()
  const selectedBang = bangs.find((b) => b.t === bangCandidate) ?? defaultBang

  const cleanQuery = query.replace(/!\S+\s*/i, "").trim()
  const searchUrl = selectedBang?.u.replace(
    "{{{s}}}",
    encodeURIComponent(cleanQuery).replace(/%2F/g, "/")
  )
  return searchUrl || null
}

function doRedirect() {
  const searchUrl = getBangredirectUrl()
  if (searchUrl) {
    window.location.replace(searchUrl)
  } else {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  }
}

doRedirect()