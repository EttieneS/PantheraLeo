export class Leave {
  constructor(
    public id: number,
    public name: string,
    public surnmae: string,
    public enddate: Date = new Date(),
    public startdate: Date = new Date(),
    public reason: string    
  ) {}
}
