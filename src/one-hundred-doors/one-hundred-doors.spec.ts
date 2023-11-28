import { DoorStates, OneHundredDoors }  from './one-hundred-doors';

describe('100 Doors', () => {
    const oneHundredDoors = new OneHundredDoors();
    it('should be initialized to all doors closed', () => {
        for (let i = 1; i <= 100; i++) {
            const doorStatus = oneHundredDoors.readDoorState(i);
            expect(doorStatus).toEqual(DoorStates.closed);
        }
      });   
});

describe('OneHundredDoors toggle()', () => {
    it('should toggle a state of door 6 from closed to open', () => {
        const oneHundredDoors = new OneHundredDoors();

        oneHundredDoors.toggleDoorState(6);
        expect(oneHundredDoors.readDoorState(6)).toEqual(DoorStates.open);
      });

      it('should toggle a state of door 6 from open to closed', () => {
        const oneHundredDoors = new OneHundredDoors();

        oneHundredDoors.toggleDoorState(6);
        oneHundredDoors.toggleDoorState(6);
        expect(oneHundredDoors.readDoorState(6)).toEqual(DoorStates.closed);
      });
      
      it('should throw an error if doorPosition parameter is not in range > 100', () => {
        const oneHundredDoors = new OneHundredDoors();
        expect(() => { oneHundredDoors.toggleDoorState(101); }).toThrow('doorPosition out of range');
      });

      it('should throw an error if doorPosition parameter is not in range < 1', () => {
        const oneHundredDoors = new OneHundredDoors();
        expect(() => { oneHundredDoors.toggleDoorState(0); }).toThrow('doorPosition out of range');
      });
});

describe('OneHundredDoors iterate()', () => {
    it('should throw an error if numOfPasses is out of range > 100', () => {
        const oneHundredDoors = new OneHundredDoors();

        expect(() => { oneHundredDoors.iterate(101); }).toThrow('doorPosition out of range');        
    });

    it('should throw an error if numOfPasses is out of range < 1', () => {
        const oneHundredDoors = new OneHundredDoors();

        expect(() => { oneHundredDoors.iterate(0); }).toThrow('doorPosition out of range');        
    });

    it('should toggle all door states to open on first pass', () => {
        const oneHundredDoors = new OneHundredDoors();

        oneHundredDoors.iterate(1);
        for (let i = 1; i <= 100; i++) { 
            expect(oneHundredDoors.readDoorState(i)).toEqual(DoorStates.open);
        }
      });

      it('should result in odd doors being open and even doors being closed on second pass', () => {
        const oneHundredDoors = new OneHundredDoors();

        oneHundredDoors.iterate(2);

        for (let i = 1; i <= 100; i++) {
            if ( i % 2 === 0) { 
                expect(oneHundredDoors.readDoorState(i)).toEqual(DoorStates.closed);
            }
            else {
                expect(oneHundredDoors.readDoorState(i)).toEqual(DoorStates.open); 
            }
        }
      });

      it('should result in pattern of every 3rd door (door #3, #6, #9, ...), etc toggled doors on third pass', () => {
        const oneHundredDoors = new OneHundredDoors();

        oneHundredDoors.iterate(3);
        expect(oneHundredDoors.readDoorState(1)).toEqual(DoorStates.open); 
        expect(oneHundredDoors.readDoorState(2)).toEqual(DoorStates.closed); 
        expect(oneHundredDoors.readDoorState(3)).toEqual(DoorStates.closed);
        
        expect(oneHundredDoors.readDoorState(4)).toEqual(DoorStates.closed); 
        expect(oneHundredDoors.readDoorState(5)).toEqual(DoorStates.open); 
        expect(oneHundredDoors.readDoorState(6)).toEqual(DoorStates.open); 
        
      });

      it('should result in pattern of only these doors open 1,4,9,16,25,36,49,64,81,100 on one hundredth pass', () => {
        const oneHundredDoors = new OneHundredDoors();

        oneHundredDoors.iterate(100);
        expect(oneHundredDoors.readDoorState(1)).toEqual(DoorStates.open);
        expect(oneHundredDoors.readDoorState(4)).toEqual(DoorStates.open);
        expect(oneHundredDoors.readDoorState(9)).toEqual(DoorStates.open);
        expect(oneHundredDoors.readDoorState(16)).toEqual(DoorStates.open);
        expect(oneHundredDoors.readDoorState(25)).toEqual(DoorStates.open);
        expect(oneHundredDoors.readDoorState(36)).toEqual(DoorStates.open);
        expect(oneHundredDoors.readDoorState(49)).toEqual(DoorStates.open);
        expect(oneHundredDoors.readDoorState(64)).toEqual(DoorStates.open);
        expect(oneHundredDoors.readDoorState(81)).toEqual(DoorStates.open);
        expect(oneHundredDoors.readDoorState(100)).toEqual(DoorStates.open);        
      });

});

