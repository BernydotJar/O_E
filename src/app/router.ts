export type RouteId = 'home' | 'learners' | 'learner-detail' | 'teachers' | 'teacher-detail' | 'interventions' | 'outcomes' | 'knowledge' | 'operations' | 'admin' | 'governance' | 'integrations' | 'executive' | 'unauthorized' | 'unavailable' | 'not-found'
export type RouteMatch = { id: RouteId; params: Record<string, string> }

const detail = (path: string, prefix: string, id: RouteId): RouteMatch | null => {
  const match = path.match(new RegExp(`^/${prefix}/([^/]+)$`))
  return match ? { id, params: { id: decodeURIComponent(match[1]) } } : null
}

export function matchRoute(pathname: string): RouteMatch {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (path === '/') return { id: 'home', params: {} }
  const staticRoutes: Record<string, RouteId> = {
    '/learners': 'learners', '/teachers': 'teachers', '/interventions': 'interventions', '/outcomes': 'outcomes', '/knowledge': 'knowledge', '/operations': 'operations', '/admin': 'admin', '/governance': 'governance', '/integrations': 'integrations', '/strategic/executive': 'executive', '/unauthorized': 'unauthorized', '/unavailable': 'unavailable',
  }
  if (staticRoutes[path]) return { id: staticRoutes[path], params: {} }
  return detail(path, 'learners', 'learner-detail') || detail(path, 'teachers', 'teacher-detail') || { id: 'not-found', params: {} }
}

export function navigate(path: string) {
  window.history.pushState({}, '', path)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
