export class GradeSchool {
  private schoolGrade: any = {}
  
  roster() {
    return JSON.parse(JSON.stringify(this.schoolGrade));
  }

  add(name: string, grade: number): void {
      this.filterName(name);
    
      let grades: string[] = this.schoolGrade[grade] || [];
      grades.push(name);
      grades.sort();
      this.schoolGrade[grade] = grades;
  }

  grade(grade: number): string[] {
    return this.roster()[grade] || [];
  }

  private filterName(nameSearch: string) {
    for (let key of Object.keys(this.schoolGrade)) {
      this.schoolGrade[parseInt(key)] = this.schoolGrade[parseInt(key)].filter(
        (name: string) => name !== nameSearch
      );
    }
  }
}
