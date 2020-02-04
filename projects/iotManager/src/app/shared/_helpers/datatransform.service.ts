import { LOCALE_ID, Inject } from '@angular/core';
import { formatDate } from '@angular/common';

export class DataTransformService {
  constructor(@Inject(LOCALE_ID) public locale: string) {}

  formatFrom = 'dd/MM/yyyy 12:00 a';
  formatTo = 'dd/MM/yyyy HH:mm a';
  diff: number;
  date = new Date();
  year = this.date.getFullYear();
  month = this.date.getMonth();
  day = this.date.getDate();
  private outputDate: string;

  firstDay = formatDate(
    new Date(this.year, this.month, 1),
    this.formatFrom,
    this.locale
  );
  days7 = formatDate(
    new Date(this.year, this.month, this.day - 7),
    this.formatFrom,
    this.locale
  );
  days30 = formatDate(
    new Date(this.year, this.month, this.day - 30),
    this.formatFrom,
    this.locale
  );

  startDayWeek = formatDate(
    this.startOfWeek(this.date).toString(),
    this.formatFrom,
    this.locale
  );
  formattedDate = formatDate(new Date(), this.formatTo, this.locale);

  startOfWeek(date: Date) {
    this.diff =
      this.date.getDate() -
      this.date.getDay() +
      (this.date.getDay() === 0 ? -6 : 1);
    return new Date(this.date.setDate(this.diff));
  }

  getRequestDateTranformed(date: string) {
    switch (date) {
      case 'week':
        this.outputDate = `${this.startDayWeek} - ${this.formattedDate}`;
        break;
      case 'month':
        this.outputDate = `${this.firstDay} - ${this.formattedDate}`;
        break;
      case 'last7':
        this.outputDate = `${this.days7} - ${this.formattedDate}`;
        break;
      case 'last30':
        this.outputDate = `${this.days30} - ${this.formattedDate}`;
        break;
      default:
        this.outputDate = `${this.days30} - ${this.formattedDate}`;
        break;
    }
    return this.outputDate;
  }
}
