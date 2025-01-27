import { Injectable } from "@angular/core";

export interface ProjectData {
  projectName: string;
  type: string;
  completionDate: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getDashboardData(): { title: string; value: number }[] {
    return [
      { title: "Total Serviços", value: 10 },
      { title: "Total Funcionários", value: 20 },
      { title: "Total Clientes", value: 5 },
    ];
  }

  getProjectData(): ProjectData[] {
    return [
      {
        projectName: "Construção do Edifício Central",
        type: "Obra",
        completionDate: new Date("2025-05-01"),
      },
      {
        projectName: "Manutenção de EPI para Obras",
        type: "EPI",
        completionDate: new Date("2025-03-15"),
      },
      {
        projectName: "Reforma do Prédio Industrial",
        type: "Obra",
        completionDate: new Date("2025-08-20"),
      },
      {
        projectName: "Distribuição de Capacetes de Segurança",
        type: "EPI",
        completionDate: new Date("2025-04-10"),
      },
      {
        projectName: "Construção da Ponte Norte",
        type: "Obra",
        completionDate: new Date("2026-01-30"),
      },
      {
        projectName: "Auditoria e Inspeção de EPIs",
        type: "EPI",
        completionDate: new Date("2025-02-28"),
      },
    ];
  }
}
