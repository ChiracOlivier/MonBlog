

export class Post {
  get title(): string {
    return this.tiTle;
  }
  get loveIts(): number {
    return this.loveits;
  }

  set loveIts(value: number) {
    this.loveits = value;
  }
  get content(): string {
    return this.conTent;
  }

  private tiTle: string;
  private conTent: string;
  private loveits: number;
  private createdat: Date;

  constructor(i: number) {
    if(i === 1) {
      this.tiTle = 'Mon 1er PostListItem';
    } else {
      this.tiTle = 'Mon ' + i + ' ème PostListItem';
    }
    this.conTent = 'Salut à tous et à toutes, soyez les bienvenus(es) sur mon blog en ce jour!!! ';
    this.loveits = 0;
    this.createdat = new Date();
  }


  get created_at(): Date {
    return this.createdat;
  }
}

