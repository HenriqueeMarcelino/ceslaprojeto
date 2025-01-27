export class Projects {
  projectName: string;
  type: string;
  completionDate: Date;

  constructor(projectName: string, type: string, completionDate: Date) {
    this.projectName = projectName;
    this.type = type;
    this.completionDate = completionDate;
  }
}
