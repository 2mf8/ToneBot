export class IdGenerator {
  static globalId = 0;

  static generateId(): number {
    return this.globalId++;
  }

  static generateStrId(): string {
    return this.generateId().toString()
  }
}
