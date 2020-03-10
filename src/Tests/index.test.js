describe('LinkedList Homework', () => {
    describe('LinkedList', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList);
        })
    });

    describe('LinkedList.init', () => {

        it('LinkedList init should be defined', () => {
            const lList = new LinkedList();
            assert.isDefined(lList.init, 'function has been defined')
        })

        it('init array [1, 2, 3]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            const arrayLength = 3;
            lList.init(array);
            
            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        })

        it('init array [1, 2]', () => {
            const lList = new LinkedList();
            const array = [1, 2];
            const arrayLength = 2;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        })

        it('init array [1]', () => {
            const lList = new LinkedList();
            const array = [1];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array []', () => {
            const lList = new LinkedList();
            const array = [];
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array [\'javascript\']', () => {
            const lList = new LinkedList();
            const array = ['javascript'];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array [undefined]', () => {
            const lList = new LinkedList();
            const array = [undefined];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array [null]', () => {
            const lList = new LinkedList();
            const array = [null];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array undefined', () => {
            const lList = new LinkedList();
            const array = undefined;
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array null', () => {
            const lList = new LinkedList();
            const array = null;
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });
    });

    describe('LinkedList.addElmAtStart', () => {
        const lList = new LinkedList();

        it('should be defined',() => {
            assert.isDefined(lList.addElmAtStart, 'function has been defined')
        })
        it('should return [5, 2, 3, 4]', () => {
            const lList = new LinkedList();
            const array = [2, 3, 4];
            const element = 5;
            const expectedArray = [5, 2, 3, 4]
            const expectedLength = 4;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.tooArray(), expectedArray)
        })
        it('should return [ 2, 3, 4]', () => {
            const lList = new LinkedList();
            const array = [3, 4];
            const element = 2;
            const expectedArray = [2, 3, 4]
            const expectedLength = 3;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.tooArray(), expectedArray)
        })
        it('should return [ 0, 3, 4]', () => {
            const lList = new LinkedList();
            const array = [3, 4];
            const element = 0;
            const expectedArray = [0, 3, 4]
            const expectedLength = 3;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.tooArray(), expectedArray)
        })
        it('should return [PHP , 3, 4]', () => {
            const lList = new LinkedList();
            const array = [3, 4];
            const element = 'PHP';
            const expectedArray = ['PHP', 3, 4]
            const expectedLength = 3;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.tooArray(), expectedArray)
        })
        it('should return [ undefined, 4]', () => {
            const lList = new LinkedList();
            const array = [4];
            const element = undefined;
            const expectedArray = [undefined, 4]
            const expectedLength = 2;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.tooArray(), expectedArray)
        })
        it('should return [ null, 4]', () => {
            const lList = new LinkedList();
            const array = [4];
            const element = null;
            const expectedArray = [null, 4]
            const expectedLength = 2;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.tooArray(), expectedArray)
        })
        
        
        

        
        
    });

    describe('LinkedList.tooArray', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.tooArray,'function has been defined' )
        })
    });
    
    describe('LinkedList.clear', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.clear, 'function has been defined')
        })
        // it('should return []', () => {
        //     const lList = new LinkedList();
        //     const array = [1];
        //     const expectedArray = [];
        //     const expectedLength = 0;
        //     lList.init(array);

        //     const actual = lList.clear();

        //     assert.deepEqual(lList.getSizeOfList(), expectedLength);
        //     assert.deepEqual(actual, expectedArray);            
        // })

        // it('should return []', () => {
        //     const lList = new LinkedList();
        //     const array = [1, 2];
        //     const expectedArray = [];
        //     const expectedLength = 0;
        //     lList.init(array);

        //     const actual = lList.clear();

        //     assert.deepEqual(actual, expectedLength);
        //     assert.deepEqual(lList.tooArray(), expectedArray);            
        // })
        
    });

    describe('LinkedList.toString', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.toString,'function has been defined' )
        })
    });

    describe('LinkedList.getSizeOfList', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.getSizeOfList, 'function has been defined')
        });

        it('should show the size of the list', () => {
            const lList = new LinkedList();
            const array = [3, 4, 5, 6];
            const expArray = [3, 4, 5, 6];
            const expArrayLength = 4;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.tooArray(), expArray);
        });

        it('should show the size of the list', () => {
            const lList = new LinkedList();
            const array = [3, 4, 5];
            const expArray = [3, 4, 5];
            const expArrayLength = 3;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.tooArray(), expArray);
        });

        it('should show the size of the list', () => {
            const lList = new LinkedList();
            const array = [3, 4];
            const expArray = [3, 4];
            const expArrayLength = 2;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.tooArray(), expArray);
        });

        it('should show the size of the list', () => {
            const lList = new LinkedList();
            const array = [3];
            const expArray = [3];
            const expArrayLength = 1;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.tooArray(), expArray);
        });

        it('should show the size of the list', () => {
            const lList = new LinkedList();
            const array = [];
            const expArray = [];
            const expArrayLength = 0;
            lList.init(array);
            
            const actual = lList.getSizeOfList();
            
            assert.deepEqual(actual, expArrayLength);
            assert.deepEqual(lList.tooArray(), expArray);
        });
    });

    describe('LinkedList.delFirstElm', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.delFirstElm, 'function has been defined')
        })
        it('should return [2, 3, 4]', () => {
            const lList = new LinkedList();
            const array = [5, 2, 3, 4];
            const expectedArray = [2, 3, 4]
            const expectedLength = 3;
            const expectedElm = 5;
            lList.init(array);

            const actual = lList.delFirstElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
        it('should return [3, 4]', () => {
            const lList = new LinkedList();
            const array = [2, 3, 4];
            const expectedArray = [3, 4]
            const expectedLength = 2;
            const expectedElm = 2;
            lList.init(array);

            const actual = lList.delFirstElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
        it('should return [4]', () => {
            const lList = new LinkedList();
            const array = [3, 4];
            const expectedArray = [4]
            const expectedLength = 1;
            const expectedElm = 3;
            lList.init(array);

            const actual = lList.delFirstElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
        it('should return [3, 4]', () => {
            const lList = new LinkedList();
            const array = ['PHP', 3, 4];
            const expectedArray = [3, 4]
            const expectedLength = 2;
            const expectedElm = 'PHP';
            lList.init(array);

            const actual = lList.delFirstElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
        it('should return [3, 4]', () => {
            const lList = new LinkedList();
            const array = [undefined, 3, 4];
            const expectedArray = [3, 4]
            const expectedLength = 2;
            const expectedElm = undefined;
            lList.init(array);

            const actual = lList.delFirstElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
        it('should return [3, 4]', () => {
            const lList = new LinkedList();
            const array = [null, 3, 4];
            const expectedArray = [3, 4]
            const expectedLength = 2;
            const expectedElm = null;
            lList.init(array);

            const actual = lList.delFirstElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
        
    });

    describe('LinkedList.delLastElm', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.delLastElm,'function has been defined')
        })
        it('should return [5, 2, 3]', () => {
            const lList = new LinkedList();
            const array = [5, 2, 3, 4];
            const expectedArray = [5, 2, 3]
            const expectedLength = 3;
            const expectedElm = 4;
            lList.init(array);

            const actual = lList.delLastElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
        it('should return [5, 2]', () => {
            const lList = new LinkedList();
            const array = [5, 2, 3];
            const expectedArray = [5, 2]
            const expectedLength = 2;
            const expectedElm = 3;
            lList.init(array);

            const actual = lList.delLastElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
        it('should return [5]', () => {
            const lList = new LinkedList();
            const array = [5, 2];
            const expectedArray = [5]
            const expectedLength = 1;
            const expectedElm = 2;
            lList.init(array);

            const actual = lList.delLastElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
        it('should return ["JavaScript", "is", "awesome"]', () => {
            const lList = new LinkedList();
            const array = ["JavaScript", "is", "awesome"];
            const expectedArray = ["JavaScript", "is"]
            const expectedLength = 2;
            const expectedElm = "awesome";
            lList.init(array);

            const actual = lList.delLastElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })

        it('should return ["JavaScript", "is", "awesome", undefined]', () => {
            const lList = new LinkedList();
            const array = ["JavaScript", "is", "awesome", undefined];
            const expectedArray = ["JavaScript", "is", "awesome"]
            const expectedLength = 3;
            const expectedElm = undefined;
            lList.init(array);

            const actual = lList.delLastElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })

        it('should return ["JavaScript", "is", "awesome", null]', () => {
            const lList = new LinkedList();
            const array = ["JavaScript", "is", "awesome", null];
            const expectedArray = ["JavaScript", "is", "awesome"]
            const expectedLength = 3;
            const expectedElm = null;
            lList.init(array);

            const actual = lList.delLastElm();

            assert.deepEqual(actual, expectedElm);
            assert.deepEqual(lList.tooArray(), expectedArray)
            assert.deepEqual(lList.getSizeOfList(), expectedLength)
        })
    });
    describe('LinkedList.addElmToEnd', () => {
        const lList = new LinkedList();

        it('should be defined', () => {
            assert.isDefined(lList.addElmToEnd,'function has been defined')
        })
        it('should return [1, 2, 3, 4]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            const expectedLength = 4;
            const element = 4;
            lList.init(array);

            const actual = lList.addElmToEnd(element);

            assert.deepEqual(actual, expectedLength)
        })
        it('should return [1, 2, 3, undefined]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            const expectedLength = 4;
            const element = undefined;
            lList.init(array);

            const actual = lList.addElmToEnd(element);

            assert.deepEqual(actual, expectedLength)
        })
        it('should return [1, 2, 3, null]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            const expectedLength = 4;
            const element = null;
            lList.init(array);

            const actual = lList.addElmToEnd(element);

            assert.deepEqual(actual, expectedLength)
        })
        it('should return [1, 2, 3, "Phyton"]', () => {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            const expectedLength = 4;
            const element = "Phyton";
            lList.init(array);

            const actual = lList.addElmToEnd(element);

            assert.deepEqual(actual, expectedLength)
        })

    });
});