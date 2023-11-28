export enum DoorStates {
    closed,
    open
}
export type DoorState = DoorStates;

export class OneHundredDoors {
    private rowOfDoors: DoorState[] = [];

    constructor() {
        for (let i = 0; i < 100; i++) {
            this.rowOfDoors[i] = DoorStates.closed;
        }
    }
    
    public readDoorState(doorPosition: number) {
        return this.rowOfDoors[doorPosition - 1];
    }

    public toggleDoorState(doorPosition: number): void {
        if (doorPosition > 100 || doorPosition < 1) {
            throw new Error('doorPosition out of range');
        }
        if (this.rowOfDoors[doorPosition - 1] === DoorStates.closed) {
            this.rowOfDoors[doorPosition - 1] = DoorStates.open;
            return;
        }
        if (this.rowOfDoors[doorPosition - 1] === DoorStates.open) {
            this.rowOfDoors[doorPosition - 1] = DoorStates.closed;
            return;
        }
    }

    public iterate(numOfPasses: number): void {
        if (numOfPasses > 100 || numOfPasses < 1) {
            throw new Error('doorPosition out of range');
        }

        for (let i = 1; i <= numOfPasses; i++) {
            this.toggleEveryNthDoor(i);
        }
    }

    private toggleEveryNthDoor(n: number) {
        for (let i = 1; i <= 100; i++) {
            if ( i % n === 0) {
                this.toggleDoorState(i);
            }
        }
    }
}