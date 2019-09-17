export /*added export here */ class FeierabendBier /*()*/ {
  static /*added static here*/ beerType = ['beer', 'radler', 'nonAlcoholic'];
  studentName = 'Fabian';
  outstandingExams = 0;
  startTime = '16:00';
  date = '20.09.2019';
  response: Array<{beertype: string, name: string}> = [];
  constructor() {
    if (this.isLastExamWritten()) {
      this.sendInvite();
    }
  }
  private sendInvite() {
    console.log('Sie haben eine Einladung für den ' + this.date + ' '
      + this.startTime);
    console.log(' auf ein Feierabendbier erhalten');
    console.log('Anlass:' + this.outstandingExams + ' offene Klausuren von ' + this.studentName);
    console.log('Rückmeldungen werden über die function "sendResponse" angenommen');
  }
  public sendResponse(beerType: string, name: string) {
    this.response.push({beertype: beerType, name}); // added a semicolon here
    console.log('Vielen Dank für deine Rückmeldung ' + name);
  }
  private isLastExamWritten(): boolean {
    return this.outstandingExams === 0;
  }
}
