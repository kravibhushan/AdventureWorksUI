import { column } from "./column";

export class columnHeader {
    columnHdr: column[] = [];
    constructor(private columns: column[]) {
        this.columnHdr = columns;
    }
}