import { useEffect, useMemo, useRef, useState } from 'react'
import ExecutiveExperience from '../App'
import StudentTwinWorkspace from '../components/student-twin/StudentTwinWorkspace'
import TeacherIntelligenceWorkspace from '../components/teacher-intelligence/TeacherIntelligenceWorkspace'
import { can, type Capability, type DemoRole } from './access'
import { matchRoute, navigate, type RouteId } from './router'
import { messages, type Locale, type MessageKey } from '../i18n/messages'

const primary: Array<{ id: RouteId; path: string; key: MessageKey; capability: Capability }> = [
  { id: 'home', path: '/', key: 'home', capability: 'home' }, { id: 'learners', path: '/learners', key: 'learners', capability: 'learners' }, { id: 'teachers', path: '/teachers', key: 'teachers', capability: 'teachers' }, { id: 'interventions', path: '/interventions', key: 'interventions', capability: 'interventions' }, { id: 'outcomes', path: '/outcomes', key: 'outcomes', capability: 'outcomes' }, { id: 'knowledge', path: '/knowledge', key: 'knowledge', capability: 'knowledge' }, { id: 'operations', path: '/operations', key: 'operations', capability: 'operations' },
]
const routeCapability: Partial<Record<RouteId, Capability>> = { learners: 'learners', 'learner-detail': 'learners', teachers: 'teachers', 'teacher-detail': 'teachers', interventions: 'interventions', outcomes: 'outcomes', knowledge: 'knowledge', operations: 'operations', admin: 'admin', governance: 'governance', integrations: 'integrations', executive: 'executive' }
const routeKey: Partial<Record<RouteId, MessageKey>> = { home: 'home', learners: 'learners', 'learner-detail': 'learners', teachers: 'teachers', 'teacher-detail': 'teachers', interventions: 'interventions', outcomes: 'outcomes', knowledge: 'knowledge', operations: 'operations', admin: 'admin', governance: 'governance', integrations: 'integrations', executive: 'executive', unauthorized: 'unauthorized', unavailable: 'unavailable', 'not-found': 'notFound' }

export default function LearningIntelligenceApp() {
  const [path, setPath] = useState(window.location.pathname)
  const [role, setRole] = useState<DemoRole>('coach')
  const [locale, setLocale] = useState<Locale>('en')
  const [executiveEntitled, setExecutiveEntitled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const mainRef = useRef<HTMLElement>(null)
  const t = (key: MessageKey) => messages[locale][key]
  const route = useMemo(() => matchRoute(path), [path])
  const titleKey = routeKey[route.id] ?? 'notFound'

  useEffect(() => { const handler = () => setPath(window.location.pathname); window.addEventListener('popstate', handler); return () => window.removeEventListener('popstate', handler) }, [])
  useEffect(() => { document.documentElement.lang = locale; document.title = `${t(titleKey)} · ${t('app')}`; mainRef.current?.focus() }, [locale, titleKey])

  const go = (next: string) => { navigate(next); setMenuOpen(false) }
  const allowed = (id: RouteId) => {
    const capability = routeCapability[id]
    if (!capability) return true
    if (capability === 'executive') return role === 'executive' && executiveEntitled
    return can(role, capability)
  }
  const visibleRoute = allowed(route.id) ? route : { id: 'unauthorized' as RouteId, params: {} }
  const currentTop = primary.find((item) => route.id === item.id || route.id.startsWith(item.id.replace(/s$/, '')))

  const page = () => {
    if (visibleRoute.id === 'unauthorized') return <State title={t('unauthorized')} body={t('unauthorized')} action={() => go('/')} label={t('backHome')} />
    if (visibleRoute.id === 'not-found') return <State title={t('notFound')} body={t('notFound')} action={() => go('/')} label={t('backHome')} />
    if (visibleRoute.id === 'unavailable' || visibleRoute.id === 'integrations') return <State title={t('unavailable')} body={t('unavailable')} action={() => go('/')} label={t('backHome')} />
    if (visibleRoute.id === 'home') return <Home t={t} role={role} go={go} />
    if (visibleRoute.id === 'learners') return <Index title={t('learners')} t={t} href="/learners/maria-santos" record="María Santos" />
    if (visibleRoute.id === 'teachers') return <Index title={t('teachers')} t={t} href="/teachers/elena-ruiz" record="Elena Ruiz" />
    if (visibleRoute.id === 'learner-detail') return <section><h1>{t('learners')}: María Santos</h1><p>{t('synthetic')}</p><StudentTwinWorkspace /></section>
    if (visibleRoute.id === 'teacher-detail') return <section><h1>{t('teachers')}: Elena Ruiz</h1><p>{t('synthetic')}</p><TeacherIntelligenceWorkspace /></section>
    if (visibleRoute.id === 'executive') return <section><h1>{t('executive')}</h1><p>{t('synthetic')}</p><ExecutiveExperience /></section>
    return <section><h1>{t(titleKey)}</h1><p>{t('unavailable')}</p></section>
  }

  return <div className="lip-shell"><a className="skip-link" href="#main-content">{t('skip')}</a><aside className={menuOpen ? 'nav open' : 'nav'}><div className="brand">OE <span>{t('app')}</span></div><nav aria-label="Primary navigation"><ul>{primary.filter(i => can(role, i.capability)).map(i => <li key={i.id}><a href={i.path} aria-current={currentTop?.id === i.id ? 'page' : undefined} onClick={e => { e.preventDefault(); go(i.path) }}>{t(i.key)}</a></li>)}</ul></nav><p>{t('disclosure')}</p></aside><div className="content"><header><button type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>{t('menu')}</button><label>{t('role')}<select value={role} onChange={e => { setRole(e.target.value as DemoRole); if (!allowed(route.id)) go('/') }}>{(['learner','teacher','coach','learning_product','operations','governance_admin','executive'] as DemoRole[]).map(r => <option key={r} value={r}>{r}</option>)}</select></label><label>{t('language')}<select value={locale} onChange={e => setLocale(e.target.value as Locale)}><option value="en">English</option><option value="es">Español</option></select></label>{role === 'executive' && <button type="button" onClick={() => setExecutiveEntitled(v => !v)}>{executiveEntitled ? t('revoke') : t('grant')}</button>}</header><nav aria-label="Breadcrumb"><a href="/" onClick={e => { e.preventDefault(); go('/') }}>{t('home')}</a>{route.id !== 'home' && <> / <span>{t(titleKey)}</span></>}</nav><div className="route-announcer" aria-live="polite">{t('pageChanged')} {t(titleKey)}</div><main id="main-content" ref={mainRef} tabIndex={-1}>{page()}</main></div></div>
}

function Home({ t, role, go }: { t: (key: MessageKey) => string; role: DemoRole; go: (path: string) => void }) { return <section><p className="eyebrow">{t('synthetic')}</p><h1>{t('home')}</h1><p>{role}: evidence → human decision → intervention → outcome → organizational memory.</p><div className="cortex" aria-label="Organizational Cortex">{['Evidence','Interpretation','Human decision','Intervention','Outcome','Memory'].map(x => <span key={x}>{x}</span>)}</div><button type="button" onClick={() => go('/learners')}>{t('learners')}</button></section> }
function Index({ title, t, href, record }: { title: string; t: (key: MessageKey) => string; href: string; record: string }) { return <section><h1>{title}</h1><a className="record" href={href} onClick={e => { e.preventDefault(); navigate(href) }}><strong>{record}</strong><span>{t('synthetic')}</span><em>{t('open')}</em></a></section> }
function State({ title, body, action, label }: { title: string; body: string; action: () => void; label: string }) { return <section><h1>{title}</h1><p>{body}</p><button type="button" onClick={action}>{label}</button></section> }
