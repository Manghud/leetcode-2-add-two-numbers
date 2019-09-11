const addTwoNumbers = require ('./index');

describe('addTwoNumbers', () => {
  it('should be be a function', () => {
    expect(typeof addTwoNumbers).toEqual('function');
  });
  describe('return value', () => {
    let l1;
    let l2;
    describe('on two single level lists', () => {
      beforeEach(() => {
        l1 = {
          val: 1,
          next: null
        };
        l2 = {
          val: 7,
          next: null
        };
      });
      it('should return the reverse order linked list representation of the sum of the number representation of the reverse ordered linked list parameters', () => {
        expect(addTwoNumbers(l1, l2)).toEqual(expect.objectContaining({
          val: 8,
          next: null
        }));
      });
    });
    describe('on multilevel list with single level list', () => {
      beforeEach(() => {
        l1 = {
          val: 1,
          next: {
            val: 2,
          }
        };
        l2 = {
          val: 7,
          next: null
        };
      });
      it('should add first level from l1 to first level with list 2', () => {
        expect(addTwoNumbers(l1, l2)).toEqual(expect.objectContaining({
          val: 8,
          next: {
            val: 2,
            next: null
          }
        }));
      });
      it('should add first level from l2 to first level with list 1', () => {
        expect(addTwoNumbers(l2, l1)).toEqual(expect.objectContaining({
          val: 8,
          next: {
            val: 2,
            next: null
          }
        }));
      });
    });
    describe('on two multilevel lists', () => {
      beforeEach(() => {
        l1 = {
          val: 1,
          next: {
            val: 2,
            next: {
              val: 3,
              next: null
            }
          }
        };
        l2 = {
          val: 7,
          next: {
            val: 5,
            next: null
          }
        };
      });
      test('should add corresponding levels from l1 and l2', () => {
        expect(addTwoNumbers(l2, l1)).toEqual(expect.objectContaining({
          val: 8,
          next: {
            val: 7,
            next: {
              val: 3,
              next: null
            }
          }
        }));
      });
    });
    describe('on corresponding levels whose sum is larger than 9', () => {
      beforeEach(() => {
        l1 = {
          val: 9,
          next: {
            val: 2,
            next: {
              val: 3,
              next: {
                val: 9,
                next: null
              }
            }
          }
        };
        l2 = {
          val: 7,
          next: {
            val: 5,
            next: {
              val: 9,
              next: null
            }
          }
        };
      });
      test('should add carry to next level', () => {
        expect(addTwoNumbers(l2, l1)).toEqual(expect.objectContaining({
          val: 6,
          next: {
            val: 8,
            next: {
              val: expect.anything(),
              next: expect.anything()
            }
          }
        }));
      });
      test('should add carry to next level recursively', () => {
        expect(addTwoNumbers(l2, l1)).toEqual(expect.objectContaining({
          val: 6,
          next: {
            val: 8,
            next: {
              val: 2,
              next: {
                val: 0,
                next: {
                  val: 1
                }
              }
            }
          }
        }));
      });
    });
  });
});