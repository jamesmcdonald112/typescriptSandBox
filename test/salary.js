"use strict";
var Days;
(function (Days) {
    Days[Days["HoursInYear"] = 8760] = "HoursInYear";
    Days[Days["Days"] = 365] = "Days";
    Days[Days["Months"] = 12] = "Months";
})(Days || (Days = {}));
class Salary {
    constructor(hourlyRate) {
        this.hourlyRate = hourlyRate;
    }
    totalIncome(hourlyRate) {
        return hourlyRate * Days.HoursInYear;
    }
}
