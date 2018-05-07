import * as moment from 'moment';

export class LocalDate {
    moment_: moment.Moment;

    private static makeMoment(date: any): moment.Moment {
        // you can make a Moment from date parameter:
        let value = 
            // moment instance
            (date == null)? moment():
            // from a LocalDate instance, cloning private Moment instance
            (date instanceof LocalDate)? (date as LocalDate).moment_.clone():
            // from a Date instance
            (date instanceof Date)? moment((date as Date).toJSON()):
            // from a new Date built with parameter
            moment(new Date(date).toJSON());

        return value;    
    }    
    private static fromMoment(local: moment.Moment): Date {
        return local.utc().toDate();
    }    

    constructor(date?: any) {
        this.moment_ = LocalDate.makeMoment(date);
    }

    public startOfDay(): LocalDate {
        this.moment_.startOf('day');
        return this;
    }
    
    public endOfDay(): LocalDate {
        this.moment_.startOf('day').add(1, 'day');
        return this;
    }
    
    public addDay(days: number): LocalDate {
        this.moment_.add(days, 'day');
        return this;
    }

    public toDate(): Date {
        return LocalDate.fromMoment(this.moment_);
    }
}
