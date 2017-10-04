describe("dated", function() {

  describe('Previous Saturdays', function() {
    const first = moment('2017-10-21');

    beforeEach(function() {
    });

    it("Saturday", function() {
      const last = moment('2017-10-21');
      const days = dated.workdays(first, last);
      expect(days).toEqual(0);
    });

    it("Friday", function() {
      const last = moment('2017-10-20');
      const days = dated.workdays(first, last);
      expect(days).toEqual(0);
    });

    it("Thursday", function() {
      const last = moment('2017-10-19');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-1);
    });

    it("Wednesday", function() {
      const last = moment('2017-10-18');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-2);
    });

    it("Tuesday", function() {
      const last = moment('2017-10-17');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-3);
    });

    it("Monday", function() {
      const last = moment('2017-10-16');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-4);
    });

    it("Sunday", function() {
      const last = moment('2017-10-15');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-5);
    });

    it("Saturday", function() {
      const last = moment('2017-10-14');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-5);
    });

    it("Friday", function() {
      const last = moment('2017-10-13');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-5);
    });
  });


  describe('Previous Wednesdays', function() {
    const first = moment('2017-10-18');

    beforeEach(function() {
    });

    it("Saturday", function() {
      const last = moment('2017-10-14');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-3);
    });

    it("Friday", function() {
      const last = moment('2017-10-13');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-3);
    });

    it("Thursday", function() {
      const last = moment('2017-10-12');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-4);
    });

    it("Wednesday", function() {
      const last = moment('2017-10-11');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-5);
    });

    it("Tuesday", function() {
      const last = moment('2017-10-10');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-6);
    });

    it("Monday", function() {
      const last = moment('2017-10-09');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-7);
    });

    it("Sunday", function() {
      const last = moment('2017-10-08');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-8);
    });

    it("Saturday", function() {
      const last = moment('2017-10-07');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-8);
    });

    it("Friday", function() {
      const last = moment('2017-10-06');
      const days = dated.workdays(first, last);
      expect(days).toEqual(-8);
    });
  });

  describe('Align Dates to Monday Boundary', function() {
    beforeEach(function() {
    });

    it("Monday", function() {
      const boundary = dated.getBoundary(moment('2017-10-02'));
      expect(boundary.moment.toDate()).toEqual(moment('2017-10-02').toDate());
    });

    it("Tuesday", function() {
      const boundary = dated.getBoundary(moment('2017-10-03'));
      expect(boundary.moment.toDate()).toEqual(moment('2017-10-02').toDate());
    });

    it("Wednesday", function() {
      const boundary = dated.getBoundary(moment('2017-10-04'));
      expect(boundary.moment.toDate()).toEqual(moment('2017-10-02').toDate());
    });

    it("Thursday", function() {
      const boundary = dated.getBoundary(moment('2017-10-05'));
      expect(boundary.moment.toDate()).toEqual(moment('2017-10-02').toDate());
    });

    it("Friday", function() {
      const boundary = dated.getBoundary(moment('2017-10-06'));
      expect(boundary.moment.toDate()).toEqual(moment('2017-10-02').toDate());
    });

    it("Saturday", function() {
      const boundary = dated.getBoundary(moment('2017-10-07'));
      expect(boundary.moment.toDate()).toEqual(moment('2017-10-02').toDate());
    });

    it("Sunday", function() {
      const boundary = dated.getBoundary(moment('2017-10-08'));
      expect(boundary.moment.toDate()).toEqual(moment('2017-10-09').toDate());
    });
    
    it("Monday Week", function() {
      const boundary = dated.getBoundary(moment('2017-10-09'));
      expect(boundary.moment.toDate()).toEqual(moment('2017-10-09').toDate());
    });
  });

  describe('Future Fridays', function() {
    beforeEach(function() {
    });

    it("Friday to Friday", function() {
      const first = moment('2017-09-29');
      const last = moment('2017-09-29');
      const days = dated.workdays(first, last);
      expect(days).toEqual(0);
    });

    it("Friday to Saturday", function() {
      const first = moment('2017-09-29');
      const last = moment('2017-09-30');
      const days = dated.workdays(first, last);
      expect(days).toEqual(0);
    });

    it("Friday to Sunday", function() {
      const first = moment('2017-09-29');
      const last = moment('2017-10-01');
      const days = dated.workdays(first, last);
      expect(days).toEqual(0);
    });

    it("Friday to Monday", function() {
      const first = moment('2017-09-29');
      const last = moment('2017-10-02');
      const days = dated.workdays(first, last);
      expect(days).toEqual(1);
    });

    it("Friday to Tuesday", function() {
      const first = moment('2017-09-29');
      const last = moment('2017-10-03');
      const days = dated.workdays(first, last);
      expect(days).toEqual(2);
    });

    it("Friday to Wednesday", function() {
      const first = moment('2017-09-29');
      const last = moment('2017-10-04');
      const days = dated.workdays(first, last);
      expect(days).toEqual(3);
    });    

    it("Friday to Thursday", function() {
      const first = moment('2017-09-29');
      const last = moment('2017-10-05');
      const days = dated.workdays(first, last);
      expect(days).toEqual(4);
    });    

    it("Friday to Next Friday", function() {
      const first = moment('2017-09-29');
      const last = moment('2017-10-06');
      const days = dated.workdays(first, last);
      expect(days).toEqual(5);
    });    

    it("Friday to Two Fridays Away", function() {
      const first = moment('2017-09-29');
      const last = moment('2017-10-13');
      const days = dated.workdays(first, last);
      expect(days).toEqual(10);
    });      
  });

  describe('Future Saturdays', function() {
    const first = moment('2017-10-07');

    beforeEach(function() {
    });

    it("Monday", function() {
      const last = moment('2017-10-09');
      const days = dated.workdays(first, last);
      expect(days).toEqual(1);
    });

    it("Tuesday", function() {
      const last = moment('2017-10-10');
      const days = dated.workdays(first, last);
      expect(days).toEqual(2);
    });

    it("Wednesday", function() {
      const last = moment('2017-10-11');
      const days = dated.workdays(first, last);
      expect(days).toEqual(3);
    });

    it("Thursday", function() {
      const last = moment('2017-10-12');
      const days = dated.workdays(first, last);
      expect(days).toEqual(4);
    });

    it("Friday", function() {
      const last = moment('2017-10-13');
      const days = dated.workdays(first, last);
      expect(days).toEqual(5);
    });

    it("Saturday", function() {
      const last = moment('2017-10-14');
      const days = dated.workdays(first, last);
      expect(days).toEqual(5);
    });

    it("Sunday", function() {
      const last = moment('2017-10-15');
      const days = dated.workdays(first, last);
      expect(days).toEqual(5);
    });

    it("Monday", function() {
      const last = moment('2017-10-16');
      const days = dated.workdays(first, last);
      expect(days).toEqual(6);
    });
  });

  describe('Future Mondays', function() {
    const first = moment('2017-10-02');

    beforeEach(function() {
    });

    it("Monday to Monday", function() {
      const last = moment('2017-10-02');
      const days = dated.workdays(first, last);
      expect(days).toEqual(0);
    });

    it("Monday to Tuesday", function() {
      const last = moment('2017-10-03');
      const days = dated.workdays(first, last);
      expect(days).toEqual(1);
    });

    it("Monday to Wednesday", function() {
      const last = moment('2017-10-04');
      const days = dated.workdays(first, last);
      expect(days).toEqual(2);
    });

    it("Monday to Thursday", function() {
      const last = moment('2017-10-05');
      const days = dated.workdays(first, last);
      expect(days).toEqual(3);
    });

    it("Monday to Friday", function() {
      const last = moment('2017-10-06');
      const days = dated.workdays(first, last);
      expect(days).toEqual(4);
    });

    it("Monday to Saturday", function() {
      const last = moment('2017-10-07');
      const days = dated.workdays(first, last);
      expect(days).toEqual(4);
    });

    it("Monday to Sunday", function() {
      const last = moment('2017-10-08');
      const days = dated.workdays(first, last);
      expect(days).toEqual(4);
    });

    it("Monday to Next Monday", function() {
      const last = moment('2017-10-09');
      const days = dated.workdays(first, last);
      expect(days).toEqual(5);
    });

    it("Monday to Two Mondays away", function() {
      const last = moment('2017-10-16');
      const days = dated.workdays(first, last);
      expect(days).toEqual(10);
    });
  });
});
