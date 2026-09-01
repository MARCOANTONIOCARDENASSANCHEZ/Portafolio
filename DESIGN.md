# DESIGN.md — Portafolio editorial con pulso lúdico

**Estado:** contrato de diseño previo a implementación  
**Producto:** portafolio profesional personal  
**Stack previsto:** Next.js App Router, TypeScript, Tailwind CSS, GSAP + ScrollTrigger, Lenis, Motion  
**Idioma de interfaz:** español  
**Versión del contrato:** 1.0  

> Este documento es la fuente de verdad visual y de interacción. Ningún componente debe introducir colores, tamaños, espaciados, radios, sombras, tipografías o curvas fuera de los tokens aquí definidos. Si la implementación necesita una excepción, primero se amplía este contrato.

---

## 0. Registro de investigación

### 0.1 Fuentes y alcance real

- **Aardvark:** referencia viva ya analizada en el brief. Se toma su sensación amistosa, el uso modular del color y la facilidad de exploración entre piezas. No se copiarán activos, textos, stickers, composición exacta ni timings.
- **Alejandro:** referencia viva ya analizada en el brief. Se toman la jerarquía tipográfica, la asimetría controlada y la puesta en escena de proyectos. No se copiarán activos, textos, estructura exacta ni timings.
- **beui — marquee:** se adopta el mecanismo de pista duplicada e inerte, continuidad sin salto y pausa por `hover` o foco dentro del componente.
- **beui — text-animation:** se adopta el revelado con Motion manteniendo el texto semántico visible en el DOM; la alternativa de movimiento reducido usa solo opacidad.
- **beui — expanding-arrow-button:** se adopta la respuesta tipográfica por letra y el desplazamiento de flecha como feedback de acción, sin duplicar texto de forma accesible.
- **Lazyweb:** omitido. El usuario ya proporcionó referencias vivas concretas y una síntesis suficiente; no se realizó exploración adicional.
- **Imagen:** omitido. No hay generador de imágenes disponible y las referencias concretas ya fijan la dirección.
- **Auditoría visual en navegador:** no realizada. Este archivo es un contrato pre-implementación; la validación en navegador corresponde a la fase posterior.

### 0.2 Síntesis aplicable

La solución combina **70% claridad editorial profesional** y **30% experimentación lúdica**. La columna vertebral debe ser predecible: presentación, prueba de trabajo, método, experiencia y contacto. La experimentación aparece en objetos reutilizables, cortes asimétricos, cambios de escala, stickers originales y previews con profundidad; nunca en dispersión decorativa. En móvil se reduce el ornamento, pero no se oculta contenido crítico.

### 0.3 Decisiones derivadas

1. Fondo marfil cálido y tipografía casi negra para una lectura prolongada y menos clínica que el blanco puro.
2. Una sola familia de acento: **azul eléctrico**, aplicada por función y mediante una rampa tonal, nunca acompañada por naranja o verde como segundo acento.
3. Proyectos como prueba principal: aparecen antes que biografía, skills o cronología.
4. Asimetría dentro de una retícula estable: offsets y spans deliberados, no posiciones absolutas arbitrarias.
5. La personalidad se concentra en verbos, microcopy breve, stickers construidos con CSS/SVG propio y transiciones que explican estado.

---

## 1. Concepto, personalidad y principios

### 1.1 Concepto rector: “Mesa de edición en movimiento”

El sitio se percibe como la mesa de trabajo de una persona que combina criterio, oficio y curiosidad: páginas ordenadas, fichas numeradas, anotaciones técnicas y recortes que se desplazan cuando el visitante explora. No es un scrapbook caótico ni una galería solemne. Es una publicación profesional que responde al cursor y al scroll.

### 1.2 Personalidad

- **Clara:** la jerarquía permite saber siempre qué leer y qué hacer.
- **Segura:** titulares grandes, decisiones cromáticas escasas y proyectos mostrados sin adornos defensivos.
- **Cálida:** marfil, bordes suaves, lenguaje directo y detalles hechos a medida.
- **Curiosa:** composición asimétrica, índices reactivos y pequeños cambios de escala.
- **Precisa:** mono para metadatos, números, fechas y etiquetas funcionales.
- **No corporativa:** evita copy genérico de SaaS, renders 3D, stock y tarjetas repetidas sin intención.

### 1.3 Proporción expresiva

- **70% editorial:** lectura, ritmo vertical, contraste tipográfico, retícula, pies de proyecto, numeración y espacios en blanco.
- **30% lúdico:** stickers, previews flotantes, letras reactivas, marquee, cursor contextual y encuadres desplazados.
- Si una pantalla se siente 50/50, se reduce el ornamento antes que la información.

### 1.4 Principios no negociables

- La información importante existe como texto HTML visible, no dentro de canvas, imágenes o animaciones.
- El hero no usa un gradiente genérico de fondo. El fondo principal es plano; la profundidad viene de capas, bordes, sombras, recortes y desplazamiento.
- No se usa 3D, WebGL, stock, emojis ni stickers copiados.
- La retícula manda; romperla exige mantener alineada al menos una arista con una columna o línea base.
- Cada animación comunica entrada, relación, navegación o cambio de estado.
- El sitio debe conservar sentido y orden con JavaScript desactivado; la animación es mejora progresiva.

### 1.5 Voz y contenido provisional

Todo dato personal, proyecto, cliente, métrica, fecha, enlace y testimonio incluido durante la implementación será **provisional** hasta ser reemplazado. Nunca inventar logros que parezcan reales.

Tokens obligatorios de contenido:

- `{{NOMBRE}}`, `{{ROL_PRINCIPAL}}`, `{{UBICACION}}`, `{{DISPONIBILIDAD}}`
- `{{EMAIL}}`, `{{LINKEDIN_URL}}`, `{{GITHUB_URL}}`, `{{CV_URL}}`
- `{{BIO_CORTA}}`, `{{BIO_LARGA}}`, `{{ENFOQUE_PROFESIONAL}}`
- `{{PROYECTO_01_TITULO}}` a `{{PROYECTO_06_TITULO}}`
- `{{PROYECTO_XX_RESUMEN}}`, `{{PROYECTO_XX_ROL}}`, `{{PROYECTO_XX_ANO}}`, `{{PROYECTO_XX_SERVICIOS}}`
- `{{PROYECTO_XX_IMAGEN_ALT}}`, `{{PROYECTO_XX_COVER}}`, `{{PROYECTO_XX_URL}}`
- `{{CASO_XX_RETO}}`, `{{CASO_XX_PROCESO}}`, `{{CASO_XX_RESULTADO}}`, `{{CASO_XX_METRICA}}`
- `{{SKILL_XX_NOMBRE}}`, `{{SKILL_XX_NIVEL_DESCRIPTIVO}}`
- `{{HITO_XX_FECHA}}`, `{{HITO_XX_ROL}}`, `{{HITO_XX_ORGANIZACION}}`, `{{HITO_XX_DESCRIPCION}}`

La primera versión debe mostrar **5 proyectos** y admitir entre 4 y 6 sin cambiar el sistema.

---

## 2. Fundamentos visuales

### 2.1 Paleta y tokens de color

Una única familia cromática de acento: azul eléctrico. Los estados de éxito, advertencia y error se expresan con texto, icono, borde y variaciones neutrales; no introducen familias verde, naranja o roja como decoración. Para errores de formulario se permite `--color-status-error` exclusivamente como color semántico de estado, no como acento visual.

| Token | Valor | Uso |
|---|---:|---|
| `--color-canvas` | `#F4F0E6` | Fondo marfil principal |
| `--color-surface` | `#FBF8F1` | Tarjetas, paneles elevados, cursor claro |
| `--color-surface-muted` | `#E9E4D8` | Bandas, separadores amplios, estado desactivado |
| `--color-ink` | `#171714` | Texto principal y fondos invertidos |
| `--color-ink-soft` | `#4F4D46` | Texto secundario |
| `--color-ink-muted` | `#77736A` | Metadatos no críticos; solo en tamaños que pasen AA |
| `--color-line` | `#CFC8BA` | Bordes y reglas sobre marfil |
| `--color-line-strong` | `#8C877D` | Focus auxiliar, divisores de alta presencia |
| `--color-accent-050` | `#EEF3FF` | Fondo azul muy leve |
| `--color-accent-100` | `#DCE7FF` | Selección suave |
| `--color-accent-200` | `#B9CEFF` | Decoración tonal |
| `--color-accent-300` | `#86AAFF` | Ilustración y hover sobre fondos oscuros |
| `--color-accent-400` | `#4F7FFF` | Elementos activos grandes |
| `--color-accent-500` | `#1557FF` | Acento principal, enlaces y foco |
| `--color-accent-600` | `#0042DB` | Hover accesible en fondos claros |
| `--color-accent-700` | `#0033A8` | Texto/acento de alto contraste |
| `--color-accent-800` | `#002472` | Presionado y fondos azules profundos |
| `--color-accent-900` | `#001744` | Casos invertidos controlados |
| `--color-focus` | `#1557FF` | Anillo de foco global |
| `--color-status-error` | `#A62424` | Solo errores y validación; no decoración |
| `--color-selection-bg` | `#1557FF` | Selección de texto |
| `--color-selection-text` | `#FBF8F1` | Texto seleccionado |

Reglas:

- Texto normal: `--color-ink` sobre `--color-canvas` o `--color-surface`.
- Texto secundario: `--color-ink-soft`; `--color-ink-muted` no se usa por debajo de 14 px/20 px.
- El azul 500 se reserva para acciones, selección y una masa visual dominante por viewport como máximo.
- No usar degradados cromáticos como fondo. La rampa es un sistema de tonos discretos; las composiciones usan planos sólidos.
- Fondos invertidos: `--color-ink` con texto `--color-surface`; enlaces en `--color-accent-300`.

### 2.2 Tipografía: exactamente dos familias

1. **Syne** — sans expresiva. Titulares, cuerpo, navegación, botones y citas. Pesos permitidos: 400, 500, 600, 700, 800.
2. **IBM Plex Mono** — mono funcional. Metadatos, índices, fechas, chips, mediciones y captions. Pesos permitidos: 400, 500, 600.

No se introducirán fuentes del sistema como tercera familia visual. Los fallbacks técnicos solo actúan durante carga: `sans-serif` y `monospace`.

| Token | Desktop | Mobile | Peso / line-height | Uso |
|---|---:|---:|---|---|
| `--type-display-xl` | 104 px | 52 px | 700 / 0.92 | Hero, máximo 3 líneas |
| `--type-display-lg` | 72 px | 44 px | 700 / 0.96 | Títulos de sección especiales |
| `--type-h1` | 56 px | 38 px | 700 / 1.02 | Título de página/caso |
| `--type-h2` | 40 px | 32 px | 650 / 1.08 | Encabezados principales |
| `--type-h3` | 28 px | 24 px | 600 / 1.14 | Proyecto/panel |
| `--type-h4` | 20 px | 18 px | 600 / 1.25 | Subapartados |
| `--type-body-lg` | 20 px | 18 px | 450 / 1.55 | Entradillas |
| `--type-body` | 16 px | 16 px | 450 / 1.6 | Cuerpo |
| `--type-small` | 14 px | 14 px | 500 / 1.45 | Secundario |
| `--type-caption` | 12 px | 12 px | mono 500 / 1.4 | Etiquetas, siempre mayúsculas y tracking 0.08em |

Reglas:

- Longitud de lectura: 52–68 caracteres por línea.
- Titulares pueden usar tracking `-0.035em`; cuerpo `-0.01em`; mono `0.02em` o `0.08em` en mayúsculas.
- No justificar texto. No usar mayúsculas en párrafos.
- El tamaño fluido puede interpolar entre los extremos definidos mediante `clamp`; los límites siguen siendo estos tokens.

### 2.3 Escala de espacio de 4 px

| Token | Valor | Uso típico |
|---|---:|---|
| `--space-0` | 0 | Reset |
| `--space-1` | 4 px | Microseparación |
| `--space-2` | 8 px | Icono/texto |
| `--space-3` | 12 px | Controles compactos |
| `--space-4` | 16 px | Padding móvil base |
| `--space-5` | 20 px | Separación de texto |
| `--space-6` | 24 px | Padding de componente |
| `--space-8` | 32 px | Bloque pequeño |
| `--space-10` | 40 px | Gap medio |
| `--space-12` | 48 px | Padding de panel |
| `--space-16` | 64 px | Separación de subsección |
| `--space-20` | 80 px | Sección compacta |
| `--space-24` | 96 px | Sección estándar móvil |
| `--space-32` | 128 px | Sección estándar desktop |
| `--space-40` | 160 px | Sección hero/contacto |

No se permiten valores de spacing fuera de la escala. Los offsets de collage también usan estos tokens.

### 2.4 Radios, bordes, profundidad y material

| Token | Valor | Uso |
|---|---:|---|
| `--radius-xs` | 4 px | Tags cuadrados, indicadores |
| `--radius-sm` | 8 px | Controles compactos |
| `--radius-md` | 16 px | Cards y previews |
| `--radius-lg` | 24 px | Paneles y media principal |
| `--radius-round` | 999 px | Solo cursor, punto de estado o botón circular; nunca cards/chips en masa |
| `--border-hairline` | 1 px | Reglas y contornos |
| `--border-emphasis` | 2 px | Focus y estado seleccionado |
| `--shadow-rest` | `0 8px 0 rgba(23,23,20,.10)` | Elevación editorial rígida |
| `--shadow-float` | `0 20px 48px rgba(23,23,20,.16)` | Preview/case panel flotante |
| `--shadow-pressed` | `0 3px 0 rgba(23,23,20,.14)` | Estado presionado |

Estrategia de profundidad:

1. Plano base marfil.
2. Superficies marfil claro delimitadas por borde.
3. Piezas activas desplazadas con sombra rígida de 8 px.
4. Preview flotante con sombra difusa y leve rotación de máximo 2 grados.
5. Superficie invertida casi negra para contacto a pantalla completa.

No usar blur de vidrio, glassmorphism, degradado atmosférico ni sombras múltiples decorativas.

### 2.5 Iconografía, stickers e ilustración

- Iconos funcionales: SVG lineal, trazo 1.75, `currentColor`, terminales redondos, viewBox 24×24.
- Stickers: SVG/CSS originales basados en formas simples de imprenta: asterisco de ocho puntas, corchete expandido, etiqueta de índice, cursor de selección y subrayado dentado.
- Cada sticker tiene nombre funcional (`StickerBurst`, `StickerBracket`, `StickerIndex`, `StickerCursor`, `StickerUnderline`) y una única responsabilidad visual.
- Colores permitidos: canvas, surface, ink y un tono de la rampa azul. No hay nuevos colores.
- Máximo: 3 stickers simultáneos en desktop y 1 en móvil por viewport.
- Todos los stickers decorativos usan `aria-hidden="true"`, no reciben foco y no transmiten contenido único.
- No copiar dibujos, garabatos ni activos de las referencias.

---

## 3. Retícula, responsive y arquitectura de información

### 3.1 Breakpoints y contenedor

| Modo | Rango | Columnas | Margen lateral | Gutter |
|---|---|---:|---:|---:|
| Mobile | 320–767 px | 4 | 16 px | 16 px |
| Tablet | 768–1023 px | 8 | 32 px | 20 px |
| Desktop | 1024–1439 px | 12 | 48 px | 24 px |
| Wide | ≥1440 px | 12 | 64 px | 24 px |

- Ancho máximo de contenido: 1600 px.
- La retícula CSS es explícita. Las secciones pueden usar `subgrid` donde haya soporte y una equivalencia definida donde no.
- Desktop usa 12 columnas; móvil usa 4. Tablet es transición de 8 columnas.
- La asimetría se produce con spans y columnas iniciales: nunca con `left/top` arbitrarios.
- El header y las reglas de sección ocupan todo el contenedor; el contenido editorial puede acotarse a 7–8 columnas.

### 3.2 Spans recurrentes

- Hero desktop: etiqueta 2 cols, titular 9 cols desde col 3, apoyo 4 cols desde col 8.
- Proyecto índice desktop: número 1, título 5, servicios 3, año 1, acción 2.
- Case study desktop: narrativa 5 cols, media/panel 6 cols, offset 1 col.
- About desktop: retrato/ilustración 4 cols, texto 6 cols desde col 6.
- Mobile: todo ocupa 4 cols salvo metadatos que pueden dividirse 2+2.

### 3.3 Orden de trabajo del contenido

Cada bloque cumple una función en la decisión del visitante:

1. **Header — navegar:** identidad, estado y acceso persistente.
2. **Hero — enganchar:** quién es, qué hace y qué valor aporta.
3. **Marquee — orientar:** disciplinas y disponibilidad sin sustituir el contenido.
4. **Projects — probar:** selección escaneable de 4–6 trabajos.
5. **Case studies — explicar y demostrar:** problema, criterio, proceso y resultado.
6. **Skills — comparar/entender:** capacidades agrupadas de forma interactiva.
7. **Timeline — acreditar:** recorrido, responsabilidades y evolución.
8. **About — conectar:** perspectiva personal y forma de trabajar.
9. **Contact — convertir:** acción primaria sin formulario innecesario.
10. **Footer — retener/navegar:** enlaces de salida, créditos y retorno al inicio.

### 3.4 Navegación y URLs

- Home: `/` con anclas `#proyectos`, `#capacidades`, `#trayectoria`, `#sobre-mi`, `#contacto`.
- Casos: `/proyectos/[slug]` si existe contenido suficiente; si no, el panel del caso vive en home sin enlaces vacíos.
- El header fijo conserva acceso a Proyectos, Sobre mí y Contacto.
- Todo enlace interno actualiza foco de manera predecible; Lenis no debe impedir el historial, deep links ni `scroll-margin-top`.

### 3.5 Simplificación móvil

- El contenido mantiene el mismo orden y totalidad.
- Los previews siguen visibles pero pasan de flotantes a bloques inline.
- Desaparece el cursor personalizado.
- Stickers se reducen a uno por viewport y no se superponen con texto.
- El marquee puede mantener movimiento si no hay reducción de movimiento; su velocidad baja y sigue siendo paus-able.
- La navegación usa un panel simple a pantalla completa, no un menú radial ni gestos ocultos.

---

## 4. Primitivas reutilizables y estados

Todas las primitivas se definen antes de las pantallas. Sus variantes deben resolverse por props tipadas y tokens, no por overrides locales.

### 4.1 `SiteHeader` / `PrimaryNav`

**Anatomía:** marca textual `{{NOMBRE}}`, indicador `{{DISPONIBILIDAD}}`, enlaces de ancla, CTA de contacto, control de menú móvil.  
**Desktop:** fijo, 72 px de alto, fondo canvas al 94% de opacidad sin blur, borde inferior.  
**Mobile:** fijo, 64 px; marca + control. Panel de menú ocupa viewport bajo el header.  
**Estados:** `rest`, `scrolled` (borde fuerte y altura igual), `menu-open`, `focus-visible`, `current` con subrayado azul de 2 px.  
**Reglas:** `nav` con lista; `aria-current`; botón real para abrir; Escape cierra; el foco se contiene en el panel y vuelve al disparador.

### 4.2 `AnimatedWordLink` / `AnimatedWordButton`

**Anatomía:** texto semántico único, envoltorios visuales por letra con `aria-hidden`, flecha SVG opcional, borde inferior o contorno según variante. El nombre accesible proviene de una única cadena, sin duplicación anunciable.  
**Variantes:** `text`, `outlined`, `inverted`; alturas 44 y 52 px; radio `--radius-sm`, no pill.  
**Estados:** `rest`, `hover`, `focus-visible`, `pressed`, `disabled`, `loading`.  
**Interacción:** en hover/foco, las letras visibles suben 3 px en una onda de izquierda a derecha y vuelven con spring; la flecha se desplaza 4 px y escala 1.04. En pressed baja 2 px y usa `--shadow-pressed`.  
**Accesibilidad:** el foco nunca depende solo de animación; anillo 2 px + offset 3 px. `disabled` no se aplica a enlaces; botones usan atributo real.

### 4.3 `MarqueeBand`

**Anatomía:** título accesible opcional, viewport `overflow: hidden`, dos pistas idénticas visualmente; la segunda es `aria-hidden="true"` e `inert`.  
**Contenido:** disciplinas y disponibilidad separadas por `StickerBurst` o punto SVG, nunca emojis.  
**Estados:** `running`, `paused-hover`, `paused-focus-within`, `reduced-motion`.  
**Mecanismo:** la pista duplicada permite un loop continuo sin salto. Pausa por hover y por foco dentro; un enlace dentro de la primera pista sigue siendo operable. La segunda pista nunca recibe foco ni eventos.  
**Reduced motion:** sin desplazamiento; lista envuelta en varias líneas y totalmente legible.

### 4.4 `SectionHeading`

**Anatomía:** índice mono (`01`), `h2`, entradilla opcional, regla horizontal.  
**Variantes:** `standard`, `inverted`, `compact`.  
**Desktop:** índice 1 col, título 7–9 cols, texto 3–4 cols.  
**Estados:** sin hover; revelado solo al entrar en viewport. El heading existe visible y con orden semántico aunque Motion no cargue.

### 4.5 `ProjectIndex`, `ProjectRow`, `ProjectCard`, `ProjectPreview`

**ProjectIndex:** `ol` de 4–6 proyectos. Un solo proyecto activo a la vez.  
**ProjectRow:** número, título, servicios, año y enlace. Desktop horizontal; móvil tarjeta editorial.  
**ProjectCard:** fallback táctil y módulo reutilizable en grids relacionados. Imagen/cover con ratio 4:3, metadatos, título y resumen.  
**ProjectPreview:** panel visual relacionado con la fila activa; desktop flota dentro del área de proyectos y sigue límites del contenedor, nunca el cursor. Móvil es inline.  
**Estados:** `rest`, `hover`, `focus-within`, `active`, `visited`, `loading-media`, `media-error`.  
**Comportamiento:** hover y foco activan exactamente el mismo preview. La fila activa obtiene fondo accent-050, borde izquierdo accent-500 y título desplazado 8 px. La imagen nunca contiene texto esencial. `media-error` muestra título + número con superficie tokenizada, no un icono roto.

### 4.6 `CaseStudyPanel`

**Anatomía:** etiqueta de caso, título, reto, contribución, proceso, resultado, métrica verificada, media, enlace.  
**Variantes:** `light`, `ink`, `accent`; la variante azul usa accent-700 o más oscuro para contraste con texto claro.  
**Layout:** panel de 12 cols con narrativa y media desfasadas; alterna orientación por caso sin alterar el orden DOM.  
**Estados:** `collapsed-summary` solo si todo el resumen sigue visible, `expanded`, `focus-within`. El control usa `aria-expanded`; no colapsar información crítica para SEO ni entendimiento.

### 4.7 `SkillControl` / `SkillPanel`

**Anatomía:** grupo de tabs accesible o acordeón según viewport, nombre de disciplina, nivel descriptivo, herramientas y evidencia enlazada.  
**Categorías provisionales:** `{{SKILL_CATEGORIA_01}}` a `{{SKILL_CATEGORIA_04}}`.  
**Estados:** `rest`, `hover`, `selected`, `focus-visible`, `disabled` solo si existe razón real.  
**Desktop:** tabs verticales 4 cols + panel 8 cols. Teclas flecha cambian foco; Enter/Espacio activa según patrón ARIA elegido.  
**Mobile:** acordeón nativo progresivo; un panel puede permanecer abierto.  
**Regla de contenido:** no usar barras porcentuales ambiguas. Cada capacidad se prueba con descripción y proyecto relacionado.

### 4.8 `TimelineRow`

**Anatomía:** fecha mono, rol, organización, descripción, línea/índice.  
**Desktop:** 2 + 4 + 6 columnas.  
**Mobile:** fecha arriba, contenido debajo; el hilo visual queda a la izquierda.  
**Estados:** `rest`, `current`, `focus-within`; current se marca con texto “Actual”, no solo color.  
**Semántica:** lista ordenada dentro de sección; fechas con elemento `time` y `datetime` válido.

### 4.9 `Sticker` / `EditorialIllustration`

**Anatomía:** componente SVG/CSS con variantes Burst, Bracket, Index, Cursor y Underline.  
**Estados:** `rest`, `reactive` solo si acompaña un control, `reduced-motion`.  
**Reglas:** nunca recibe foco; máximo 8–12% del ancho del viewport; rotación en pasos tokenizados `-6deg`, `-2deg`, `2deg`, `6deg`; la rotación no transmite información. Las ilustraciones editoriales usan exclusivamente línea, trama de puntos SVG y planos sólidos del sistema.

### 4.10 `DesktopCursor`

**Disponibilidad:** solo con `(hover: hover) and (pointer: fine)` y viewport ≥1024 px.  
**Anatomía:** punto de 8 px + anillo de 32 px; variantes `default`, `link`, `preview`, `drag` si se implementa una interacción arrastrable real.  
**Estados:** `idle`, `interactive`, `pressed`, `hidden`, `reduced-motion`.  
**Reglas:** `pointer-events: none`, no reemplaza el cursor nativo hasta confirmar que JS está listo, se oculta al salir del viewport y en campos de texto conserva el cursor nativo. No debe generar layout, bloquear clics ni ser la única indicación de interactividad. En reduced motion no interpola: sigue posición de forma directa o se desactiva.

### 4.11 Primitivas de soporte

- `Container`: ancho máximo + márgenes responsive.
- `Grid`: 4/8/12 columnas y gutters definidos.
- `Rule`: línea tokenizada, horizontal/vertical.
- `Tag`: rectangular con `--radius-xs`; texto mono; no pill.
- `MediaFrame`: ratios 16:10, 4:3 y 1:1; radio md/lg; caption asociado.
- `Icon`: SVG `currentColor`, tamaño 16/20/24 según token de espacio.
- `SkipLink`: primer elemento enfocable; visible al foco.
- `FocusRing`: borde 2 px accent-500, offset 3 px canvas o ink según superficie.

---

## 5. Movimiento e interacción

### 5.1 Propiedad por herramienta

| Herramienta | Es propietaria de | No debe hacer |
|---|---|---|
| **GSAP + ScrollTrigger** | Secuencias ligadas al scroll, pinning puntual del índice de proyectos, parallax máximo de 24 px en stickers, progresión del timeline | Hover de botones, montaje de componentes, scroll suave |
| **Lenis** | Únicamente interpolación de scroll y puente de RAF con ScrollTrigger | Animar nodos, secuestrar teclado, alterar URLs/anclas, ejecutarse en reduced motion |
| **Motion** | Entrada/salida de componentes React, revelado de texto, layout del panel activo, spring de letras/flecha, menú móvil | Timelines largos ligados al scroll, marquee infinito |
| **CSS** | Hover/focus simples, colores, bordes, sombras, marquee lineal, estados pressed, transiciones de opacidad/transform | Orquestación entre secciones o animación de layout (`width`, `height`, `top`, `left`) |

Una propiedad de un nodo tiene un solo dueño durante una interacción. GSAP y Motion no animan simultáneamente el mismo `transform`.

### 5.2 Tokens de tiempo y easing

| Nombre | Valor | Aplicación |
|---|---:|---|
| `--motion-instant` | 90 ms | Press, feedback inmediato |
| `--motion-fast` | 160 ms | Color, borde, subrayado |
| `--motion-base` | 240 ms | Hover de card, menú menor |
| `--motion-slow` | 480 ms | Reveal de bloque, preview |
| `--motion-section` | 720 ms | Entrada de sección |
| `--ease-standard` | `cubic-bezier(.22,.61,.36,1)` | Transición general |
| `--ease-emphasized` | `cubic-bezier(.16,1,.3,1)` | Entrada editorial |
| `--ease-exit` | `cubic-bezier(.4,0,1,1)` | Salida corta |

Springs Motion con nombre:

- `spring-word`: `{ type: "spring", stiffness: 420, damping: 28, mass: 0.55 }`.
- `spring-arrow`: `{ type: "spring", stiffness: 500, damping: 32, mass: 0.45 }`.
- `spring-preview`: `{ type: "spring", stiffness: 260, damping: 30, mass: 0.8 }`.
- `spring-menu`: `{ type: "spring", stiffness: 320, damping: 34, mass: 0.9 }`.

### 5.3 Secuencias principales

**Carga hero**

1. Header: opacity 0→1, 240 ms.
2. Label hero: opacity 0→1 y `translateY(8px→0)`, 480 ms.
3. Titular: revelado por palabras con Motion, delay 80 ms por palabra, duración visual máxima total 720 ms.
4. Apoyo + CTA: opacity 0→1 y `translateY(12px→0)`, 480 ms, delay 160 ms tras inicio del titular.
5. Sticker: escala .92→1 y rotación 2deg→0, spring-preview; solo después de que el texto sea legible.

**Revelado semántico de texto inspirado en beui**

- El texto completo se renderiza como contenido semántico desde el primer frame; no se reemplaza por canvas ni se elimina del árbol accesible.
- Para el efecto por palabra, un nombre accesible único permanece en el contenedor y los wrappers visuales fragmentados se ocultan a tecnología asistiva cuando sea necesario.
- Motion anima solo `opacity` y `transform: translateY`.
- Con `prefers-reduced-motion: reduce`, no hay desplazamiento ni stagger: opacity 0→1 en 160 ms. Si incluso esta transición perjudica, el contenido aparece inmediato.

**Marquee inspirado en beui**

- CSS posee la animación lineal `marquee-loop`, 28 s desktop y 36 s móvil por ciclo completo.
- Dos pistas visualmente idénticas; la copia es `inert` y `aria-hidden`.
- `animation-play-state: paused` en `:hover` y `:focus-within`.
- La distancia se calcula con el ancho real de una pista para no saltar.
- Reduced motion: `animation: none`; contenido en flex-wrap, sin duplicado visible.

**Índice de proyectos**

- CSS gestiona color/borde de fila en 160 ms.
- Motion intercambia preview con `spring-preview`, opacity y translateY de 12 px; no escala imágenes agresivamente.
- ScrollTrigger puede fijar la columna de preview solo en desktop y solo durante el alto del índice; sin pin en móvil.
- El cambio se activa tanto por foco como por hover. En touch, tap navega o expande según etiqueta explícita; nunca requiere hover.

**CTA de letras reactivas inspirado en beui**

- Texto accesible único; los spans de letras son presentación visual y no crean lectura duplicada.
- En hover/foco, onda de letras con delay de 18 ms por carácter, `y: -3`, `spring-word`.
- Flecha `x: 4`, scale 1.04, `spring-arrow`.
- En salida, retorno sin delay para respuesta inmediata.
- Reduced motion: sin onda ni desplazamiento; solo color y subrayado en 160 ms.

**Timeline**

- ScrollTrigger actualiza una línea de progreso mediante `scaleY`, nunca `height`.
- Cada fila entra una vez con opacity y translateY 16 px, 480 ms, stagger 80 ms.
- El contenido ya está en flujo y visible sin JS.

### 5.4 Lenis y sincronización

- Duración perceptiva objetivo: 1.1 s, easing `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`.
- Lenis alimenta el RAF de GSAP; ScrollTrigger actualiza después del scroll.
- Se desactiva con reduced motion, teclado de navegación, impresión o si causa latencia de input.
- Links de ancla respetan `scroll-margin-top: 96px`, historial y foco del destino.

### 5.5 Restricciones de movimiento

- Solo `transform`, `opacity` y, en casos medidos, `filter` compositado.
- No animar width, height, margin, padding, top o left.
- Máximo un pinning simultáneo y nunca más de 70% del recorrido de una sección.
- Ninguna animación bloquea lectura, click, foco o scroll.
- No hay autoplay de audio/video.
- Nada parpadea más de tres veces por segundo.

---

## 6. Wireframes textuales y composición de secciones

Los wireframes describen jerarquía, spans, alineación, estados y comportamiento responsive. El orden DOM sigue el orden de lectura indicado.

### 6.1 Header fijo

**Desktop, 12 columnas**

```text
┌──────────────────────────────────────────────────────────────────────┐
│ {{NOMBRE}} [cols 1–3]     disponible [4–5]  Proyectos Sobre mí Contacto [8–12] │
└──────────────────────────────────────────────────────────────────────┘
```

- Altura 72 px; marca alineada a izquierda, navegación a derecha.
- Indicador de disponibilidad usa punto azul + texto; el punto solo no comunica estado.
- Al hacer scroll no se encoge: añade borde fuerte para evitar salto de layout.

**Mobile, 4 columnas**

```text
┌──────────────────────────┐
│ {{NOMBRE}} [1–3]   Menú [4] │
└──────────────────────────┘
```

- Botón Menú abre panel bajo header con enlaces grandes, disponibilidad y contacto.

### 6.2 Hero — función: enganchar

**Desktop**

```text
fila A: [01 / PORTAFOLIO cols 1–2]  [STICKER original cols 11–12]
fila B: [{{ROL_PRINCIPAL}} / frase de valor en 2–3 líneas cols 3–11]
fila C: [vacío 1–7] [{{BIO_CORTA}} cols 8–11]
fila D: [{{UBICACION}} cols 1–2] [CTA Ver proyectos cols 8–10] [año cols 12]
```

- Altura mínima: viewport menos header, con padding vertical space-24/space-16.
- Fondo plano canvas. Un bloque azul sólido estrecho puede subrayar una palabra; no es gradiente.
- El vacío izquierdo da respiración y hace editorial la escala.

**Mobile**

```text
[01 / PORTAFOLIO]
[{{ROL_PRINCIPAL}} — 2–4 líneas, 4 cols]
[{{BIO_CORTA}}, 4 cols]
[CTA Ver proyectos]
[{{UBICACION}} · {{DISPONIBILIDAD}}]
[1 sticker pequeño alineado al borde derecho]
```

### 6.3 Marquee — función: orientar

```text
regla superior
  DISEÑO / DESARROLLO / DIRECCIÓN / {{DISCIPLINA}} / DISPONIBLE PARA {{TIPO}}
regla inferior
```

- Banda de ancho completo en accent-500 con texto surface o ink con texto accent-300 en modo invertido.
- La información se repite visualmente para loop, pero solo la primera pista es accesible.
- En móvil hace wrap si reduced motion está activo.

### 6.4 Proyectos — función: probar

**Desktop**

```text
[02] [PROYECTOS SELECCIONADOS cols 2–8]       [intro cols 9–12]
──────────────────────────────────────────────────────────────────────
[índice cols 1–7]                     [preview sticky cols 8–12]
01  {{PROYECTO_01_TITULO}}  servicios  año    [cover activo 4:3]
02  {{PROYECTO_02_TITULO}}  servicios  año    [caption + Ver caso]
03  {{PROYECTO_03_TITULO}}  servicios  año
04  {{PROYECTO_04_TITULO}}  servicios  año
05  {{PROYECTO_05_TITULO}}  servicios  año
──────────────────────────────────────────────────────────────────────
```

- Filas amplias con reglas, no cards repetidas.
- Preview desplazado verticalmente una unidad space-8 respecto al título para tensión asimétrica.
- Covers provisionales deben etiquetarse como `{{PROYECTO_XX_COVER}}`; no usar stock.

**Mobile**

```text
[02] PROYECTOS SELECCIONADOS
[intro]
[01 + título]
[cover 4:3]
[servicios · año · Ver caso]
────
... repetir 4–6 veces
```

### 6.5 Casos de estudio — función: explicar y demostrar

**Desktop, dos casos destacados como mínimo**

```text
CASO 01 / {{PROYECTO_01_TITULO}}
[Reto + rol cols 1–5]        [media principal cols 6–12]
[Proceso cols 2–6]           [StickerBracket cols 7]
[Resultado cols 7–11]        [{{METRICA}} cols 11–12]
[CTA Leer caso completo cols 7–10]
```

- Caso 02 invierte masa visual, no el orden DOM: texto sigue antes de media para lectura.
- Métricas solo si son verificables; si no, sustituir por resultado cualitativo explícito.
- Panel alterna surface e ink; el azul aparece en reglas, CTA y una superficie controlada.

**Mobile**

```text
[CASO 01]
[título]
[media 4:3]
[Reto]
[Mi contribución]
[Proceso]
[Resultado / métrica]
[Leer caso]
```

### 6.6 Skills — función: comparar y entender

**Desktop**

```text
[03] [CAPACIDADES cols 2–7] [explicación cols 9–12]
[controles verticales cols 1–4] [panel activo cols 5–12]
  Estrategia                    {{SKILL_XX_NIVEL_DESCRIPTIVO}}
  Diseño                        herramientas / métodos
  Desarrollo                    evidencia: proyectos relacionados
  Colaboración
```

- Panel activo usa fondo accent-050, borde y una ilustración CSS/SVG original.
- La interacción revela detalle; los nombres de capacidades permanecen visibles.

**Mobile**

```text
[03] CAPACIDADES
[explicación]
[acordeón: categoría 01 +]
[panel visible]
[acordeón: categoría 02 +]
...
```

### 6.7 Timeline — función: acreditar

**Desktop**

```text
[04] [TRAYECTORIA cols 2–7]
[fecha 1–2] [rol/organización 3–6] [descripción 7–12]
     │
[fecha 1–2] [rol/organización 3–6] [descripción 7–12]
     │
[fecha 1–2] [rol/organización 3–6] [descripción 7–12]
```

- La línea de progreso se alinea a col 2. Las filas usan reglas y espacio-12.
- No usar logos de empresas salvo autorización y activos reales.

**Mobile**

```text
● [{{HITO_FECHA}} / ACTUAL]
│ [{{HITO_ROL}}]
│ [{{HITO_ORGANIZACION}}]
│ [{{HITO_DESCRIPCION}}]
```

### 6.8 About — función: conectar

**Desktop**

```text
[05] [SOBRE MÍ cols 2–6]
[retrato real o ilustración propia cols 1–4]
          [{{BIO_LARGA}} cols 6–11]
          [principios de trabajo 6–9] [StickerUnderline 10–11]
          [Descargar CV] [LinkedIn]
```

- Si no existe retrato autorizado, usar ilustración editorial propia abstracta, no stock ni avatar falso.
- La bio habla de decisiones, colaboración e intereses concretos; no “apasionado por crear experiencias”.

**Mobile**

```text
[05] SOBRE MÍ
[retrato/ilustración 4:3]
[{{BIO_LARGA}}]
[3 principios]
[Descargar CV] [LinkedIn]
```

### 6.9 Contacto a pantalla completa — función: convertir

**Desktop y mobile**

```text
┌──────────────────────────────────────────────────────────────┐
│ [06 / CONTACTO]                              [{{UBICACION}}] │
│                                                              │
│ ¿HACEMOS ALGO                                                │
│ QUE MEREZCA SER VISTO?                                       │
│                                                              │
│ [Escríbeme → {{EMAIL}}]                                      │
│ [LinkedIn] [GitHub]                              [disponible] │
└──────────────────────────────────────────────────────────────┘
```

- Fondo ink, texto surface, acento accent-300/500 según contraste.
- Altura mínima 100svh menos header; contenido sigue accesible con zoom y teclado.
- CTA principal es `mailto:` solo si `{{EMAIL}}` real existe; no crear formulario sin requisito.
- Copia mostrada es provisional y debe reemplazarse con `{{CONTACTO_TITULAR}}` y `{{CONTACTO_CTA}}`.

### 6.10 Footer — función: retener y navegar

```text
regla
[© {{ANO}} {{NOMBRE}}] [Diseñado y desarrollado por {{NOMBRE}}]
[Volver arriba] [LinkedIn] [GitHub] [CV]
[Última actualización: {{FECHA_ACTUALIZACION}}]
```

- Sobre fondo ink como continuidad del contacto.
- “Volver arriba” mueve foco al inicio y respeta reduced motion.
- No incluir badges de tecnología como contenido dominante.

---

## 7. Semántica, accesibilidad, SEO y rendimiento

### 7.1 Estructura semántica

- Un `header` global con `nav` y enlace de salto.
- Un `main` por ruta. Un solo `h1`; cada sección principal usa `section` con `aria-labelledby` y `h2`.
- Proyectos como `ol` o artículos enlazables; cada caso usa `article`.
- Skills como tabs ARIA solo en desktop si la interacción cumple el patrón; acordeón con botones o `details` progresivo en móvil.
- Timeline como `ol`, con `time datetime`.
- Contacto dentro de `section`; footer global como `footer`.
- Botones para acciones, enlaces para navegación. No `div` clicables.
- Imágenes con `next/image`, dimensiones reservadas, `alt` funcional; decorativas con alt vacío.

### 7.2 WCAG 2.2 AA

- Contraste mínimo 4.5:1 para texto normal y 3:1 para texto grande, iconos informativos y bordes de controles.
- Objetivos táctiles mínimos 44×44 px; separación de al menos space-2 cuando sean adyacentes.
- Focus visible de 2 px con offset 3 px en todos los controles; nunca se elimina sin reemplazo.
- Orden de foco coincide con lectura. La composición visual alterna mediante grid, no `order` que contradiga DOM.
- Navegación completa por teclado: menú, project rows, tabs/acordeón, CTAs y enlaces.
- Escape cierra overlays; el foco retorna al disparador.
- Zoom al 200% sin pérdida; reflow a 320 CSS px sin scroll horizontal, salvo media explícitamente desplazable con instrucciones.
- No depender solo de color. Active/current incluye borde, texto o forma.
- `prefers-reduced-motion` cubre GSAP, Lenis, Motion y CSS, no solo una capa.
- `prefers-contrast: more` refuerza `--color-line` a `--color-line-strong` y elimina transparencias no esenciales.
- Copy comprensible, links descriptivos y errores identificados en texto.

### 7.3 Contenido y medios

- Ningún texto crítico dentro de imágenes o SVG decorativo.
- Covers en AVIF/WebP con fallback; dimensiones y `sizes` precisos.
- El primer cover visible puede usar prioridad solo si realmente es LCP. Resto lazy-load.
- No autoplay de video. Preview de video requiere control y poster.
- No stock. Hasta disponer de activos reales, usar superficies tipográficas claramente marcadas como provisionales.

### 7.4 SEO

- Metadata por ruta: `title`, `description`, canonical, Open Graph y Twitter card usando tokens provisionales.
- JSON-LD `Person` y `CreativeWork` solo con datos reales verificados.
- Slugs legibles, headings descriptivos y enlaces rastreables sin depender de JS.
- Sitemap, robots y favicon/manifest propios en implementación; no se diseñan aquí activos inexistentes.
- Copy visible y específico: rol, disciplinas, contexto del proyecto y resultados. Evitar frases genéricas de SaaS.

### 7.5 Presupuesto de rendimiento

- Objetivo posterior: Lighthouse 100 en Performance, Accessibility, Best Practices y SEO, móvil y desktop, mediana de 3–5 corridas en build de producción.
- JavaScript inicial de cliente: objetivo ≤170 KB gzip para home; GSAP, Lenis y Motion se importan solo donde tengan dueño claro.
- CLS ≤0.05; LCP ≤2.5 s en red móvil de referencia; INP ≤200 ms.
- Reservar ratios de media, autoalojar/subsetear Syne e IBM Plex Mono, `font-display: swap` y preload solo de pesos críticos.
- Los stickers son SVG/CSS, no imágenes pesadas.
- El cursor usa un único loop RAF y no provoca renders React por frame.
- ScrollTrigger se registra y limpia por alcance; no quedan listeners al cambiar de ruta.

### 7.6 Matriz mínima de pruebas posterior

- Viewports: 375×812, 768×1024, 1280×800 y 1440×900.
- Teclado completo, lector de pantalla, zoom 200%, reduced motion, high contrast y puntero táctil.
- Estados: menú abierto/cerrado, project hover/focus/touch, marquee pausado, skill seleccionado, CTA focus/pressed, media fallida.
- Navegadores: Chromium, Firefox y Safari/WebKit actuales.
- No afirmar fidelidad ni QA visual hasta ejecutar comparación real en navegador.

---

## 8. Criterios de aceptación, deuda y handoff

### 8.1 Checklist de implementación

- [ ] Cada color usa un token de la sección 2; no hay hex/rgb visuales ad hoc.
- [ ] Cada separación usa la escala de 4 px; no hay márgenes o paddings arbitrarios.
- [ ] Solo se cargan Syne e IBM Plex Mono.
- [ ] Desktop usa 12 columnas, tablet 8 y móvil 4.
- [ ] Las 4–6 piezas de proyecto usan `ProjectIndex`/`ProjectCard`, no estructuras distintas por pieza.
- [ ] Header, CTA animado, marquee, headings, proyectos, casos, skills, timeline, stickers y cursor implementan todos sus estados definidos.
- [ ] La asimetría mantiene al menos una alineación de retícula por bloque.
- [ ] Los stickers son originales y no dispersan decoración.
- [ ] GSAP, Lenis, Motion y CSS respetan la propiedad asignada.
- [ ] Reduced motion elimina desplazamientos no esenciales y mantiene contenido completo.
- [ ] Cursor personalizado solo aparece con puntero fino en desktop.
- [ ] Contenido crítico es HTML visible y semántico.
- [ ] WCAG 2.2 AA se verifica, no se asume.
- [ ] No hay gradiente genérico de hero, 3D, WebGL, stock, emojis ni segundo acento.
- [ ] Todos los tokens `{{...}}` se sustituyen por contenido real o permanecen inequívocamente etiquetados como provisionales antes de publicar.

### 8.2 Criterios de crítica visual

La pantalla falla si:

- Parece una cuadrícula de cards SaaS intercambiables.
- El azul aparece en todos los bloques y pierde función.
- La ornamentación compite con títulos o proyectos.
- La composición es simétrica de forma automática en todas las secciones.
- Hay grandes áreas vacías sin intención editorial o densidad sin respiración.
- Las animaciones se perciben como demo técnica en vez de feedback.
- Móvil elimina casos, skills o trayectoria en lugar de recomponerlos.

La pantalla pasa si:

- Se entiende quién es `{{NOMBRE}}`, qué hace y cómo contactarle en menos de diez segundos.
- Los proyectos dominan la memoria visual.
- Tipografía, reglas, numeración y espacio crean una publicación coherente.
- Los detalles lúdicos parecen una familia diseñada, no decoración aleatoria.
- Los estados de teclado y touch son tan completos como hover.

### 8.3 Personas de validación

- **Reclutador/a con 60 segundos:** debe identificar rol, seniority aproximado, 2–3 proyectos relevantes, experiencia y contacto sin explorar interacciones ocultas.
- **Lead de diseño/desarrollo:** debe encontrar contexto, contribución, proceso y resultados, y distinguir trabajo real de habilidad declarada.
- **Visitante con baja visión o movilidad reducida:** debe navegar, leer y contactar con zoom, teclado, foco visible y reduced motion sin perder contenido.
- **Visitante móvil con red lenta:** debe recibir jerarquía, texto y proyectos antes que ornamentación o librerías de movimiento.

### 8.4 Deuda aceptada antes de implementación

- Los textos, proyectos, métricas, fechas, enlaces y medios son provisionales mediante tokens; no se consideran contenido publicable.
- No existe aún referencia visual renderizada para comparación pixel a pixel; este documento define la referencia contractual.
- Los valores de contraste deben confirmarse con herramienta durante implementación, aunque fueron elegidos con intención AA.
- Los presupuestos de rendimiento son objetivos y requieren medición en build real.
- El soporte exacto de `subgrid` debe verificarse; el fallback debe preservar los spans definidos.

No se acepta como deuda:

- Falta de navegación por teclado.
- Texto oculto por animación.
- Estados focus incompletos.
- Un segundo acento visual.
- Hardcodes fuera del sistema.
- Eliminación de contenido en móvil.

### 8.5 Entregables de handoff

La implementación debe entregar:

1. Mapa de tokens de este documento a Tailwind/CSS variables, sin duplicados.
2. Primitivas documentadas con variantes y estados.
3. Rutas y contenido real sustituyendo tokens provisionales.
4. Evidencia responsive en 375, 768 y 1280 px como mínimo.
5. Evidencia de teclado, reduced motion y contraste WCAG 2.2 AA.
6. Auditoría de producción de rendimiento/SEO/accesibilidad.
7. Registro de cualquier ampliación de este contrato antes de usarla en componentes.

### 8.6 Regla final de gobierno

`DESIGN.md` precede al código. Si una decisión visual no está aquí, no se improvisa en un componente. Se propone el token, primitiva, estado o regla nueva, se documenta y solo después se implementa.
