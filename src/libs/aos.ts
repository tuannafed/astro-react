// Make this file a module
export {}

// Declare AOS types
declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void
    }
  }
}

function loadAOS() {
  if (typeof window.AOS !== 'undefined') {
    return Promise.resolve(window.AOS)
  }

  return new Promise<Window['AOS']>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js'
    script.onload = () => {
      if (typeof window.AOS !== 'undefined') {
        resolve(window.AOS)
      } else {
        reject(new Error('AOS failed to load'))
      }
    }
    script.onerror = () => reject(new Error('Failed to load AOS script'))
    document.head.appendChild(script)
  })
}

async function initAOS() {
  // Wait for hydration to complete before initializing AOS
  if (document.readyState !== 'complete') {
    return new Promise<void>((resolve) => {
      window.addEventListener('load', () => {
        setTimeout(async () => {
          await initAOSAfterHydration()
          resolve()
        }, 100) // Small delay to ensure React hydration is complete
      })
    })
  } else {
    setTimeout(async () => {
      await initAOSAfterHydration()
    }, 100)
  }
}

async function initAOSAfterHydration() {
  try {
    const AOS = await loadAOS()
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      offset: 20,
      disable: false,
      startEvent: 'DOMContentLoaded', // Use 'load' instead of 'DOMContentLoaded'
      useClassNames: false,
      disableMutationObserver: false,
    })
    console.log('AOS initialized successfully after hydration')
  } catch (error) {
    console.warn('AOS initialization failed:', error)
    // Continue without AOS if it fails to load
    return
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAOS)
} else {
  initAOS()
}
