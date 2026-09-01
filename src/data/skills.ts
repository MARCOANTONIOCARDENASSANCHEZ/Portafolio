import type { Skill } from "./types"
import { PROVISIONAL_STATUS } from "./types"

export const skills = [
  {
    status: PROVISIONAL_STATUS,
    id: "dotnet",
    label: ".NET y C#",
    level: "Nivel por confirmar",
    description:
      "Desarrollo de software con .NET Framework y fundamentos de programación en C y C#.",
    methods: [".NET Framework", "C#", "Programación en C"],
    evidence: "Experiencia: Market & Share IT · detalles por confirmar",
  },
  {
    status: PROVISIONAL_STATUS,
    id: "web",
    label: "Desarrollo web",
    level: "Nivel por confirmar",
    description:
      "Construcción de sitios y dashboards responsivos orientados a necesidades de pequeños negocios.",
    methods: ["HTML5 y CSS", "JavaScript", "Bootstrap y MVC"],
    evidence: "Evidencia: sitio y dashboard para Climer",
  },
  {
    status: PROVISIONAL_STATUS,
    id: "datos",
    label: "Datos y sistemas",
    level: "Nivel por confirmar",
    description:
      "Implementación de operaciones CRUD y sistemas de punto de venta conectados a bases de datos.",
    methods: ["PHP", "MySQL", "CRUD y punto de venta"],
    evidence: "Evidencia: sistema de ventas para Climer",
  },
  {
    status: PROVISIONAL_STATUS,
    id: "flujo",
    label: "Flujo técnico",
    level: "Nivel por confirmar",
    description:
      "Uso documentado de control de versiones y fundamentos de redes y soporte informático.",
    methods: ["GitFlow", "Redes", "Soporte informático"],
    evidence: "Formación y experiencia documentadas en CV",
  },
] as const satisfies readonly Skill[]
