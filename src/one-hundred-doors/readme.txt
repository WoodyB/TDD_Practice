100 doors in a row are all initially closed. You make 100 passes by the doors. The first time through,
you visit every door and toggle the door (if the door is closed, you open it; if it is open, you close it).
The second time you only visit every 2nd door (door #2, #4, #6, ...).
The third time, every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th door.

Question: What state are the doors in after the last pass? Which are open, which are closed?

[Source http://rosettacode.org]

My Notes:
100 doors could be represented in an array each element holding either an enum OPEN or closed
Looks like we need a method/function to toggle a door. Maybe method takes a door position, reads
current state then toggles it to the new state.
Seperation of concerns:
    * We will need a method/function to read the status of the doors
    * We will need some way to display the status of the 100 doors (maybe)
    * We need a toggle method/function
    * We need some sort of an iterator. Maybe you pass in the number of visits and it takes care of
      the toggles

Pass  Result
0     0,0,0 ... 0
1     1,1,1, ... 1
2     1,0,1,0,1,0,1,0,1 ... 0
3     1,0,0, 0,1,1, 1,0,0 ...
4     1,0,0,1 1,1,1,1