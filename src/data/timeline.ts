import type { TimelineItem } from "./types"
import { PROVISIONAL_STATUS } from "./types"

export const timeline = [
  {
    status: PROVISIONAL_STATUS,
    date: "MAR 2023 — OCT 2025",
    dateTime: "2023/2025",
    role: "Desarrollador de software",
    organization: "Market & Share IT S.A. de C.V.",
    description:
      "Experiencia profesional en desarrollo de software. Responsabilidades y proyectos específicos pendientes de documentar.",
    current: false,
  },
  {
    status: PROVISIONAL_STATUS,
    date: "NOV 2021 — SEP 2022",
    dateTime: "2021/2022",
    role: "Programador freelance",
    organization: "Climer Aires Acondicionados",
    description:
      "Desarrollo de sitio promocional, dashboard responsivo y sistema de punto de venta con HTML5, PHP, CSS, JavaScript, Bootstrap, MVC y MySQL.",
    current: false,
  },
  {
    status: PROVISIONAL_STATUS,
    date: "SEP 2016 — JUL 2021",
    dateTime: "2016/2021",
    role: "Ingeniería en Sistemas Computacionales",
    organization: "Instituto Tecnológico Superior de Los Reyes",
    description: "232 de 260 créditos cursados, con especialidad en redes y diseño web móvil.",
    current: false,
  },
  {
    status: PROVISIONAL_STATUS,
    date: "NOV 2019",
    dateTime: "2019",
    role: "Segundo lugar nacional",
    organization: "Innovación social · institución por confirmar",
    description:
      "Reconocimiento documentado en el CV; nombre oficial del evento e institución pendientes de confirmar.",
    current: false,
  },
] as const satisfies readonly TimelineItem[]
