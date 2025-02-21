function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize Firebase...

firebase.auth().onAuthStateChanged(debounce((user) => {
  if (user) {
    // User is signed in.
    console.log('User signed in:', user.uid);
  } else {
    // User is signed out.
    console.log('User signed out');
  }
}, 200)); // 200ms debounce time