import { useAuthStore } from '@/store'

export const authGuard = (to, from, next) => {
  const authStore = useAuthStore()

  // Check if the user is authenticated
  if (authStore.isAuthenticated) {
    // If the user has a token, allow access to the route
    if (to.name === 'login') {
      // If the user is already authenticated, prevent access to the login page
      next('/')
    } else {
      // Otherwise, allow access
      next()
    }
  } else {
    // If the user doesn't have a token, redirect to the login page
    if (to.name !== 'login') {
      // If the user is not on the login page, redirect to login
      next('/login')
    } else {
      // Otherwise, allow access
      next()
    }
  }
}
