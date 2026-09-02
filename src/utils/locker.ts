/**
 * Safely triggers the Content Locker without page reload or redirection
 */
export function triggerContentLocker(): void {
  try {
    if (typeof (window as any)._qr === 'function') {
      (window as any)._qr();
    } else if (typeof (window as any).openContentLocker === 'function') {
      (window as any).openContentLocker();
    } else {
      console.warn("Locker script is initializing...");
      // Retry in 300ms if script is still downloading
      setTimeout(() => {
        if (typeof (window as any)._qr === 'function') {
          (window as any)._qr();
        }
      }, 300);
    }
  } catch (err) {
    console.error("Error invoking content locker:", err);
  }
}
