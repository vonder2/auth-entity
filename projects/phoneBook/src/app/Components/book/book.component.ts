import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DataStoreService} from '../../Services/dataStore.service';

import {MatDialog} from '@angular/material/dialog';
import {EditFormComponent} from '../edit-form/edit-form.component';
import {Contact} from '../../Classes/contact';
import {ApplicationService} from '../../Services/application.service';
import {forkJoin} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  animations: [
    trigger('detailExpand', [
        state('collapsed', style({height: '0px', minHeight: '0'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})


export class BookComponent implements OnInit{

  displayedColumns = ['select', 'name', 'lastName', 'email'];
  dataSource: MatTableDataSource<Contact>;

  selection = new SelectionModel<Contact>(true, []);

  @Output() outputVar = new EventEmitter();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private readonly token: string;
  isLoadingResults = true;
  expandedElement: any;

  constructor(private dataStore: DataStoreService, private appService: ApplicationService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(); // Assign the data to the data source for the table to render
    this.token = window.sessionStorage.getItem('phoneBookToken'); // read from session cookie
  }

  ngOnInit() {
    if (!this.token)
    {
      this.outputVar.emit('auth');
      return;
    }

    // subscribe to data
    this.dataStore.dataSubject.subscribe((contactsObj) => {
      if (contactsObj) {
        // console.table(contactsObj.contacts);
        this.dataSource = new MatTableDataSource(contactsObj.contacts);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoadingResults = false;

        console.log('Data loaded..');
      }
      else
      {
        // no data in dataStore
        this.dataSource = new MatTableDataSource([new Contact('Loading...')]);
        this.refresh();
      }

      this.dataSource.filterPredicate = this.filterSettings;
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {

    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;

    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Contact): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


  filterSettings(data, filterStr): boolean
  {
    return data.name.toLowerCase().startsWith(filterStr);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '250px',
      restoreFocus: false,
      data: this.selection.selected[0]
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(editedContact => {
      console.log('The dialog was closed');

      if (editedContact)
      {
        this.isLoadingResults = true;
        this.appService.editContact(editedContact).subscribe(editResult =>
        {
          console.table(editResult);
          this.refresh();
        });

      }
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '250px',
      restoreFocus: false,
      autoFocus: false
      // data: this.selection.selected[0]
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log('The dialog was closed');

      if (dialogResult)
      {
        this.isLoadingResults = true;
        this.appService.addContact(dialogResult).subscribe(addResult =>
        {
          console.table(addResult);
          this.refresh();
        });
      }

    });
  }

  removeUser() {
    this.isLoadingResults = true;
    const requestResultArr = [];
    this.selection.selected.forEach(item => {
      requestResultArr.push(this.appService.removeContact(item.id));
    });

    forkJoin(requestResultArr).subscribe(removeResult => {
      console.log('Remove result:');
      console.log(removeResult);
      this.refresh();
    });
  }

  refresh()
  {
    this.isLoadingResults = true;
    this.appService.getAllContacts().subscribe(resultData =>
    {
      this.dataStore.dataSubject.next(resultData);
      // move to the first page
      if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
      this.selection.clear();
    });
  }

  logout() {
    window.sessionStorage.removeItem('phoneBookToken');
    this.outputVar.emit('auth');
  }
}

