const { 
  temperatures, 
  tempTotalNRF, 
  tempTotalARF, 
  tempTotalNAF,
  tempTotalAAF, 
  tempAvgNRF,
  people,
  peopleNamesAAF,
  peopleNamesNAF,
  peopleNamesARF,
  peopleNamesNRF,
  suits,
  pips,
  deck4a,
  deck5a,
  gradeDistribution
  } = require('./array.for-each.exercise');

  let _avg;
  beforeEach(() => {
    _avg = 0;
  });

  let avg = (arr) => {
    let total = arr.reduce((accumulator, num) => accumulator + num);
    return total/arr.length;
  }
  

describe('array.for-each.exercise', () => {
  it('⇨ temperatures should have 10 elements', () => {
    expect(temperatures.length).toBe(10);
  }),
  it('⇨ tempTotalNRF should equal sum of temperatures', () => {
    expect(tempTotalNRF).toBe(temperatures.reduce( (accumulator, temp) => accumulator + temp));
  }),
  it('⇨ tempTotalARF should equal sum of temperatures', () => {
    expect(tempTotalARF).toBe(temperatures.reduce((accumulator, temp) => accumulator + temp));
  }),
  it('⇨ tempTotalNAF should equal sum of temperatures', () => {
    expect(tempTotalNAF).toBe(temperatures.reduce((accumulator, temp) => accumulator + temp));
  }),
  it('⇨ tempTotalAAF should equal sum of temperatures', () => {
    expect(tempTotalAAF).toBe(temperatures.reduce((accumulator, temp) => accumulator + temp));
  }),
  it('⇨ tempAvgNRF should equal avg of temperatures', () => {
    expect(tempAvgNRF).toBe(avg(temperatures));
  }),
  it('⇨ people should have 5 elements', () => {
    expect(people.length).toBe(5);
  }),
  it('⇨ people elements should have a firstName and lastName property', () => {
    people.forEach( (obj) => {
      expect(obj.hasOwnProperty('firstName'));
    });
  }),
  it('⇨ people firstName and lastName properties should not be blank', () => {
    people.forEach( (obj) => {
      expect(obj.firstName.length).toBeGreaterThan(0);
      expect(obj.lastName.length).toBeGreaterThan(0);
      
    });
  }),
  it('⇨ peopleNamesAAF should all be strings and not be blank', () => {
    peopleNamesAAF.forEach( (name) => {
      expect(typeof(name)).toBe('string');
      expect(name.length).toBeGreaterThan(0);
    });
  }),
  it('⇨ peopleNamesNAF should accurately be the first and last names of the people array', () => {
    peopleNamesNAF.forEach( (name, index) => {
      expect(name).toBe(`${people[index].firstName} ${people[index].lastName}`);
    });
  }),
  it('⇨ peopleNamesARF should accurately be the first and last names of the people array', () => {
    peopleNamesARF.forEach( (name, index) => {
      expect(name).toBe(`${people[index].firstName} ${people[index].lastName}`);
    });
  }),
  it('⇨ peopleNamesNRF should accurately be the first and last names of the people array', () => {
    peopleNamesNRF.forEach( (name, index) => {
      expect(name).toBe(`${people[index].firstName} ${people[index].lastName}`);
    });
  }),
  it('⇨ suits should have Clubs, Diamonds, Hearts, and Spades only', () => {
    expect(suits.length).toBe(4);
    expect(suits).toContain('Clubs');
    expect(suits).toContain('Diamonds');
    expect(suits).toContain('Hearts');
    expect(suits).toContain('Spades');
  }),
  it('⇨ pips should have Two thru Ace only', () => {
    expect(pips.length).toBe(13);
    let arr = ["Two", "Three", "Four",  "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
    arr.forEach( (pip) => {
      expect(pips).toContain(pip);
    });
  }),
  it('⇨ deck4a should have a normal set of playing cards only', () => {
    expect(deck4a.length).toBe(52);
    pips.forEach( (pip) => {
      suits.forEach( (suit) => {
        expect(deck4a).toContain(`${pip} of ${suit}`);
      });
    });
  }),
  it('⇨ deck5a should have 52 objects, each with a pip and a suit representing a full deck', () => {
    expect(deck5a.length).toBe(52);
    pips.forEach( (pip) => {
      suits.forEach( (suit) => {
        expect(deck5a).toContainEqual({pip, suit});
      })
    })
  }),
  it('⇨ gradeDistribution should have 4 As', () => {
    expect(gradeDistribution['A']).toBe(4);
  }),
  it('⇨ gradeDistribution should have 4 Bs', () => {
    expect(gradeDistribution['B']).toBe(4);
  }),
  it('⇨ gradeDistribution should have 3 Cs', () => {
    expect(gradeDistribution['C']).toBe(3);
  }),
  it('⇨ gradeDistribution should have 2 Ds', () => {
    expect(gradeDistribution['D']).toBe(2);
  })

});










