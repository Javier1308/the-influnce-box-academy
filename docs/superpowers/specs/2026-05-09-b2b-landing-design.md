# Spec: Selector B2C/B2B + Landing Empresas

**Fecha:** 2026-05-09  
**Proyecto:** The Influence Box Academy

---

## Resumen

Agregar un selector de entrada al sitio que divide la experiencia en dos modos: B2C (ya construido) y B2B (nuevo). El selector es una pantalla dividida al 50% que aparece siempre al ingresar al sitio. Después de elegir, el usuario ve la landing correspondiente.

---

## 1. Selector de Entrada (pantalla dividida)

- Reemplaza la vista inicial del sitio — es la primera pantalla que ve todo visitante
- Layout: dos mitades, full-screen, sin scroll
- **Mitad izquierda (B2C):** fondo con glow amarillo, ícono de persona, título "Profesional Individual", subtítulo "Talleres, coaching y programas personales", botón outline amarillo "Quiero crecer →"
- **Mitad derecha (B2B):** fondo con glow cyan, ícono de empresa, título "Empresa o Equipo", subtítulo "Capacitación corporativa", botón outline cyan "Para mi empresa →"
- Logo centrado en la parte superior sobre ambas mitades
- Al hacer clic en una mitad → renderiza la landing correspondiente (B2C o B2B) con el Navbar visible
- **Sin localStorage:** el selector aparece siempre en cada visita
- El Navbar incluye un switcher pequeño para cambiar de modo sin recargar la página

---

## 2. Arquitectura de rutas / estado

- No se usan rutas separadas (`/b2b`, `/b2c`). El estado se maneja con un `useState` en `App.tsx`: `mode: 'selector' | 'b2c' | 'b2b'`
- El selector es el estado inicial (`'selector'`)
- El Navbar recibe el modo activo y un callback `onSwitchMode` para cambiar entre B2C y B2B (no vuelve al selector)
- El logo en el Navbar es clickeable y devuelve al selector

---

## 3. Landing B2B — Secciones (en orden)

### 3.1 Hero B2B
- Mismo estilo visual del Hero B2C: fondo `bg-brand-dark`, iconos de ciencia como watermark, glow radial amarillo
- **Sin video**
- Título en Playfair Display 900: *"Desarrollamos el activo más poderoso de tu empresa: la capacidad de influir"* con palabras clave en `#F2BE1B`
- Subtítulo en Montserrat: *"Capacitación y asesoría corporativa basada en la ciencia del comportamiento para que tus equipos influyan, convenzan y cierren más."*
- 3 badges de ROI horizontales (del PDF):
  - `+30%` en tasa de cierre
  - Reducción de rotación de talento
  - Protección de margen (elimina guerra de precios)
- CTA principal: botón amarillo → `https://wa.link/1x71tx`
- Firma de Freddy con foto circular + badges de certificación (igual que B2C)

### 3.2 ROI / Beneficios para la empresa
- 3 cards con ícono, título y descripción corta
- Mismos estilos que las cards de `WhyInfluence` (`bg-white/5 border border-white/10 rounded-xl`)
- Contenido del PDF:
  1. **Cierra más negocios** — Reducción de ciclos de venta y aumento de un 30% en la tasa de cierre
  2. **Retén tu talento** — Maximización del compromiso del equipo, reduciendo rotación y costos de re-contratación
  3. **Protege tu margen** — Storytelling estratégico que acelera decisiones del cliente y elimina la competencia por precio

### 3.3 Social Proof (WEF + LinkedIn)
- Componentes `SocialProof` y `LinkedInProof` del B2C **reutilizados sin cambios**

### 3.4 3 Diferenciadores
- 3 items con ícono y texto, del PDF:
  1. Decisiones con base en evidencia científica, no intuición
  2. Principios éticos, universales y aplicables — no trucos del momento
  3. Herramientas diseñadas para impacto sostenido en el entorno profesional
- Mismo estilo de cards con borde sutil y hover amarillo

### 3.5 Paquetes — Mastery de Persuasión
- Título de sección: *"Mastery de Persuasión"*
- Subtítulo: *"Elige el paquete que mejor se adapte a los objetivos de tu equipo"*
- **3 cards principales** en grid (desktop: 3 columnas, mobile: 1):
  - **Diamond** 💎 — Recomendado (badge destacado). Capacitación Teórico-Práctica + Material impreso. 8 sesiones × 1h45m (~13 hrs). Incluye: certificados digitales e impresos, Bitácora estratégica, Resumen Ejecutivo PDF, 5 micro-entrenamientos. Precio: ~~S/4,500~~ **S/4,050**
  - **Platinum** — Capacitación Teórico-Práctica. 7 sesiones × 80min (~9 hrs). Certificado digital. Precio: ~~S/4,330~~ **S/3,897**
  - **Gold** — Capacitación Teórica. 7 sesiones × 55min (~6 hrs). Certificado digital. Precio: ~~S/2,900~~ **S/2,610**
- Debajo de las 3 cards, sección *"Formatos ágiles para agendas intensas"*:
  - **Workshop intensivo** — 3 sesiones × 90min → S/1,485
  - **Charla Express** — 1 sesión × 2h30min → S/674
- Todos los CTAs de paquetes → `https://wa.link/1x71tx`
- Condiciones visibles: *"Propuesta válida hasta el 15 de abril 2026 · 50% adelantado + 50% 1 día antes de la primera sesión · Se emite RHE"*

### 3.6 Temario — 8 sesiones
- Título: *"¿Qué aprenderá tu equipo?"*
- Grid de 8 cards, cada una con número de sesión, título y descripción breve
- Badge de disponibilidad por paquete (Diamond / Platinum+Gold / Diamond exclusivo)
- Sesión 1 (Toma de Decisiones Humanas) y Sesión 8 (Fenómeno del Contraste) marcadas como exclusivas Diamond
- Mismo estilo visual de `SevenPrinciples`

### 3.7 Sobre Dr. Cialdini + Certificación
- Componentes `AboutCialdini` y `Certification` del B2C **reutilizados sin cambios**

### 3.8 Sobre el Coach
- Componente `AboutCoach` del B2C **reutilizado sin cambios**

### 3.9 CTA Final B2B
- Fondo `bg-brand-darker` con borde cyan
- Headline: *"Agenda una llamada y recibe la propuesta personalizada para tu empresa"*
- Subtext: *"Sin costo ni compromiso. Diseñamos el programa a la medida de tu equipo."*
- Botón amarillo → `https://wa.link/1x71tx`
- Condiciones de contratación en texto pequeño

### 3.10 Footer
- Componente `Footer` del B2C **reutilizado sin cambios**

---

## 4. Cambios en componentes existentes

### `App.tsx`
- Agrega estado `mode: 'selector' | 'b2c' | 'b2b'`
- Renderiza `<SelectorScreen>` si `mode === 'selector'`
- Renderiza layout B2C actual si `mode === 'b2c'`
- Renderiza layout B2B si `mode === 'b2b'`

### `Navbar.tsx`
- Recibe props: `mode: 'b2c' | 'b2b'` y `onSwitchMode: (mode: 'b2c' | 'b2b') => void`
- Agrega switcher visual (pill/toggle) entre "Para ti" y "Para empresas"
- Logo clickeable que llama a un `onGoHome` callback para volver al selector

---

## 5. Nuevos archivos a crear

```
src/
├── components/
│   ├── sections/
│   │   ├── SelectorScreen.tsx        ← pantalla dividida de entrada
│   │   └── b2b/
│   │       ├── HeroB2B.tsx
│   │       ├── RoiCards.tsx
│   │       ├── Differentiators.tsx
│   │       ├── PackagesB2B.tsx       ← Diamond / Platinum / Gold + formatos ágiles
│   │       ├── CurriculumB2B.tsx     ← temario de 8 sesiones
│   │       └── FinalCtaB2B.tsx
```

---

## 6. Datos a agregar en `content.ts`

- `B2B_PACKAGES`: array con los 3 paquetes (nombre, tipo, sesiones, duración, precio regular, precio con dscto, beneficios incluidos, recomendado: bool)
- `B2B_AGILE_FORMATS`: array con los 2 formatos ágiles
- `B2B_CURRICULUM`: array de 8 sesiones con nombre, descripción y paquetes que la incluyen
- `B2B_ROI`: array de 3 items ROI
- `B2B_DIFFERENTIATORS`: array de 3 diferenciadores

---

## 7. Lo que NO cambia

- Todo el código B2C existente permanece intacto
- El diseño system (colores, fuentes, Tailwind config) se comparte
- Los componentes UI base (`Button`, `SectionTitle`, `PrincipleCard`) se reutilizan
- No hay rutas nuevas — todo es estado en memoria

---

## 8. Decisiones de diseño

- **Sin localStorage:** el selector aparece en cada visita
- **Sin react-router:** el cambio de modo es estado React puro, sin cambio de URL
- **Colores B2B:** se usa `brand-cyan` (#5FC5E3) como acento de identidad B2B, `brand-yellow` para CTAs (igual que B2C)
- **Precios visibles:** se muestran con tachado del precio regular y el precio con descuento en grande
