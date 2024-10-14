enum Days {
    HoursInYear = 8760,
    Days = 365,
    Months = 12,
}


class Salary {
    private hourlyRate!: number;

    public constructor(hourlyRate: number) {
        this.hourlyRate = hourlyRate;
    }

    public totalIncome(hourlyRate:number): number {
        return hourlyRate * Days.HoursInYear;
    }
}